
import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import "./styles.css"
import { useAuth } from "./../../hooks/AuthContext";

export const Header = () => {

  const { isAuthenticated } = useAuth();

  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white">
                Hotline:{" "}
                <a className="text-white" href="tel:+91 213127316">
                  +91 213127316
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white" to={""}>
                  Developers.
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search product here..."
                  aria-label="Search product here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between"> 
                <div style={{marginLeft:'60%'}}>
                  <Link className="d-flex align-items-center gap-10 text-white" to={isAuthenticated ? '/profile' : '/login'}>
                    <img src="../images/user.svg" alt="user" />
                    <p className='mb-0'>
                      {isAuthenticated ? 'My Profile' : 'Login'} <br /> {isAuthenticated ? '' : 'My Account'}
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-white"
                    to={"/basket"}
                  >
                    <img
                      src="../images/cart.svg"
                      alt="basket"
                      className="bg-transparent"
                    />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">{0}</span>
                      <p className="mb-0">$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30 ">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary 
                                    dropdown-toggle 
                                    bg-transparent 
                                    border-0 
                                    gap-15 me-5 d-flex 
                                    align-items-center
                                    "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="images/menu.svg" alt="menu" />
                    <span className="me-5 d-inline-block">Shop Categories</span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="" />
                      Action
                    </li>
                    <li>
                      <Link className="dropdown-item" to="" />
                      Another action
                    </li>
                    <li>
                      <Link className="dropdown-item" to="" />
                      Something else here
                    </li>
                  </ul>
                </div>
                <div className="menu-links">
                  <div className="d-flex aligin-items-center gap-15">
                    <NavLink to={""}>Home</NavLink>
                    <NavLink to={"/products"}>Our Store</NavLink>
                    <NavLink to={"/blogs"}>Blogs</NavLink>
                    <NavLink to={"/contact"}>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
