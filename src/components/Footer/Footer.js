// Footer.js
import React from "react";
import logo from "../../assets/logobien.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">
        <div className="footer-header-text">
          <div className="title">
            <img src={logo} alt="Little Lemon logo" className="footer-logo" />
            <span>Authentic Mediterranean cuisine</span>
          </div>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/booking">Reservations</a></li>
            <li><a href="/">Order Online</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>Adress</li>
            <li>Phone</li>
            <li>Email</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Socials</h4>
          <ul>
            <li><a target="_blank" rel="noopener noreferrer" href="/">Facebook</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="/">Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;