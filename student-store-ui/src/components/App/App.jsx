import * as React from "react"
import {BrowserRouter} from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Footer from "../Footer/Footer"
import "./App.css"
import axios from 'axios'

export default function App() {
  function handleAddItemToCart(){

  }

  function handleRemoveItemToCart(){

  }

  const [products, setProducts] = React.useState([])
  React.useEffect( () => {
    async function fetchData() {
      const {data} = await axios('https://codepath-store-api.herokuapp.com/store')
      setProducts(data.products) 
    }
    fetchData();
  }, [name])

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Home 
          products={products}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}/>
          {/* {products.map(p => <p key={p.name}>{p.name}</p>)} */}
          <Sidebar />
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  )
}
