import React, { useEffect } from 'react';
import BreadCrumb from "../../../components/common/BreadCrumb";
import Meta from "../../../components/common/Meta";
import "./styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { ProductCard } from './ProductCard';
import { getFavorites, unlikeProduct } from '../../../redux/apis/favorite-api';

export const WishList = () => {
    const dispatch = useDispatch();
    const { favorites, loading, error } = useSelector(state => state.favorites);

    useEffect(() => {
        dispatch(getFavorites());
    }, [dispatch]);

    const handleUnlike = (productId) => {
        console.log("Unliking product with ID:", productId); // Debugging log
        dispatch(unlikeProduct(productId)).then(() => {
            dispatch(getFavorites());
        });
    };

    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumb title="Wishlist" />

            <div className="container-xxl">
                <div className='py-5 home-wrapper-2'>
                    <div className="row">
                        {loading && <p>Loading...</p>}
                        {error && <p>Error: {error}</p>}
                        {favorites && favorites.length > 0 ? (
                            favorites.map(product => (
                                <div className="row" key={product._id}>
                                    <div className="col-10">
                                        <ProductCard
                                            id={product.id}
                                            name={product.name}
                                            description={product.description}
                                            price={product.price}
                                            images={product.images}
                                            brand={product.brand}
                                        />
                                    </div>
                                    <div className="col-2">
                                        <button onClick={() => handleUnlike(product._id)}>Unlike</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            !loading && <p>No products in your wishlist.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
