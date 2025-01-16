import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWishlist, removeFromWishlist } from "./wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  const handleRemove = (productId) => {
    dispatch(removeFromWishlist(productId));
  };

  return (
    <div>
      <h1>Wishlist</h1>
      <div className="grid grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.productId._id} className="border p-4">
            <h2>{item.productId.title}</h2>
            <p>${item.productId.price}</p>
            <button onClick={() => handleRemove(item.productId._id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
