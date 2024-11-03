import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../components/product/ProductSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
