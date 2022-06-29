import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemToCart,
  showDescription,
}) {
  if (product) {
    let description = "";
    if (showDescription == true) {
      description = product.description;
    }
    let price = product.price?.toFixed(2);
    return (
      <div className="product-card">
        <h3 className="product-name">{product.name}</h3>
        <h5 className="product-price">${price}</h5>
        <p className="product-description">{description}</p>
        <div className="media">
          <Link to={`/products/${productId}`}>
            <img
              className="productImage"
              src={product.image}
              alt={product.name}
              style={{ backgroundImage: `url(${product.image})` }}
            />
          </Link>
        </div>
        <button className="add" onClick={() => handleAddItemToCart(productId)}>
          {" "}
          Add{" "}
        </button>
        <button
          className="remove"
          onClick={() => handleRemoveItemToCart(productId)}
        >
          {" "}
          Remove{" "}
        </button>
        <p className="product-quantity">Quantity on Cart: {quantity}</p>
      </div>
    );
  } else {
    return null;
  }
}
