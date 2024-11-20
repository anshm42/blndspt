import React, { useState } from "react";
import "./ItemPage.css";
import demo from "./assets/demo.png";

export default function ItemPage() {
  const [selectedSize, setSelectedSize] = useState(null); // Tracks the selected button
  function handleSizeButton(size) {
    setSelectedSize(size);
  }

  return (
    <>
      <div className="container-itempage">
        <div className="item_and_desc">
          <img className="item-pic" src={demo} />
          <div className="sidebar">
            <div className="item-name">GORDONS HOODIE</div>
            <div className="price">$300 CAD</div>
            <div className="size-container">
              <div className="size">Size</div>
              <div className="size-buttons">
                {["S", "M", "L"].map((size) => (
                  <button
                    key={size}
                    className={`item-button ${
                      selectedSize === size ? "pressed" : ""
                    }`}
                    onClick={() => handleSizeButton(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="quantity">Quantity</div>
            <div className="quantity-button">Quantity Button</div>
            <button className="addtocart">Add To Cart</button>
            <div className="item-description">
              <ul className="item-list">
                <li>Hoodie</li>
                <li>Content: 65% Cotton & 35% Polyester fleece r</li>
                <li>Relaxed fit</li>
                <li>Heavyweight brushed back fleece</li>
                <li>All sales final, no returns or exchanges</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
