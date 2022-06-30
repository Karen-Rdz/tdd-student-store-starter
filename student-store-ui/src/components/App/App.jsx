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
  const [checkoutForm, setCheckoutForm] = React.useState({});
  const [products, setProducts] = React.useState([]);
  const [purchase, setPurchase] = React.useState({});
  let [widthSideBar, setWidth] = React.useState(80);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get("http://localhost:3001/store");
        setProducts(data.products);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  function handleAddItemToCart(productId) {
    let handleCart = [...shoppingCart];
    let index = shoppingCart.findIndex((item) => item.itemId == productId);
    if (index > -1) {
      let repeatedProduct = handleCart[index].quantity + 1;
      const newProuct = {
        itemId: productId,
        quantity: repeatedProduct,
      };

      handleCart[index] = newProuct;
      setShoppingCart(handleCart);
    } else if (index == -1) {
      const newProuct = {
        itemId: productId,
        quantity: 1,
      };
      setShoppingCart([...shoppingCart, newProuct]);
    }
  }

  const handleRemoveItemToCart = (productId) => {
    let handleCart = [...shoppingCart];
    let index = shoppingCart.findIndex((item) => item.itemId == productId);
    if (index > -1) {
      if (handleCart[index].quantity > 1) {
        handleCart[index].quantity--;
      } else {
        handleCart.splice(index, 1);
      }
      setShoppingCart(handleCart);
    }
  };

  const handleOnToggle = () => {
    setIsOpen(!isOpen);
    if (isOpen == true) {
      setWidth(300);
    } else {
      setWidth(80);
    }
  };

  const handleOnCheckoutFormChange = (name, value) => {
    if (name == "name") {
      setCheckoutForm({ ...checkoutForm, name: value });
    } else if (name == "email") {
      setCheckoutForm({ ...checkoutForm, email: value });
    }
  };

  const handleOnSubmitCheckoutForm = () => {
    axios
      .post("http://localhost:3001/store", {
        user: {
          name: checkoutForm.name,
          email: checkoutForm.email,
        },
        shoppingCart: shoppingCart,
      })
      .then((response) => {
        setPurchase(response.data.purchase);
      });
  };
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
            purchase={purchase}
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
