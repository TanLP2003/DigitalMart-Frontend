import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Updated import
import ProductRow from './ProductRow';
import { getAllProduct } from '../../../redux/apis/product-api';
import "./styles.scss";
const Inventory = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const navigate = useNavigate(); // Updated hook

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const handleNewProductClick = () => {
    navigate('/admin/create-product'); // Updated method
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Products</h2>
        <button className="button new-product-btn" onClick={handleNewProductClick}>New Product</button>
      </div>
      <div className="table-wrapper">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Threshold</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ProductRow key={index} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
