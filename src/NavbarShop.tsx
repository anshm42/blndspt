import React from "react";
import "./NavbarShop.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function NavbarShop() {
  const navigate = useNavigate();
  function handleBLND() {
    navigate("/");
  }
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
        <div>Cart</div>
      </div>
    </>
  );
}
