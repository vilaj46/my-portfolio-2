import React from "react";

// Components
import Project from "./components/Project";

// Data
import data from "../../data";

export default function Projects({ filterBy }) {
  const { projects } = data;

  // What project we are hovering over.
  const [entered, setEntered] = React.useState("");

  const onMouseEnter = (title) => {
    setEntered(title);
  };

  const onMouseLeave = () => {
    setEntered("");
  };

  return (
    <ul
      className="flex flex-wrap justify-center relative z-10"
    >
      {projects.map((project) => {
        const { type } = project;
        if (filterBy === "All") {
          return (
            <Project
              project={project}
              entered={entered}
              key={project.title}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          );
        } else {
          if (filterBy === type) {
            return (
              <Project
                project={project}
                entered={entered}
                key={project.title}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              />
            );
          } else {
            // When the page loads we don't have projects right away.
            // This just prevents the warning message where something needs
            // to be returned in a map function.
            return <div key={project.title}></div>;
          }
        }
      })}
    </ul>
  );
}
