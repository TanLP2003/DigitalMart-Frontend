import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducers } from "./slices/userSlice";
import { productReducers } from "./slices/productSlice";
import cartReducer from "./slices/cartSlice/cartSlice";
const rootReducer = combineReducers({
  user: userReducers,
  products: productReducers,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export default store;
