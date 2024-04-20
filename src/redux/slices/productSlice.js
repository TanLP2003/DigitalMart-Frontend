import { createSlice } from "@reduxjs/toolkit"

const initialValue = {
    products: []
}

export const productSlice = createSlice({
    name: "products",
    initialState: initialValue,
    reducers: {

    },
    extraReducers: (builder) => {

    }
})

export const {} = productSlice.actions;
export const productReducers = productSlice.reducer;