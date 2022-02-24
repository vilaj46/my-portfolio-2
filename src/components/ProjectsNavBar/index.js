import React from "react";

import NavItem from "./components/NavItem";

export default function ProjectsNavBar({ filterBy, setFilterBy }) {
  const onClick = (text) => {
    setFilterBy(text);
  };

  return (
    <ul
      className="grid grid-cols-2 sm:grid-cols-4 mb-6"
      style={{ fontFamily: "inconsolata" }}
    >
      <NavItem text="All" filterBy={filterBy} onClick={onClick} right={false} />
      <NavItem
        text="Websites"
        filterBy={filterBy}
        onClick={onClick}
        right={true}
      />
      <NavItem
        text="Extensions"
        filterBy={filterBy}
        onClick={onClick}
        right={false}
      />
      <NavItem
        text="Applications"
        filterBy={filterBy}
        onClick={onClick}
        right={true}
      />
    </ul>
  );
}
