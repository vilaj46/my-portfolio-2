import React from "react";

// import pdf from "../pdfs/Julian_Vila_Resume.pdf";
import pdf from "../pdfs/resume.pdf";

import Container from "../components/pages/Container";

export default function resume() {
  return (
    <Container>
      <embed src={pdf} type="application/pdf" width="100%" height="600px" />
    </Container>
  );
}
