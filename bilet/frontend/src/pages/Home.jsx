import React from 'react';
import './Home.scss'; 
import ProductList from '../components/Products/Products';
import Products from '../components/Products/Products';

const Home = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner-image">
          <img src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png.webp" alt="Winter Collection" />
        </div>
        <div className="banner-content">
          <h3 className="discount-text">60% Discount</h3>
          <h1 className="banner-title">Winter Collection</h1>
          <p className="banner-subtitle">Best Cloth Collection By 2020!</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </div>
      <section className="shop-by-category">
        <h2 className="section-title">Shop by Category</h2>
        <div className="categories">
          <div className="category-card" style={{ backgroundColor: '#f5f9ff' }}>
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat1.jpg.webp" 
              alt="Women's Cloth"
              className="category-image"
            />
            <div className="category-content">
              <h3>Women's</h3>
              <span className="subtitle">Best New Deals</span>
              <span className="collection">New Collection</span>
            </div>
          </div>

          <div className="category-card" style={{ backgroundColor: '#ffe8ed' }}>
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat2.jpg.webp" 
              alt="Winter Cloth"
              className="category-image"
            />
            <div className="category-content">
              <h3>Winter Cloth</h3>
              <span className="subtitle">Discount!</span>
              <span className="collection">New Collection</span>
            </div>
          </div>

          <div className="category-card" style={{ backgroundColor: '#f5f9ff' }}>
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat3.jpg.webp" 
              alt="Men's Cloth"
              className="category-image"
            />
            <div className="category-content">
              <h3>Men's Cloth</h3>
              <span className="subtitle">Best New Deals</span>
              <span className="collection">New Collection</span>
            </div>
          </div>
        </div>
      </section>
      <Products/>
    </div>
   
  );
};

export default Home;
