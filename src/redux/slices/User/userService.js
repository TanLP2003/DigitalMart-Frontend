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
export const authService={
    register,
    login
}