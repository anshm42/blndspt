import { Offcanvas, OffcanvasTitle, Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "./ShoppingCartContext";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems, formatCurrency } = useShoppingCart();

  // Check if cart is empty
  const isCartEmpty = cartItems.length === 0;

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
          {!isCartEmpty && <Button className="btn btn-dark">Checkout</Button>}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
