// eslint-disable-next-line no-unused-vars
import React from "react";
import NavigationButton from "../Utils/NavigationButton";
import { useGlobalContext } from "../../context";
import { RiArrowRightDoubleLine } from "react-icons/ri";

/**
 * Hero component.
 * Displays the hero section of the home page with a greeting, introduction, and a navigation button.
 */
const Hero = () => {
  const { portfolio } = useGlobalContext(); // Get portfolio data from global context
  const firstName = portfolio.name.split(" ")[0]; // Extract first name from portfolio name
  const shortIntro = portfolio.shortIntroduction; // Get short introduction from portfolio

  return (
    <section className="section">
      <div className="flex flex-col items-start gap-3">
        {/* Greeting and introduction */}
        <h1 className="hero-heading">
          Hello there! <br className="tablet:hidden" />
          {firstName} here!
        </h1>
        {/* Short introduction */}
        <p className="hero-para">{shortIntro}</p>
      </div>

      {/* Navigation button */}
      <NavigationButton
        href={"/about"}
        buttonText={"More About Me"}
        icon={RiArrowRightDoubleLine}
        iconPosition="after"
      />
    </section>
  );
};

export default Hero;
