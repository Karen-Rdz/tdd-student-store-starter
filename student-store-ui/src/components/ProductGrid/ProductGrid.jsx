import axios from "axios"
import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"


export default function ProductGrid({products, handleAddItemToCart, handleRemoveItemToCart}) {
    // const [productImg, setProductImg] = React.useState('')
    // async function fetchImg(product){
    //     React.useEffect(() => {
    //         async function fetchImg(){
    //             const {image} = await axios(product.image) 
    //             setProductImg(image)
    //         }
    //         fetchImg();
    //     }, [name])
    // }
    return (
    <section className="sidebar">
      <div className="product-grid">
      {products.map(product => 
        // <p key={product.name}>{product.name}</p>
        <ProductCard 
        key={product.name}
        product={product}
        productId={product.id}
        // quantity={product.quantity}
        quantity={1}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
        // showDescription={showDescription}
        showDescription={true}
        />
      )}
      </div>
    </section>
  )
}