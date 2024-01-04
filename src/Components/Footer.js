import React from "react";
import "./Footer.css";
import Logo from "../image/Logo.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="upper-content">
        <div className="upper-content-1">
          <div className="logo"></div>
          <div className="description">
            <img src={Logo} alt="Logo" />
            <div></div>
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective - your
            business results.
          </div>
        </div>
        <div className="upper-content-2">
          <div className="technologies">
            <div className="title">Our Technologies</div>
            <div className="tech-list">
              <div className="service">ReactJS</div>
              <div className="service">Gatsby</div>
              <div className="service">NextJS</div>
              <div className="service">NodeJS</div>
              <div className="service">GraphQL</div>
              <div className="service">Laravel</div>
            </div>
          </div>
          <div className="services">
            <div className="title">Our Services</div>
            <div className="service-list">
              <div className="service">Social Media Marketing</div>
              <div className="service">Web & Mobile App Development</div>
              <div className="service">Data & Analytics</div>
              <div className="service">Google Marketing Solutions</div>
              <div className="service">Search Engine Optimization</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-content">
        <div className="border-line"></div>
        <div className="links">
          <div className="link">Privacy Policy</div>
          <div className="arrow"></div>
          <div className="link">Terms & Conditions</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
