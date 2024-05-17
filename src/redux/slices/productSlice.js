import { createSlice } from "@reduxjs/toolkit"
import { getProductByCategory } from "../apis/product-api";

const initialValue = {
    products: []
}

export const productSlice = createSlice({
    name: "products",
    initialState: initialValue,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getProductByCategory.fulfilled, (state, action) => {
            state.products = action.payload
        })
    }
})

export const { } = productSlice.actions;
export const productReducers = productSlice.reducer;