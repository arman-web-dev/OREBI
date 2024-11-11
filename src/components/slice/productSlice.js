import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { addToCart } = productSlice.actions;

export default productSlice.reducer;
