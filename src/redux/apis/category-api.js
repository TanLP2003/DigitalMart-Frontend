import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER } from "../config";

export const getAllCategory = createAsyncThunk(
    'get-all-category',
    async (_, { rejectWithValue }) => {
        const response = await axios.get(`${SERVER}/category/`);
        if (response.status < 200 || response.status >= 300) {
            rejectWithValue(response);
        }
        // console.log(response.data);
        return response.data
    }
)

export const createCategory = createAsyncThunk(
    'create-category',
    async (data, { rejectWithValue }) => {
        const formData = new FormData();
        formData.append('image', data.image);
        formData.append('name', data.name);
        const response = await axios.post(`${SERVER}/category/`,formData);
        if (response.status < 200 || response.status >= 300) {
            rejectWithValue(response);
        }
        // console.log(response.data);
        return response.data
    }
)
