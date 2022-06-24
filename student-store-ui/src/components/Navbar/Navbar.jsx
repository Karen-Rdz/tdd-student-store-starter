import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"
import face from "./face.png"

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />  
      <img className="facebook-logo" src={face} alt="facebook" />
      <p>Links </p>
    </nav>
  )
}
