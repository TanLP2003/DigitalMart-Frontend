import React from "react";
import BreadCrumb from "../../../../components/common/BreadCrumb";
import Meta from "../../../../components/common/Meta";
import styles from "./orderStyles.module.css";
const OrderDetails = () => {
  const myOrder = JSON.parse(localStorage.getItem("myOrder"));
  let i = 0;
  console.log(myOrder);
  return (
    <>
      <BreadCrumb title="Order Details" />
      <Meta title="Order Management" />
      <div className="container-xxl my-5">
        <div className="row">
          <div className="col-12">
            <h3 className="px-2">Order Details</h3>
          </div>
        </div>
        <div className="row bg-white mx-3 rounded">
          <h5 className="pt-2">Invoice</h5>
          <div className="col-6 d-flex flex-column">
            <label className={`${styles.title}`}>OrderId</label>
            <input
              type="text"
              className={`${styles.info_box}`}
              value={myOrder.orderId}
              disabled
            />
          </div>
          <div className="col-6 d-flex flex-column">
            <label className={`${styles.title}`}>Create At</label>
            <input
              type="text"
              className={`${styles.info_box}`}
              value={myOrder.orderDetails.createdAt}
              disabled
            />
          </div>
          <div className="col-6 d-flex flex-column mt-2">
            <label className={`${styles.title}`}>Customer Name</label>
            <input
              type="text"
              className={`${styles.info_box} mb-4`}
              value={myOrder.orderDetails.userName}
              disabled
            />
          </div>
        </div>
        <div className="row bg-white mx-3 rounded mt-4">
          <h5 className="mt-2">Address</h5>
          <div className="col-12 d-flex flex-column">
            <label className={`${styles.title}`}>Customer Address</label>
            <input
              type="text"
              className={`${styles.info_box} mb-4`}
              value={myOrder.orderDetails.address}
              disabled
            />
          </div>
        </div>
        <div className="row bg-white mx-3 mt-4 rounded">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className={`${styles.col_1}`}>
                    #
                  </th>
                  <th scope="col" className={`${styles.col_2}`}>
                    Product
                  </th>
                  <th scope="col" className={`${styles.col_3}`}>
                    Name
                  </th>
                  <th scope="col" className={`${styles.col_4}`}>
                    Quantity
                  </th>
                  <th scope="col" className={`${styles.col_5}`}>
                    Unit Price
                  </th>
                  <th scope="col" className={`${styles.col_6}`}>
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {myOrder.orderDetails.items.map((item) => {
                  return (
                    <tr key={item.product.id}>
                      <th scope="row" className={`${styles.col_1}`}>
                        {++i}
                      </th>
                      <td className={`${styles.col_2}`}>
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="img-thumbnail rounded"
                        />
                      </td>
                      <td className={`${styles.col_3}`}>{item.product.name}</td>
                      <td className={`${styles.col_4}`}>{item.quantity}</td>
                      <td className={`${styles.col_5}`}>
                        {item.product.price}
                      </td>
                      <td className={`${styles.col_6}`}>
                        {item.product.price * item.quantity}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="col-12">
              <div
                className={`${styles.small_row} d-flex justify-content-end me-5`}
              >
                <p className="me-2">Shipping Fee: </p>
                <p>₫ 15000</p>
              </div>
              <div className="d-flex justify-content-end">
                <div className={`${styles.dash}`}></div>
              </div>

              <div
                className={`${styles.small_row} d-flex justify-content-end me-5 mt-3`}
              >
                <p className={`me-2 ${styles.bold}`}>Total: </p>
                <p className={`${styles.bold}`}>₫ {myOrder.orderDetails.totalPrice}</p>
                {/* chua tinh phi' ship. */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
