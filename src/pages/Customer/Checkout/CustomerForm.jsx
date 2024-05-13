import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { openModal } from "../../../redux/slices/modal/modalSlice";
import { storeFormData } from "../../../redux/slices/orderSlice";
const CustomerForm = () => {
  const dispatch = useDispatch();
  const { firstname, lastname, email, address, city, district, wards, phone } =
    useSelector((store) => store.order);
  const [info, setInfo] = useState({
    firstname: firstname,
    lastname: lastname,
    email: email,
    address: address,
    city: city,
    district: district,
    wards: wards,
    phone: phone,
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <div className="checkout-left-data">
      <h3 className="website-name">Th4nh's</h3>
      <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/cart" className="text-dark">
              Cart
            </Link>
          </li>
          &nbsp; /
          <li
            className="breadcrumb-item total-price active"
            aria-current="page"
          >
            Information
          </li>
          &nbsp; /
          <li
            className="breadcrumb-item total-price active"
            aria-current="page"
          >
            Shipping
          </li>
          &nbsp; /
          <li
            className="breadcrumb-item total-price active"
            aria-current="page"
          >
            Payment
          </li>
        </ol>
      </nav>
      <h4 className="title total">Contact Information</h4>
      <p className="user-details total">Cristiano Ronaldo (cr7@gmail.com)</p>
      <h4 className="mb-3">Shipping Address</h4>
      <form
        action=""
        className="d-flex flex-wrap justify-content-between gap-15"
      >
        <div className="flex-grow-1">
          <input
            type="text"
            placeholder="First name"
            className="form-control"
            name="firstname"
            value={info.firstname}
            onChange={handleChange}
          />
        </div>
        <div className="flex-grow-1">
          <input
            type="text"
            placeholder="Last name"
            className="form-control"
            name="lastname"
            value={info.lastname}
            onChange={handleChange}
          />
        </div>
        <div className="w-100">
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            name="email"
            value={info.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex-grow-1">
          <select
            // defaultValue={"default"}
            name="city"
            id="city"
            className="form-control form-select"
            value={info.city}
            onChange={handleChange}
          >
            <option value="city" disabled={true}>
              --Province/City
            </option>
          </select>
        </div>
        <div className="flex-grow-1">
          <select
            // defaultValue={"default"}
            name="state"
            id="state"
            className="form-control form-select"
            value={info.state}
            onChange={handleChange}
          >
            <option value="district" disabled={true}>
              --District
            </option>
          </select>
        </div>
        <div className="flex-grow-1">
          <select
            // defaultValue={"default"}
            name="wards"
            id="wards"
            className="form-control form-select"
            value={info.ward}
            onChange={handleChange}
          >
            <option value="wards" disabled={true}>
              --Wards
            </option>
          </select>
        </div>
        <div className="w-100">
          <input
            type="text"
            placeholder="Address"
            className="form-control"
            name="address"
            value={info.address}
            onChange={handleChange}
          />
        </div>
        <div className="w-100">
          <input
            type="tel"
            placeholder="Phone number"
            className="form-control"
            name="phone"
            value={info.phone}
            onChange={handleChange}
          />
        </div>
        <div className="w-100">
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/cart" className="text-dark mb-0">
              <IoMdArrowRoundBack className="me-2 fs-3" />
              Return to Cart
            </Link>
            <Link
              className="button"
              onClick={(e) => {
                e.preventDefault();
                dispatch(openModal());
                dispatch(storeFormData(info));
                console.log(info);
                
              }}
            >
              Continue to Shipping
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CustomerForm;
