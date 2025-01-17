import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/features/productSlice";

import "./Products.scss";
import { addItemToWishlist, removeItemFromWishlist } from "../../redux/features/wishlistSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { wishlist } = useSelector((state) => state.wishlist); 

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

 
  const isProductInWishlist = (productId) => {
    return wishlist.some((item) => item._id === productId);
  };


  const handleWishlistToggle = (product) => {
    if (isProductInWishlist(product._id)) {
      dispatch(removeItemFromWishlist(product._id)); 
    } else {
      dispatch(addItemToWishlist(product)); 
    }
  };

  return (
    <div className="products-container">
      <h1 className="section-title">Latest Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            {product.isNew && <span className="new-badge">New</span>}
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">
              Price: <strong>${product.price}</strong>
              {product.oldPrice && (
                <span className="old-price">${product.oldPrice}</span>
              )}
            </p>
            <div className="product-rating">
              {Array(product.rating)
                .fill("⭐")
                .map((star, index) => (
                  <span key={index} className="star">
                    {star}
                  </span>
                ))}
            </div>
            <button
              className="wishlist-btn"
              onClick={() => handleWishlistToggle(product)} 
            >
              {isProductInWishlist(product._id) ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        ))}
      </div>
      <div className="hero-section">
        <img
          src="https://preview.colorlib.com/theme/estore/assets/img/categori/card-man.png.webp"
          alt="Man with bag"
          className="main-image"
        />
        <div className="hero-content">
          <h1>Find The Best Product from Our Shop</h1>
          <p>Designers who are interested in creating state-of-the-art fashion.</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </div>
      <div className="subscribe-section">
        <img
          src="https://preview.colorlib.com/theme/estore/assets/img/collection/latest-man.png.webp"
          alt="Man with bag"
          className="subscribe-man"
        />
        <div className="subscribe-content">
          <h1>Get Our Latest Offers News</h1>
          <p>Subscribe to our newsletter</p>
          <div className="subscribe-input">
            <input type="email" placeholder="Your email here" />
            <button className="shop-now-btn">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
