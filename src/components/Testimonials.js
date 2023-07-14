import React from 'react'
import "../styles/Testimonials.css"
import Testi1 from "../assets/testi-1.jpg"
import Testi2 from "../assets/testi-2.jpg"
import Testi3 from "../assets/testi-3.jpg"
import Testi4 from  "../assets/testi-4.jpg"

const Testimonials = () => {
  const testimonialsMenu = [
    {
      image: Testi1,
      name: "John Doe",
      rating: "abce",
      review: "The falafel platter at Little Lemon is delicious, with perfectly seasoned crispy balls."
    },
    {
      image: Testi2,
      name: "Becky Simon",
      rating: "abce",
      review: "The hummus and pita are top-notch, with creamy and smooth hummus and warm, fluffy pita."
    },
    {
      image: Testi3,
      name: "Pascal James",
      rating: "abce",
      review: "The grilled chicken kebab at the is juicy and packed with flavor, served with a side of perfect."
    },
    {
      image: Testi4,
      name: "Debora Rice",
      rating: "abce",
      review: "The stuffed grape leaves at the Little Lemon grill are a must-try, with a delicate and tangy filling."
    }
  ]

  const testimonialsMenuItems = testimonialsMenu.map(menu => {
    const images = menu.image;
    const names = menu.name;
    // const ratings = menu.rating;
    const reviews = menu.review;

    return (
      <div>
          <div className="testimonial-card-container">
              <div className="image-container">
                      <img src={images} alt="Testimonials" />
                  </div>
              <div className="testimonial-card-text">
                  <div className="testimonial-card-title">
                      <h3>{names}</h3>
                  </div>
                  <div className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                  <p>{reviews}</p>
              </div>
          </div>
      </div>
    )
  })

  return (
      <div className="testimonial-container">
        <h1>Testimonials</h1>
        <div className="testimonial-card">
          {testimonialsMenuItems}
        </div>
      </div>
  )
}

export default Testimonials