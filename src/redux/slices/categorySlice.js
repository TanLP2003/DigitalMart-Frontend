import { createSlice } from "@reduxjs/toolkit";
import { getAllCategory, createCategory } from "../apis/category-api";
import { toast } from "react-toastify";


const categorySlice = createSlice({
    name: "categories",
    initialState: {
        categories: [],
        isError: false,
        isSuccess: false,
        isLoading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getAllCategory.pending, (state) => {
            state.isLoading=true;
        })
        .addCase(getAllCategory.fulfilled, (state, action) => {
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.categories = action.payload
        })
        .addCase(getAllCategory.rejected, (state, action) => {
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.categories = action.payload;

            if(state.isError == true) {
                toast.info(action.error);
            }
        })
        .addCase(createCategory.pending, (state) => {
            state.isLoading=true;
        })
        .addCase(createCategory.fulfilled, (state, action) => {
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.categories = action.payload

            if(state.isSuccess == true) {
                toast.info("You create a category successfully!");
                window.location.href = '/admin/category';
            }
        })
        .addCase(createCategory.rejected, (state, action) => {
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.categories = action.payload;

            if(state.isError == true) {
                toast.info(action.error);
            }
        })
    }
})

export const { } = categorySlice.actions;
export const categoryReducers = categorySlice.reducer;