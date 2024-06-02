// eslint-disable-next-line no-unused-vars
import React from "react";
import NavigationButton from "../Utils/NavigationButton";

const Hero = () => {
  return (
    <section
      className="p-6 rounded-[30px] bg-black-400
      flex flex-col gap-6"
    >
      {/* TODO: Add name and link from API */}
      <div className="flex flex-col items-start gap-3">
        <h1
          className="whitespace-pre-wrap break-words text-wrap
          text-2xl leading-7 font-medium desktop:text-4xl desktop:leading-[43.2px]"
        >
          Hello there! <br className="tablet:hidden" />
          {"Sahil"} here!
        </h1>
        <p
          className="text-sm leading-[19.6px] font-light text-white-400
            desktop:text-base desktop:leading-[22.4px]"
        >
          {
            "I'm a passionate web designer who crafts digital experiences with a perfect blend of creativity and functionality. With an eye for detail and a love for clean, user-friendly designs, I bring websites to life that not only look stunning but also deliver seamless and enjoyable user journeys."
          }
        </p>
      </div>
      <NavigationButton href={"/about"} buttonText={"More About Me"} />
    </section>
  );
};

export default Hero;
