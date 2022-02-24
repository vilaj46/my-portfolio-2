import React from "react";
import { Link } from "gatsby";

import ResumeButton from "../../ResumeButton.js";

import { sortProjectsByType } from "../../../data/projects";

export default function HeaderNav({ isOpen }) {
  const websites = sortProjectsByType("Websites");
  const extensions = sortProjectsByType("Extensions");
  const applications = sortProjectsByType("Applications");

  const display = isOpen ? "block" : "hidden";
  const opacity = isOpen ? "opacity-100" : "opacity-0";

  // w-full
  return (
    <div
      className={`
        absolute -top-0
        justify-between
        z-20 bg-white transition duration-3000
        ease-in-out
        ${display}
        ${opacity}
        transform
        w-200
        -translate-x-1/4
      `}
    >
      <div className={`bg-blue`}>
        <div className="container mx-auto w-1/2">
          <h1
            className="ml-2 text-2xl text-white"
            style={{ fontFamily: "inconsolata" }}
          >
            <Link to="/">MyPortfolio</Link>
          </h1>
          <ul className=" top-0 flex z-30 w-full justify-around flex-col md:flex-row">
            <Category text="Websites" projects={websites} />
            <Category text="Extensions" projects={extensions} />
            <Category text="Applications" projects={applications} />
          </ul>
        </div>
        <div className="w-1/2 mx-auto text-white">
          <ResumeButton invert={true} />
        </div>
      </div>
    </div>
  );
}

function Category({ text, projects }) {
  return (
    <li
      className="mx-3 mt-6 text-white text-xs"
      style={{
        textAlign: "center",
      }}
    >
      <p className="underline mb-3 sm:text-center">{text}</p>
      <ul>
        {projects.map((project) => (
          <li
            key={project.href}
            className="mb-6 hover:underline sm:text-center"
          >
            <Link to={`/${project.href}/`} className="sm:block sm:text-center">
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
