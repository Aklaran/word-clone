import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessHistory from "../GuessHistory";
import HappyBanner from "../HappyBanner/HappyBanner";
import SadBanner from "../SadBanner/SadBanner";

import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessList, setGuessList] = React.useState([]);

  const [didWinGame, setDidWinGame] = React.useState(false);
  const [didLoseGame, setDidLoseGame] = React.useState(false);

  function validateGuess() {
    const validatedGuess = checkGuess(guess, answer);
    const nextGuessList = [...guessList, validatedGuess];
    setGuessList(nextGuessList);
    setGuess("");

    if (guess === answer) {
      setDidWinGame(true);
    } else if (nextGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setDidLoseGame(true);
    }
  }

  return (
    <>
      <GuessHistory guessList={guessList} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        validateGuess={validateGuess}
        isDisabled={didWinGame || didLoseGame}
      />
      {didWinGame && <HappyBanner numOfGuesses={guessList.length} />}
      {didLoseGame && <SadBanner>{answer}</SadBanner>}
    </>
  );
}

export default Game;
