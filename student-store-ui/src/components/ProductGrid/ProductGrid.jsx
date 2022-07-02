import axios from "axios";
import * as React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

export default function ProductGrid({
  products,
  category,
  search,
  handleAddItemToCart,
  handleRemoveItemToCart,
  shoppingCart,
  calculateQuantity,
  quantity,
}) {
  let filteredProducts = [];

  function filterProducts(products, category, search) {
    search = search.toLowerCase();
    products.map((product) => {
      if (search == "") {
        if (category == "all") {
          filteredProducts.push(product);
        } else if (product.category == category) {
          filteredProducts.push(product);
        }
      } else if (product.name.toLowerCase().includes(search)) {
        filteredProducts.push(product);
      }
      // calculateQuantity(shoppingCart, product.id);
    });
  }
  filterProducts(products, category, search);

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.name}
          product={product}
          productId={product.id}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
          showDescription={false}
          shoppingCart={shoppingCart}
          quantity={quantity}
          calculateQuantity={calculateQuantity}
        />
      ))}
    </div>
    // </section>
  );
}
