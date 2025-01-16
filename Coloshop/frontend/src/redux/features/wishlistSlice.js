import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWishlist = createAsyncThunk("wishlist/fetchWishlist", async () => {
  const response = await axios.get("http://localhost:5000/api/wishlist");
  return response.data;
});

export const addToWishlist = createAsyncThunk("wishlist/addToWishlist", async (productId) => {
  const response = await axios.post("http://localhost:5000/api/wishlist/add", { productId });
  return response.data;
});

export const removeFromWishlist = createAsyncThunk("wishlist/removeFromWishlist", async (productId) => {
  const response = await axios.post("http://localhost:5000/api/wishlist/remove", { productId });
  return response.data;
});

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.items = action.payload.items;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.items = action.payload.items;
      })
      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.items = action.payload.items;
      });
  },
});

export default wishlistSlice.reducer;
