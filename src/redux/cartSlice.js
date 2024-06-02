import { createSlice, nanoid, current } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let data = {
        cart: action.payload,
      };
      state.cart.push(data);
      let cartData = JSON.stringify(current(state.cart));
      localStorage.setItem("cart", cartData);
    },
    removeCart: (state, action) => {
      const items = state.cart.filter(
        (cartItem) => cartItem.cart.id !== action.payload.id
      );
      state.cart = items;
      localStorage.setItem("cart", JSON.stringify(items));
    },
  },
});

export const { addToCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
