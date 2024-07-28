/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import NavigationButton from "./NavigationButton";
import { PiPencilLine } from "react-icons/pi";
import ProjectCard from "./ProjectCard";
import { useGlobalContext } from "../../context";

const Project = ({ isFeaturedProjects }) => {
  const { portfolio } = useGlobalContext();

  const projects = isFeaturedProjects
    ? portfolio.projects.filter((project) => project.fields.isPriority)
    : portfolio.projects;

  return (
    <section className="section">
      <div className="flex flex-row gap-2 text-start items-center">
        <PiPencilLine className="text-green w-[21px] h-[21px]" />
        <h2 className="font-medium text-lg leading-[21.6px]">Projects</h2>
      </div>

      <ul className="flex flex-col gap-6 desktop:flex-row">
        {projects.map((project) => (
          <ProjectCard key={project.sys.id} project={project.fields} />
        ))}
      </ul>

      {isFeaturedProjects && (
        <NavigationButton href={"/projects"} buttonText={"All Projects"} />
      )}
    </section>
  );
};

export default Project;
