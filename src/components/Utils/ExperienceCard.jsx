/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

/**
 * ExperienceCard component.
 * Displays a card with experience information including position, company name, and duration.
 *
 * @param {object} exp - The experience data to display.
 */
const ExperienceCard = ({ exp }) => {
  const { position, companyName, startYear, endYear } = exp;

  return (
    <li className="group flex flex-row gap-2">
      <div className="flex flex-col pt-2 w-[21px] desktop:w-[68px] items-center">
        <div className="rounded-full bg-purple-600 w-1.5 h-1.5"></div>
        <div className="flex-1 w-0.5 bg-black-200 group-last:hidden"></div>
      </div>

      <div className="flex flex-1 flex-col gap-0.5 pb-6 group-last:pb-0">
        {/* Position */}
        <h3 className="font-normal text-base leading-[22.4px]">{position}</h3>
        {/* Company name and duration */}
        <p className="text-sm font-light text-white-400 leading-[16.8px]">
          {companyName}, {startYear} - {endYear}
        </p>
      </div>
    </li>
  );
};

export default ExperienceCard;
