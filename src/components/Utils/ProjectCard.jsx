/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  // TODO: Add project images, title and tags from API
  const { title, tags, images } = project;
  return (
    <Link>
      <article className="flex flex-col gap-3">
        <div className="rounded-xl overflow-hidden">
          <img
            loading="lazy"
            decoding="async"
            sizes="max(min(100vw - 48px, 800px) - 48px, 200px)"
            srcSet={
              images.mobile +
              " 512w," +
              images.tablet +
              " 1024w," +
              images.desktop +
              " 1400w"
            }
            src={project.images.desktop}
            alt={title}
          ></img>
        </div>

        <div className="flex flex-col gap-2">
          <ul className="flex flex-row gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <li
                className=" text-center rounded-lg px-2 py-1 bg-black-200 
                text-xs font-light leading-[14.4px] capitalize text-purple-600
                flex flex-row text-nowrap"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <h3 className="font-normal text-base leading-[22.4px]">{title}</h3>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
