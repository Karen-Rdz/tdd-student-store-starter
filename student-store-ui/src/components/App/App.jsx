import * as React from "react"
import {BrowserRouter} from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Footer from "../Footer/Footer"
import "./App.css"
import axios from 'axios'

export default function App() {

  const [isFetching, setIsFetching] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const [shoppingCart, setShoppingCart] = React.useState([])
  const [checkoutForm, setCheckoutForm] = React.useState()
  const [products, setProducts] = React.useState([])

  React.useEffect( () => {
    async function fetchData() {
      const {data} = await axios('https://codepath-store-api.herokuapp.com/store')
      setProducts(data.products) 
    }
    fetchData();
  }, [name])

  const  handleAddItemToCart = (id) => {

  }

  const handleRemoveItemToCart = (id) => {

  }

  const handleOnToggle = () => {

  }

  const handleOnCheckoutFormChange = () => {

  }

  const handleOnSubmitCheckoutForm = () => {

  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Home 
          products={products}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}/>
          <Sidebar />
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  )
}
