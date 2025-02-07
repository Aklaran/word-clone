import React from "react";

import Guess from "../Guess";

import { range } from "../../utils";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessHistory({ guessList }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index}>{guessList[index]}</Guess>
      ))}
    </div>
  );
}

export default GuessHistory;
