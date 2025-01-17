import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await axios.get("http://localhost:5000/api/products");
  return response.data.products;
});



const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    cart: { items: [], totalQuantity: 0, totalPrice: 0 },
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
   
  },
});

export default productSlice.reducer;
