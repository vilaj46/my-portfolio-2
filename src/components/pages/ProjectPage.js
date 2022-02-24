import React from "react";

import Container from "./Container";
import H2 from "../H2";
import H3 from "../H3";
import LiveSite from "./LiveSite";
import GitHubLink from "./GitHubLink";
import Technologies from "./Technologies";
import ProjectPageImage from "./ProjectPageImage";

import data from "../../data";

export default function ProjectPage({ index }) {
  const { projects } = data;
  const project = projects[index];
  const { tech, info, info2, url, repo, images, details, backend } = project;
  return (
    <Container>
      <H2>{project.title}</H2>
      <H3>{info}</H3>
      <div className="flex justify-between">
        <ProjectPageImage images={images} />
        <div className="w-3/12">
          <div className="mb-3 flex">
            <LiveSite url={url} backend={backend} />
            <div className="flex flex-col">
              <GitHubLink repo={repo} />
              {backend.length > 0 && (
                <GitHubLink repo={backend} text="Backend" />
              )}
            </div>
          </div>

          <Technologies tech={tech} />
        </div>
      </div>
      <p className="mt-12">{info2}</p>
      <p className="mt-6">{details}</p>
    </Container>
  );
}
