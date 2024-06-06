// eslint-disable-next-line no-unused-vars
import React from "react";
import Hero from "../components/Home/Hero";
import Project from "../components/Utils/Project";
import Stacks from "../components/Utils/Stacks";

const Home = () => {
  return (
    <>
      <Hero />
      <Project isFeaturedProjects={true} />
      <Stacks isFeaturedStacks={true} />
    </>
  );
};

export default Home;
