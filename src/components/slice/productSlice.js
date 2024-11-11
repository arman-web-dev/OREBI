import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    minusToCart: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.id);
          //jodi proyojon hoi
        }
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    }
    
  },
});

export const { addToCart, minusToCart, removeFromCart } = productSlice.actions;
export default productSlice.reducer;
