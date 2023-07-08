import React from 'react'
import Logo from "../assets/logo.png"
import "../styles/Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer role="region" aria-label="Footer Section">
      <section className="LL-FooterLogo">
        <img className="footer-logo"  src={Logo} alt="Little Lemon"></img>
      </section>

      <section className="LL-FooterMenu">
        <h3>
          Menu
        </h3>
        <div className="LL-Navigation LL-FooterNavigation">
          <ul className="footer-navbar">
          <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservation">Reservation</Link></li>
            <li><Link to="/order">Order</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </section>

      <section className="LL-FooterContact">
        <h3>Contact</h3>
        <article>
          <p>1927 Johnson Street, Chicago, Illinois - 30239</p>
          <p>315-482-6831</p>
          <p>contact@littlelemon.com</p>
        </article>
      </section>

      <section className="LL-FooterSocial">
        <h3>
          Social Media
        </h3>
        <div className="LL-Navigation LL-FooterNavigation">
          <ul className="footer-navbar">
            <li><a href="https://www.facebook.com">Facebook</a></li>
            <li><a href="https://www.instagram.com">Instagram</a></li>
            <li><a href="https://www.twitter.com">Twitter</a></li>
            <li><a href="https://www.whatsApp.com">WhatsApp</a></li>
          </ul>
        </div>
      </section>

    </footer>
  )
}

export default Footer