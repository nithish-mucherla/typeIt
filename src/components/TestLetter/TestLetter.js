import React from "react";
import "./TestLetter.css";

const TestLetter = ({ letter, status }) => {
  return <span className={status}>{letter}</span>;
};

export default TestLetter;
