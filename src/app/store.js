import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../redux/cartSlice";
import apiSlice from "../redux/apiSlice";
import { singleApiSlice } from "../redux/singleApiSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    api: apiSlice,
    single: singleApiSlice,
  },
});
