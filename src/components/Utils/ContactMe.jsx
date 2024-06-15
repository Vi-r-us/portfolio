/* eslint-disable no-unused-vars */
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const ContactMe = () => {
  return (
    <section
      className="relative overflow-hidden box-shadow group bg-black-400 rounded-[30px]
        [&_*]:duration-[0.6s] [&_*]:transition-all [&_*]:ease-in-out"
    >
      <Link
        className="section text-center group-hover:blur-[2px] m-1"
        to="/contact"
      >
        <h1
          className="resize text-[15cqmin] font-medium desktop:leading-[208px] 
            tablet:text-[17cqmin] desktop:text-[10.03rem] group-hover:opacity-15 "
        >
          Let&apos;s Talk
        </h1>
      </Link>

      <Link to="/contact" tabIndex={-1}
        className="flex justify-center items-center w-[5rem] h-[5rem] bg-purple-400 rounded-full 
        rotate-90 group-hover:rotate-0 opacity-0 group-hover:opacity-100 box-shadow z-10 cursor-pointer
        absolute left-[calc(50%-2.5rem)] top-full group-hover:top-[calc(50%-2.5rem)]"
      >
        <GoArrowRight className="text-black-200 w-[2.25rem] h-[2.25rem]" />
      </Link>
    </section>
  );
};

export default ContactMe;
