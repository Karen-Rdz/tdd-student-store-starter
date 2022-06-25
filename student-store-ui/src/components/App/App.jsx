import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import "./App.css";
import axios from "axios";
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";

export default function App() {
  const [isFetching, setIsFetching] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(true);
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [checkoutForm, setCheckoutForm] = React.useState();
  const [products, setProducts] = React.useState([]);
  let [widthSideBar, setWidth] = React.useState(80);

  React.useEffect(() => {
    async function fetchData() {
      const { data } = await axios(
        "https://codepath-store-api.herokuapp.com/store"
      );
      setProducts(data.products);
    }
    fetchData();
  }, [name]);

  const handleAddItemToCart = (id) => {};

  const handleRemoveItemToCart = (id) => {};

  const handleOnToggle = () => {
    setIsOpen(!isOpen);
    if (isOpen == true) {
      setWidth(300);
    } else {
      setWidth(80);
    }
  };

  const handleOnCheckoutFormChange = (id) => {};

  const handleOnSubmitCheckoutForm = (id) => {};

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar
            isOpen={isOpen}
            widthSideBar={widthSideBar}
            shoppingCart={shoppingCart}
            products={products}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            handleOnToggle={handleOnToggle}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
                />
              }
            />
            <Route
              path="/products/:productId"
              element={
                <ProductDetail
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}
