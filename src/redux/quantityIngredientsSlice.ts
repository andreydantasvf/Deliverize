import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'quantityIngredients',
  initialState: {
    quantity: 0
  },
  reducers: {
    incrementQuantity(state) {
      state.quantity++;
    },
    decrementQuantity(state) {
      state.quantity--;
    }
  }
})

export const { incrementQuantity, decrementQuantity } = slice.actions;

export default slice.reducer;