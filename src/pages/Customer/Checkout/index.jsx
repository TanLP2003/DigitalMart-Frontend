import React from "react";
import "./styles.css";
import CustomerForm from "./CustomerForm";
import PaymentItemList from "./PaymentItemList";
import Modal from "../../../components/common/Modal";
import { useDispatch, useSelector } from "react-redux";
import useFetchData from "../../../components/hooks/useFetchData";
import { getOrderOfUser } from "../../../redux/apis/order-api";
const Checkout = () => {
  const dispatch = useDispatch();
  const isFetched = useFetchData(() => [dispatch(getOrderOfUser())]);
  const { orders } = useSelector((state) => state.orders);
  const { isOpen } = useSelector((state) => state.modal);
  return (
    <>
      <div className="checkout-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          {isOpen && <Modal />}
          {isFetched && (
            <div className="row">
              <div className="col-7">
                <CustomerForm
                  userName={orders.userName}
                  address={orders.address}
                  phoneNumber={orders.phoneNumber}
                  paymentMethod={orders.paymentMethod}
                  cardNumber={orders.cardNumber}
                />
              </div>
              <div className="col-5">
                {/* get item list from local storage from basket. */}
                <PaymentItemList />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Checkout;
