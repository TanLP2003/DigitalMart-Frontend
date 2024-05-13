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

// get-all-category/fullfilled
// get-all-category/reject
// get-all-category/pending
// payload

dispatch()