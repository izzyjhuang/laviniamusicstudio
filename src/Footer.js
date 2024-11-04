// Footer.js

import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="footer-container">
      <h1 className="footer-header">Contact Us</h1>
      <div className="footer-icons">
        <a href="mailto:lavinialeemusicstudio@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} /> 
          <span>Email: lavinialeemusicstudio@gmail.com</span>
        </a>
        <a href="tel:+8476519724">
          <FontAwesomeIcon icon={faPhone} /> 
          <span>Phone: +1 (847) 651-9724</span>
        </a>
      </div>
      <div className="footer-links">
        <h5>© Copyright 2024 Lavinia Music Studio</h5>
      </div>
    </div>
  );
}

export default Footer;