import React from 'react'
// import "../styles/Home.css"
import Hero from '../components/Hero'
import Specials from '../components/Specials'
import Testimonials from '../components/Testimonials'
import About from '../components/About'

function Home() {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </main>
  )
}

export default Home