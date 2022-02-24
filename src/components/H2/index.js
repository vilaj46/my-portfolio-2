import React from "react";

import ResumeButton from "../ResumeButton.js";

export default function H2({ children }) {
  return (
    <h2
      className="text-4xl relative"
      style={{
        fontFamily: "raleway",
      }}
    >
      {children}
      <div className="absolute top-0 right-0">
        <ResumeButton />
      </div>
    </h2>
  );
}

// className="absolute top-0 right-0 px-3 py-1 text-base ml-full uppercase flex"
