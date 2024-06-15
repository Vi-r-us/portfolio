// eslint-disable-next-line no-unused-vars
import React from "react";
import { FiSend } from "react-icons/fi";
import { GoHome, GoPerson } from "react-icons/go";
import { PiPencilLine, PiStackSimple } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { route } = useGlobalContext();

  const links = [
    { name: "Home", href: "/", icon: <GoHome /> },
    { name: "About", href: "/about", icon: <GoPerson /> },
    { name: "Projects", href: "/projects", icon: <PiPencilLine /> },
    { name: "Stack", href: "/stack", icon: <PiStackSimple /> },
    { name: "Contact", href: "/contact", icon: <FiSend /> },
  ];

  return (
    <nav
      className="flex gap-3 p-3 rounded-[26px] fixed left-1/2 bottom-3 -translate-x-2/4
        bg-black-400/60 backdrop-blur-[9px] tablet:rounded-[30px] z-50 box-shadow
      "
      tabIndex={0}
    >
      {links.map((link) => (
        <div
          key={link.href}
          className="w-[42px] h-[42px] tablet:w-[54px] tablet:h-[54px]"
        >
          <Link
            to={link.href}
            link-name-dynamic-value={link.name}
            className={`w-full h-full rounded-[14px] flex flex-col items-center justify-center gap-1.5
            bg-black-200 text-purple-600 hover:text-purple-400 [&_svg]:w-5 tablet:[&_svg]:w-6
            [&_svg]:h-5 tablet:[&_svg]:h-6 [&_*]:duration-[0.3s] [&_*]:transition-all [&_*]:ease-in-out 
            relative radical-gradient tablet:after:content-[attr(link-name-dynamic-value)] after:px-3 
            after:scale-0 after:opacity-0 after:absolute after:text-[14px] after:font-medium after:py-0.5
            after:bg-black-200 after:rounded-[14px] after:duration-[0.5s] after:left-2/4 after:top-2/4
            after:transition-all after:ease-in-out after:-translate-x-2/4 after:-translate-y-2/4 after:box-shadow
            after:z-10 hover:after:scale-100 hover:after:opacity-100 hover:after:top-[-20px]`}
          >
            {link.icon}
            <div
              className={`w-2 h-0.5 ${
                route !== link.href ? "hidden" : ""
              } bg-purple-600 rounded-sm`}
            ></div>
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
