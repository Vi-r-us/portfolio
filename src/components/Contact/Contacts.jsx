/* eslint-disable no-unused-vars */
import React from "react";
import { GoPerson } from "react-icons/go";
import { useGlobalContext } from "../../context";
import { icons } from "../../utilities/icons";

const Contacts = () => {
  const { portfolio } = useGlobalContext();
  const contacts = portfolio.socials;
  const notSocial = new Set(["email", "phone"]);
  return (
    <section className="section">
      <div className="flex flex-row gap-2 text-start items-center">
        <GoPerson className="text-green w-[21px] h-[21px]" />
        <h2 className="font-medium text-lg leading-[21.6px]">Contacts</h2>
      </div>

      <ul className="grid gap-3 auto-rows-fr desktop:grid-cols-2 overflow-hidden">
        {contacts.map((contact) => (
          <a
            key={contact.sys.id}
            href={contact.fields.url}
            className="flex gap-2 items-center h-[42px] px-[13px] rounded-[14px] 
                bg-black-200  text-purple-600 box-shadow"
            target="_blank"
          >
            {icons[contact.fields.contactName.toLowerCase()]}
            <p className="hero-para text-white-200">
              {notSocial.has(contact.fields.contactName.toLowerCase())
                ? contact.fields.url
                : contact.fields.contactName}
            </p>
          </a>
        ))}
      </ul>
    </section>
  );
};

export default Contacts;
