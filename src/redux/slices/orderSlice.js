import { createSlice } from "@reduxjs/toolkit";
import { getAllOrder, getOrderOfUser } from "../apis/order-api";

const initialValue = {
    orders: [],
    allOrders: []
}

export const orderSlice = createSlice({
    name: 'orders',
    initialState: initialValue,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getOrderOfUser.fulfilled, (state, action) => {
            state.orders = action.payload
        })
        builder.addCase(getAllOrder.fulfilled, (state, action) => {
            state.allOrders = action.payload    
        })
    }
})

export const { } = orderSlice.actions;
export const orderReducers = orderSlice.reducer;
