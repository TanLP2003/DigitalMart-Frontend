import React, { useEffect, useState } from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  decrease,
  removeItem,
  increase,
} from "../../../redux/slices/cartSlice/cartSlice";

import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";


const CartItem = ({ id, img, title, price, quantity, size, color }) => {
  const dispatch = useDispatch();
  // console.log(quantity);
  return (
    <div className="cart-data d-flex justify-content-between align-items-center mb-2">
      <div className="cart-col-1 d-flex align-items-center gap-15">
        <div className="w-25">
          <img src={img} className="img-fluid" alt={title} />
        </div>
        <div className="w-75">
          <h5 className="title mb-0">{title}</h5>
          <p className="size mb-0">{size}</p>
          <p className="color mb-0">{color}</p>
        </div>
      </div>
      <div className="cart-col-2">
        <h5 className="price">${price}</h5>
      </div>
      <div className="cart-col-3 d-flex align-items-center gap-15">
        <div className="d-flex align-items-center gap-10">
          <button
            onClick={() => {
              if (quantity === 1) {
                dispatch(removeItem(id));
                return;
              }
              dispatch(decrease(id));
            }}
          >
            <FaChevronCircleLeft style={{ fontSize: "1.4rem" }} />
          </button>
          <p className="mb-0 fs-5">{quantity}</p>
          <button
            onClick={() => {
              if (quantity < 10)
                dispatch(increase(id));
            }}
          >
            <FaChevronCircleRight style={{ fontSize: "1.4rem" }} />
          </button>
        </div>
        <div>
          <RiDeleteBinFill
            className="fs-3 text-danger"
            onClick={() => dispatch(removeItem(id))}
          />
        </div>
      </div>
      <div className="cart-col-4">
        <h5 className="price">${(price * quantity).toFixed(2)}</h5>
      </div>
    </div>
  );
};

export default CartItem;
