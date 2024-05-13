import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createProduct = createAsyncThunk(
    'create-product',
    async (data, { rejectWithValue }) => {
        const response = await axios.post(`${SERVER}/product`, data);
        console.log(response.data);
        return response.data;
    }
)