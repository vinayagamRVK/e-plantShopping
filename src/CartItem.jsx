// CartItems.jsx
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItems = ({ onContinueShopping }) => {
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotalAmount = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>

      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <button onClick={onContinueShopping}>Continue Shopping</button>
    </div>
  );
};

export default CartItems;
