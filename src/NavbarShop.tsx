import React from "react";
import "./NavbarShop.css";
import { Navigate, useNavigate } from "react-router-dom";
import Cart from "./assets/cart.png";

export default function NavbarShop() {
  const navigate = useNavigate();
  function handleBLND() {
    navigate("/");
  }
  function handleCartToggle() {}
  return (
    <>
      <div className="navbar-container">
        <div>Shop</div>
        <h1
          onClick={handleBLND}
          style={{
            cursor: "pointer",
          }}
        >
          [BLND]SPT+
        </h1>
        <div>
          <div
            className="cart-count"
            onClick={handleCartToggle}
            style={{ cursor: "pointer" }}
          >
            <img className="cart-icon" src={Cart} />
            <div>5</div>
          </div>
        </div>
      </div>
    </>
  );
}
