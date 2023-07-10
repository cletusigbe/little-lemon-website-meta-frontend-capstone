import React from 'react'
import "../styles/Hero.css"
import { Link } from 'react-router-dom'
import HeroImage from "../assets/greek-salad.jpg"

const Hero = () => {
  return (
    <section className="Hero">
      <div className="Hero-left">
        <h1>
          Little Lemon
        </h1>
        <p className="subtitle">Chicago</p>
        <p id="Hero-desc">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to="/reservation">
        <button className="btn">
          Reserve a Table
        </button>
        </Link>
      </div>
      <div className="Hero-right">
        <img
          src={HeroImage}
          alt="Little Lemon - Hero"
        />
      </div>
    </section>
  )
}

export default Hero