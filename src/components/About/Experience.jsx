/* eslint-disable no-unused-vars */
import React from "react";
import ExperienceCard from "../Utils/ExperienceCard";

const Experience = () => {
  // TODO: data to be fetched from an API
  const experience = [
    {
      jobTitle: "Freelance Web Developer",
      company: "InnovateTech Pvt. Ltd.",
      year: "2020 - present",
    },
    {
      jobTitle: "Lead UX/UI Designer",
      company: "XYZ Creative Agency",
      year: "2015 - 2019",
    },
    {
      jobTitle: "UX/UI Designer",
      company: "ABC Web Agency",
      year: "2010 - 2015",
    },
  ];
  return (
    <section className="p-6 rounded-[30px] bg-black-400 flex flex-col gap-6">
      <div className="flex flex-row gap-2 text-start items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          focusable="false"
          className="fill-green w-[21px] h-[21px] inline-block"
        >
          <g fontWeight="regular">
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"></path>
          </g>
        </svg>
        <h2 className="font-medium text-lg leading-[21.6px]">Experience</h2>
      </div>

      <ul className="flex flex-col">
        {experience.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} />
        ))}
      </ul>
    </section>
  );
};

export default Experience;
