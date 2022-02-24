import React from "react";

import pdf from "../pdfs/resume.pdf";

import Container from "../components/pages/Container";

export default function resume() {
  return (
    <Container>
      <div style={{ border: "2px solid red" }}>
        <iframe src={pdf} title="Resume" width="100%" height="800px"></iframe>
      </div>
    </Container>
  );
}
