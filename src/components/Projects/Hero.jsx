// eslint-disable-next-line no-unused-vars
import React from "react";
import { useGlobalContext } from "../../context";

const Hero = () => {
  const { portfolio } = useGlobalContext();
  return (
    <section className="section gap-3">
      <h1 className="hero-heading">{"Full Stack"}</h1>
      <p className="hero-para">{portfolio.projectIntro}</p>
    </section>
  );
};

export default Hero;
