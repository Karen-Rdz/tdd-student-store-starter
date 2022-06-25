import * as React from "react";
import "./Sidebar.css";

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
    </div>
  );
}
