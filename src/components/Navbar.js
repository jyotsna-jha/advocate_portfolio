import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import "./NavbarStyles.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const scrollToTop = () => {
    scroll.scrollToTop();
    setClick(false);
  };

  return (
    <div className="header">
      <div className="logo" onClick={scrollToTop}>
        <div className="adx">
          <h1>Balram Jha</h1>
        </div>
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link
            activeClass="active"
            to="hero-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setClick(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setClick(false)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="testimonials-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setClick(false)}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="resume-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setClick(false)}
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="services-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setClick(false)}
          >
            Services
          </Link>
        </li>

        <li>
          <Link
            activeClass="active"
            to="contact-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setClick(false)}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
