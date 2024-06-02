// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  // Temporary socials data to be replaced with real data from API
  const socials = [
    {
      name: "github",
      icon: <FaGithub className="text-purple-600" />,
      url: "https://github.com/sahil",
    },
    {
      name: "linkedin",
      icon: <FaLinkedin className="text-purple-600" />,
      url: "https://www.linkedin.com/in/sahil/",
    },
    {
      name: "twitter",
      icon: <FaXTwitter className="text-purple-600" />,
      url: "https://twitter.com/sahil",
    },
    {
      name: "instagram",
      icon: <FaInstagram className="text-purple-600" />,
      url: "https://www.instagram.com/sahil/",
    },
  ];

  return (
    <header
      className="bg-black-400 p-1.5 pb-6
        rounded-[30px] overflow-hidden text-center
        flex flex-col items-center gap-6
        
        tablet:flex-row tablet:justify-between
        tablet:pb-1.5 tablet:pr-5"
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
            // TODO: Add image
            src="https://framerusercontent.com/images/ZI6iesyGEHgzgHiOf2Gdkpy7FJk.jpg?scale-down-to=1024"
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
          {/* // TODO: Add Name */}
          <p className="font-medium text-2xl leading-8 text-purple-600">
            Sahil Kumar
          </p>
          {/* // TODO: Add Role */}
          <p className="font-light text-sm leading-4 text-white-400">
            Front-End Developer
          </p>
        </div>
      </div>

      {/* Availability Section */}
      <div
        className="flex flex-row items-center gap-2 
          rounded-xl bg-black-200 px-3 py-1.5
          border-[1px] border-green
          tablet:hidden desktop:flex desktop:gap-4"
        tabIndex={0}
      >
        <div className="bg-green w-1.5 h-1.5 rounded-full"></div>
        <p className="font-light text-sm leading-4 text-white-200">
          Available for work
        </p>
      </div>

      {/* Profile Section */}
      {/* // TODO: Add Social Links */}
      <div>
        <ul
          className="flex flex-row items-center justify-center flex-wrap gap-3
            tablet:flex-nowrap"
          tabIndex={0}
        >
          {socials.map((social, index) => (
            <a
              className="rounded-[14px] bg-black-200
                flex items-center justify-center 
                w-[42px] aspect-square"
              href="{social.url}"
              key={index}
            >
              {social.icon}
            </a>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
