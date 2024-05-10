import React from "react";

const PaymentItem = ({id, tittle, img, price, quantity}) => {
  return (
    <div className="d-flex align-items-center gap-10 mb-2">
      <div className="w-75 d-flex gap-10">
        <div className="w-25 position-relative">
          <span
            style={{ top: "-10px", right: "2px" }}
            className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
          >
            {quantity}
          </span>
          <img className="img-fluid" src={img} alt="watch" />
        </div>
        <div>
          <h5 className="total-price">{tittle}</h5>
        </div>
      </div>
      <div className="flex-grow-1">
        <h5 className="total">$ {(quantity * price).toFixed(2)}</h5>
      </div>
    </div>
  );
};

export default PaymentItem;
