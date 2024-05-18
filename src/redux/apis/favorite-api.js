import { createAsyncThunk } from "@reduxjs/toolkit";
import authAxios from "../authAxios";

export const getFavorites = createAsyncThunk(
    'get-favories',
    async (_, { rejectWithValue }) => {
        const response = await authAxios.get('favorite');
        if (response.status < 200 || response.status >= 300) {
            rejectWithValue(response);
        }
        return response.data;
    }
)

export const likeProduct = createAsyncThunk(
    'like-product',
    async (data, { rejectWithValue }) => {
        const response = await authAxios.post('favorite', data);
        if (response.status < 200 || response.status >= 300) {
            rejectWithValue(response);
        }
        return response.data;
    }
)

export const unlikeProduct = createAsyncThunk(
    'unlike-product',
    async (productId, { rejectWithValue }) => {
        const response = await authAxios.delete(`favorite/${productId}`);
        if (response.status < 200 || response.status >= 300) {
            rejectWithValue(response);
        }
        return response.data;
    }
)