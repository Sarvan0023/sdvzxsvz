import React from 'react';
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-logo">Estore<span>.</span></h1>
      </div>
      <div className="navbar-center">
        <ul className="navbar-menu">
          <li className="menu-item">Home</li>
          <li className="menu-item">Catagori</li>
          <li className="menu-item">
            Latest <span className="hot-badge">HOT</span>
          </li>
          <li className="menu-item">Blog</li>
          <li className="menu-item">Pages</li>
          <li className="menu-item">Contact</li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="search-bar">
          <input type="text" placeholder="Search products" />
          <i className="fas fa-search"></i>
        </div>
        <div className="icon-container">
          <div className="icon">
            <i className="fas fa-heart"></i>
            <span className="icon-badge">02</span>
          </div>
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
