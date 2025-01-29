/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Hero from "../components/Home/Hero";
import Project from "../components/Utils/Project";
import Stacks from "../components/Utils/Stacks";
import About from "../components/Home/About";
import ContactMe from "../components/Utils/ContactMe";

/**
 * Home component.
 * Displays the home page with a hero section, about section, featured projects, featured stacks, and a contact section.
 */
const Home = () => {
  return (
    <>
      <Hero /> {/* Hero section */}
      <About /> {/* About section */}
      <Project isFeaturedProjects={true} /> {/* Featured projects */}
      <Stacks isFeaturedStacks={true} /> {/* Featured stacks */}
      <ContactMe /> {/* Contact section */}
    </>
  );
};

export default Home;
