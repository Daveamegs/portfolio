import React from "react";
import "./Skills.css";
import Skillsbar from "./Skillsbar";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-left">
        <Skillsbar langClass="html" percent={"90%"} language={"HTML"} />
        <Skillsbar percent={"90%"} language={"HTML"} />
        <Skillsbar percent={"90%"} language={"HTML"} />
        <Skillsbar percent={"90%"} language={"HTML"} />
        <Skillsbar percent={"90%"} language={"HTML"} />
      </div>
      <div className="skills-right">
        <Skillsbar className="html" percent={"90%"} language={"HTML"} />
        <Skillsbar percent={"90%"} language={"HTML"} />
        <Skillsbar percent={"90%"} language={"HTML"} />
        <Skillsbar percent={"90%"} language={"HTML"} />
        <Skillsbar percent={"90%"} language={"HTML"} />
      </div>
    </div>
  );
};

export default Skills;
