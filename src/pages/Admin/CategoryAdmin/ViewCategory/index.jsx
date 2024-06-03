import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import CustomInput from '../../../Auth/CustomInput';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createCategory } from "../../../../redux/apis/category-api";
import './style.scss';

const ViewCategory = () => {
    const { categoryId } = useParams();
    const dispatch = useDispatch();
    
    const isFetched = useFetchData(() => [dispatch(getCategoryById(categoryId))]);

    const category = useSelector((state) => state.categories.category);

    return (
        <div className="create-category-page">
            <div className="header">
                <h2>
                    <Link to='/admin/category'>Category</Link> &gt; ${categoryId}
                </h2>
                <button className="add-btn">Edit</button>
            </div>
            <div className="content">
                <form id="category-form" onSubmit={formik.handleSubmit} className="category-form">
                    <div className="row">
                        <div className="col-6">
                            <div className="images-section">
                                <h3>Images</h3>
                                <div className="image-upload-box">
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="general-info-section">
                                <h3>General information</h3>
                                <label htmlFor="name">Category Name</label>
                                
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ViewCategory;
