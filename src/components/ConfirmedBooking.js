import React from 'react'
import "../styles/ConfirmedBooking.css"

function ConfirmedBooking() {
  return (
    <section className="confirmation-header">
      {/* <img
        className="confirmation-image"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img> */}
      <section className="reserve-header-text">
        <h1>Your Reservation is Confirmed!</h1>
        <h4>A confirmation message has been sent to your email.</h4>
        <h4>Thanks for dining with us!</h4>
      </section>
    </section>
  )
}

export default ConfirmedBooking