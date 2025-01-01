import React from "react";
import { useShoppingCart } from "./ShoppingCartContext";
import storeItems from "../data/items.json";
import { Stack, Button } from "react-bootstrap";
import { useState } from "react";
import "./CartItem.css";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const [quantity1, setQuantity] = useState(quantity);

  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  function formatCurrency(amount: number): string {
    return `$${amount.toFixed(2)}`; // Format the number to two decimal places and prefix with $
  }
  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    increaseCartQuantity(item.id);
  };

  const decrement = () => {
    if (quantity1 > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      decreaseCartQuantity(item.id);
    }
  };

  return (
    <Stack direction="horizontal" gap={2} className="d-flex-align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "auto", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {/* {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )} */}
        </div>
        <div className="quantity-container2">
          <div className="quantity-button2">
            <div className="minus2 quan2" onClick={decrement}>
              -
            </div>
            <div className="quantity-number2 quan2">{quantity1}</div>
            <div className="plus2 quan2" onClick={increment}>
              +
            </div>
          </div>
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
