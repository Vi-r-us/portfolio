/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import NavigationButton from "./NavigationButton";
import { PiPencilLine } from "react-icons/pi";
import ProjectCard from "./ProjectCard";
import { useGlobalContext } from "../../context";
import { RiArrowRightDoubleLine } from "react-icons/ri";

/**
 * Project component.
 * Displays a list of projects. If isFeaturedProjects is true, only featured projects are shown.
 * Includes a navigation button to view all projects if isFeaturedProjects is true.
 *
 * @param {boolean} isFeaturedProjects - Flag to determine if only featured projects should be displayed.
 */
const Project = ({ isFeaturedProjects }) => {
  // Get portfolio data from global context
  const { portfolio } = useGlobalContext();

  // Filter projects based on isFeaturedProjects flag
  const projects = isFeaturedProjects
    ? portfolio.projects.filter((project) => project.fields.isPriority)
    : portfolio.projects;

  return (
    <section className="section">
      <div className="flex flex-row gap-2 text-start items-center">
        {/* Projects icon */}
        <PiPencilLine className="text-green w-[21px] h-[21px]" />
        {/* Projects heading */}
        <h2 className="font-medium text-lg leading-[21.6px]">Projects</h2>
      </div>

      <ul className="flex flex-col gap-6 desktop:flex-row">
        {projects.map((project) => (
          // Render each project card
          <ProjectCard key={project.sys.id} project={project.fields} />
        ))}
      </ul>

      {isFeaturedProjects && (
        // Navigation button to view all projects
        <NavigationButton
          href={"/projects"}
          buttonText={"All Projects"}
          icon={RiArrowRightDoubleLine}
          iconPosition={"after"}
        />
      )}
    </section>
  );
};

export default Project;
