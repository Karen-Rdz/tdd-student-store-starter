import * as React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css";
import ProductView from "../ProductView/ProductView";
import NotFound from "../NotFound/NotFound";

export default function ProductDetail({
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  let [product, setProduct] = React.useState(undefined);
  let [loading, setLoading] = React.useState(true);
  const params = useParams();
  const productId = params.productId;

  React.useEffect(() => {
    const fetchData = async () => {
      await getData();
    };
    fetchData();
  }, []);

  async function getData() {
    setLoading(true);
    let data = await axios.get(`http://localhost:3001/store/${productId}`);
    setProduct(data.data.product);
  }

  React.useEffect(() => {
    if (product) {
      setLoading(false);
    }
  }, [product]);

  if (productId > 16) {
    return <NotFound />;
  }

  if (!loading) {
    return (
      <div className="product-detail">
        <ProductView
          product={product}
          productId={productId}
          quantity={1}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
        />
      </div>
    );
  } else {
    return <h1 className="loading"> Loading... </h1>;
  }
}
