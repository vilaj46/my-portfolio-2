import React from "react";

export default function ProjectText({ title, type }) {
  return (
    <p className="flex justify-center items-center text-center text-white z-50 absolute top-0 bottom-0 right-0 left-0 animate-fadeUpFast">
      {title}
      <br />
      {type}
    </p>
  );
}
