import React from "react";

function GuessInput({ guess, setGuess, validateGuess, isDisabled }) {
  function handleSubmit(event) {
    event.preventDefault();
    validateGuess();
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleSubmit(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={guess}
        id="guess-input"
        type="text"
        pattern="[A-Z]{5}"
        title="5 letter guess"
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        disabled={isDisabled}
      />
    </form>
  );
}

export default GuessInput;
