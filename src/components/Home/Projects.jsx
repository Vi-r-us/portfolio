/* eslint-disable no-unused-vars */
import React from "react";
import NavigationButton from "../Utils/NavigationButton";
import { PiPencilLine } from "react-icons/pi";
import ProjectCard from "../Utils/ProjectCard";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Thelist Framer Website",
      tags: ["web design", "branding", "marketing"],
      images: {
        mobile:
          "https://framerusercontent.com/images/oWBuPL22H3F8LGrN7g47VwE.png?scale-down-to=512",
        tablet:
          "https://framerusercontent.com/images/oWBuPL22H3F8LGrN7g47VwE.png?scale-down-to=1024",
        desktop:
          "https://framerusercontent.com/images/oWBuPL22H3F8LGrN7g47VwE.png",
      },
    },
    {
      title: "Cohesion Framer Website",
      tags: ["web design", "branding", "marketing"],
      images: {
        mobile:
          "https://framerusercontent.com/images/96Z6IpQA2x5XwidjMZuMofmk.png?scale-down-to=512",
        tablet:
          "https://framerusercontent.com/images/96Z6IpQA2x5XwidjMZuMofmk.png?scale-down-to=1024",
        desktop:
          "https://framerusercontent.com/images/96Z6IpQA2x5XwidjMZuMofmk.png",
      },
    },
  ];

  return (
    <section
      className="p-6 rounded-[30px] bg-black-400
        flex flex-col gap-6"
    >
      <div className="flex flex-row gap-2 text-start items-center">
        <PiPencilLine className="text-green w-[21px] h-[21px]" />
        <h2 className="font-medium text-lg leading-[21.6px]">Projects</h2>
      </div>

      {/* TODO: Add featured projects from API */}
      <ul className="flex flex-col gap-6 desktop:flex-row">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ul>

      <NavigationButton href={"/projects"} buttonText={"All Projects"} />
    </section>
  );
};

{
  /*  */
}

export default Projects;
