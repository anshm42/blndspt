import Header from "./NavbarShop";
import item1 from "./assets/demo.png";
import item2 from "./assets/ig.png";
import Footer from "./Footer";
import "./Shop.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "./ShoppingCartContext";

export default function Shop() {
  const [hover1, setHover1] = useState(true);
  // const [hover2, setHover2] = useState(true);
  // const [hover3, setHover3] = useState(true);
  // const [hover4, setHover4] = useState(true);

  const navigate = useNavigate();

  const { increaseCartQuantity, openCart } = useShoppingCart();

  return (
    <>
      <Header />
      <div className="shop-con">
        <div className="items-con">
          <div className="item-con-1">
            <img
              className="item-png"
              src={hover1 ? item1 : item2}
              onMouseEnter={() => setHover1(false)}
              onMouseLeave={() => setHover1(true)}
              onClick={() => {
                navigate("/item-page");
              }}
            ></img>
            <div
              className="item-desc"
              onClick={() => {
                navigate("/item-page");
              }}
            >
              <div className="itemtitle">GORDONS HOODIE</div>
              <div className="item-price">$130</div>
            </div>
            <div
              className="cartshop"
              onClick={() => {
                increaseCartQuantity(2);
                openCart();
              }}
            >
              Add to Cart
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
