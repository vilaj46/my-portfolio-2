import React from "react";

import SideRule from "./SideRule";

export default function Technologies({ tech }) {
  return (
    <ul>
      {tech.map((t) => {
        return (
          <li key={t} className="flex">
            <SideRule />
            {t}
          </li>
        );
      })}
    </ul>
  );
}
