import React from "react";

export default function HR({ showHR }) {
  const opacity = showHR ? "opacity-100" : "opacity-0";
  return <div className={`w-full h-px bg-primary ${opacity}`}></div>;
}
