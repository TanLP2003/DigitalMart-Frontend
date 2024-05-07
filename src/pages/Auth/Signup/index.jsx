import React from 'react';
import BreadCrumb from "../../../components/common/BreadCrumb";
import Meta from "../../../components/common/Meta";
import { Link } from 'react-router-dom';
import "./styles.css";
const Login = () => {
    return (
        <>
            <Meta title={"Sign Up"} />
            <BreadCrumb title="Sign Up" />

            <div className="container-xxl">
            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Sign Up</h3>
                            <form action="" className='d-flex flex-column gap-30'>
                                <div>
                                    <input type="text"
                                        name="username"
                                        placeholder='Username'
                                        className='form-control' />
                                </div>
                                <div>
                                    <input type="email"
                                        name="email"
                                        placeholder='Email'
                                        className='form-control' />
                                </div>
                                <div>
                                    <input type="text"
                                        name="phonenumber"
                                        placeholder='Phonenumber'
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

                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                    <Link className='button signup' to='/sign-up'>Submit</Link>
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