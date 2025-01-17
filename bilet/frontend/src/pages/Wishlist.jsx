import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Wishlist.scss"; 
import { removeItemFromWishlist } from "../redux/features/wishlistSlice";
const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist); 
  console.log(wishlist)


  const handleRemoveFromWishlist = (productId) => {
    dispatch(removeItemFromWishlist(productId));
  };

  return (
    <div className="wishlist-container">
      <h1 className="section-title">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="empty-wishlist">Your wishlist is empty.</p>
      ) : (
        <div className="wishlist-list">
          {wishlist.map((product) => (
            <div key={product._id} className="wishlist-card">
              <img
                src={product.image}
                alt={product.name}
                className="wishlist-image"
              />
              <div className="wishlist-details">
                <h3 className="wishlist-name">{product.name}</h3>
                <p className="wishlist-price">
                  Price: <strong>${product.price}</strong>
                </p>
                {product.oldPrice && (
                  <p className="wishlist-old-price">
                    Old Price: <span>${product.oldPrice}</span>
                  </p>
                )}
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveFromWishlist(product._id)}
                >
                  Remove from Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
