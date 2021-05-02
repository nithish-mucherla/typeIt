import React from "react";
import TestContainer from "../testContainer/TestContainer";
import "./ChallengeSection.css";

const ChallengeSection = () => {
  return (
    <div className="challenge-section">
      <div className="test-header" data-aos="fade-down">
        TAKE THE CHALLENGE NOW !
      </div>
      <TestContainer />
    </div>
  );
};

export default ChallengeSection;
