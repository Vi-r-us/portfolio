// eslint-disable-next-line no-unused-vars
import React from "react";
import { RiArrowRightDoubleLine } from "react-icons/ri";
// eslint-disable-next-line no-unused-vars
import { RxDoubleArrowRight } from "react-icons/rx";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const NavigationButton = ({ buttonText, href }) => {
  return (
    <Link
      to={href}
      className="h-[42px] bg-black-200 text-purple-600 rounded-xl
        flex justify-center items-center gap-[6px] relative
        box-shadow font-medium text-sm hover:text-purple-400 group"
    >
      {buttonText}
      <RiArrowRightDoubleLine
        className="w-[18px] h-[18px]
        relative group-hover:left-1"
      />
    </Link>
  );
};
{
  /* <RiArrowRightDoubleLine /> */
}

export default NavigationButton;
