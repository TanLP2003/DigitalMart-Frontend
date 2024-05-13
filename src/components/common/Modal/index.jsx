import React from "react";
import { closeModal } from "../../../redux/slices/modal/modalSlice";
import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";
import { postOrderForm } from "../../../redux/slices/orderSlice";
const Modal = () => {
  const dispatch = useDispatch();
  // console.log("modal");
  return (
    <aside className={styles.modal_container}>
      <div className={styles.modal}>
        <h4>Are you sure?</h4>
        <div className={styles.btn_container}>
          <button
            type="button"
            className="button confirm-btn"
            onClick={() => {
              //   dispatch(); --> order button
              dispatch(postOrderForm());
              // hiển thị thông báo mua hàng thành công nữa.
              dispatch(closeModal());
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
