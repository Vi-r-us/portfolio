/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

/**
 * StackCard component.
 * Displays a card with stack information including title, subtitle, description, and icon.
 * Links to the stack's website.
 *
 * @param {object} stack - The stack data to display.
 */
const StackCard = ({ stack }) => {
  const { title, subTitle, description, icon, website } = stack;
  // Temporary solution for size issues with the icons
  const paddedIconsSet = new Set([]);

  return (
    <a href={website} target="_blank" className="group">
      <article className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-center">
          <div className="w-[68px] aspect-square bg-black-200 rounded-3xl overflow-hidden flex items-center justify-center">
            {/* Stack icon */}
            <img
              decoding="async"
              className="w-[32px]"
              sizes="max(min(100vw - 48px, 800px) - 48px, 200px)"
              src={icon.fields.file.url}
              alt={title}
            ></img>
          </div>

          <div className="flex flex-col gap-0.5">
            {/* Stack title */}
            <h3 className="font-normal text-base leading-[22.4px]">{title}</h3>

            {/* Stack subtitle */}
            <p className="text-sm font-light text-white-400 leading-[16.8px]">
              {subTitle}
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-2">
          <div className="hidden flex-col w-[68px] items-center desktop:flex">
            <div className="hidden h-full w-0.5 bg-black-200 group-last:hidden desktop:block"></div>
          </div>

          <div className="pb-6 flex-1 whitespace-pre-wrap break-words group-last:pb-0">
            {/* Stack description */}
            <p className="hero-para">{description}</p>
          </div>
        </div>
      </article>
    </a>
  );
};

export default StackCard;
