import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* <p>Navbar</p> */}
      <Logo />  
      <img src="tdd-student-store-starter\face.png" alt="facebook" />
      <p>Links </p>
    </nav>
  )
}
