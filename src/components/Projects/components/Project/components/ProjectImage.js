import React from "react";

import Darken from "./Darken";

export default function ProjectImage({ src, alt, entered, title }) {
  const isOpac = title === entered;
  return (
    <div className="h-full flex relative w-auto">
      <img src={src} alt={alt} className="h-auto block z-10" />
      <Darken isOpac={isOpac} />
    </div>
  );
}
