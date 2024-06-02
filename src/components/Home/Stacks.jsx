/* eslint-disable no-unused-vars */
import React from "react";
import { PiStackSimple } from "react-icons/pi";
import NavigationButton from "../Utils/NavigationButton";
import StackCard from "../Utils/StackCard";

const Stacks = () => {
  const featuredStack = [
    {
      title: "Framer",
      subTitle: "Web Design",
      description:
        "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to life, allowing stakeholders to experience the user flow and interactions before development begins. It's invaluable for refining the user experience.",
      logo: "https://framerusercontent.com/images/UfIKbmaVTQ2cJGGRJjtNwWVtnI.svg",
      href: "https://www.framer.com/?via=cristianmielu",
    },
    {
      title: "Figma",
      subTitle: "Collaborative Design",
      description:
        "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based approach streamlines the design process.",
      logo: "https://framerusercontent.com/images/nQwkPe6iw9Q1WXAIuP6kSV6sXco.svg",
      href: "https://www.framer.com/?via=cristianmielu",
    },
    {
      title: "Notion",
      subTitle: "Project Management",
      description:
        "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to project timelines is in one place.",
      logo: "https://framerusercontent.com/images/5xwCE490YOsokzxzBmjD0jXc0.svg",
      href: "https://www.framer.com/?via=cristianmielu",
    },
  ];
  return (
    <section
      className="p-6 rounded-[30px] bg-black-400
            flex flex-col gap-6"
    >
      <div className="flex flex-row gap-2 text-start items-center">
        <PiStackSimple className="text-green w-[21px] h-[21px]" />
        <h2 className="font-medium text-lg leading-[21.6px]">Stack</h2>
      </div>

      <ul className="flex flex-col gap-2">
        {featuredStack.map((stack, index) => (
          <StackCard key={index} stack={stack} />
        ))}
      </ul>

      <NavigationButton href={"/stack"} buttonText={"Full Stack"} />
    </section>
  );
};

export default Stacks;
