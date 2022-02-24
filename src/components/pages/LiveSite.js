import React from "react";

export default function LiveSite({ url, backend = "" }) {
  if (url.length > 0) {
    return (
      <a
        type="text"
        className={`bg-gray hover:bg-lightGray text-gray-800 font-bold py-2 px-4 rounded-l ${
          backend.length > 0 ? "h-1/2" : "h-full"
        }`}
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        Live Site
      </a>
    );
  } else {
    return (
      <button
        type="text"
        className={`bg-disabled cursor-not-allowed text-gray-800 font-bold py-2 px-4 rounded-l ${
          backend.length > 0 ? "h-1/2" : "h-full"
        }`}
      >
        Live Site
      </button>
    );
  }
}
