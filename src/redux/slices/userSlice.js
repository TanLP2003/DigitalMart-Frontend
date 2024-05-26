import { createSlice } from "@reduxjs/toolkit";
import { changeAvatar, login, updateUserInfo } from "../apis/user-api";

const currentUser = localStorage.getItem('user');

const initialValue = {
    user: currentUser ? JSON.parse(currentUser) : null
}

export const userSlice = createSlice({
    name: "user",
    initialState: initialValue,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload
        });
        builder.addCase(updateUserInfo.fulfilled, (state, action) => {
            state.user = action.payload
        });
        builder.addCase(changeAvatar.fulfilled, (state, action) => {
            state.user.avatar = action.payload.url
        })
    }
});
export const { } = userSlice.actions;
export const userReducers = userSlice.reducer;