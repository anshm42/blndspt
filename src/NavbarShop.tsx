import React from "react";
import "./NavbarShop.css";
import { Navigate, useNavigate } from "react-router-dom";
import Cart from "./assets/cart.png";
import { useShoppingCart } from "./ShoppingCartContext";

export default function NavbarShop() {
  const navigate = useNavigate();
  function handleBLND() {
    navigate("/");
  }
  const { openCart, cartQuantity } = useShoppingCart();

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
            onClick={openCart}
            style={{ cursor: "pointer" }}
          >
            <img className="cart-icon" src={Cart} />
            <div>{cartQuantity}</div>
          </div>
        </div>
      </div>
    </>
  );
}
