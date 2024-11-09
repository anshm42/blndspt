import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="home">
        <Link to="/">Home</Link>
      </div>
      <div className="shop">
        <Link to="/shop">Shop</Link>
      </div>
      <div className="about-us">
        <Link to="/about-us">About Us</Link>
      </div>

      <div className="contact">
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
