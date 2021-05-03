import React, { useState, useEffect } from "react";
import TestLetter from "../TestLetter/TestLetter";
import "./TypingChallenge.css";

const TypingChallenge = ({
  testPara,
  userText,
  setUserText,
  timerActive,
  setTimerActivity,
}) => {
  const [testLetters, setTestLetters] = useState([]);

  const generateTestLetters = () => {
    const letters = [];
    testPara
      .split("")
      .forEach((letter, i) => letters.push({ letter: letter, status: "" }));
    setTestLetters([...letters]);
  };

  useEffect(generateTestLetters, [testPara]);

  const updateTestLetters = (e) => {
    if (!timerActive) setTimerActivity(true);
    const userText = e.target.value;
    const len = userText.length;
    let letters = testLetters;

    letters.slice(len).forEach((letter) => (letter.status = ""));

    [...userText].forEach((letter, i) => {
      if (i < testLetters.length)
        letters[i].status =
          letters[i].letter === letter ? "correct" : "incorrect";
    });

    setTestLetters([...letters]);
    setUserText(userText);
  };

  return (
    <div className="typing-challenge-contianer">
      <div className="test-para">
        {testLetters.map((letter, i) => (
          <TestLetter letter={letter.letter} status={letter.status} key={i} />
        ))}
      </div>
      <div className="user-text-container">
        <textarea
          className="user-text-area"
          onChange={(e) => updateTestLetters(e)}
          value={userText}
          placeholder={!timerActive ? "type to start the test" : ""}
        ></textarea>
      </div>
    </div>
  );
};

export default TypingChallenge;
