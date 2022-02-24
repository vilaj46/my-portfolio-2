import React from "react";

import Hr from "./components/Hr";

export default function NavItem({ text, filterBy, onClick, right }) {
  const [focused, setFocused] = React.useState(false);

  const onMouseEnter = () => {
    setFocused(true);
  };

  const onMouseLeave = () => {
    setFocused(false);
  };

  const showHR = filterBy === text || focused === true;
  const textRight = right ? "justify-end" : "justify-start";

  return (
    <li className={`flex ${textRight} sm:justify-start`}>
      <button
        className="mb-1"
        onClick={() => onClick(text)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onKeyUp={onMouseEnter}
        onKeyDown={onMouseLeave}
      >
        {text}
        <Hr showHR={showHR} />
      </button>
    </li>
  );
}
