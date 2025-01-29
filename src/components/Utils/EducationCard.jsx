/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

/**
 * EducationCard component.
 * Displays a card with education information including course name, institute name, and duration.
 *
 * @param {object} edu - The education data to display.
 */
const EducationCard = ({ edu }) => {
  const { courseName, instituteName, startingYear, completionYear } = edu;
  return (
    <li className="group flex flex-row gap-2">
      <div className="flex flex-col pt-2 w-[21px] desktop:w-[68px] items-center">
        <div className="rounded-full bg-purple-600 w-1.5 h-1.5"></div>
        <div className="flex-1 w-0.5 bg-black-200 group-last:hidden"></div>
      </div>

      <div className="flex flex-1 flex-col gap-0.5 pb-6 group-last:pb-0">
        {/* Course name */}
        <h3 className="font-normal text-base leading-[22.4px]">{courseName}</h3>
        {/* Institute name and duration */}
        <p className="text-sm font-light text-white-400 leading-[16.8px]">
          {instituteName}, {startingYear} - {completionYear}
        </p>
      </div>
    </li>
  );
};

export default EducationCard;
