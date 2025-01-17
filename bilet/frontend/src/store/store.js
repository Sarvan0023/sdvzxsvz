import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/features/productSlice";
import wishlistReducer from "../redux/features/wishlistSlice"; 

const store = configureStore({
  reducer: {
    products: productReducer, 
    wishlist: wishlistReducer, 
  },
});

export default store;
