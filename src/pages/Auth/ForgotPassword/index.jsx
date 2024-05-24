import React from 'react';
import BreadCrumb from "../../../components/common/BreadCrumb";
import Meta from "../../../components/common/Meta";
import { Link } from 'react-router-dom';
import CustomInput from "../CustomInput";
import "./styles.css";
import * as yup from "yup";
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

const forgotPasswordSchema = yup.object({
    email: yup.string().email("Email should be valid")
});

const ForgotPassword = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: ""
        },
        validationSchema: forgotPasswordSchema,
        onSubmit: (values) => {
           dispatch(registerUser(values)); 
        }
    });
    return (
        <>
            <Meta title={"Forgot Password"} />
            <BreadCrumb title="Forgot Password" />

            <div className="container-xxl">
            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Enter your Email</h3>
                            <form action="" className='d-flex flex-column gap-30'>
                                <CustomInput 
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange("email")}
                                        onBlur={formik.handleBlur("email")}
                                />
                                <div className='error'>
                                    {formik.touched.email && formik.errors.email}
                                </div>
                            </form>

                            <div>
                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                    <Link className='button login' to='/login'>Back to Login Page</Link>
                                    <Link className='button login' to='/reset-password'>Submit</Link>
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

export default ForgotPassword;