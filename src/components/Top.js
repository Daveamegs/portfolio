import React, { useEffect, useState } from "react";
import "./Top.css";

const Top = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const showButtonFunc = () => {
      const scrolled = document.documentElement.scrollTop;
      scrolled > 500 ? setShowBtn(true) : setShowBtn(false);
    };

    window.addEventListener("scroll", showButtonFunc);

    return () => {
      window.removeEventListener("scroll", showButtonFunc);
    };
  }, []);

  // toTopBtn.addEventListener("click", function () {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // });

  const scrollToTopFunc = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="to-top"
      id="toTopBtn"
      style={{ display: showBtn ? "block" : "none" }}
      onClick={scrollToTopFunc}
    >
      <i class="fa fa-arrow-up" aria-hidden="true"></i>
    </button>
  );
};

export default Top;
