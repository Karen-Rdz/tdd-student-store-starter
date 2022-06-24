import * as React from "react"
import {Link} from 'react-router-dom'
import "./Logo.css"
import store from "./store.png"

export default function Logo() {
  return (
    <div className="logo">
      <Link to={`/`}>
      <img className="store-logo" src={store} alt="logo" />
      </Link>
    </div>
  )
}