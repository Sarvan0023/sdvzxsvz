import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Navbar.scss'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-logo">
          <Link to="/">Estore<span>.</span></Link>
        </h1>
      </div>
      <div className="navbar-center">
        <ul className="navbar-menu">
          <li className="menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/catagori">Catagori</Link>
          </li>
          <li className="menu-item">
            <Link to="/latest">
              Latest <span className="hot-badge">HOT</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="menu-item">
            <Link to="/pages">Pages</Link>
          </li>
          <li className="menu-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="search-bar">
          <input type="text" placeholder="Search products" />
          <i className="fas fa-search"></i>
        </div>
        <div className="icon-container">
        <Link to="/wishlist"><div className="icon">
            <i className="fas fa-heart"></i>
            <span className="icon-badge">02</span>
          </div></Link>
          
          <div className="icon">
            <i className="fas fa-shopping-cart"></i>
            <span className="icon-badge">02</span>
          </div>
        </div>
        <button className="sign-in-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
