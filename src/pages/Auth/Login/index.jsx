import React from 'react';
import BreadCrumb from "../../../components/common/BreadCrumb";
import Meta from "../../../components/common/Meta";
import { Link } from 'react-router-dom';
import "./styles.css";
const Login = () => {
    return (
        <>
            <Meta title={"Login"} />
            <BreadCrumb title="Login" />

            <div className="container-xxl">
            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Login</h3>
                            <form action="" className='d-flex flex-column gap-30'>
                                <div>
                                    <input type="text"
                                        name="username"
                                        placeholder='Username'
                                        className='form-control' />
                                </div>
                                <div className='mt-1'>
                                    <input type="password"
                                        name='password'
                                        placeholder='Password'
                                        className='form-control' />
                                </div>
                            </form>

                            <div>
                                <Link to='/forgot-password'>Forgot Password?</Link>

                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                    <button className='button border-0'>Login</button>
                                    <Link className='button signup' to='/sign-up'>SignUp</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        </>
    )
}

export default Login;