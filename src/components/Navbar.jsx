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
        tablet:rounded-[30px] z-10 
        shadow-[0_0.602187px_0.602187px_-1.25px_rgba(0,0,0,0.18),0_2.28853px_2.28853px_-2.5px_rgba(0,0,0,0.16),0_10px_10px_-3.75px_rgba(0,0,0,0.063)]
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
            className="w-full h-full bg-black-200 rounded-[14px]
            flex items-center justify-center
            [&_svg]:text-purple-600 [&_svg]:w-5 [&_svg]:h-5
            tablet:[&_svg]:w-6 tablet:[&_svg]:h-6"
          >
            {link.icon}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
