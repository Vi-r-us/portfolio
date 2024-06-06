/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { PiStackSimple } from "react-icons/pi";
import NavigationButton from "./NavigationButton";
import StackCard from "./StackCard";
import { useGlobalContext } from "../../context";

const Stacks = ({ isFeaturedStacks }) => {
  const { portfolio } = useGlobalContext();
  const featuredStack = isFeaturedStacks
    ? portfolio.stacks.filter((stack) => stack.fields.isFeatured)
    : portfolio.stacks;
  return (
    <section className="section">
      <div className="flex flex-row gap-2 text-start items-center">
        <PiStackSimple className="text-green w-[21px] h-[21px]" />
        <h2 className="font-medium text-lg leading-[21.6px]">Stack</h2>
      </div>

      <ul className="flex flex-col gap-2">
        {featuredStack.map((stack) => (
          <StackCard key={stack.sys.id} stack={stack.fields} />
        ))}
      </ul>

      {isFeaturedStacks && (
        <NavigationButton href={"/stack"} buttonText={"Full Stack"} />
      )}
    </section>
  );
};

export default Stacks;
