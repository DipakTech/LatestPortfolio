import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiGithubLine, RiMessengerLine } from "react-icons/ri";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";

import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yhmyh7q",
        "template_wbpqpbr",
        form.current,
        "Po8nwYiPRh31wRCkt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dipakgiri1200@gmail.com</h5>
            <a href="mailto:dipakgiri1200@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiGithubLine className="contact__option-icon" />
            <h4>Github</h4>
            <h5>Dipak</h5>
            <a href="https://github.com/dipaktech" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsTwitter className="contact__option-icon" />
            <h4>twitter</h4>
            <h5>dipakgirii</h5>
            <a
              href="https://twitter.com/dipakgirii"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
