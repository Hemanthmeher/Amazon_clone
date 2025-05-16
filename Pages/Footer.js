import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* First Section: Links */}
      <div className="footer-top">
        <div className="footer-column">
          <h4>Get to Know Us</h4>
          <ul>
            <li><a href="#">About Amazon</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press Releases</a></li>
            <li><a href="#">Amazon Science</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Connect with Us</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Make Money with Us</h4>
          <ul>
            <li><a href="#">Sell on Amazon</a></li>
            <li><a href="#">Sell under Amazon Accelerator</a></li>
            <li><a href="#">Amazon Global Selling</a></li>
            <li><a href="#">Supply to Amazon</a></li>
            <li><a href="#">Become an Affiliate</a></li>
            <li><a href="#">Advertise Your Products</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Let Us Help You</h4>
          <ul>
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Returns Centre</a></li>
            <li><a href="#">100% Purchase Protection</a></li>
            <li><a href="#">Amazon App Download</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </div>

      {/* Middle Section: Amazon Logo + Language & Country Options */}
      <div className="footer-middle">
        <div className="footer-logo">Amazon</div>
        <div className="footer-options">
          <button className="footer-btn">🌐 English</button>
          <button className="footer-btn">🇮🇳 India</button>
        </div>
      </div>

      {/* Last Section: Additional Amazon Services */}
      <div className="footer-bottom">
        <div className="footer-links">
          <div>
            <h5>AbeBooks</h5>
            <p>Books, Art & Collectibles</p>
          </div>
          <div>
            <h5>Amazon Web Services</h5>
            <p>Scalable Cloud Computing Services</p>
          </div>
          <div>
            <h5>Amazon Business</h5>
            <p>Everything For Your Business</p>
          </div>
          <div>
            <h5>Audible</h5>
            <p>Download Audio Books</p>
          </div>
          <div>
            <h5>IMDb</h5>
            <p>Movies, TV & Celebrities</p>
          </div>
          <div>
            <h5>Amazon Prime Music</h5>
            <p>100 Million Songs, Ad-Free</p>
          </div>
        </div>
      </div>

      {/* Copyright & Legal Info */}
      <div className="footer-copyright">
        <p>Conditions of Use & Sale | Privacy Notice | Interest-Based Ads</p>
        <p>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};

export default Footer;
