/* eslint-disable no-unused-vars */
import React from "react";
import { useGlobalContext } from "../context";
import { icons } from "../utilities/icons";
import ContactMe from "../components/Utils/ContactMe";

const Licensing = () => {
  const { portfolio } = useGlobalContext();
  const contacts = portfolio.socials.filter(
    (social) => social.fields.isForLicensing
  );
  return (
    <>
      <section className="section">
        <h1 className="hero-heading">Licensing</h1>
      </section>

      <section className="section">
        <ul className="grid gap-3 auto-rows-fr desktop:grid-cols-2">
          {contacts.map((contact) => (
            <a
              key={contact.sys.id}
              href={contact.fields.url}
              className="flex gap-2 items-center h-[42px] px-[13px] rounded-[14px] 
                bg-black-200 text-purple-600  box-shadow overflow-hidden
                hover:text-purple-400 transition-all duration-[0.2s] ease-in-out"
              target="_blank"
            >
              {icons[contact.fields.contactType.toLowerCase()]}
              <p className="hero-para text-white-200">
                {contact.fields.displayText}
              </p>
            </a>
          ))}
        </ul>
      </section>

      <ContactMe />
    </>
  );
};

export default Licensing;
