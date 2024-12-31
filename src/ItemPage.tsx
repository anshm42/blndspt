import React, { useState, useEffect } from "react";
import "./ItemPage.css";
import demo from "./assets/demo.png";
import Footer from "./Footer";
import NavbarShop from "./NavbarShop";
import { useShoppingCart } from "./ShoppingCartContext";
import { ShoppingCart } from "./ShoppingCart";
import { Button } from "react-bootstrap";
export default function ItemPage() {
  const [selectedSize, setSelectedSize] = useState(null); // Tracks the selected button
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  const [imageSrc, setimageSrc] = useState(demo);
  const [hoveredIndex, setHoveredIndex] = useState(1);

  const id = 1;

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  // const quantity = getItemQuantity(id);

  function handleSizeButton(size) {
    setSelectedSize(size);
  }
  const [quantity1, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity1 > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  function handleDropdown() {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  }
  function handleDropdown1() {
    setShowDropdown1((prevShowDropdown) => !prevShowDropdown);
  }

  const handleSwitch = (src) => {
    setimageSrc(src);
  };

  const images = [
    { id: 1, src: demo },
    { id: 2, src: "https://via.placeholder.com/150" },
    { id: 3, src: "https://via.placeholder.com/150" },
    { id: 4, src: "https://via.placeholder.com/150" },
    { id: 5, src: "https://via.placeholder.com/150" },
  ];

  return (
    <>
      <NavbarShop />
      <div className="item-page-container">
        <div className="container-itempage">
          <div className="item_and_desc">
            <div className="images">
              <img className="item-pic" src={imageSrc} />
            </div>
            <div className="pictures">
              {images.map((image, index) => (
                <img
                  key={image.id}
                  className="side-pic"
                  src={image.src}
                  style={{
                    boxShadow:
                      hoveredIndex === index
                        ? "0 4px 8px rgba(0, 0, 0, 0.5)"
                        : "none",
                  }}
                  onMouseEnter={() => {
                    handleSwitch(image.src);
                    setHoveredIndex(index);
                  }}
                />
              ))}
            </div>
            <div
              className="side-con"
              style={{ position: "sticky", top: "20px" }}
            >
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
                <div className="quantity-container">
                  <div className="quantity">Quantity</div>
                  <div className="quantity-button">
                    <button
                      onClick={decrement}
                      disabled={quantity1 <= 1}
                      className="quan-plus"
                    >
                      -
                    </button>
                    <span>{quantity1}</span>
                    <button onClick={increment} className="quan-min">
                      +
                    </button>
                  </div>
                </div>
                <Button
                  className="btn btn-dark"
                  onClick={() => increaseCartQuantity(id)}
                >
                  Add to Cart
                </Button>
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
              <div
                className="sizing-con"
                onClick={handleDropdown}
                style={{
                  cursor: "pointer",
                }}
              >
                <div className="sizing-arrow">
                  {" "}
                  <div
                    className="sizing"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    SIZING
                  </div>
                  {showDropdown ? <div>▲</div> : <div>▼</div>}
                </div>
                {showDropdown && (
                  <div
                    style={{
                      marginTop: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                      display: "inline-block",
                    }}
                  >
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Example"
                      style={{ width: "150px", height: "150px" }}
                    />
                  </div>
                )}
              </div>
              <div
                className="sizing-con"
                onClick={handleDropdown1}
                style={{
                  cursor: "pointer",
                }}
              >
                <div className="sizing-arrow">
                  {" "}
                  <div
                    className="sizing"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    MANUFACTURES INFORMATION
                  </div>
                  {showDropdown1 ? <div>▲</div> : <div>▼</div>}
                </div>
                {showDropdown1 && (
                  <div
                    style={{
                      marginTop: "10px",
                      padding: "10px",
                      borderRadius: "5px",
                      display: "block",
                      borderBottom: "none",
                    }}
                  >
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Example"
                      style={{ width: "150px", height: "150px" }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
