/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

// TODO: Will navigate to project detail page
const ProjectCard = ({ project }) => {
  const { title, tags, coverImage, liveUrl } = project;
  return (
    <Link to={liveUrl} target="_blank">
      <article className="flex flex-col gap-3 group">
        <div className="rounded-xl overflow-hidden">
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
