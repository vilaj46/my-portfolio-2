import * as React from "react";

// Components
import H2 from "../components/H2";
import H3 from "../components/H3";
// import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Container from "../components/pages/Container";
import ProjectsNavBar from "../components/ProjectsNavBar";

// Data
import data from "../data";

/**
 * Fonts maybe in the readme section.
 * Mobile friendly
 *
 * hero_description
 * about me
 * resume
 *
 * Website page information, unorganized.
 */

/**
 * Template: https://bootstrapmade.com/demo/MyPortfolio/
 * Footer: https://codepen.io/scanfcode/pen/MEZPNd
 * Example: https://davidsumner.co.uk/
 */

/**
 * Animations
 *
 * Fade Up: https://codepen.io/themechills/pen/dMamgG
 */

const IndexPage = () => {
  const [filterBy, setFilterBy] = React.useState("All");
  return (
    <main style={{ overflow: "hidden" }}>
      <Container>
        <H2>{data.hero}</H2>
        <H3>{data.hero_description}</H3>
        <ProjectsNavBar filterBy={filterBy} setFilterBy={setFilterBy} />
        <Projects filterBy={filterBy} />
        {/* <AboutMe /> */}
      </Container>
    </main>
  );
};

export default IndexPage;
