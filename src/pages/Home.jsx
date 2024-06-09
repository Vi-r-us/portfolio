/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Hero from "../components/Home/Hero";
import Project from "../components/Utils/Project";
import Stacks from "../components/Utils/Stacks";
import About from "../components/Home/About";
import ContactMe from "../components/Utils/ContactMe";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <About /> */}
      <Project isFeaturedProjects={true} />
      <Stacks isFeaturedStacks={true} />
      <ContactMe />
    </>
  );
};

export default Home;
