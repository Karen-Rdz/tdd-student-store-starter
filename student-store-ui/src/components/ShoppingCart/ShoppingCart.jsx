import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart({
  products,
  isOpen,
  shoppingCart,
  purchase,
}) {
  const [subtotal, setSubtotal] = React.useState(0);
  return (
    <div className="shopping-cart">
      {shoppingCart.length > 0 ? (
        <>
          <ShowInformation shoppingCart={shoppingCart} products={products} />
          {purchase.purchase ? (
            <>
              <p className="subtotal">
                Subtotal: ${purchase.purchase.subtotal.toFixed(2)}
              </p>
              <p className="tax">Tax: ${purchase.purchase.tax.toFixed(2)}</p>
              <p className="total-price">
                Total: ${purchase.purchase.total.toFixed(2)}
              </p>
            </>
          ) : (
            <p>Total: $0</p>
          )}
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
