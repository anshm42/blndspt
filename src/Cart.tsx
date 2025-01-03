import { useState } from "react";

export default function Cart() {
  const [quantity1, setQuantity1] = useState(1); // Default quantity for item 1
  const [quantity2, setQuantity2] = useState(1); // Default quantity for item 2
  const [quantity3, setQuantity3] = useState(1); // Default quantity for item 2

  const handleCheckout = () => {
    // Navigate to the checkout page
    const checkoutUrl = `http://localhost:3000/checkout?quantity1=${quantity1}&quantity2=${quantity2}&quantity3=${quantity3}`;
    window.location.href = checkoutUrl;
  };

  return (
    <>
      <div>Your Cart</div>
      <div>item 1</div>
      <input
        type="number"
        value={quantity1}
        onChange={(e) => setQuantity1(Number(e.target.value))}
      />
      <div>item 2</div>
      <input
        type="number"
        value={quantity2}
        onChange={(e) => setQuantity2(Number(e.target.value))}
      />
      <div>item 3</div>
      <input
        type="number"
        value={quantity3}
        onChange={(e) => setQuantity3(Number(e.target.value))}
      />
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </>
  );
}
