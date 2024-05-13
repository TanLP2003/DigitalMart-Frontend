import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:3000/form", // fix later
});

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  address: "",
  city: "",
  district: "",
  wards: "",
  phone: "",
};

export const postOrderForm = createAsyncThunk(
  "order/postOrderForm",
  async (name, thunkAPI) => {
    try {
      console.log(thunkAPI.getState().order);
      await instance.post(`/`, thunkAPI.getState().order);
    } catch (error) {
      console.log("error");
      // return thunkAPI.rejectWithValue("something went wrong in order post...");
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    storeFormData: (state, action) => {
      return action.payload;
    },
    resetFormData: (state) => {
      return initialState;
    },
  },
  //   extraReducers: (builder) => {
  //     // builder.addCase();
  //   },
});

export const { storeFormData, resetFormData } = orderSlice.actions;

export default orderSlice.reducer;
