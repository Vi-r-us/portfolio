// eslint-disable-next-line no-unused-vars
import React from "react";
import NavigationButton from "../Utils/NavigationButton";
import { useGlobalContext } from "../../context";

const Hero = () => {
  const { portfolio } = useGlobalContext();
  const firstName = portfolio.name.split(" ")[0];
  const shortIntro = portfolio.shortIntroduction;

  return (
    <section className="section">
      <div className="flex flex-col items-start gap-3">
        <h1 className="hero-heading">
          Hello there! <br className="tablet:hidden" />
          {firstName} here!
        </h1>
        <p className="hero-para">{shortIntro}</p>
      </div>
      <NavigationButton href={"/about"} buttonText={"More About Me"} />
    </section>
  );
};

export default Hero;
