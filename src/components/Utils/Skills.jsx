/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { PiStarFourFill } from "react-icons/pi";
import { TbSquareRotated } from "react-icons/tb";
import { useGlobalContext } from "../../context";

const Skills = () => {
  const { portfolio } = useGlobalContext();
  // Split Array to 3 arrays
  let skillsList = portfolio.skillList.reduce(
    (acc, _, i) => (
      i % Math.ceil(portfolio.skillList.length / 3)
        ? acc[acc.length - 1].push(portfolio.skillList[i])
        : acc.push([portfolio.skillList[i]]),
      acc
    ),
    []
  );

  skillsList = skillsList.map((list) => {
    return { list: list, speed: 13000 };
  });
  skillsList[0].speed = 15000;
  skillsList[1].speed = 12000;
  skillsList[2].speed = 20000;

  return (
    <div
      className="section min-h-[15rem] tablet:min-h-[22.5rem] desktop:min-h-[15rem] 
        flex-1 overflow-hidden relative"
    >
      <div className="flex flex-row gap-2 text-start items-center">
        <TbSquareRotated className="text-green w-[21px] h-[21px]" />
        <h2 className="font-medium text-lg leading-[21.6px]">
          New Delhi, India
        </h2>
      </div>

      <div className="flex flex-1 flex-col  justify-between">
        {skillsList.map((obj, index) => (
          <Marquee skills={obj.list} duration={obj.speed} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

const Marquee = ({ skills, duration }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });
    observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, [ref]);

  return (
    <div className="overflow-hidden w-full">
      <div
        style={{ animationDuration: `${duration}ms`, width: 2 * (width + 16) }}
        className="flex gap-4 h-full animate-marquee"
      >
        {[1, 2].map((index) => (
          <ul className="flex gap-4 h-full" key={index} ref={ref}>
            {skills.map((skill, index) => (
              <li
                className="flex gap-3 items-center text-center bg-black"
                key={index}
              >
                <PiStarFourFill className="w-[14px] h-[14px] text-purple-600" />
                <span className="p-3 py-2 bg-black-200 rounded-xl text-sm font-light leading-[20px] ">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
