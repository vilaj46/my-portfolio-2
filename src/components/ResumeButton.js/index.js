import React, { useState } from "react";
// Testing
import resume from "../../images/icons/resume.png";

function ResumeButton({ invert = false }) {
  const [hovering, setHovering] = useState(false);

  const enter = () => setHovering(true);
  const leave = () => setHovering(false);

  const bgColor = invert ? "#ffffff" : "#333";

  const boxShadow = hovering ? `1px 1px 3px 1px ${bgColor}` : "";

  const padding = hovering ? "px-3" : "";
  const right = hovering ? "10px" : "0";

  return (
    <a
      href="/resume"
      target="_blank"
      rel="norefferer"
      onMouseEnter={enter}
      onMouseLeave={leave}
      className={`group ${padding} py-1 text-base ml-full flex`}
      style={{
        boxShadow,
        fontFamily: "raleway",
      }}
    >
      <div className="flex ml-auto w-full justify-center">
        <img src={resume} alt="Resume Icon" width="25" height="25" />
        <span style={{ paddingTop: "3px", paddingLeft: right }}>Resume</span>
      </div>
    </a>
  );
}

export default ResumeButton;
