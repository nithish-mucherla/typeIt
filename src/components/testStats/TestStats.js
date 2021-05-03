import React from "react";
import "./TestStats.css";

const TestStats = ({ userText }) => {
  const wordCount = userText.length > 0 ? userText.trim().split(" ").length : 0;
  const charCount = userText.length;
  return (
    <div className="stats-container">
      <div className="stat" data-aos="fade-up">
        <div className="statHead">characters</div>
        <br />
        <div className="statValue">{charCount}</div>
      </div>
      <div className="stat" data-aos="fade-up">
        <div className="statHead">Words</div>
        <br />
        <div className="statValue">{wordCount}</div>
      </div>
      <div className="stat" data-aos="fade-up">
        <div className="statHead">Speed</div>
        <br />
        <div className="statValue">0</div>
      </div>
    </div>
  );
};

export default TestStats;
