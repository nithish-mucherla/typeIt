import React from "react";
import "./TestStats.css";

const TestStats = ({ wordCount, charCount, wpm }) => {
  return (
    <div className="stats-container">
      <div className="stat" data-aos="fade-up">
        <div className="statHead">Chars</div>
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
        <div className="statValue">{wpm} wpm</div>
      </div>
    </div>
  );
};

export default TestStats;
