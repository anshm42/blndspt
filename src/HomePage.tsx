import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

export default function HomePage() {
  return (
    <>
      <div className="menu-container">
        <div className="logo">BLNDSPT+</div>
        <div className="shop-menu-container">
          <div className="shop-menu">
            <Link to="/shop" className="shop-link">
              SHOP
            </Link>
          </div>
          <div>
            <Link to="/shop" className="shop-link">
              ABOUT
            </Link>
          </div>
          <div>
            <Link to="/shop" className="shop-link">
              CONTACT
            </Link>
          </div>
          <div>
            <Link to="/shop" className="shop-link">
              MAILING LIST
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
