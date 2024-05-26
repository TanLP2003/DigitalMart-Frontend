import { createAsyncThunk } from "@reduxjs/toolkit";
import authAxios from "../authAxios";
import { getOrder } from "../fake-apis/order-fake-api";
import { pause } from "../config";

export const getOrderOfUser = createAsyncThunk(
    'get-order-of-user',
    async (_, { rejectWithValue }) => {
        // const response = await authAxios.get('order');
        // if (response.status < 200 || response.status >= 300) {
        //     rejectWithValue(response);
        // }
        // return response.data;
        await pause(1000);
        return getOrder();
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