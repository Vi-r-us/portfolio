/* eslint-disable no-unused-vars */
import React from "react";
import Globe from "../Utils/Globe";
import Skills from "../Utils/Skills";

/**
 * About component.
 * Displays the about section with a globe visualization and a list of skills.
 */
const About = () => {
  return (
    <section className="flex flex-col gap-6 desktop:flex-row">
      <Globe /> {/* Globe visualization */}
      <Skills /> {/* List of skills */}
    </section>
  );
};

export default About;
