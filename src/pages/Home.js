import React from 'react'
// import "../styles/Home.css"
import Hero from '../components/Hero'
import Specials from '../components/Specials'
import Testimonials from '../components/Testimonials'
// import SpecialCards from '../components/SpecialCards'

function Home() {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      {/* <SpecialCards /> */}
      {/* <div>This is Home Page</div> */}
    </main>
  )
}

export default Home