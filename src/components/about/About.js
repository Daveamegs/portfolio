import React from "react";
import "./About.css";
import profileImage from "../../images/leilani-angel-unsplash.jpg";

const about = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-left-prof-img">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="about-profile-desc"></div>
      </div>
      <div className="about-right">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          fuga, assumenda soluta earum facilis expedita quia exercitationem sed
          iure maxime. Asperiores consequuntur officia sit, quam quas blanditiis
          itaque laudantium ea? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sapiente fuga, assumenda soluta earum facilis
          expedita quia exercitationem sed iure maxime. Asperiores consequuntur
          officia sit, quam quas blanditiis itaque laudantium ea?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          fuga, assumenda soluta earum facilis expedita quia exercitationem sed
          iure maxime. Asperiores consequuntur officia sit, quam quas blanditiis
          itaque laudantium ea? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sapiente fuga, assumenda soluta earum facilis
          expedita quia exercitationem sed iure maxime. Asperiores consequuntur
          officia sit, quam quas blanditiis itaque laudantium ea?
        </p>
      </div>
    </div>
  );
};

export default about;
