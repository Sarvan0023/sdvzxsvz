import React from "react";
import "./Footer.scss"; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
     
        <div className="footer-section">
          <h2 className="footer-logo">Estore.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#offers">Offers & Discounts</a></li>
            <li><a href="#coupon">Get Coupon</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>


        <div className="footer-section">
          <h3>New Products</h3>
          <ul>
            <li><a href="#woman-cloth">Woman Cloth</a></li>
            <li><a href="#fashion-accessories">Fashion Accessories</a></li>
            <li><a href="#man-accessories">Man Accessories</a></li>
            <li><a href="#toys">Rubber Made Toys</a></li>
          </ul>
        </div>

  
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#faq">Frequently Asked Questions</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#payment-issue">Report a Payment Issue</a></li>
          </ul>
        </div>
      </div>


      <div className="footer-bottom">
        <p>
          Copyright ©2025 All rights reserved | This template is made with 💙 by{" "}
          <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">
            Colorlib
          </a>
        </p>
        <div className="footer-social-icons">
          <a href="#twitter"><i className="fab fa-twitter"></i></a>
          <a href="#facebook"><i className="fab fa-facebook"></i></a>
          <a href="#behance"><i className="fab fa-behance"></i></a>
          <a href="#globe"><i className="fas fa-globe"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
