import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/User/userSlice";


const rootReducer = combineReducers({
    auth: authReducer
});

export const store = configureStore({
    reducer: rootReducer
})

export default store;