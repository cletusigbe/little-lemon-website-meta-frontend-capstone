import React from 'react'
import "../styles/Reservation.css"
import ReserveForm from '../components/ReserveForm'

function Reservation() {
  return (
    <div className="res-content-wrapper">
        <div className="res-content-container">
            <div className="text">
                <h2>Experience the correct stability of lifestyle and luxury.</h2>
                <p>At Little Lemon, we take great pride in providing our guests with the ultimate in traditional <em>luxury experience</em>.</p>
                <p>Book a table with us to share in this experience.</p>
            </div>
            <div className="form">
                <h1>Reserve a Table</h1>
                <p>Please fill out the form correctly.</p>
                <ReserveForm />
            </div>
        </div>
    </div>
  )
}

export default Reservation