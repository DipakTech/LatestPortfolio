import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble, FiFacebook } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/dpakgiri" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/dipaktech" target="_blank">
        <FaGithub />
      </a>
      <a href="https://facebook.com/Dpakgirii" target="_blank">
        <FiFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
