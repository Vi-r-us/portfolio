// eslint-disable-next-line no-unused-vars
import React from "react";
import Hero from "../components/Stack/Hero";
import Stacks from "../components/Utils/Stacks";

const Stack = () => {
  return (
    <>
      <Hero />
      <Stacks isFeaturedStacks={false} />
    </>
  );
};

export default Stack;
