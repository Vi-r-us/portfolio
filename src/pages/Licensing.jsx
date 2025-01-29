/* eslint-disable no-unused-vars */
import React from "react";
import { useGlobalContext } from "../context";
import { icons } from "../utilities/icons";
import ContactMe from "../components/Utils/ContactMe";

/**
 * Licensing component.
 * Displays licensing information and contact links for licensing inquiries.
 * Includes a section with a link to the contact page.
 */
const Licensing = () => {
  // Get portfolio data from global context
  const { portfolio } = useGlobalContext();
  // Filter contacts for licensing
  const contacts = portfolio.socials.filter(
    (social) => social.fields.isForLicensing
  );
  return (
    <>
      <section className="section">
        {/* Licensing heading */}
        <h1 className="hero-heading">Licensing</h1>
      </section>

      <section className="section">
        <ul className="grid gap-3 auto-rows-fr desktop:grid-cols-2">
          {contacts.map((contact) => (
            <a
              key={contact.sys.id}
              href={contact.fields.url}
              className="flex gap-2 items-center h-[42px] px-[13px] rounded-[14px] bg-black-200 text-purple-600 box-shadow overflow-hidden hover:text-purple-400 transition-all duration-[0.2s] ease-in-out"
              target="_blank"
            >
              {/* Contact icon */}
              {icons[contact.fields.contactType.toLowerCase()]}
              {/* Contact display text */}
              <p className="hero-para text-white-200">
                {contact.fields.displayText}
              </p>
            </a>
          ))}
        </ul>
      </section>

      {/* ContactMe component */}
      <ContactMe />
    </>
  );
};

export default Licensing;
