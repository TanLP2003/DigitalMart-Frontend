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
    newPassword: yup.string().required("Password is required"),
    retypedPassword: yup.string().required("Password is required"),
    secretCode: yup.string().required("Secret code is required")
});

const ForgotPassword = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            newPassword: "",
            retypedPassword: ""
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
                            <h3 className='text-center mb-3'>Reset Password</h3>
                            <form action="" className='d-flex flex-column gap-30'>
                                <CustomInput 
                                        type="text"
                                        name="newPassword"
                                        placeholder="newPassword"
                                        value={formik.values.newPassword}
                                        onChange={formik.handleChange("newPassword")}
                                        onBlur={formik.handleBlur("newPassword")}
                                />
                                <div className='error'>
                                    {formik.touched.newPassword && formik.errors.newPassword}
                                </div>
                                <CustomInput 
                                        type="text"
                                        name="retypedPassword"
                                        placeholder="retypedPassword"
                                        value={formik.values.retypedPassword}
                                        onChange={formik.handleChange("retypedPassword")}
                                        onBlur={formik.handleBlur("retypedPassword")}
                                />
                                <div className='error'>
                                    {formik.touched.retypedPassword && formik.errors.retypedPassword}
                                </div>
                                <CustomInput 
                                        type="text"
                                        name="secretCode"
                                        placeholder="secretCode"
                                        value={formik.values.secretCode}
                                        onChange={formik.handleChange("secretCode")}
                                        onBlur={formik.handleBlur("secretCode")}
                                />
                                <div className='error'>
                                    {formik.touched.secretCode && formik.errors.secretCode}
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