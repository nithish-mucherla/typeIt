import React from "react";
import "./landing.css";
import xlr8 from "../../assets/xlr8.jpg";
import TypeWriter from "../TypeWriter/TypeWriter";

const Landing = () => {
  return (
    <div className="landing-container">
      <div data-aos="fade-right" className="landing-left">
        <div className="landing-typewriter">
          <div className="landing-header">Are you good at typing...</div>
          <div className="landing-typewriter">
            <TypeWriter words={["Fast?", "Quick?", "Correct?"]} loop={true} />
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
