import React from "react";

import Slideshow from "./Slideshow";

export default function ProjectPageImage({ images }) {
  if (images.length === 1) {
    const image = images[0];
    return <img src={image.src} alt={image.alt} className="w-8/12" />;
  } else {
    return <Slideshow images={images} />;
  }
}
