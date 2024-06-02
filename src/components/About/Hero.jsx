/* eslint-disable no-unused-vars */
import React from "react";

const Hero = () => {
  // TODO: Add about paragraph from API
  // Make paragraph split into array of sentences
  const paragraphs = [
    "Greetings! I'm Leon, and I thrive in the realm of web design, where pixels meet purpose. Armed with a keen understanding of user experience and a knack for translating ideas into visually captivating interfaces, I embark on each project with an enthusiasm to create something extraordinary.",
    "My journey in web design began with a solid foundation in design principles, honed during my years of formal education. I hold a degree in Graphic Design from XYZ University, where I not only gained technical expertise but also developed a deep appreciation for the marriage of aesthetics and functionality.",
    "My tech stack is as diverse as the web itself, ranging from HTML5, CSS3, and JavaScript to various design tools like Adobe Creative Suite and Sketch. I believe in staying ahead of the curve, constantly exploring emerging technologies and design trends to ensure that my work remains both timeless and cutting-edge.",
  ];

  return (
    <section
      className="p-6 rounded-[30px] bg-black-400
        flex flex-col gap-3"
    >
      <h1
        className="whitespace-pre-wrap break-words text-wrap
          text-2xl leading-7 font-medium desktop:text-4xl desktop:leading-[43.2px]"
      >
        Get to Know <br className="tablet:hidden" />
        Me Better!
      </h1>

      <ul className="flex flex-col gap-[22px] desktop:gap-[24px]">
        {paragraphs.map((paragraph, index) => (
          <li
            className="text-sm leading-[19.6px] font-light text-white-400
            desktop:text-base desktop:leading-[22.4px]"
            key={index}
          >
            {paragraph}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Hero;
