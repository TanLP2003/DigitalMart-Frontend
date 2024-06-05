import React from "react";
import BreadCrumb from "../../../../components/common/BreadCrumb";
import Meta from "../../../../components/common/Meta";
import styles from "./styles.module.css";
import useFetchData from "../../../../components/hooks/useFetchData";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../../redux/apis/order-api";
import { useParams } from "react-router-dom";
const OrderDetails = () => {
  let i = 0;
  const {id} = useParams();
  const dispatch = useDispatch();
  const isFetched = useFetchData(() => [dispatch(getOrderById(id))])
  const {order} = useSelector(state => state.orders.order);
  return (
    <>
      <BreadCrumb title="Order Details" />
      <Meta title="Order Details" />
      <div className="cart-wrapper home-wrapper-2 py-5">
        {isFetched && (<div className="container-xxl">
        <div className="row bg-white mx-2 rounded py-4">
            <h4 className="fs-4">Invoice</h4>
            <div className="col-12 d-flex">
              <div className={`${styles.field}`}>
                <p className={`${styles.label}`}>Order Id</p>
                <input
                  type="text"
                  value={`000`}
                  disabled
                  className={`${styles.info_box}`}
                />
              </div>
              <div className={`${styles.field}`}>
                <p className={`${styles.label}`}>Create At</p>
                <input
                  type="text"
                  value={`01-01-2024`}
                  disabled
                  className={`${styles.info_box}`}
                />
              </div>
            </div>
            <div className="col-12 d-flex mt-3">
              <div className={`${styles.field}`}>
                <p className={`${styles.label}`}>Customer Name</p>
                <input
                  type="text"
                  value={`John Smith`}
                  disabled
                  className={`${styles.info_box}`}
                />
              </div>
            </div>
          </div>

          <div className="row bg-white mx-2 rounded mt-5 py-4">
            <h4 className="fs-4">Address</h4>
            <div className="col-12 d-flex">
              <div className={`${styles.field2}`}>
                <p className={`${styles.label}`}>Customer Address</p>
                <input
                  type="text"
                  value={`000`}
                  disabled
                  className={`${styles.info_box}`}
                />
              </div>
            </div>
          </div>

          <div className="row bg-white rounded mx-2 mt-5 py-4">
            <div className="">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product</th>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key="">
                    <th scope="row">{++i}</th>
                    <td>
                      <img src="" alt="" />
                    </td>
                    <td>item_name</td>
                    <td>0</td>
                    <td>₫ 0</td>
                    <td>₫ 0</td>
                  </tr>
                  <tr key="">
                    <th scope="row">{++i}</th>
                    <td>
                      <img src="" alt="" />
                    </td>
                    <td>item_name</td>
                    <td>0</td>
                    <td>₫ 0</td>
                    <td>₫ 0</td>
                  </tr>
                  <tr key="">
                    <th scope="row">{++i}</th>
                    <td>
                      <img src="" alt="" />
                    </td>
                    <td>item_name</td>
                    <td>0</td>
                    <td>₫ 0</td>
                    <td>₫ 0</td>
                  </tr>
                  <tr key="">
                    <th scope="row">{++i}</th>
                    <td>
                      <img src="" alt="" />
                    </td>
                    <td>item_name</td>
                    <td>0</td>
                    <td>₫ 0</td>
                    <td>₫ 0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="">
              <div className="small-row d-flex justify-content-end me-5">
                <p className="me-2">Total: </p>
                <p>₫ -</p>
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </>
  );
};

export default OrderDetails;
