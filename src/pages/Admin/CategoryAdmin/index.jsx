import { useEffect, useState } from "react";
import CreateCategory from "./CreateCategory";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../../redux/apis/category-api";
import './style.scss'
import useFetchData from "../../../components/hooks/useFetchData";
const CategoryAdmin = () => {
    // const [isFetched, setIsFetched] = useState(false);
    const dispatch = useDispatch();
    const isFetched = useFetchData(() => [dispatch(getAllCategory())]);
    const categories = useSelector((state) => state.categories.categories);
    // useEffect(() => {
    //     dispatch(getAllCategory())
    //         .then(() => setIsFetched(true))
    //         .catch(err => console.log(err));
    // }, []);
    const renderCategoryList = () => {
        return categories.map((item, index) => {
            return (
                <div className="category-item" key={index}>
                    <img src="https://loremflickr.com/320/240" alt="" />
                    <div>{item.name}</div>
                </div>
            )
        })
    }
    return (
        <div className="category">
            {isFetched && renderCategoryList()}
        </div>
    )
}


export default CategoryAdmin;