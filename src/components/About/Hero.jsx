/* eslint-disable no-unused-vars */
import React from "react";
import { useGlobalContext } from "../../context";

/**
 * Hero component.
 * Displays the hero section of the about page with a heading and introductory text.
 */
const Hero = () => {
  // Get portfolio data from global context
  const { portfolio } = useGlobalContext();
  // Split full introduction into paragraphs
  const paragraphs = portfolio.fullIntroduction.split("\n\n");

  return (
    <section className="section gap-3">
      {/* Hero heading */}
      <h1 className="hero-heading">
        Get to Know <br className="tablet:hidden" />
        Me Better!
      </h1>

      <ul className="flex flex-col gap-[22px] desktop:gap-[24px]">
        {paragraphs.map((paragraph, index) => (
          // Render each paragraph
          <li className="hero-para" key={index}>
            {paragraph}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Hero;
