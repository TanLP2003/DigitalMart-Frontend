import React from "react";
import "./styles.css";
import CustomerForm from "./CustomerForm";
import PaymentItemList from "./PaymentItemList";
import { openModal } from "../../../redux/slices/modal/modalSlice";
import Modal from "../../../components/common/Modal";
import { useSelector } from "react-redux";
const Checkout = () => {
  const { isOpen } = useSelector((store) => store.modal);
  console.log(isOpen);
  return (
    <>
      <div className="checkout-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          {isOpen && <Modal />}
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
