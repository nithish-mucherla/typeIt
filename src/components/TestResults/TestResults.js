import React from "react";
import "./TestResults.css";

const TestResults = ({ wordCount, charCount, wpm, resetTest }) => {
  return (
    <div className="result-container">
      <div className="results-header">Test Results</div>
      <div className="results">
        <div>
          <b>Words:</b> {wordCount}
        </div>
        <div>
          <b>Characters:</b> {charCount}
        </div>
        <div>
          <b>Speed:</b> {wpm} wpm
        </div>
      </div>
      <div>
        <div className="retry-button" onClick={() => resetTest()}>
          RETRY
        </div>
      </div>
    </div>
  );
};

export default TestResults;
