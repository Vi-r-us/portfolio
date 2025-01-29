// eslint-disable-next-line no-unused-vars
import React from "react";
import { useGlobalContext } from "../../context";

/**
 * Hero component.
 * Displays the hero section of the projects page with a heading and introductory text.
 */
const Hero = () => {
  // Get portfolio data from global context
  const { portfolio } = useGlobalContext();

  return (
    <section className="section gap-3">
      {/* Hero heading */}
      <h1 className="hero-heading">{"Full Stack"}</h1>
      {/* Introductory text */}
      <p className="hero-para">{portfolio.projectIntro}</p>
    </section>
  );
};

export default Hero;
