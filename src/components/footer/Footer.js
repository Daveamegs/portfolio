import React from "react";
import Social from "../social/Social";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Social />
      <hr />
      <div className="footer-copy">
        <span>All Rights Reserved &copy; 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
