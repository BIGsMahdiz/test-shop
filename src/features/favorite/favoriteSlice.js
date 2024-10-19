import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push(action.payload);
      }
      localStorage.setItem("favorite", JSON.stringify(state.selectedItems));
    },
    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedItems = newSelectedItems;
      localStorage.removeItem("favorite");
    },
  },
});

export const { addItem, removeItem } = favoriteSlice.actions;
export default favoriteSlice.reducer;
