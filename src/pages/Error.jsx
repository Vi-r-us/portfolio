// eslint-disable-next-line no-unused-vars
import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section
      className="section h-[30rem] tablet:h-[22rem] desktop:h-[26.5rem] 
        items-center justify-center relative box-shadow"
    >
      <div
        className="text-[7.5rem] leading-[144px] font-medium text-black-200
            desktop:absolute desktop:w-auto desktop:h-auto desktop:flex-none 
            desktop:top-2/4 desktop:left-2/4 desktop:-translate-x-2/4 desktop:-translate-y-2/4
            desktop:text-[22.5rem] z-0"
      >
        <h1 className="z-0">404</h1>
      </div>

      <div
        className="text-sm desktop:text-base font-light z-10
        text-white-400 text-center leading-[19.6px] desktop:leading-[22.4px]"
      >
        <p>OOPS!</p>
        <p className="mt-0.5">The page you are looking for wasn&#39;t found!</p>
      </div>

      <Link
        to={"/"}
        className="flex items-center gap-2 px-6 z-10
          h-[42px] bg-purple-600 rounded-xl
          text-black-200 text-sm font-regular leading-[16.4px]
          box-shadow"
      >
        <HiArrowLeft />
        <p>Back to Home</p>
      </Link>
    </section>
  );
};

export default Error;
