/* eslint-disable no-unused-vars */
import React from "react";
import { useGlobalContext } from "../../context";

const Hero = () => {
  const { portfolio } = useGlobalContext();
  const paragraphs = portfolio.fullIntroduction.split("\n\n");

  return (
    <section className="section gap-3">
      <h1 className="hero-heading">
        Get to Know <br className="tablet:hidden" />
        Me Better!
      </h1>

      <ul className="flex flex-col gap-[22px] desktop:gap-[24px]">
        {paragraphs.map((paragraph, index) => (
          <li className="hero-para" key={index}>
            {paragraph}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Hero;
