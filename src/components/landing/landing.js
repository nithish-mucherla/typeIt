import React from "react";
import "./landing.css";
import xlr8 from "../../assets/xlr8.jpg";
import Typewriter from "typewriter-effect";

const Landing = () => {
  return (
    <div className="landing-container">
      <div data-aos="fade-right" className="landing-left">
        <div className="landing-typewriter">
          <div className="landing-header">Are you good at typing...</div>
          <div className="landing-typewriter">
            <Typewriter
              options={{
                strings: ["Fast?", "Quick?", "Correct?"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
      <div data-aos="fade-left" className="landing-right">
        <img src={xlr8} alt="hero" className="hero-img" />
      </div>
    </div>
  );
};

export default Landing;
