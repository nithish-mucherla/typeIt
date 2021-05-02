import React, { useState, useEffect } from "react";
import TestLetter from "../TestLetter/TestLetter";
import "./TypingChallenge.css";

const TypingChallenge = ({ testPara, setWordCount, setCharCount }) => {
  const [userText, setUserText] = useState(``);
  const [testLetters, setTestLetters] = useState([]);

  const generateTestLetters = () => {
    const letters = [];
    testPara
      .split("")
      .forEach((letter, i) => letters.push({ letter: letter, status: "" }));
    setTestLetters([...letters]);
  };

  useEffect(generateTestLetters, [testPara]);

  const updateTestLetter = (e) => {
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
    setWordCount(userText.length > 0 ? userText.trim().split(" ").length : 0);
    setCharCount(userText.length);
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
          onChange={(e) => updateTestLetter(e)}
          value={userText}
        ></textarea>
      </div>
    </div>
  );
};

export default TypingChallenge;
