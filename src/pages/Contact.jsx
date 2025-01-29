// eslint-disable-next-line no-unused-vars
import React from "react";
import Hero from "../components/Contact/Hero";
import Contacts from "../components/Contact/Contacts";
import SendMessage from "../components/Utils/SendMessage";

/**
 * Contact component.
 * Displays the contact page with a hero section, contact information, and a message form.
 */
const Contact = () => {
  return (
    <>
      <Hero /> {/* Hero section */}
      <Contacts /> {/* Contact information */}
      <SendMessage /> {/* Message form */}
    </>
  );
};

export default Contact;
