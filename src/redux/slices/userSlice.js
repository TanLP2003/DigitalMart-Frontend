import { createSlice } from "@reduxjs/toolkit";

const currentUser = localStorage.getItem('user');

const initialValue = currentUser ?? {

};

export const userSlice = createSlice({
    name: "user",
    initialState: initialValue,
    reducers: {

    },
    extraReducers: (builder) => {

    }
});
export const {} = userSlice.actions;
export const userReducers = userSlice.reducer;