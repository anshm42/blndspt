import React, { useState } from "react";
import "./ItemPage.css";
import demo from "./assets/demo.png";

export default function ItemPage() {
  const [selectedSize, setSelectedSize] = useState(null); // Tracks the selected button
  function handleSizeButton(size) {
    setSelectedSize(size);
  }
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

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
            <div className="quantity-button">
              <button
                onClick={decrement}
                disabled={quantity <= 1}
                className="quan plus"
              >
                -
              </button>
              <span>{quantity}</span>
              <button onClick={increment} className="quan min">
                +
              </button>
            </div>
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
