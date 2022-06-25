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
    });
  }
  filterProducts(products, category, search);

  return (
    // <section className="sidebar">
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.name}
          product={product}
          productId={product.id}
          quantity={1}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
          showDescription={false}
        />
      ))}
    </div>
    // </section>
  );
}
