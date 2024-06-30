import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.png";

const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3c3633d3-d808-4d90-91ed-e00f566c1e83");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Get in touch</h2>
          <img className="theme-pattern" src={theme_pattern} alt="" />
        </div>

        <div className="contact-section">
          <div className="contact-left">
            <h2>Let's talk</h2>
            <p>
              I'm currently available to take a new projects, so feel free to
              send me a message about anything that you want me to work on. You
              can contact anytime.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <i className="fa-solid fa-envelope"></i>{" "}
                <p>ayselhasanli104@gmail.com</p>
              </div>

              <div className="contact-detail">
                <i className="fa-solid fa-phone"></i> <p>+994-50-360-66-75</p>
              </div>
              <div className="contact-detail">
                <i className="fa-solid fa-location-dot"></i>{" "}
                <p>Baku, Azerbaijan</p>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <form action="" onSubmit={onSubmit}>
              <label htmlFor="">Your Name</label>
              <input type="text" placeholder="Enter your name" name="name" />
              <label htmlFor="">Your Email</label>
              <input type="email" placeholder="Enter your email" name="email" />
              <label htmlFor="">Write your message here</label>
              <textarea
                name="message"
                rows="8"
                placeholder="Enter your message"
              ></textarea>
              <button type="submit" className="contact-submit">
                Submit now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
