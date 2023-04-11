import React from "react";

import { range } from "../../utils";

function Guess({ children }) {
  console.info({ children });

  return (
    <p className="guess">
      {range(5).map((index) => (
        <span key={index} className="cell">
          {children && children[index]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
