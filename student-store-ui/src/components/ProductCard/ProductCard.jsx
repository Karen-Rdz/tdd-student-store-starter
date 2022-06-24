import * as React from "react"
import "./ProductCard.css"

export default function ProductCard({product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart, showDescription}) {
  
  let price = product.price.toFixed(2)
  let description = ""
  if (showDescription == true){
    description = product.description
  }

  return (
    <div className="product-card">
        <h3 className="product-name">{product.name}</h3>
        <h5 className="product-price">${price}</h5>
        <p className="product-description">{description }</p>
        <img className="productImage" src={product.image} alt={product.name} style={{backgroundImage: `url(${product.image})`}}/>
        <div className="media">
          {/* Link element */}
        </div>
        <button className="add" onClick={handleAddItemToCart(productId)}> Add </button>
        <button className="remove" onClick={handleRemoveItemToCart(productId)}> Remove </button>
        <p className="product-quantity">Quantity on Cart: {quantity}</p>
    </div>
  )
}