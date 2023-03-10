import React from "react";
import Social from "../social/Social";
import "./Intro.css";
// import profileImage from "../../images/leilani-angel-unsplash.jpg";

const Intro = () => {
  return (
    <header className="h-intro">
      <div className="h-intro-left">
        <Social />
        <div className="h-intro-left-wrapper">
          <h2 className="h-intro-left-hello">Hello, My name is</h2>
          <h1 className="h-intro-left-name">David K. Amegayibor</h1>
          <div className="h-intro-title">
            <div className="h-intro-title-wrapper">
              <h2 className="h-intro-title-item">Web Developer</h2>
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              fuga, assumenda soluta earum facilis expedita quia exercitationem
              sed iure maxime. Asperiores consequuntur officia sit, quam quas
              blanditiis itaque laudantium ea?
            </p>
          </div>
        </div>
      </div>
      <div className="h-intro-right">
        <div className="clip-path"></div>
        <div className="h-intro-right-profile-img">
          {/* <img src={profileImage} alt="Profile" className="profile-image" /> */}
        </div>
      </div>
    </header>
  );
};

export default Intro;
