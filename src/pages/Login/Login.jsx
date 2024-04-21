import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { useDispatch } from 'react-redux'
import loginUser from "../../redux/slices/UserSlice"

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispacth = useDispatch();

    const handleLoginEvent=(e)=> {
        e.preventDefault();
        let userCredentials={
            email, password
        }
        dispatchEvent(loginUser(userCredentials)).then((result)=>{
            if(result.payload) {
                setEmail('');
                setPassword('')
                navigate('/')
            }
        })
    }
  return (
    <>
        <div className="login-container" onSubmit={handleLoginEvent}>
            <h2>Login</h2>
            <form id="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" 
                        value={email} onChange={(e)=>setEmail(e.target.value)}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" 
                        value={password} onChange={(e)=>setPassword(e.target.value)}
                        required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    </>
    
  )
}

export default Login