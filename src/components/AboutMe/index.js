import React from "react";

import data from "../../data";

export default function AboutMe() {
  return (
    <div className="mt-12">
      <h4 className="text-center">About Me</h4>
      <p className="w-8/12 m-auto">{data.about_me}</p>
      <a
        href="/resume"
        target="_blank"
        rel="norefferer"
        className="text-center block"
      >
        RESUME
      </a>
    </div>
  );
}
