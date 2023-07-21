import React from 'react'
import "../styles/About.css"
import Creme from "../assets/creme.jpg"
import Gourmet from "../assets/gourmet.jpg"

function About() {
  return (
    <article className="about-us" id="about-section">
      <section className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="about-subtext">Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
        Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago,
        and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers
        continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
      </section>

      <section className="double-image">
        <img className="about-1" src={Creme} alt="Little Lemon restaurant cuisine 1"/>
        <img className="about-2" src={Gourmet} alt="Little Lemon restaurant cuisine 2"/>
      </section>
    </article>
  )
}

export default About