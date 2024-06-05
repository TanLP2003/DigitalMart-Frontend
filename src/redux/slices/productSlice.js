import { createSlice } from "@reduxjs/toolkit"
import { getAllProduct, getProductByCategory, getProductDetail, searchProduct } from "../apis/product-api";

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
        builder.addCase(searchProduct.fulfilled, (state, action) => {
            state.searchResult = action.payload
        })
        builder.addCase(getAllProduct.fulfilled, (state, action) => {
            state.products = action.payload.products;
        })
        builder.addCase(getProductDetail.fulfilled, (state, action) => {
            state.productDetail = action.payload;
        })
    }
})

export const { } = productSlice.actions;
export const productReducers = productSlice.reducer;