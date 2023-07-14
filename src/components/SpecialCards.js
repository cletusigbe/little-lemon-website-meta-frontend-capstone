import React from 'react'
import Salad from "../assets/cat-csalad.jpg"
import Bruschetta from "../assets/bruschetta.jpg"
import Lemon from "../assets/lemon.jpg"
import "../styles/SpecialCards.css"
import { Link } from 'react-router-dom'

const SpecialCards = () => {
  const specialMenus = [
    {
        image: Salad,
        title: "Greek Salad",
        price: "$12.99",
        description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
        order: "Order a delivery"
    },
    {
        image: Bruschetta,
        title: "Bruschetta",
        price: "$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for dinner.",
        order: "Order a delivery"
    },
    {
        image: Lemon,
        title: "Lemon Dessert",
        price: "$5.00",
        description: "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and it is as authentic as can be imagined.",
        order: "Order a delivery"
    }
]

const specialMenusItems = specialMenus.map(menu => {
  const images = menu.image;
  const titles = menu.title;
  const prices = menu.price;
  const descriptions = menu.description;
  const orders = menu.order;

  return (
      <div>
          <div className="special-card-container">
              <div className="image-container">
                      <img src={images} alt="Special dessert" />
                  </div>
              <div className="special-card-text">
                  <div className="special-card-title">
                      <h3>{titles}</h3>
                      <h3 className="price-tag">{prices}</h3>
                  </div>
                  <p>{descriptions}</p>
                  <div className="order-now"><Link to="/reservation">{orders}</Link></div>
              </div>
          </div>
      </div>
  )
});

  return (
        <div className="special-card">
          {specialMenusItems}
        </div>
  )
}

export default SpecialCards