import { createSlice } from "@reduxjs/toolkit";
import { getAllCategory } from "../apis/category-api";

const categorySlice = createSlice({
    name: "categories",
    initialState: {
        categories: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCategory.fulfilled, (state, action) => {
            state.categories = action.payload
        })
    }
})

export const { } = categorySlice.actions;
export const categoryReducers = categorySlice.reducer;