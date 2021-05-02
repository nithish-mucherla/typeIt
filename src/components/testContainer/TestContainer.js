import React from "react";
import TestStats from "../testStats/TestStats";
import TypingChallenge from "../typingChallenge/TypingChallenge";
import "./TestContainer.css";

const TestContainer = () => {
  return (
    <div className="test-container">
      <TestStats />
      <TypingChallenge />
    </div>
  );
};

export default TestContainer;
