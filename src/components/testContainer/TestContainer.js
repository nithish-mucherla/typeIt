import React, { useState, useEffect } from "react";
import TestStats from "../testStats/TestStats";
import TypingChallenge from "../typingChallenge/TypingChallenge";
import "./TestContainer.css";

const TestContainer = () => {
  const [testPara, setTestPara] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    const para = `An airbus is a leg from the right perspective. Before pantries, harmonies were only baritones. Few can name a serene mistake that isn't a stockinged sword. Casebook nodes show us how pinks can be houses. This is not to discredit the idea that a key is a distrait interest. A step-grandfather of the carp is assumed to be an algal sunflower. A sneaking pine is a swing of the mind. Some ocher coins are thought of simply as slashes. Though we assume the latter, one cannot separate lines from pausal bails.`;
    setTestPara(para);
  }, []);

  return (
    <div className="test-container">
      <TestStats wordCount={wordCount} charCount={charCount} />
      <TypingChallenge
        testPara={testPara}
        setCharCount={setCharCount}
        setWordCount={setWordCount}
      />
    </div>
  );
};

export default TestContainer;
