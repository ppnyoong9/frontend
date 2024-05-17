import React from "react";
import logo from "../image/logo/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="header">
      <div id="headerNavigation">
        <ul>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/signup">SIGN UP</Link>
            <div className="speech-bubble">
              <h2>10% Coupon</h2>
            </div>
          </li>
        </ul>
        <br />
        <ul>
          <li>
            <Link to="/mypage">브런치얼스회원 님</Link>
          </li>
          <li>
            <Link to="/">LOGOUT</Link>
          </li>
          <li>
            <Link to="/mypage">MY PAGE</Link>
          </li>
          <li>
            <Link to="/">CART</Link>
          </li>
        </ul>
        <Link to={"/"}>
          <img src={logo} />
              </Link>
          <div className="container d-flex justify-content-end">
            <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
              <input
                type="search"
                className="form-control"
                placeholder=""
                aria-label="Search"
              />
            </form>
          </div>
      </div>
    </div>
  );
}

export default Header;
