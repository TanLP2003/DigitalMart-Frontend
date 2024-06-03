import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

export const ProductCard = (props) => {
    const { name, description, price, images, brand } = props;
    return (
        <div>
            <Link to={`/products/${props.id}`}>
                <div className="product-card position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <div className="product-image">
                                    <img src={images} className="image-default" alt="product" />
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="product-details">
                                    <h6 className="brand">{brand}</h6>
                                    <h5 className="product-title">
                                        {name}
                                    </h5>

                                    <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />

                                    <p className="description d-block">
                                        {description}
                                    </p>

                                    <p className='price'>{price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
