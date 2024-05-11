import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom'
const ProductCard = (props) => {
  const {grid}=props;
  let location=useLocation();
  
  return (
    <div className={`${location.pathname=="/products"? `gr-${grid}`:"col-3"}`}>
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link><img src="../images/wish.svg" alt="" /></Link>
        </div>
        <div className="product-image">
          <img src="../images/watch.jpg" alt="" className='img-fluid'/>
          <img src="../images/watch1.jpg" alt="" className='img-fluid'/>
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphone bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            value="1"
            size={24}
            edit={false}
            activeColor="#ffd700"
          />
          <p className={`description ${grid}=== 12?"d-block":"d-none"`}> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga </p>
          <p className="price">$100.00</p>
        </div>
        <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
                <Link>
                <img src="../images/prodcompare.svg" alt="" />
                </Link>
                <Link>
                <img src="../images/view.svg" alt="" />
                </Link>
                <Link>
                <img src="../images/add-cart.svg" alt="" />
                </Link>
            </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard