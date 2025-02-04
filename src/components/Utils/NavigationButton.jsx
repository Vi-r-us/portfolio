/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

/**
 * NavigationButton component.
 * Displays a button that navigates to a specified link.
 * Includes an arrow icon that moves on hover.
 *
 * @param {string} buttonText - The text to display on the button.
 * @param {string} href - The URL to navigate to when the button is clicked.
 * @param {React.Component} icon - The icon component to display on the button.
 * @param {string} [className] - Additional className for the Link.
 * @param {string} [iconPosition='after'] - The position of the icon ('before' or 'after').
 * @param {boolean} [isBlank=false] - Whether the link should open in a new tab.
 */
const NavigationButton = ({
  buttonText,
  href,
  icon: Icon,
  className,
  iconPosition = "after",
  isBlank = false,
}) => {
  // Determine the classes for the icon based on its position
  const iconClasses = `w-[18px] h-[18px] transition-all duration-[0.3s] ease-in-out relative ${
    iconPosition === "before"
      ? "right-0 group-hover:right-1"
      : "left-0 group-hover:left-1"
  }`;

  return (
    <Link
      target={isBlank ? "_blank" : "_self"}
      to={href}
      className={`h-[42px] bg-black-200 text-purple-600 rounded-xl flex justify-center items-center gap-[6px] relative duration-[0.3s] transition-all ease-in-out box-shadow font-medium text-sm hover:text-purple-400 group ${className}`}
    >
      {/* Render the icon before the text if iconPosition is 'before' */}
      {iconPosition === "before" && <Icon className={iconClasses} />}
      {buttonText}
      {/* Render the icon after the text if iconPosition is 'after' */}
      {iconPosition === "after" && <Icon className={iconClasses} />}
    </Link>
  );
};

export default NavigationButton;
