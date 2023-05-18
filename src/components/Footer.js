import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import './FooterStyles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <a href="mailto:your-email@gmail.com" className="icon">
            <FaEnvelope />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="icon">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="icon">
            <FaInstagram />
          </a>
        </div>
        <div className="address">
          <p>Your Law Firm</p>
          <p>123 Main Street</p>
          <p>City, State ZIP</p>
        </div>
      </div>
      <p className="rights">All rights reserved &copy; 2023</p>
    </footer>
  );
};

export default Footer;
