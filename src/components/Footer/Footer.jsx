import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        {/* <div className="footer-top">
          <div className="footer-top-left">
            <div className="footer-logo">
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </div>
            <p>
              I am a frontend developer from Azerbaijan with 2 years of
              experience.
            </p>
          </div>
          <div className="footer-top-right">
            <div className="footer-email-input">
              <i className="fa-solid fa-user"></i>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="footer-subscribe">
              <button>Subscribe</button>
            </div>
          </div>
        </div> */}
        <hr />
        <div className="footer-copyright">
          <p>© 2024 Aysel Hasanli. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
