import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:3000/";
const initialState = {
  cartItems: [1, 2, 3],
  amount: 0, // type
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, thunkAPI) => {
    try {
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong...");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      let itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity++;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity--;
    },
    calculateTotal: (state, action) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount++;
        total += item.quantity * item.price;
      });

      state.amount = amount;
      state.total = total;
      console.log(amount);
      console.log(total);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
        // state.cartItems.forEach((item) => {
        //   amount++;
        //   state.total += item.quantity * item.price;
        // });
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export const { calculateTotal, removeItem, increase, decrease } =
  cartSlice.actions;
export default cartSlice.reducer;
