import { createSlice } from "@reduxjs/toolkit";

import { sumQuantity, sumTotalPrice } from "@/utils/cart";

const initialState = {
  selectedItems: [],
  totalPrice: 0,
  itemsCounter: 0,
  checkout: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      state.itemsCounter = sumQuantity(state.selectedItems);
      state.totalPrice = sumTotalPrice(state.selectedItems);
      state.checkout = false;
    },
    increaseItem: (state, action) => {
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[increaseIndex].quantity++;
      state.itemsCounter = sumQuantity(state.selectedItems);
      state.totalPrice = sumTotalPrice(state.selectedItems);
    },
    decreaseItem: (state, action) => {
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[decreaseIndex].quantity--;
      state.itemsCounter = sumQuantity(state.selectedItems);
      state.totalPrice = sumTotalPrice(state.selectedItems);
    },
    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedItems = newSelectedItems;
      state.itemsCounter = sumQuantity(state.selectedItems);
      state.totalPrice = sumTotalPrice(state.selectedItems);
    },
    checkout: (state) => {
      state.selectedItems = [];
      state.totalPrice = 0;
      state.itemsCounter = 0;
      state.checkout = true;
    },
  },
});

export const { addItem, increaseItem, decreaseItem, removeItem, checkout } =
  cartSlice.actions;

export default cartSlice.reducer;
