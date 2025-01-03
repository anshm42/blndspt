import Email from "./Email";
import "./Footer.css";
import IG from "./assets/ig.png";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  function handleIG() {
    window.location.href = "https://www.instagram.com/blndspt.lab/"; // External navigation
  }
  const navigate = useNavigate();
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
            <div className="f1">Refund policy</div>
            <div className="f1">Shipping policy </div>
            <div
              className="f1"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact
            </div>
          </div>
          <div className="poly1">
            <div className="f1">Terms of Service</div>
            <div className="f1">Order Support</div>
            <div className="f1">About</div>
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
