/* eslint-disable no-unused-vars */
import React from "react";
import { PiStackSimple } from "react-icons/pi";

const Education = () => {
  // TODO: to be fetched from an API
  const education = [
    {
      course: "Bachelor's Degree in Web Design and Development",
      institute: "XYZ University",
      year: "2018 - 2022",
    },
    {
      course: "Certification in User Experience (UX) Design",
      institute: "UXUI Institute",
      year: "2016 - 2018",
    },
  ];
  return (
    <section
      className="p-6 rounded-[30px] bg-black-400
    flex flex-col gap-6"
    >
      <div className="flex flex-row gap-2 text-start items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          focusable="false"
          className="fill-green w-[21px] h-[21px] inline-block"
        >
          <g fontWeight="regular">
            <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
          </g>
        </svg>
        <h2 className="font-medium text-lg leading-[21.6px]">Education</h2>
      </div>

      <ul className="flex flex-col gap-2">
        {education.map((edu) => (
          <li key={edu.course}>{edu.course}</li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
