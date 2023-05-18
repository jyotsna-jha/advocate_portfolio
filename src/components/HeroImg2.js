import "./HeroImg2Styles.css";
import React from "react";
import { Link } from "react-scroll";
/*import React1 from "../assets/imagead.png";*/
/*import React2 from "../assets/image.jpg"; */

const AboutContent = () => {
  return (
    <div id="about-section" className="about2">
      <div className="left2">
        <h1>A Little About Me</h1>
        <p>
          As an advocate, my mission is to fight for justice and be a reliable
          companion for my clients. With my experience, I understand the legal
          system inside out and the challenges people face. I approach every
          case with compassion, actively listening to my clients' needs. By
          building strong relationships based on trust, I guide them through
          their legal journey with unwavering support. I continuously learn and
          stay updated on legal developments to provide the best possible
          representation. Together, we navigate the complexities of the law to
          achieve favorable outcomes. With me by your side, you can confidently
          overcome legal obstacles, knowing that your rights are fiercely
          protected.
        </p>
        <Link to="contact-section" smooth={true} duration={500}>
          <button className="btx">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutContent;
