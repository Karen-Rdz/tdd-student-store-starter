import * as React from "react";
import "./Sidebar.css";

export default function Sidebar({
  isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle,
}) {
  return (
    <div className="sidebar">
      <button className="toggle-button" onClick={handleOnToggle}>
        {" "}
        Side Bar{" "}
      </button>
    </div>
  );
}
