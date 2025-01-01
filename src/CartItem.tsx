import React from "react";
import { useShoppingCart } from "./ShoppingCartContext";
import storeItems from "../data/items.json";
import { Stack, Button } from "react-bootstrap";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  function formatCurrency(amount: number): string {
    return `$${amount.toFixed(2)}`; // Format the number to two decimal places and prefix with $
  }

  return (
    <Stack direction="horizontal" gap={2} className="d-flex-align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "auto", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
