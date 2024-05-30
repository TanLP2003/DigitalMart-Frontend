import { useDispatch, useSelector } from "react-redux";
import useFetchData from "../../../components/hooks/useFetchData";
import { getAllOrder } from "../../../redux/apis/order-api";
import { BsEyeFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Meta from "../../../components/common/Meta";

const OrderAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { allOrders } = useSelector((state) => state.orders);
  const isFetched = useFetchData(() => [dispatch(getAllOrder())]);
  let i = 1;

  const handleClick = (orderId) => {
    const myOrder = allOrders.find((order) => order.orderId === orderId);
    localStorage.setItem("myOrder", JSON.stringify(myOrder));
    navigate("details");
  };
  return (
    <>
      <BreadCrumb title="Orders" />
      <Meta title="Orders Management" />
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="fs-3 text-center my-4">Order List</h3>
          </div>
          <div className="row">
            <div className="col-12 mx-4">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">OrderId</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Total Price</th>
                    <th scope="col">Create At</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {isFetched &&
                    allOrders.map((order) => {
                      return (
                        <tr key={order.orderId}>
                          <th scope="row">{i++}</th>
                          <td>{order.orderId}</td>
                          <td>{order.orderDetails.userName}</td>
                          <td>{order.orderDetails.totalPrice}</td>
                          <td>{order.orderDetails.createdAt}</td>
                          <td className="">
                            <button
                              className="border-0 bg-transparent"
                              onClick={() => handleClick(order.orderId)}
                            >
                              <BsEyeFill
                                className={`fs-5 text-dark ${styles.action}`}
                              />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderAdmin;
