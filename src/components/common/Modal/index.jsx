import React from "react";
import { closeModal } from "../../../redux/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { updateOrderOfUser } from "../../../redux/apis/order-api";
const Modal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const shippingFee = 15000;
  const handleConfirm = () => {
    const info = JSON.parse(localStorage.getItem("customer-info"));
    const paymentList = JSON.parse(localStorage.getItem("payment-list"));
    const subtotal = JSON.parse(localStorage.getItem("totalPrice"));
    const today = getFormattedDate();
    const newOrders = {
      ...info,
      items: [...paymentList],
      totalPrice: subtotal + shippingFee,
      createdAt: today,
    };
    dispatch(updateOrderOfUser(newOrders));
    navigate("customer-bill-info");
  };
  return (
    <aside className={styles.modal_container}>
      <div className={styles.modal}>
        <h4>Are you sure?</h4>
        <div className={styles.btn_container}>
          <button
            className="button confirm-btn"
            onClick={() => {
              dispatch(closeModal());
              handleConfirm();
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="button cancel-btn"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;

const getFormattedDate = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Tháng trong JavaScript bắt đầu từ 0
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
