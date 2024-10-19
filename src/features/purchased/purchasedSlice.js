import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: [],
};

const purchasedSlice = createSlice({
  name: "purchased",
  initialState,
  reducers: {
    purchasedItems: (state, action) => {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push(action.payload);
      }
      localStorage.setItem("purchased", JSON.stringify(state.selectedItems));
    },
  },
});

export const { purchasedItems } = purchasedSlice.actions;

export default purchasedSlice.reducer;
