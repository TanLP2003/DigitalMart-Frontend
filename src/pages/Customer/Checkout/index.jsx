import React from "react";
import "./styles.css";
import CustomerForm from "./CustomerForm";
import PaymentItemList from "./PaymentItemList";
const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <CustomerForm />
            </div>
            <div className="col-5">
              <PaymentItemList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
