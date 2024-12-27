import React from "react";
import Email from "./Email";
import "./Footer.css";
import IG from "./assets/ig.png";

export default function Footer() {
  function handleIG() {
    window.location.href = "https://www.instagram.com/blndspt.lab/"; // External navigation
  }
  return (
    <>
      <div className="footer-container1">
        <div className="mail-footer">
          <div>JOIN FOR DROP UPDATES AND EXCLUSIVE DISCOUNTS</div>
          <div className="email-com">
            <Email />
          </div>
        </div>
        <div className="policies">
          <div className="poly1">
            <div>Refund policy</div>
            <div>Privacy policy</div>
            <div>Shipping policy </div>
          </div>
          <div className="poly1">
            <div>Terms of Service</div>
            <div>Order Support</div>
            <div>About</div>
          </div>
        </div>
        <div className="socials">
          <img
            className="ig-con"
            src={IG}
            onClick={handleIG}
            style={{
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </>
  );
}
