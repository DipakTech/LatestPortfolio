import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiGithubLine, RiMessengerLine } from "react-icons/ri";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import "./contact.css";

import toast from 'react-hot-toast';


import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zw11rto",
        "template_akhxrgr",
        form.current,
        "jjReSw_SNx4MEUVug"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            console.log( "message sent successfully")
            toast.success("Thanks for sending me a message.")

          }
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
          <button type="submit" id="send_msg">
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                </svg>
              </div>
            </div>
  <span>Send</span>
</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
