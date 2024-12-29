import Header from "./NavbarShop";
import item1 from "./assets/demo.png";
import item2 from "./assets/ig.png";
import Footer from "./Footer";
import "./Shop.css";
import { useState } from "react";

export default function Shop() {
  const [hover1, setHover1] = useState(true);
  const [hover2, setHover2] = useState(true);
  const [hover3, setHover3] = useState(true);
  const [hover4, setHover4] = useState(true);

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
            ></img>
            <div className="item-desc">
              <div className="itemtitle">GORDONS HOODIE</div>
              <div className="item-price">$130</div>
            </div>
          </div>
          <div className="item-con-1">
            <img
              className="item-png"
              src={hover2 ? item1 : item2}
              onMouseEnter={() => setHover2(false)}
              onMouseLeave={() => setHover2(true)}
            ></img>{" "}
            <div className="item-desc">
              <div className="itemtitle">GORDONS HOODIE</div>
              <div className="item-price">$130</div>
            </div>
          </div>
          <div className="item-con-1">
            <img
              className="item-png"
              src={hover3 ? item1 : item2}
              onMouseEnter={() => setHover3(false)}
              onMouseLeave={() => setHover3(true)}
            ></img>{" "}
            <div className="item-desc">
              <div className="itemtitle">GORDONS HOODIE</div>
              <div className="item-price">$130</div>
            </div>
          </div>
          <div className="item-con-1">
            <img
              className="item-png"
              src={hover4 ? item1 : item2}
              onMouseEnter={() => setHover4(false)}
              onMouseLeave={() => setHover4(true)}
            ></img>{" "}
            <div className="item-desc">
              <div className="itemtitle">GORDONS HOODIE</div>
              <div className="item-price">$130</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
