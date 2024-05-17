import { createSlice } from "@reduxjs/toolkit";
import { getBasket, updateBasket } from "../apis/basket-api";

const initialValue = {
    items: []
}

export const basketSlice = createSlice({
    name: 'baskets',
    initialState: initialValue,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getBasket.fulfilled, (state, action) => {
            state.items = action.payload.items
        });
        builder.addCase(updateBasket.fulfilled, (state, action) => {
            state.items = action.payload.items
        })
    }
})

export const { } = basketSlice.actions;
export const basketReducers = basketSlice.reducer;