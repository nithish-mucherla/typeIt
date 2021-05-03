import React, { useState, useEffect } from "react";
import TestStats from "../testStats/TestStats";
import TypingChallenge from "../typingChallenge/TypingChallenge";
import "./TestContainer.css";

const TestContainer = () => {
  const [testPara, setTestPara] = useState("");
  const [userText, setUserText] = useState(``);
  const [timerActive, setTimerActivity] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const para = `An airbus is a leg from the right perspective. Before pantries, harmonies were only baritones. Few can name a serene mistake that isn't a stockinged sword. Casebook nodes show us how pinks can be houses. This is not to discredit the idea that a key is a distrait interest. A step-grandfather of the carp is assumed to be an algal sunflower. A sneaking pine is a swing of the mind. Some ocher coins are thought of simply as slashes. Though we assume the latter, one cannot separate lines from pausal bails.`;
    setTestPara(para);
  }, []);

  const setTimer = () => {
    setTimerActivity(true);
    let interval = setInterval(() => {
      if (timeLeft > 0) setTimeLeft((second) => second - 1);
      else clearInterval(interval);
    }, 1000);
  };

  return (
    <div className="test-container">
      <TestStats userText={userText} />
      <div className="countdown-timer">
        00:{timeLeft > 9 ? timeLeft : "0" + timeLeft}
      </div>
      <TypingChallenge
        testPara={testPara}
        userText={userText}
        setUserText={setUserText}
        timerActive={timerActive}
        setTimer={setTimer}
      />
    </div>
  );
};

export default TestContainer;
