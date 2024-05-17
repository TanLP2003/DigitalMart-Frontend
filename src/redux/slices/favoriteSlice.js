import { createSlice } from "@reduxjs/toolkit";
import { getFavorites, likeProduct, unlikeProduct } from "../apis/favorite-api";

const initialValue = {
    favorites: []
}

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: initialValue,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getFavorites.fulfilled, (state, action) => {
            state.favorites = action.payload.items
        })
        builder.addCase(likeProduct.fulfilled, (state, action) => {
            state.favorites = action.payload.items
        })
        builder.addCase(unlikeProduct.fulfilled, (state, action) => {
            state.favorites = action.payload.items
        })
    }
})

export const { } = favoriteSlice.actions;
export const favoriteReducers = favoriteSlice.reducer;