import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetProducts = createAsyncThunk(
  "Products",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get("/user/getproducts", data);
      return res.data;
    } catch (error) {
      // Properly return the rejected value
      return rejectWithValue(error.response?.data?.msg || "Something went wrong");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    error: null,  // Changed from false to null for better error handling
    products: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;  // Clear previous errors when new request starts
      })
      .addCase(GetProducts.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(GetProducts.rejected, (state, action) => {
        state.error = action.payload || "Failed to fetch products";
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;