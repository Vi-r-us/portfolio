// eslint-disable-next-line no-unused-vars
import React from "react";
import { FiSend } from "react-icons/fi";
import { GoHome, GoPerson } from "react-icons/go";
import { PiPencilLine, PiStackSimple } from "react-icons/pi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Home", href: "/", icon: <GoHome /> },
    { name: "About", href: "/about", icon: <GoPerson /> },
    { name: "Projects", href: "/projects", icon: <PiPencilLine /> },
    { name: "Stack", href: "/stack", icon: <PiStackSimple /> },
    { name: "Contact", href: "/contact", icon: <FiSend /> },
  ];

  // TODO: Add div to replicate the animated navbar
  return (
    <nav
      className="flex gap-3 p-3 rounded-[26px]
        fixed left-1/2 bottom-3 -translate-x-2/4
        bg-black-400/60 backdrop-blur-[9px]
        tablet:rounded-[30px] z-50 box-shadow
      "
      tabIndex={0}
    >
      {links.map((link) => (
        <div
          key={link.href}
          className="w-[42px] h-[42px]
          tablet:w-[54px] tablet:h-[54px]"
        >
          <Link
            to={link.href}
            className="w-full h-full bg-black-200 rounded-[14px] flex items-center justify-center 
            text-purple-600 hover:text-purple-400 [&_svg]:w-5 tablet:[&_svg]:w-6 
            [&_svg]:h-5 tablet:[&_svg]:h-6 [&_*]:duration-[0.3s] [&_*]:transition-all [&_*]:ease-in-out radical-gradient"
          >
            {link.icon}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
