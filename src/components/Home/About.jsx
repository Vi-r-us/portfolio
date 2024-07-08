/* eslint-disable no-unused-vars */
import React from "react";
import Globe from "../Utils/Globe";
import Skills from "../Utils/Skills";

const About = () => {
  return (
    <section className="flex flex-col gap-6 desktop:flex-row">
      <Globe />
      <Skills />
    </section>
  );
};

export default About;
