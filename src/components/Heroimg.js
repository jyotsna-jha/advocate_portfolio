import React from "react";
import { Link } from "react-scroll";
import "./HeroImgStyles.css";
import LawyerImg from "../assets/final2.jpg";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="content">
        <div className="img">
          <img className="intro-img" src={LawyerImg} alt="Lawyer" />
        </div>
        <div className="text-container">
          <h1>Advocate</h1>
          <h2>Balram Jha</h2> {/* Replace with your desired text */}
          <p>I am a professional Advocate from Nepal.</p>
          <div className="button-container">
            <Link
              to="services-section"
              smooth={true}
              duration={500}
              className="btn"
            >
              Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
