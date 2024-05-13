import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducers } from "./slices/userSlice";
import { productReducers } from "./slices/productSlice";
import cartReducer from "./slices/cartSlice/cartSlice";
import modalReducer from "./slices/modal/modalSlice";
import orderReducer from "./slices/orderSlice";
const rootReducer = combineReducers({
  user: userReducers,
  products: productReducers,
  cart: cartReducer,
  modal: modalReducer,
  order: orderReducer,

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
