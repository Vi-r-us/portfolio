/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import ProjectTags from "./ProjectTags";

/**
 * ProjectCard component.
 * Displays a card with project information including title, tags, and cover image.
 * Links to the project's detailed page.
 *
 * @param {object} project - The project data to display.
 */
const ProjectCard = ({ project }) => {
  // Destructure project data
  const { title, tags, coverImage } = project;
  // Generate project ID from title by replacing spaces with hyphens and converting to lowercase
  const projectId = title.split(" ").join("-").toLowerCase();

  return (
    <Link to={`/projects/${projectId}`}>
      <article className="flex flex-col gap-3 group">
        <div className="rounded-xl overflow-hidden">
          {/* Cover image */}
          <img
            className="group-hover:scale-110 duration-300"
            loading="lazy"
            decoding="async"
            sizes="max(min(100vw - 48px, 800px) - 48px, 200px)"
            srcSet={
              coverImage.fields.file.url +
              " 512w," +
              coverImage.fields.file.url +
              " 1024w," +
              coverImage.fields.file.url +
              " 1400w"
            }
            src={coverImage.fields.file.url}
            alt={coverImage.fields.title}
          ></img>
        </div>

        <div className="flex flex-col gap-2">
          {/* Tags */}
          <ProjectTags tags={tags} />
          {/* Project title */}
          <h3 className="font-normal text-base leading-[22.4px]">{title}</h3>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
