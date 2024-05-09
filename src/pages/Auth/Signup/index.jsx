import React from 'react';
import BreadCrumb from "../../../components/common/BreadCrumb";
import Meta from "../../../components/common/Meta";
import { Link } from 'react-router-dom';
import CustomInput from "../CustomInput";
import "./styles.css";
import * as yup from "yup";
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

const signUpSchema = yup.object({
    username: yup.string().required("Username is require"),
    email: yup.string().email("Email should be valid"),
    phonenumber: yup.string().required("Phonenumber is require"),
    password: yup.string().required("Password is required")
});


const SignUp = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            phonenumber: "",
            password: ""
        },
        validationSchema: signUpSchema,
        onSubmit: (values) => {
           dispatch(registerUser(values)); 
        }
    });

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
                                <form 
                                    action="" 
                                    onSubmit={formik.handleSubmit}
                                    className='d-flex flex-column gap-30'>

                                    <CustomInput 
                                        type="text"
                                        name="username"
                                        placeholder="username"
                                        value={formik.values.username}
                                        onChange={formik.handleChange("username")}
                                        onBlur={formik.handleBlur("username")}
                                    />
                                    <div className='error'>
                                        {formik.touched.username && formik.errors.username}
                                    </div>
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
                                    <CustomInput 
                                        type="text"
                                        name="phonenumber"
                                        placeholder="phonenumber"
                                        value={formik.values.phonenumber}
                                        onChange={formik.handleChange("phonenumber")}
                                        onBlur={formik.handleBlur("phonenumber")}
                                    />
                                    <div className='error'>
                                        {formik.touched.phonenumber && formik.errors.phonenumber}
                                    </div>
                                    <CustomInput 
                                        type="text"
                                        name="password"
                                        placeholder="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange("password")}
                                        onBlur={formik.handleBlur("password")}
                                    />
                                    <div className='error'>
                                        {formik.touched.password && formik.errors.password}
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

export default SignUp;