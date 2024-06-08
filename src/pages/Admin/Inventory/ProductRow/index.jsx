import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom'; // Updated import

const ProductRow = ({ product }) => {
  const navigate = useNavigate();
  const handleViewProductClick = () => {
    navigate('/admin/view-product'); // Updated method
  };
  const handleEidtProductClick = () => {
    navigate('/admin/edit-product'); // Updated method
  };
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.price}</td>
      <td>{product.quantity}</td>
      <td>{product.threshold}</td>
      <td>
        <button className="btn btn-sm " onClick={handleEidtProductClick}><i className="fas fa-edit"></i></button>
        <button className="btn btn-sm " onClick={handleViewProductClick} ><i className="fas fa-eye"></i></button>
      </td>
    </tr>
  );
};

export default ProductRow;
