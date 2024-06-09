// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { icons } from "../utilities/icons";

const Header = () => {
  // Temporary socials data to be replaced with real data from API
  const { portfolio } = useGlobalContext();
  const socialMediaSet = new Set([
    "github",
    "linkedin",
    "twitter",
    "instagram",
  ]);
  const socials = portfolio.socials.filter((social) =>
    socialMediaSet.has(social.fields.contactType.toLowerCase())
  );

  return (
    <header
      className="section p-1.5 pb-6 overflow-hidden text-center items-center 
        tablet:flex-row tablet:justify-between tablet:pb-1.5 tablet:pr-5"
      tabIndex={0}
    >
      {/* Profile Section */}
      <div
        className="flex flex-col gap-2 items-center relative
        desktop:flex-row "
      >
        <Link
          to="/"
          className="rounded-[24px] overflow-hidden aspect-square
          tablet:w-[68px]"
        >
          <img
            className="w-full h-full block
              rounded-inherit overflow-clip
              object-cover"
            // src="https://framerusercontent.com/images/ZI6iesyGEHgzgHiOf2Gdkpy7FJk.jpg?scale-down-to=1024"
            src={portfolio.profilePicture.fields.file.url}
            alt="Profile Image"
          />
        </Link>

        <div
          className="bg-black-400 p-0.5 rounded-full
          absolute top-px right-px hidden tablet:block desktop:hidden"
        >
          <div className="bg-green w-2 h-2 rounded-full"></div>
        </div>

        <div
          className="flex flex-col items-center gap-0.5
            tablet:hidden desktop:block desktop:text-left"
        >
          <p className="font-medium text-2xl leading-8 text-purple-600">
            {portfolio.name}
          </p>
          <p className="font-light text-sm leading-4 text-white-400">
            {portfolio.titleAndPosition}
          </p>
        </div>
      </div>

      {/* Availability Section */}
      {/* TODO: Change color according to availability */}
      <div
        className="flex flex-row items-center gap-2 
          rounded-xl bg-black-200 px-3 py-1.5
          border-[1px] border-green
          tablet:hidden desktop:flex desktop:gap-4"
        tabIndex={0}
      >
        <div className="bg-green w-1.5 h-1.5 rounded-full"></div>
        <p className="font-light text-sm leading-4 text-white-200">
          {portfolio.availableForWork ? "Available for work" : "Busy for work"}
        </p>
      </div>

      {/* Profile Section */}
      <div>
        <ul
          className="flex flex-row items-center justify-center flex-wrap gap-3
            tablet:flex-nowrap"
          tabIndex={0}
        >
          {/* TODO: Add hover animations */}
          {socials.map((social) => (
            <a
              className="rounded-[14px] bg-black-200 flex items-center justify-center group
                w-[42px] aspect-square [&>svg]:text-purple-600 hover:[&_svg]:text-purple-400
                transition-all duration-300 radical-gradient"
              href={social.fields.url}
              target="_blank"
              key={social.sys.id}
            >
              {icons[social.fields.contactType.toLowerCase()]}
            </a>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
