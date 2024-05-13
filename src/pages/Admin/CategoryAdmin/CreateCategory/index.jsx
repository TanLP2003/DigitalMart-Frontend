import { useFormik } from 'formik';
import * as Yup from "yup";
import { toast } from 'react-toastify'
import './style.scss';

const CreateCategory = () => {
    const formik = useFormik({
        initialValues: {
            name: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required")
        }),
        onSubmit: (values, { setSubmitting }) => {
            console.log(values);
            toast.success("Send req successfully");
        },
        validateOnChange: false,
        validateOnBlur: false
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit} className=''>
                <input type="text"
                    id='name'
                    name='name'
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CreateCategory;