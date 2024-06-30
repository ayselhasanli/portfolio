import React, {  useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const menuRef = useRef();
  const [menu, setMenu] = useState("home");

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <section className="navbar sticky">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <button className="nav-mob-open" onClick={openMenu}>
          <i className="fa-solid fa-bars-staggered"></i>
        </button>
        <ul ref={menuRef} className="nav-menu">
          <li>
            <button className="nav-mob-close" onClick={closeMenu}>
              <i className="fa-solid fa-circle-xmark"></i>
            </button>
          </li>
          <li>
            <AnchorLink
              className="anchor-link"
              offset={50}
              onClick={(e) => {
                setMenu("home");
                closeMenu()
              }}
              href="#header"
            >
              Home
            </AnchorLink> 
          </li>
          <li>
            <AnchorLink
              className="anchor-link"
              offset={50}
              onClick={() => {
                setMenu("about");
                closeMenu();
              }}
              href="#about"
            >
              About me
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="anchor-link"
              offset={50}
              onClick={() => {
                setMenu("myWork");
                closeMenu()
              }}
              href="#myWork"
            >
              Portfolio
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              className="anchor-link"
              offset={50}
              onClick={() => {
                setMenu("contact");
                closeMenu
              }}
              href="#contact"
            >
              Contact
            </AnchorLink>
          </li>
        </ul>
        <div className="nav-connect">
          <AnchorLink href="#contact" offset={50}>
            <button onClick={() => setMenu("contact")}>Connect With Me</button>
          </AnchorLink>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
