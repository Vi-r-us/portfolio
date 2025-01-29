// eslint-disable-next-line no-unused-vars
import React from "react";
import Stacks from "../components/Utils/Stacks";
import Hero from "../components/About/Hero";
import Education from "../components/About/Education";
import Experience from "../components/About/Experience";
import ContactMe from "../components/Utils/ContactMe";

/**
 * About component.
 * Displays the about page with a hero section, education section, experience section,
 * featured stacks, and a contact section.
 */
const About = () => {
  return (
    <>
      <Hero /> {/* Hero section */}
      <Education /> {/* Education section */}
      <Experience /> {/* Experience section */}
      <Stacks isFeaturedStacks={true} /> {/* Featured stacks */}
      <ContactMe /> {/* Contact section */}
    </>
  );
};

export default About;
