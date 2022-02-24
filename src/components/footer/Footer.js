import React from "react";

import email from "../../images/icons/email.png";
import github from "../../images/icons/github.png";
import linkedIn from "../../images/icons/linkedIn.png";

import emailHover from "../../images/icons/emailHover.png";
import githubHover from "../../images/icons/githubHover.png";
import linkedInHover from "../../images/icons/linkedInHover.png";

import FooterIcon from "./FooterIcon";

export default function Footer() {
  return (
    <div className="mt-full flex justify-center">
      <FooterIcon
        src={linkedIn}
        alt="Linked In"
        hover={linkedInHover}
        href="https://www.linkedin.com/in/julian-vila-2ab9791bb/"
      />
      <FooterIcon
        src={github}
        alt="Github"
        hover={githubHover}
        href="https://github.com/vilaj46"
      />
      <FooterIcon
        src={email}
        alt="Email"
        hover={emailHover}
        href="mailto:vilaj46@gmail.com"
      />
    </div>
  );
}
