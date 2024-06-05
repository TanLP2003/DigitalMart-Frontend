import { createSlice } from "@reduxjs/toolkit";
import {
  getAllOrder,
  getOrderById,
  getOrderOfUser,
  updateOrderOfUser,
} from "../apis/order-api";

const initialValue = {
  orders: {},
  allOrders: [],
  newOrder: {},
  orderDetail: null
};

export const orderSlice = createSlice({
  name: "orders",
  initialState: initialValue,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrderOfUser.fulfilled, (state, action) => {
      state.orders = action.payload;
    });
    builder.addCase(getAllOrder.fulfilled, (state, action) => {
      state.allOrders = action.payload;
    });
    builder.addCase(updateOrderOfUser.fulfilled, (state, action) => {
      state.orders = action.payload;
    });
    builder.addCase(getOrderById.fulfilled)
  },
});

export const {} = orderSlice.actions;
export const orderReducers = orderSlice.reducer;
