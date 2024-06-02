// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-black-400 p-6
        rounded-[30px] overflow-hidden 
        flex flex-col items-center gap-6
        text-white-400 font-light text-sm
        [&_a]:font-medium [&_a]:text-white-200
        desktop:flex-row desktop:justify-between "
    >
      <div
        className="flex flex-col items-center 
        text-center gap-3 
        desktop:items-start"
      >
        <p>© 2023. All rights Reserved.</p>
        {/* TODO: Add name and link from API*/}
        <p>
          Made by &nbsp;<a href="https://github.com/sahil">{"Sahil"}</a>&nbsp;
          in &nbsp;<a href="https://github.com/sahil">{"React"}</a>&nbsp;
        </p>
      </div>

      {/* TODO: Route to Licensing and 404 pages*/}
      <div
        className="flex flex-col items-center gap-3
        desktop:items-end"
      >
        <Link to={"/licensing"}>{"Licensing"}</Link>
        <Link to={"/404"}>{"404"}</Link>
      </div>
    </footer>
  );
};

export default Footer;
