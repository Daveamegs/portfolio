import React from "react";
import "./Feedback.css";
// import profilePic from "../../images/leilani-angel-unsplash.jpg";

const Feedback = () => {
  return (
    <div className="feedback">
      <div className="feedback-left">
        <div className="feedback-left-question">
          {/* <img src={profilePic} alt="profile" /> */}
          <h2>Any Message or Question?</h2>
          <h2>Contact Me</h2>
        </div>
      </div>
      <div className="feedback-right">
        <form className="feedback-form">
          <div className="name-wrapper">
            <label for="fullName">Full Name</label> <br />
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter Your Full Name"
            />
          </div>

          <div className="email-wrapper">
            <label for="email">Email </label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="jones@example.com"
            />
          </div>

          <div className="message-wrapper">
            <label for="message">Enter Your Message</label>
            <br />
            <textarea
              cols="50"
              rows="8"
              name="message"
              id="message"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="submit-wrapper">
            <button type="submit" name="submit" id="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
