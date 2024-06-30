import React from "react";
import "./MyWork.css";
import mywork_data from "../../assets/mywork_data";
import theme_pattern from "../../assets/theme_pattern.png"

const MyWork = () => {
  return (
    <section className="mywork" id="myWork">
      <div className="container">
        <div className="section-title">
          <h2>My Latest Works</h2>
          <img className="theme-pattern" src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
          {mywork_data.map((work, index) => {
            return (
              <a href={work.w_link} target="blank">
                <img key={index} src={work.w_img} alt="" />
              </a>
            );
          })}
        </div>

        <div className="mywork-showmore">
          <a target="blank" href="https://github.com/ayselhasanli">
            Show More
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
