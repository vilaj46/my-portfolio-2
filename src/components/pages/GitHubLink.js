import React from "react";

export default function GitHbLink({ repo, text = "Github" }) {
  return (
    <a
      type="text"
      className="bg-gray hover:bg-lightGray text-gray-800 font-bold py-2 px-4 rounded-r"
      href={repo}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
}
