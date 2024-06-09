import { useEffect, useState } from 'react';
import './ProductSearchPage.scss'
import { useDispatch, useSelector } from 'react-redux';
import useFetchData from '../../../components/hooks/useFetchData';
import { getAllProduct } from '../../../redux/apis/product-api';
import CardProduct from '../CardProduct';
import { useLocation } from 'react-router-dom';


const ProductSearchPage = () => {
    const [timeOrder, setTimeOrder] = useState(true);
    const [priceOrder, setPriceOrder] = useState(true);
    const dispatch = useDispatch();
    const isFetched = useFetchData(() => [dispatch(getAllProduct())]);
    const products = useSelector(state => state.products.products);
    const { totalPages, page, hasPrevPage, hasNextPage } = useSelector(state => state.paginates)
    // console.log(products);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categoryId = queryParams.get('category');
    const searchQuery = queryParams.get('query');
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        if (categoryId) {
            const categoryProducts = products.filter(product => product.category === categoryId);
            setFilteredProducts(categoryProducts);
        } else if (searchQuery) {
            const searchResults = products.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredProducts(searchResults);
        } else {
            setFilteredProducts(products);
        }
    }, [location.search])
    const renderResultList = () => {
        let sortedProduct = [...filteredProducts];
        sortedProduct.sort((a, b) => (!timeOrder ? -1 : 1) * (new Date(b.createdAt) - new Date(a.createdAt)));
        sortedProduct.sort((a, b) => (priceOrder ? -1 : 1) * (b.price - a.price))
        return sortedProduct.map((item, index) => (
            <CardProduct product={item} height={'400px'} width={'230px'} />
        ))
    }
    const handlePrev = () => {
        dispatch(getAllProduct(page - 1));
    }
    const handleNext = () => {
        dispatch(getAllProduct(page + 1));
    }
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-3">
                    <div className="bg-light filter" style={{ height: 'fit-content' }}>
                        <div className='filter-items'>
                            <p>Sắp xếp theo</p>
                            <div className='filter-items-item'>
                                <p className={'filter-items-item-text ' + (timeOrder ? 'filter-active' : '')} onClick={() => setTimeOrder(true)}>Mới nhất</p>
                                <p className={'filter-items-item-text ' + (!timeOrder ? 'filter-active' : '')} onClick={() => setTimeOrder(false)}>Cũ nhất</p>
                            </div>
                            <div className='filter-items-item'>
                                <p className={'filter-items-item-text ' + (priceOrder ? 'filter-active' : '')} onClick={() => setPriceOrder(true)}>Giá tăng dần</p>
                                <p className={'filter-items-item-text ' + (!priceOrder ? 'filter-active' : '')} onClick={() => setPriceOrder(false)}>Giá giảm dần</p>
                            </div>
                        </div>
                        <div className='filter-items'>
                            Khoảng giá
                        </div>
                    </div>
                </div>
                <div className="col-9 " style={{ minHeight: '900px' , overflowY: 'auto'}}>
                    <div className="bg-light p-2 d-flex flex-column justify-content-between h-100">
                        <div className='result-list'>
                            {isFetched && renderResultList()}
                            {/* {isFetched && renderResultList()}
                            {isFetched && renderResultList()}
                            {isFetched && renderResultList()}
                            {isFetched && renderResultList()} */}
                        </div>
                        {/* <div className='result-pagination'>
                            <p onClick={handlePrev} className={'paginate-btn ' + (!hasPrevPage ? 'text-secondary disabled' : 'text-info')}>{'< Prev'}</p>
                            <p>{page} / {totalPages}</p>
                            <p onClick={handleNext} className={'paginate-btn ' + (!hasNextPage ? 'text-secondary disabled' : 'text-info')}>{'Next >'}</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductSearchPage;