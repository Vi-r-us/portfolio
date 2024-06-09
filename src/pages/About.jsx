// eslint-disable-next-line no-unused-vars
import React from "react";
import Stacks from "../components/Utils/Stacks";
import Hero from "../components/About/Hero";
import Education from "../components/About/Education";
import Experience from "../components/About/Experience";
import ContactMe from "../components/Utils/ContactMe";

const About = () => {
  return (
    <>
      <Hero />
      <Education />
      <Experience />
      <Stacks isFeaturedStacks={true} />
      <ContactMe />
    </>
  );
};

export default About;
