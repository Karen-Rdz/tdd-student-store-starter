import * as React from "react";
import "./CheckoutForm.css";

export default function CheckoutForm({
  isOpen,
  shoppingCart,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  purchase,
  products,
}) {
  return (
    <div className="checkout-form">
      <input
        className="checkout-form-input"
        type="email"
        name="email"
        placeholder="student@codepath.org"
        value={checkoutForm.email}
        onChange={(event) =>
          handleOnCheckoutFormChange("email", event.target.value)
        }
      />
      <input
        className="checkout-form-input"
        type="text"
        name="name"
        placeholder="Student Name"
        value={checkoutForm.name}
        onChange={(event) =>
          handleOnCheckoutFormChange("name", event.target.value)
        }
      />
      <button className="checkout-button" onClick={handleOnSubmitCheckoutForm}>
        Checkout
      </button>
      {purchase.purchase ? <p>{purchase.purchase.receipt}</p> : <p></p>}
    </div>
  );
}
