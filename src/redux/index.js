import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducers } from "./slices/userSlice";
import { productReducers } from "./slices/productSlice";
import { categoryReducers } from './slices/categorySlice';

const rootReducer = combineReducers({
    user: userReducers,
    products: productReducers,
    categories: categoryReducers
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        })
    }
})

export default store;