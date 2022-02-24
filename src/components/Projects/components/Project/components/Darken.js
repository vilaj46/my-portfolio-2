import React from "react";

export default function Darken({ isOpac }) {
  if (isOpac) {
    return (
      <div
        className={`w-full h-full absolute bg-primary opacity-80 z-10`}
      ></div>
    );
  } else {
    return <div className="w-full h-full absolute bg-primary z-0"></div>;
  }
}
