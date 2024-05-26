import React, { useEffect, useRef, useState } from "react";
import BreadCrumb from "../../../components/common/BreadCrumb";
import Meta from "../../../components/common/Meta";
import { Link } from "react-router-dom";
import "./styles.css";
import Item from "./Item";
import BasketHeader from "./BasketHeader";
import { useDispatch, useSelector } from "react-redux";
import { calculateSubtotal } from "../../../redux/slices/basketSlice";
import { memo } from "react";
import { getBasket, updateBasket } from "../../../redux/apis/basket-api";
import useFetchData from "../../../components/hooks/useFetchData";

const Basket = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.baskets);
  const handleCheckout = () => {
    localStorage.setItem("payment-list", JSON.stringify(items));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    // dispatch(updateBasket(items));
  };
  const isFetched = useFetchData(() => [dispatch(getBasket())]);
  const prevItems = useRef([]);
  useEffect(() => {
    if (JSON.stringify(items) !== JSON.stringify(prevItems.current)) {
      dispatch(updateBasket(items));
      prevItems.current = items;
    }
  }, [items]);
  console.log(items);
  return (
    <>
      <BreadCrumb title="Basket" />
      <Meta title="Basket | Th4nh's" />
      <div className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <BasketHeader />
              {isFetched &&
                items.map((item) => {
                  return <Item key={item.product.id} {...item} />;
                })}
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/product" className="button">
                  Continue to Shopping
                </Link>
                <div className="d-flex align-items-end flex-column">
                  <h4>Subtotal: ${totalPrice}</h4>
                  <p>Taxes and shipping calculated at checkout</p>

                  {totalPrice === 0 ? (
                    <Link to={"/checkout"} className="button disabled">
                      Check Out
                    </Link>
                  ) : (
                    <Link
                      to={"/checkout"}
                      className="button"
                      onClick={() => handleCheckout()}
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

export default Basket;
