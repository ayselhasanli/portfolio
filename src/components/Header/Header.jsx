import React from "react";
import "./Header.css";
import profileImg from "../../assets/portfolio-img.jpg";
import pdfFile from "../../assets/AyselHasanli.pdf"

const Header = () => {
  return (
    <section className="header" id="header">
      <div className="container">
        <img src={profileImg} alt="" />
        <h1>
          <span>I'm Aysel Hasanli,</span> frontend developer based in
          Azerbaijan.
        </h1>
        <p>
          Welcome to my frontend portfolio! I specialize in creating intuitive,
          visually appealing websites with expertise in HTML, CSS, and
          JavaScript.
        </p>
        <div className="header-action">
          <a href="#contact">
            <button className="header-connect">Connect with me</button>
          </a>
          <a
            href={pdfFile}
            target="_blank"
          >
            <button className="header-resume">My resume</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
