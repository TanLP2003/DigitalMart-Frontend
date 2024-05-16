import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";


export const registerUser = createAsyncThunk(
    "auth/register",
    async (userData, thunkAPI)=>{
    try{
        return await authService.register(userData)
    }catch(error) {
        return thunkAPI.rejectWithValue({
            message: error.response.data.message || error.message,
            status: error.response.status
        });
    }
})

export const loginUser = createAsyncThunk(
    "auth/login",
    async (userData, thunkAPI)=>{
    try{
        return await authService.login(userData)
    }catch(error) {
        return thunkAPI.rejectWithValue({
            message: error.response.data.message || error.message,
            status: error.response.status
        });
    }
})

export const resetPassword = createAsyncThunk(
    "auth/reset-password",
    async (userData, thunkAPI)=>{
    try{
        return await authService.reset(userData)
    }catch(error) {
        return thunkAPI.rejectWithValue({
            message: error.response.data.message || error.message,
            status: error.response.status
        });
    }
})

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(registerUser.pending, (state)=>{
            state.isLoading=true;
        })
        .addCase(registerUser.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.createdUser = action.payload;

            if(state.isSuccess == true) {
                toast.info("Please Verify Your Email To Complete Your Registration!");
            }
        })
        .addCase(registerUser.rejected, (state, action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;

            if(state.isError == true) {
                toast.info(action.error);
            }
        })
        .addCase(loginUser.pending, (state)=>{
            state.isLoading=true;
        })
        .addCase(loginUser.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.user = action.payload;
            if(state.isSuccess == true) {
                localStorage.setItem("token", action.payload.accessToken);
                toast.info("User Logged In Successfully!");
            }
        })
        .addCase(loginUser.rejected, (state, action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;

            if(state.isError == true) {
                toast.info("Email or Password is not corrrect!");
            }
        })
        .addCase(resetPassword.pending, (state)=>{
            state.isLoading=true;
        })
        .addCase(resetPassword.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.user = action.payload;

            if(state.isSuccess == true) {
                toast.info("Your Password Is Changed Successfully!");
            }
        })
        .addCase(resetPassword.rejected, (state, action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;

            if(state.isError == true) {
                toast.info(action.error);
            }
        })
    }
});


export default userSlice.reducer;