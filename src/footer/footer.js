import React from "react";
import "./footer.css";

//icon imports
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        <div className="footer-section site-info">
          <h3>notablesolutionsllc.com</h3>
          <p>Email: <a href="mailto:derek@example.com">derekbradshaw02@gmail.com</a></p>
          <p>Phone: <a href="tel:+17323377098">+1 (732) 337-7098</a></p>
        </div>
        
        {/*
        <div className="footer-section social-links">
          <h4>Follow Me</h4>
          <ul className="social-list">
            <li>
              <a href="https://www.linkedin.com/in/derekbradshaw01" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/derek.bradshaw" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> Instagram
              </a>
            </li>
            
            <li>
              <a href="https://www.facebook.com/derekbradshaw" target="_blank" rel="noopener noreferrer">
              <FaSquareFacebook /> Facebook
              </a>
            </li>

          </ul>
        </div>
        */}
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} notablesolutionsllc.com. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
