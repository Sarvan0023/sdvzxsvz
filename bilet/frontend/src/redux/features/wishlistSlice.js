import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [], 
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItemToWishlist: (state, action) => {
   
      const exists = state.wishlist.find((item) => item._id === action.payload._id);
      if (!exists) {
        state.wishlist.push(action.payload); 
      }
    },
    removeItemFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((item) => item._id !== action.payload._id);
    },
    clearWishlist: (state) => {
      state.wishlist = []; 
    },
  },
});

export const { addItemToWishlist, removeItemFromWishlist, clearWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
