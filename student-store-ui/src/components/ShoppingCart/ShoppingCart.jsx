import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart({ products, isOpen, shoppingCart }) {
  const [subtotal, setSubtotal] = React.useState(0);
  return (
    <div className="shopping-cart">
      {shoppingCart.length > 0 ? (
        <>
          <ShowInformation shoppingCart={shoppingCart} products={products} />
        </>
      ) : (
        <p className="notification">No items added to cart yet</p>
      )}
    </div>
  );
}

export function ShowInformation(shoppingCart, products) {
  let productOnCart = [];
  let quantityOnCart = [];
  let costsOnCart = [];

  shoppingCart.shoppingCart.forEach((item) => {
    shoppingCart.products.forEach((element) => {
      if (element.id == item.itemId) {
        productOnCart.push(element);
        quantityOnCart.push(item.quantity);
        costsOnCart.push(element.price * item.quantity);
      }
    });
  });

  return productOnCart.map((product, index) => (
    <>
      <p className="cart-product-name">Product Name: {product.name}</p>
      <p className="cart-product-quantity">
        Product Quantity: {quantityOnCart[index]}
      </p>
    </>
  ));
}

// export function getSubtotal(subtotal, setSubtotal) {
//   let subtotal = 0;
//   costsOnCart.forEach((item) => {
//     subtotal += item;
//   });
//   setSubtotal(subtotal);
//   return <p className="subtotal">Subtotal: {subtotal}</p>;
// }
