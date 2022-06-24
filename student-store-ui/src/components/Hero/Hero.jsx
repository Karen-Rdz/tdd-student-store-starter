import * as React from "react"
import "./Hero.css"
import hero from "./hero.png"

export default function Hero({setCategory, setSearch}) {
  return (
    <><div className="hero">
      <h1 className="intro">{`Welcome! \n Find your Merch!`}</h1>
      <img className="hero-img" src={hero} alt="hero" />
    </div><div className="hero-sub">
        <button className="all" onClick={() => setCategory('all')}> All Categories </button>
        <button className="clothing" onClick={() => setCategory('clothing')}> Clothing </button>
        <button className="food" onClick={() => setCategory('food')}> Food </button>
        <button className="accessories" onClick={() => setCategory('accessories')}> Accessories </button>
        <button className="tech" onClick={() => setCategory('tech')}> Tech </button>
        <input type="text" className="search-input" onChange={(event) => setSearch(event.target.value)}/>
      </div></>
  )
}