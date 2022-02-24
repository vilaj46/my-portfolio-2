import React from "react";

import pdf from "../pdfs/resume.pdf";

import Container from "../components/pages/Container";

export default function resume() {
  return (
    <Container>
      <div>
        <iframe src={pdf} title="Resume" width="100%" height="800px"></iframe>
      </div>
    </Container>
  );
}
