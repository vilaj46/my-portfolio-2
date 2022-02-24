import React from "react";
import { Link } from "gatsby";
import { Squash as Hamburger } from "hamburger-react";

import Footer from "../footer/Footer";
import HeaderNav from "./headerNav/HeaderNav";

export default function Container({ children }) {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="container mx-auto m-12 text-primary relative w-11/12 md:w-full">
      <HeaderNav isOpen={isOpen} />
      <div
        className="ml-2 absolute -top-0 right-0 z-50"
        style={{
          boxShadow: `${isOpen ? "" : "1px 1px 3px 1px #333"}`,
        }}
      >
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color={isOpen ? "white" : "black"}
          label="Show menu"
        />
      </div>
      <div className="flex">
        <div
          className={`
            flex
            justify-between
            w-full
            ${isOpen ? "absolute" : "static"}
          `}
        >
          <h1
            className="mb-12 text-2xl hover:underline"
            style={{ fontFamily: "inconsolata" }}
          >
            <Link to="/">MyPortfolio</Link>
          </h1>
        </div>
      </div>

      <div
        className={`
        animate-fadeUp
        ${isOpen ? "container mx-auto" : ""}
      `}
      >
        {isOpen && (
          <h1 className="w-0 mb-12 text-2xl opacity-0">
            <Link to="/">MyPortfolio</Link>
          </h1>
        )}
        {children}
      </div>
      <Footer />
    </div>
  );
}
