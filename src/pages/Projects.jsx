// eslint-disable-next-line no-unused-vars
import React from "react";
import Hero from "../components/Projects/Hero";
import Project from "../components/Utils/Project";
import ContactMe from "../components/Utils/ContactMe";

/**
 * Projects component.
 * Displays the projects page with a hero section, a list of projects, and a contact section.
 */
const Projects = () => {
  return (
    <>
      <Hero /> {/* Hero section */}
      <Project /> {/* List of projects */}
      <ContactMe /> {/* Contact section */}
    </>
  );
};

export default Projects;
