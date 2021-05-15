import React, { useState, useEffect } from "react";
import "./TypeWriter.css";

const TypeWriter = ({ words, loop }) => {
  const [display, setDisplay] = useState("");
  const delay = (time) => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, time);
    });
  };

  useEffect(() => {
    (async () => {
      do {
        for (let j = 0; j < words.length; j++) {
          let word = words[j];
          for (let i = 0; i < word.length; i++) {
            await delay(150);
            setDisplay((disp) => disp + word[i]);
          }
          await delay(400);
          for (let i = 0; i < word.length; i++) {
            await delay(150);
            setDisplay((disp) => word.slice(0, word.length - i - 1));
          }
        }
      } while (loop);
    })();
  }, [loop, words]);

  return (
    <span>
      {display}
      <span className="cursor">|</span>
    </span>
  );
};

export default TypeWriter;
