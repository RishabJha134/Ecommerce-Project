import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAllProducts,
  fetchBrands,
  fetchCategories,
  fetchProductsByFilters,
} from "./ProductApi";

const initialState = {
  products: [],
  brands: [],
  categories: [],
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
  async ({ filter, sort }) => {
    console.log("hello world!");
    const response = await fetchProductsByFilters(filter, sort);
    // this data return in the action.payload of the extraReducers
    console.log(response);
    return response.data;
  }
);

export const fetchBrandsAsync = createAsyncThunk(
  "product/fetchBrands",
  async () => {
    const response = await fetchBrands();
    return response.data;
  }
);

export const fetchCategoriesAsync = createAsyncThunk(
  "product/fetchCategories",
  async () => {
    const response = await fetchCategories();
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


    builder.addCase(fetchBrandsAsync.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchBrandsAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      state.status = "succeeded";
      state.brands = action.payload;
    });


    builder.addCase(fetchCategoriesAsync.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      state.status = "succeeded";
      state.categories = action.payload;
    });
  },
});

// export const selectAllProducts = (state) => state.product.products;
export default productSlice.reducer;
