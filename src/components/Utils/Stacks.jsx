/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { PiStackSimple } from "react-icons/pi";
import NavigationButton from "./NavigationButton";
import StackCard from "./StackCard";
import { useGlobalContext } from "../../context";
import { RiArrowRightDoubleLine } from "react-icons/ri";

/**
 * Stacks component.
 * Displays a list of stacks. If isFeaturedStacks is true, only featured stacks are shown.
 * Includes a navigation button to view the full stack if isFeaturedStacks is true.
 *
 * @param {boolean} isFeaturedStacks - Flag to determine if only featured stacks should be displayed.
 */
const Stacks = ({ isFeaturedStacks }) => {
  // Get portfolio data from global context
  const { portfolio } = useGlobalContext();
  // Filter stacks based on isFeaturedStacks flag
  const featuredStack = isFeaturedStacks
    ? portfolio.stacks.filter((stack) => stack.fields.isFeatured)
    : portfolio.stacks;

  return (
    <section className="section">
      <div className="flex flex-row gap-2 text-start items-center">
        {/* Stack icon */}
        <PiStackSimple className="text-green w-[21px] h-[21px]" />
        {/* Stack heading */}
        <h2 className="font-medium text-lg leading-[21.6px]">Stack</h2>
      </div>

      <ul className="flex flex-col gap-2">
        {featuredStack.map((stack) => (
          // Render each stack card
          <StackCard key={stack.sys.id} stack={stack.fields} />
        ))}
      </ul>

      {isFeaturedStacks && (
        // Navigation button to view full stack
        <NavigationButton
          href={"/stack"}
          buttonText={"Full Stack"}
          icon={RiArrowRightDoubleLine}
          iconPosition="after"
        />
      )}
    </section>
  );
};

export default Stacks;
