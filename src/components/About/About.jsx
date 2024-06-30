import React from "react";
import "./About.css";
import profileImg from "../../assets/portfolio-img.jpg";
import theme_pattern from "../../assets/theme_pattern.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-title">
          <h2>About me</h2>
          <img className="theme-pattern" src={theme_pattern} alt="" />
        </div>

        <div className="about-sections">
          <div className="about-left">
            <img src={profileImg} alt="" />
          </div>
          <div className="about-right">
            <div className="about-paragraph">
              <p>
                As a front end developer, I'm dedicated to crafting interfaces
                that not only engage but also delight users. Here, I showcase my
                passion for crafting seamless user experiences through clean,
                responsive design.
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill" data-before="80%">
                <p>HTML5 / CSS3</p>
                <hr style={{ width: "80%" }} />
              </div>
              <div className="about-skill" data-before="65%">
                <p>Javascript</p>
                <hr style={{ width: "65%" }} />
              </div>
              <div className="about-skill" data-before="60%">
                <p>React Js / Redux</p>
                <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill" data-before="40%">
                <p>Typescript</p>
                <hr style={{ width: "40%" }} />
              </div>
              <div className="about-skill" data-before="80%">
                <p>Responsive Design</p>
                <hr style={{ width: "80%" }} />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="about-achievements">
          <div className="about-achievement">
            <h2>2+</h2>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h2>90+</h2>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h2>50+</h2>
            <p>HAPPY CLIENTS</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
