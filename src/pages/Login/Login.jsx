import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { useDispatch } from 'react-redux'
import loginUser from "../../redux/slices/UserSlice"

const Login = () => {

    const [phonenumber, setPhonenumber] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispacth = useDispatch();

    const handleLoginEvent=(e)=> {
        e.preventDefault();
        let userCredentials={
            phonenumber, password
        }
        dispatchEvent(loginUser(userCredentials)).then((result)=>{
            if(result.payload) {
                setPhonenumber('');
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
                    <label htmlFor="phonenumber">phonenumber:</label>
                    <input type="phonenumber" id="phonenumber" name="phonenumber" 
                        value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)}
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