/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useGlobalContext } from "../../context";

/**
 * SendMessage component.
 * Displays a form to send a message via email.
 * Uses emailjs to handle the email sending process.
 */
const SendMessage = () => {
  // Get email sent state from global context
  const { emailSent, setEmailSent } = useGlobalContext();
  // Reference to the form element
  const form = useRef();
  // State to store the form width
  const [width, setWidth] = useState();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_h0ymu3l", "template_5wyqt8i", form.current, {
        publicKey: "WBvT1oObGba1Bkgxx",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          // Set email sent state to true on success
          setEmailSent(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  useEffect(() => {
    // Update form width on resize
    const handleResize = () => setWidth(form.current.offsetWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [form]);

  return (
    <section className="section overflow-hidden">
      <div className="flex flex-row gap-2 text-start items-center">
        {/* SVG content */}
        <svg
          className="text-green w-[21px] h-[21px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          focusable="false"
        >
          <g className="fill-current" fontWeight="regular">
            <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.42,29.84l85.62,40.55,40.55,85.62A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14L118.42,148.9l47.24-47.25a8,8,0,0,0-11.31-11.31L107.1,137.58,24,98.22l.14,0L216,40Z"></path>
          </g>
        </svg>
        {/* Form heading */}
        <h2 className="font-medium text-lg leading-[21.6px]">
          Send Me a Message
        </h2>
      </div>

      <form className="grid gap-3" ref={form} onSubmit={sendEmail}>
        {/* Name input field */}
        <input
          className={`p-[15px] bg-black-200 rounded-xl box-shadow ${
            emailSent && "cursor-not-allowed"
          } text-white-400 text-lg leading-[22.6px] font-normal`}
          style={{ maxWidth: `${width}px` }}
          disabled={emailSent}
          type="text"
          name="from_name"
          placeholder="Name"
        />
        {/* Email input field */}
        <input
          className={`p-[15px] bg-black-200 rounded-xl box-shadow ${
            emailSent && "cursor-not-allowed"
          } text-white-400 text-lg leading-[22.6px] font-normal`}
          style={{ maxWidth: `${width}px` }}
          disabled={emailSent}
          type="email"
          name="from_email"
          placeholder="Email"
        />
        {/* Message textarea */}
        <textarea
          className={`p-[15px] h-[160px] bg-black-200 rounded-xl box-shadow ${
            emailSent && "cursor-not-allowed"
          } text-white-400 text-lg leading-[22.6px] font-normal`}
          style={{ maxWidth: `${width}px` }}
          disabled={emailSent}
          name="message"
          placeholder="Message"
        />
        {/* Submit button */}
        <button
          className={`p-[15px] bg-purple-600 rounded-xl box-shadow ${
            emailSent && "cursor-not-allowed"
          } text-black-200 text-lg leading-[22.6px] font-semibold hover:opacity-80 duration-300`}
          type="submit"
          disabled={emailSent}
        >
          {emailSent ? "Thanks for Contacting !!" : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default SendMessage;
