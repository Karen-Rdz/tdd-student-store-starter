import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar({
  isOpen,
  widthSideBar,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle,
  purchase,
}) {
  return (
    <div className="sidebar" style={{ width: widthSideBar }}>
      <button className="toggle-button" onClick={handleOnToggle}>
        {" "}
        Open{" "}
      </button>
      {!isOpen ? (
        <>
          <ShoppingCart
            products={products}
            isOpen={isOpen}
            shoppingCart={shoppingCart}
            purchase={purchase}
          />
          <CheckoutForm
            isOpen={isOpen}
            shoppingCart={shoppingCart}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
          />
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
}
