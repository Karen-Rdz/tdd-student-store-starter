import * as React from "react"
import "./ProductCard.css"

export default function ProductCard({product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart, showDescription}) {
  return (
    <div className="product-card">
        <h3 className="product-name">{product.name}</h3>
    </div>
  )
}