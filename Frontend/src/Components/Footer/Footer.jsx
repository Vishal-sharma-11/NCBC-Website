import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <Link to="/about-us">About NCBC</Link> 
          <Link to="/Notices">Notices</Link> 
          <Link to="/related-links">Related Links</Link> 
          <Link to="/contact-us">Contact Us</Link>
          <a href="https://ncbc.negd.in/" target="_blank" rel="noopener noreferrer">
            Online Complaint Registration page
          </a> |
          <Link to="/accessibility-statement">Accessibility Statement</Link> 
          <Link to="/accessibility-options">Accessibility Options</Link> 
          <Link to="/privacy-policy">Privacy Policy</Link> 
          <Link to="/terms-conditions">Terms & Conditions</Link> 
          <Link to="/Disclaimer">Disclaimer</Link> 
          <Link to="/copyright-policy">Copyright Policy</Link> 
          <Link to="/hyperlinking-policy">Hyperlinking Policy</Link> 
          <Link to="/Help">Help</Link>
        </div>

        <div className="social-icons">
          <div className="social-icons-container">
          <a href="https://www.facebook.com/ncbc.india" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
  <svg viewBox="0 0 24 24">
    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495V14.706h-3.13V11.03h3.13V8.412c0-3.1 1.893-4.785 4.657-4.785 1.325 0 2.463.099 2.796.144v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.677h-3.12V24h6.116c.73 0 1.325-.593 1.325-1.324V1.325C24 .593 23.407 0 22.675 0z" />
  </svg>
</a>

<a href="https://twitter.com/ncbc_india" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
  <svg width="23" height="20" viewBox="0 0 24 24">
    <path d="M13.6882 8.34794L22.2504 0H20.2212L12.7869 7.24823L6.84888 0H0L8.97942 10.9607L0 19.7147H2.02917L9.88033 12.0603L16.1511 19.7147H23L13.6877 8.34794H13.6882ZM10.9091 11.0572L9.99915 9.96577L2.76023 1.28115H5.87689L11.7185 8.29003L12.6283 9.38142L20.2221 18.4918H17.1058L10.9091 11.0576V11.0572Z" />
  </svg>
</a>

<a href="https://www.instagram.com/ncbc_india" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
  <svg viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
</a>

          </div>
        </div>
        <div className="footer-info">
        <p>All rights reserved by National Informatics Centre</p>
        <p>Contents of this website are published and managed by National Commission for Backward Classes, Government of India.</p>
        <p>For any queries regarding this website, please contact Web Information Manager.</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
