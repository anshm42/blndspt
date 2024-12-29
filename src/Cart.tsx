import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Cart() {
  const navigate = useNavigate();
  const handleCheckout = () => {
    // Navigate to the checkout page
    window.location.href = "http://localhost:3000/checkout";
  };

  return (
    <>
      <div>Your Cart</div>
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </>
  );
}
