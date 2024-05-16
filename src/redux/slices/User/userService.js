import { RestoreTwoTone } from "@mui/icons-material";
import axios from "axios";

const register=async(userData)=>{
    const response = await axios.post("http://localhost:8000/api/user/signup", userData);
    if(response.data) {
        return response.data;
    }
}

const login=async(userData)=>{
    const response = await axios.post("http://localhost:8000/api/user/login", userData);
    if(response.data) {
        return response.data;
    }
}

const reset=async(userData)=>{
    const token = localStorage.getItem("token");
    const response = await axios.put("http://localhost:8000/api/user/changePassword/", userData, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    if(response.data) {
        return response.data;
    }
}
export const authService={
    register,
    login,
    reset
}