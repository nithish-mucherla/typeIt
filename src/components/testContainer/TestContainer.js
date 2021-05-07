import React, { useState, useEffect } from "react";
import TestStats from "../testStats/TestStats";
import TypingChallenge from "../typingChallenge/TypingChallenge";
import TestResults from "../TestResults/TestResults";
import "./TestContainer.css";

const TestContainer = () => {
  const [testPara, setTestPara] = useState("");
  const [userText, setUserText] = useState(``);
  const [timerActive, setTimerActivity] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  //http://metaphorpsum.com/paragraphs/2/10
  useEffect(() => {
    fetch("https://mashape-community-skate-ipsum.p.rapidapi.com/1/0/JSON", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3d15874e0amshf1bdb48a55c5499p100e08jsn9ee781838fa3",
        "x-rapidapi-host": "mashape-community-skate-ipsum.p.rapidapi.com",
      },
    })
      .then((res) => res.text())
      .then((para) => setTestPara(para.slice(2, para.length - 2)))
      .catch((err) => {
        const para = `An airbus is a leg from the right perspective. Before pantries, harmonies were only baritones. Few can name a serene mistake that isn't a stockinged sword. Casebook nodes show us how pinks can be houses. This is not to discredit the idea that a key is a distrait interest. A step-grandfather of the carp is assumed to be an algal sunflower. A sneaking pine is a swing of the mind. Some ocher coins are thought of simply as slashes. Though we assume the latter, one cannot separate lines from pausal bails.`;
        setTestPara(para);
      });
  }, []);

  useEffect(() => {
    if (timerActive) {
      let interval = setInterval(() => {
        if (timeLeft > 0) setTimeLeft((second) => second - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [timerActive, timeLeft]);

  const wordCount = userText.length > 0 ? userText.trim().split(" ").length : 0;
  const charCount = userText.length;
  const timeSpent = 60 - timeLeft;
  const wpm = timeSpent > 0 ? parseInt((wordCount / timeSpent) * 60) : 0;

  const resetTest = () => {
    setUserText(``);
    setTimerActivity(false);
    setTimeLeft(60);
  };

  if (timeLeft > 0)
    return (
      <div className="test-container">
        <TestStats wordCount={wordCount} charCount={charCount} wpm={wpm} />
        <div className="countdown-timer">
          00:{timeLeft > 9 ? timeLeft : "0" + timeLeft}
        </div>
        <TypingChallenge
          testPara={testPara}
          userText={userText}
          setUserText={setUserText}
          timerActive={timerActive}
          setTimerActivity={setTimerActivity}
        />
      </div>
    );

  return (
    <TestResults
      wordCount={wordCount}
      charCount={charCount}
      wpm={wpm}
      resetTest={resetTest}
    />
  );
};

export default TestContainer;
