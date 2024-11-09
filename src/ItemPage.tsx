import React from "react";
import "./ItemPage.css";

export default function ItemPage() {
  return (
    <>
      <div className="container">
        <div className="content-container">
          <div className="topcontainer">
            <div className="logo">Logo</div>
            <div className="header-item">BLNDSPT</div>
            <button className="cart">Cart</button>
          </div>
          <div className="items">
            <div className="item-1">Item 1</div>
            <div className="item-2">Item 2</div>
            <div className="item-3">Item 3</div>
            <div className="item 4">Item 4</div>
          </div>
        </div>
      </div>
    </>
  );
}
