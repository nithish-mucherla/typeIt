import React from "react";
import "./TestStats.css";

const TestStats = () => {
  return (
    <div className="stats-container">
      <div className="stat" data-aos="fade-up">
        <div className="statHead">Correct</div>
        <br />
        <div className="statValue">0</div>
      </div>
      <div className="stat" data-aos="fade-up">
        <div className="statHead">Words</div>
        <br />
        <div className="statValue">0</div>
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
