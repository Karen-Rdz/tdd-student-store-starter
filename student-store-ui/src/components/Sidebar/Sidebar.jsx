import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function Sidebar({
  isOpen,
  widthSideBar,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle,
}) {
  return (
    <div className="sidebar" style={{ width: widthSideBar }}>
      <button className="toggle-button" onClick={handleOnToggle}>
        {" "}
        Open{" "}
      </button>
      <ShoppingCart
        products={products}
        isOpen={isOpen}
        shoppingCart={shoppingCart}
      />
    </div>
  );
}
