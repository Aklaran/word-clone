import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessHistory from "../GuessHistory";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessList, setGuessList] = React.useState([]);

  function validateGuess() {
    console.info({ guess });
    setGuessList([...guessList, guess]);
    setGuess("");
  }

  return (
    <>
      <GuessHistory guessList={guessList} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        validateGuess={validateGuess}
      />
    </>
  );
}

export default Game;
