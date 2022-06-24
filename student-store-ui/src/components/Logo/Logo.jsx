import * as React from "react"
import "./Logo.css"
import store from "./store.png"

export default function Logo() {
  return (
    <div className="logo">
      <img className="store-logo" src={store} alt="logo" />
    </div>
  )
}