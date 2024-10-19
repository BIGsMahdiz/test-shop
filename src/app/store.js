import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "@/features/cart/cartSlice";
import favoriteReducer from "@/features/favorite/favoriteSlice";
import purchasedReducer from "@/features/purchased/purchasedSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer,
    purchased: purchasedReducer,
  },
});

export default store;
