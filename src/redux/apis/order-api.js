import { createAsyncThunk } from "@reduxjs/toolkit";
import authAxios from "../authAxios";

export const getOrderOfUser = createAsyncThunk(
    'get-order-of-user',
    async (_, { rejectWithValue }) => {
        const response = await authAxios.get('order');
        if (response.status < 200 || response.status >= 300) {
            rejectWithValue(response);
        }
        return response.data;
    }
)

export const getAllOrder = createAsyncThunk(
    'get-all-order',
    async (_, { rejectWithValue }) => {
        const response = await authAxios.get('order/all');
        if (response.status < 200 || response.status >= 300) {
            rejectWithValue(response);
        }
        return response.data;
    }
)