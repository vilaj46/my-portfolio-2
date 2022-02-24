import images from "./images";

const {
  fcp,
  dd,
  unionGables,
  easyHeaders,
  mockCritical,
  glorifiedTodo,
  ddr,
  brief,
} = images;

const projects = [
  {
    title: "Franklin Court Press",
    type: "Websites",
    images: [...fcp],
    href: "franklin-court-press",
    url: "http://www.franklincourtpress.com/",
    repo: "https://github.com/vilaj46/fcp-next",
    backend: "",
    info: "NextJS Website with Contact Form",
    info2:
      "A responsive web application serving it's main purpose as a landing/information page and contact form.",
    tech: ["NextJS", "Express", "Vercel", "SendGrid"],
    details: "",
    // "NextJs was used for the SEO potential with the server side rendering. A contact form was implemeneted so the email address isn't public.",
  },
  {
    title: "Ad1 & Ad2 Brief Preparation",
    type: "Applications",
    images: [...brief],
    href: "ad1-ad2-brief-preparation",
    url: "",
    repo: "https://github.com/vilaj46/ad1-ad2-briefs",
    backend: "",
    info: "Electron application which combines specific PDFs, bookmarks, and hyperlinks",
    info2:
      "This application was built to automate new rules created by the NYS court system.",
    tech: ["React", "Electron", "Python", "Flask"],
    details:
      "Certain documents were required to contain bookmarks and hyperlinks. The application will search for the Table of Contents / Authorities and create the bookmarks / hyperlink the page numbers.",
  },
  {
    title: "Mock Critical",
    type: "Websites",
    images: [...mockCritical],
    href: "mock-critical",
    url: "https://vilaj46.github.io/mock-critical/",
    repo: "https://github.com/vilaj46/mock-critical",
    backend: "",
    info: "React Website with Testing / Hooks",
    info2:
      "This website was built with the purpose of practicing styling techniques and different types of testing.",
    tech: ["React", "Testing", "Custom Hooks", "Mobile First"],
    details:
      "I came across an online clothing store which did not scale on mobile dimensions. Mobile first development was used when recreating this example. Since React is overkill for this type of website, I took the opportunity to add custom hooks / unit testing.",
  },
  {
    title: "Union Gables Inn",
    type: "Websites",
    images: [...unionGables],
    href: "union-gables-inn",
    url: "https://xenodochial-swanson-ae4f70.netlify.app/",
    repo: "https://github.com/vilaj46/union-gables",
    backend: "",
    info: "Gatsby Website with styled components",
    info2:
      "This application was built because the client complained of slow load times in their wordpress application.",
    tech: ["Gatsby", "Styled Components", "Reusable Components"],
    details:
      "This is a website for a bed and breakfast. They did not need a reservation system; only the possibility of a blog. Gatsby was chosen because of the easy to create/setup blog and for the image optimization.",
  },
  {
    title: "Glorified Todo",
    type: "Websites",
    images: [...glorifiedTodo],
    href: "glorified-todo",
    url: "https://vilaj46.github.io/glorified-todo/",
    repo: "https://github.com/vilaj46/glorified-todo",
    backend: "https://github.com/vilaj46/glorified-todo-backend",
    info: "Your standard todo application with authentication.",
    info2:
      "This website was built to enforce CRUD operations and a more advanced deployment.",
    tech: ["React", "CRUD", "Express", "Restful", "Mongo", "Mlab", "Heroku"],
    details:
      "After working in the local environment with Express / MongoDB, I wanted to make sure that the practice projects with authentication and a database could be deployed properly.",
  },
  {
    title: "Document Downloader/Sidebar - Firefox",
    type: "Extensions",
    images: [...dd],
    href: "document-downloader-sidebar",
    url: "",
    repo: "https://github.com/vilaj46/nyscef-document-downloader",
    backend: "",
    info: "Sidebar extension used to download documents on NYSCEF.",
    info2:
      "This browser extension was built to ease the downloading of court records.",
    tech: ["JavaScript"],
    details:
      "After using React for a while, I wanted to re-enforce Vanilla JS and its scaling ability.",
  },
  {
    title: "Document Downloader/Popup - Chrome",
    type: "Extensions",
    images: [...ddr],
    href: "document-downloader-popup",
    url: "",
    repo: "https://github.com/vilaj46/nyscef-document-download-react",
    backend: "",
    info: "Assistance to download specific documents",
    info2:
      "This browser extension was built to ease the downloading of court records.",
    tech: ["React"],
    details:
      "The original version of this extension was built with vanilla JS. The React iteration was created for a larger scaling purpose and use of life cycle methods.",
  },
  {
    title: "Easy Headers",
    type: "Websites",
    images: [...easyHeaders],
    href: "easy-headers",
    url: "https://vilaj46.github.io/pdf-ui/",
    repo: "https://github.com/vilaj46/pdf-ui",
    backend: "https://github.com/vilaj46/pdf-ui-backend",
    info: "Page Numbers and Headers UI for PDF documents",
    info2:
      "This website was built to ease adding multiple headers to a PDF document.",
    tech: ["React", "Flask"],
    details:
      "Most of this application is done in the backend. Simple routes are set up and with the help of a python PDF library changes can be made to a PDF document.",
  },
];

export function sortProjectsByType(type) {
  return projects.filter((project) => {
    const projectType = project.type;
    return projectType === type;
  });
}

export default projects;
