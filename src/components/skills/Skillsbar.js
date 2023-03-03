import React from "react";
import "./Skills.css";

const Skillsbar = ({ percent, language, langClass }) => {
  return (
    <div className="skillsbar">
      <h2 className="skillsbar-language">{language}</h2>
      <div className="skillsbar-wrapper">
        <div className={`skillsbar-skills ${langClass}`}>{percent}</div>
      </div>
    </div>
  );
};

export default Skillsbar;
