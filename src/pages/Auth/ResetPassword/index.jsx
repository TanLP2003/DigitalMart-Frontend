import React from 'react';
import BreadCrumb from "../../../components/common/BreadCrumb";
import Meta from "../../../components/common/Meta";
import CustomInput from "../CustomInput";
import "./styles.css";
import * as yup from "yup";
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { resetPassword } from './../../../redux/slices/User/userSlice';

const resetPasswordSchema = yup.object({
    oldPassword: yup.string().required("Old Password is required"),
    newPassword: yup.string().required("New Password is required"),
});

const ResetPassword = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            oldPassword: "",
            newPassword: ""
        },
        validationSchema: resetPasswordSchema,
        onSubmit: (values) => {
           dispatch(resetPassword(values)); 
        }
    });
    return (
        <>
            <Meta title={"Reset Password"} />
            <BreadCrumb title="Reset Password" />

            <div className="container-xxl">
            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Reset Password</h3>
                            <form action=""  onSubmit={formik.handleSubmit} className='d-flex flex-column gap-30'>
                                <CustomInput 
                                    type="password"
                                    name="oldPassword"
                                    placeholder="oldPassword"
                                    value={formik.values.oldPassword}
                                    onChange={formik.handleChange("oldPassword")}
                                    onBlur={formik.handleBlur("oldPassword")}
                                />
                                <div className='error'>
                                    {formik.touched.oldPassword && formik.errors.oldPassword}
                                </div>
                                <CustomInput 
                                    type="password"
                                    name="newPassword"
                                    placeholder="newPassword"
                                    value={formik.values.newPassword}
                                    onChange={formik.handleChange("newPassword")}
                                    onBlur={formik.handleBlur("newPassword")}
                                />
                                <div className='error'>
                                    {formik.touched.newPassword && formik.errors.newPassword}
                                </div>

                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                    <button className='button border-0' type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        </>
    )
}

export default ResetPassword;