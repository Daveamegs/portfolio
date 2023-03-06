import React from "react";
import "./Skills.css";
import Skillsbar from "./Skillsbar";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-left">
        <Skillsbar langClass="html" percent={"80%"} language={"HTML"} />
        <Skillsbar langClass="css" percent={"70%"} language={"CSS"} />
        <Skillsbar
          langClass="javascript"
          percent={"50%"}
          language={"Javascript"}
        />
        <Skillsbar langClass="jquery" percent={"30%"} language={"JQuery"} />
        <Skillsbar langClass="reactjs" percent={"50%"} language={"Reactjs"} />
      </div>
      <div className="skills-right">
        <Skillsbar langClass="python" percent={"50%"} language={"Python"} />
        <Skillsbar langClass="flask" percent={"60%"} language={"Flask"} />
        <Skillsbar
          langClass="postgresql"
          percent={"60%"}
          language={"PostgreSQL"}
        />
        <Skillsbar langClass="mysql" percent={"60%"} language={"MySQL"} />
        <Skillsbar langClass="php" percent={"30%"} language={"PHP"} />
      </div>
    </div>
  );
};

export default Skills;
