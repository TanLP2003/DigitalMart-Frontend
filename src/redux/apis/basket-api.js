import { createAsyncThunk } from "@reduxjs/toolkit";
import authAxios from "../authAxios";
import { getBasketFake } from "../fake-apis/basket-fake-api";
import { pause } from "../config";

export const getBasket = createAsyncThunk(
    'get-basket',
    async (_, { rejectWithValue }) => {
        // const response = await authAxios.get('basket');
        // if (response.status < 200 || response.status >= 300) {
        //     rejectWithValue(response);
        // }
        // return response.data;
        await pause(1000);
        return getBasketFake();
    }
)

export const updateBasket = createAsyncThunk(
    'update-basket',
    async (data, { rejectWithValue }) => {
        const response = await authAxios.put('basket', data);
        if (response.status < 200 || response.status >= 300) {
            rejectWithValue(response);
        }
        return response.data;
    }
)
