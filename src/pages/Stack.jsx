// eslint-disable-next-line no-unused-vars
import React from "react";
import Hero from "../components/Stack/Hero";
import Stacks from "../components/Utils/Stacks";
import ContactMe from "../components/Utils/ContactMe";

/**
 * Stack component.
 * Displays the stack page with a hero section, a list of stacks, and a contact section.
 */
const Stack = () => {
  return (
    <>
      {/* Hero section */}
      <Hero />
      {/* List of stacks */}
      <Stacks isFeaturedStacks={false} />
      {/* Contact section */}
      <ContactMe />
    </>
  );
};

export default Stack;
