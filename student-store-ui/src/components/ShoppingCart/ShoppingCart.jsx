import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart({ products, isOpen, shoppingCart }) {
  return (
    <div className="shopping-cart">
      {shoppingCart.map((product) => (
        <h3 className="cart-product-name">Cart Product Name</h3>
      ))}
    </div>
  );
}
