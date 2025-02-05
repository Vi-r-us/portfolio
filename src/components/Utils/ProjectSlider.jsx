/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProjectSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="rounded-xl overflow-hidden">
        {/* Render the current image */}
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-auto"
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrevClick}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNextClick}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            <FaArrowRight />
          </button>
        </>
      )}
    </div>
  );
};

export default ProjectSlider;
