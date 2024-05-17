import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER } from "../config";

export const createProduct = createAsyncThunk(
    'create-product',
    async (data, { rejectWithValue }) => {
        const response = await axios.post(`${SERVER}/product`, data);
        console.log(response.data);
        return response.data;
    }
)

export const getProductByCategory = createAsyncThunk(
    'get-product-by-category',
    async (category, { rejectWithValue }) => {
        const response = await axios.get(`${SERVER}/product/category/${category}`);
        console.log(response.data);
        return response.data;
    }
)

export const getAllProduct = createAsyncThunk(
    'get-all-product',
    async () => {
        const response = await axios.get(`${SERVER}/product/all`);
        console.log(response.data);
        return response.data
    }
)