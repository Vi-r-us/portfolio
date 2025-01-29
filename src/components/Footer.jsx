// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

/**
 * Footer component.
 * Displays the footer section of the application with copyright information,
 * developer's name, and links to licensing and 404 pages.
 */
const Footer = () => {
  // Get portfolio data from global context
  const { portfolio } = useGlobalContext();
  // Extract first name from portfolio name
  const firstName = portfolio.name.split(" ")[0];
  // Get GitHub URL from portfolio socials
  const link = portfolio.socials.filter(
    (social) => social.fields.contactType.toLowerCase() === "github"
  )[0].fields.url;

  return (
    <footer
      className="section overflow-hidden items-center
        text-white-400 font-light text-sm
        [&_a]:font-medium [&_a]:text-white-200
        desktop:flex-row desktop:justify-between "
    >
      <div className="flex flex-col items-center text-center gap-3 desktop:items-start">
        {/* Copyright information */}
        <p>© 2025. All rights Reserved.</p>
        {/* Developer's name and React link */}
        <p>
          Made by &nbsp;
          <a href={link} target="_blank">
            {firstName}
          </a>
          &nbsp; in &nbsp;
          <a href="https://react.dev/" target="_blank">
            {"React"}
          </a>
          &nbsp;
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 desktop:items-end">
        {/* Link to Licensing page */}
        <Link to={"/licensing"}>{"Licensing"}</Link>
        {/* Link to 404 page */}
        <Link to={"/404"}>{"404"}</Link>
      </div>
    </footer>
  );
};

export default Footer;
