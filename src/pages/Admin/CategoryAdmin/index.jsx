import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../../redux/apis/category-api";
import { Link } from 'react-router-dom';
import './style.scss'
import useFetchData from "../../../components/hooks/useFetchData";
const CategoryAdmin = () => {
    const dispatch = useDispatch();
    const isFetched = useFetchData(() => [dispatch(getAllCategory())]);
    const categories = useSelector((state) => state.categories.categories);
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
            <div className="header">
                <h1>Category</h1>
                <Link to='/admin/category/create'>
                    <button className="new-category-btn">+ New Category</button>
                </Link>
                
            </div>
            <div className="item-list">
                {isFetched && renderCategoryList()}
            </div>
        </div>
    )
}


export default CategoryAdmin;