import { Link } from "react-router-dom";
import "./Homepage.css";
import Video from "./assets/placeholder.mp4";

export default function HomePage() {
  return (
    <>
      <div className="video">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag
        </video>
        <div className="menu-container">
          <div className="logo">BLNDSPT+</div>
          <div className="shop-menu-container">
            <div className="shop-menu">
              <Link to="/shop" className="shop-link link">
                SHOP
              </Link>
            </div>
            <div>
              <Link to="/about-us" className="contact-link link">
                ABOUT
              </Link>
            </div>

            <div>
              <Link to="/contact" className="shop-link link">
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
