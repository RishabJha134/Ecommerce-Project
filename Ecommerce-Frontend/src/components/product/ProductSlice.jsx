import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchProductsByFilters } from "./ProductApi";

const initialState = {
  products: [],
  status: "idle",
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    console.log("hello world!");
    const response = await fetchAllProducts();
    // this data return in the action.payload of the extraReducers
    return response.data;
  }
);

export const fetchProductsByFiltersAsync = createAsyncThunk(
  "product/fetchProductsByFilters",
  async (filter) => {
    console.log("hello world!");
    const response = await fetchProductsByFilters(filter);
    // this data return in the action.payload of the extraReducers
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProductsAsync.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      state.status = "succeeded";
      state.products = action.payload;
    });
    builder.addCase(fetchProductsByFiltersAsync.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      state.status = "succeeded";
      state.products = action.payload;
    });
  },
});

// export const selectAllProducts = (state) => state.product.products;
export default productSlice.reducer;
