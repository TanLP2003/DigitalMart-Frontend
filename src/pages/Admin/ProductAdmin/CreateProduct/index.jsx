import { useFormik } from 'formik';
import './style.scss'
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../../../redux/apis/category-api';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

const CreateProduct = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategory())
    }, []);
    const [fileList, setFileList] = useState([]);
    const [previews, setPreviews] = useState([])
    const fileRef = useRef(null);

    useEffect(() => {
        if (fileList.length === 0) {
            setPreviews([])
            return;
        }
        const fileListUrl = fileList.map(item => URL.createObjectURL(item));
        setPreviews(_ => fileListUrl);
        console.log(fileListUrl);
        return () => fileListUrl.map(url => URL.revokeObjectURL(url));
    }, [fileList])
    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile([])
            return
        }
        const newFile = e.target.files && e.target.files[0];
        const type = newFile.type.split('/')[0];
        if (type !== "image") toast.error("Please upload Image type")
        setFileList([...fileList, newFile]);
    }
    const handleClickAddBtn = () => {
        fileRef.current?.click();
    }
    const categories = useSelector((state) => state.categories.categories);
    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            price: 0,
            brand: '',
            category: '',
            metadata: {},
            images: [],
            stock: 0,
            threshold: 0
        },
        validationSchema: Yup.object({
            name: Yup.string().required().max(100).min(10),
            description: Yup.string().required().max(300),
            price: Yup.number().min(0).required(),
            brand: Yup.string().required(),
            category: Yup.string().required(),
            metadata: Yup.object(),
            images: Yup.array().min(1).required(),
            stock: Yup.number().min(1),
            threshold: Yup.number().min(1),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
        validateOnChange: false,
        validateOnBlur: false
    });
    return (
        <div className='create-product'>
            <form onSubmit={formik.handleSubmit} className='product-form'>
                <div className='name product-form-item'>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id='name'
                        name='name'
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        placeholder='Product Name'
                    />
                    {formik.errors.name && formik.touched.name && (
                        <div className="error">{formik.errors.name}</div>
                    )}
                </div>
                <div className='description product-form-item'>
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        id="description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                        placeholder='Product Description'
                    />
                    {formik.errors.description && formik.touched.description && (
                        <div className="error">{formik.errors.description}</div>
                    )}
                </div>
                <div className='price product-form-item'>
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id='price'
                        name='price'
                        onChange={formik.handleChange}
                        value={formik.values.price}
                        placeholder='Product Price'
                    />
                    {formik.errors.price && formik.touched.price && (
                        <div className="error">{formik.errors.price}</div>
                    )}
                </div>
                <div className='product-form-item'>
                    <label htmlFor="brand">Brand</label>
                    <input
                        type="text"
                        id='brand'
                        name='brand'
                        onChange={formik.handleChange}
                        value={formik.values.brand}
                        placeholder='Product Brand'
                    />
                    {formik.errors.brand && formik.touched.brand && (
                        <div className="error">{formik.errors.brand}</div>
                    )}
                </div>
                <div className='product-form-item'>
                    <label htmlFor="category">Category</label>
                    <select
                        id='category'
                        name='category'
                        onChange={formik.handleChange}
                        value={formik.values.category}
                    >
                        <option value="">Select a category...</option>
                        {categories.map(category => (
                            <option key={category._id} value={category._id}>{category.name}</option>
                        ))}
                    </select>
                    {formik.errors.category && formik.touched.category && (
                        <div className="error">{formik.errors.category}</div>
                    )}
                </div>
                <div className='stock product-form-item'>
                    <label htmlFor="stock">Stock</label>
                    <input
                        type="number"
                        id='stock'
                        name='stock'
                        onChange={formik.handleChange}
                        value={formik.values.stock}
                        placeholder='Product Stock'
                    />
                    {formik.errors.stock && formik.touched.stock && (
                        <div className="error">{formik.errors.stock}</div>
                    )}
                </div>
                <div className='threshold product-form-item'>
                    <label htmlFor="threshold">Threshold</label>
                    <input
                        type="number"
                        id='threshold'
                        name='threshold'
                        onChange={formik.handleChange}
                        value={formik.values.threshold}
                        placeholder='Product Threshold'
                    />
                    {formik.errors.threshold && formik.touched.threshold && (
                        <div className="error">{formik.errors.threshold}</div>
                    )}
                </div>
                {/* Add other input fields for images, metadata etc. */}
                <div className='product-form-item'>
                    <label htmlFor="images">Images</label>
                    <input type="file" multiple hidden onChange={onSelectFile} ref={fileRef} />
                    <div className='images-holder'>
                        {previews.map((url, index) => {
                            return (
                                <div className='preview images-holder-item'>
                                    <img src={url} key={index} className='preview-image' />
                                    <div className='preview-cls'>Remove</div>
                                </div>
                            )
                        })}
                        <div className='images-holder-item add-btn' onClick={handleClickAddBtn}>+</div>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateProduct;