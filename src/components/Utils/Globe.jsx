/* eslint-disable no-unused-vars */
import createGlobe from "cobe";
import React, { useEffect, useRef, useState } from "react";
import { GrLocation } from "react-icons/gr";

const Globe = () => {
  const canvasRef = useRef();
  const globeDiv = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });
    observer.observe(globeDiv.current);
    return () => globeDiv.current && observer.unobserve(globeDiv.current);
  }, []);

  useEffect(() => {
    let phi = 3.24;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 390 < width && width < 800 ? 2.12 : 2,
      width: width * (width < 390 ? 2.4 : 2.3),
      height: width * 2.4,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.9,
      mapSamples: 18000,
      mapBrightness: 2,
      opacity: 0.8,
      baseColor: [0.6745098039215687, 0.6, 1],
      markerColor: [0, 0.8, 0.5882352941176471],
      glowColor: [0.6745098039215687, 0.6, 1],
      markers: [
        // longitude latitude
        { location: [28.6139, 77.2088], size: 0.09 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.001;
      },
    });

    return () => {
      globe.destroy();
    };
  }, [width]);

  return (
    <div
      className="section min-h-[15rem] tablet:min-h-[22.5rem] desktop:min-h-[15rem] 
        flex-1 overflow-hidden relative"
      ref={globeDiv}
    >
      <div className="flex flex-row gap-2 text-start items-center">
        <GrLocation className="text-green w-[21px] h-[21px]" />
        <h2 className="font-medium text-lg leading-[21.6px]">New Delhi, India</h2>
      </div>

      <div className="absolute inset-x-0 top-[80px] overflow-visible flex ">
        <canvas
          ref={canvasRef}
          className={`aspect-square overflow-visible block ms-auto`}
        />
      </div>
    </div>
  );
};

export default Globe;
