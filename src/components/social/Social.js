import React from "react";
import "./Social.css";

const Social = () => {
  return (
    <div className="social">
      <a href="https://github.com/Daveamegs" target="_blank" rel="noreferrer">
        <i class="fa fa-github-square" aria-hidden="true"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/dfamegah"
        target="_blank"
        rel="noreferrer"
      >
        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
      </a>
      <a href="https://twitter.com/daveamegs" target="_blank" rel="noreferrer">
        <i class="fa fa-twitter-square" aria-hidden="true"></i>
      </a>
    </div>
  );
};

export default Social;
