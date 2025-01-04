import { Offcanvas, OffcanvasTitle, Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "./ShoppingCartContext";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";
import { useEffect, useState } from "react";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems, formatCurrency, getItemQuantity } =
    useShoppingCart();
  // Check if cart is empty
  const isCartEmpty = cartItems.length === 0;
  const [checkoutTriggered, setCheckoutTriggered] = useState(false);
  const [quantity1, setQuantity1] = useState(0);
  const [quantity2, setQuantity2] = useState(0);
  const [quantity3, setQuantity3] = useState(0);

  function handleCheckout() {
    setQuantity1(getItemQuantity(1));
    setQuantity2(getItemQuantity(2));
    setQuantity3(getItemQuantity(3));

    setCheckoutTriggered(true);
  }

  useEffect(() => {
    if (checkoutTriggered) {
      const checkoutUrl = `http://blndspt.onrender.com/checkout?quantity1=${quantity1}&quantity2=${quantity2}&quantity3=${quantity3}`;
      window.location.href = checkoutUrl; // Redirect to checkout
    }
  }, [checkoutTriggered, quantity1, quantity2, quantity3]);

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <OffcanvasTitle>Cart</OffcanvasTitle>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {/* If the cart is empty, display a message */}
          {isCartEmpty ? (
            <div>Your cart is empty</div>
          ) : (
            cartItems.map((item) => <CartItem key={item.id} {...item} />)
          )}

          {/* Display total only if there are items */}
          {!isCartEmpty && (
            <div className="ms-auto fw-bold fs-5">
              Total
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
          )}
          {!isCartEmpty && (
            <Button className="btn btn-dark" onClick={handleCheckout}>
              Checkout
            </Button>
          )}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
