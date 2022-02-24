import React from "react";

export default function FooterIcon({ src, alt, hover, href }) {
  const [isHovering, setIsHovering] = React.useState(false);

  const onMouseEnter = () => {
    setIsHovering(true);
  };

  const onMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-8 mx-2"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img src={isHovering ? hover : src} alt={alt} />
    </a>
  );
}
