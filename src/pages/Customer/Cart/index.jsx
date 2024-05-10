import React, { useEffect } from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Meta from "../../../components/common/Meta";
import { Link } from "react-router-dom";
import "./styles.css";
import CartItem from "./CartItem";
import CartHeader from "./CartHeader";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateTotal,
  getCartItems,
} from "../../../redux/slices/cartSlice/cartSlice";
import { memo } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, total, isLoading } = useSelector((store) => store.cart);

  const handleCheckout = () => {
    localStorage.setItem("payment-list", JSON.stringify(cartItems));
    localStorage.setItem("subtotal", JSON.stringify(total));
  };

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <>
      <BreadCrumb title="Cart" />
      <Meta title="Cart | Th4nh's" />
      <div className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <CartHeader />
              {cartItems?.map((item) => {
                return <CartItem key={item.id} {...item} />;
              })}
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/product" className="button">
                  Continue to Shopping
                </Link>
                <div className="d-flex align-items-end flex-column">
                  <h4>Subtotal: ${total.toFixed(2)}</h4>
                  <p>Taxes and shipping calculated at checkout</p>
                  {/* <Link to={"/checkout"} className="button">
                    Check Out
                  </Link> */}
                  {total === 0 ? (
                    <Link to={"/checkout"} className="button disabled">
                      Check Out
                    </Link>
                  ) : (
                    <Link
                      to={"/checkout"}
                      className="button"
                      onClick={handleCheckout}
                    >
                      Check Out
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Cart);
