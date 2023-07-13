import React from 'react'
import "../styles/Specials.css"
import SpecialCards from './SpecialCards'

function Specials() {
  return (
    <>
      <section id="specials" className="LL-Specials">
        <section className="specials-titlebar">
          <h1>Specials</h1>
          <button className="btn">Online Menu</button>
        </section>
        <SpecialCards />
      </section>
    </>
  )
}

export default Specials