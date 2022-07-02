import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function Home({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  shoppingCart,
  calculateQuantity,
  quantity,
}) {
  const [category, setCategory] = React.useState("all");
  const [search, setSearch] = React.useState("");
  return (
    <div className="home">
      <Hero setCategory={setCategory} setSearch={setSearch} />
      <ProductGrid
        products={products}
        category={category}
        search={search}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
        shoppingCart={shoppingCart}
        calculateQuantity={calculateQuantity}
        quantity={quantity}
      />
    </div>
  );
}
