import { Component } from "react";
import Logo from "../assets/logo.jpg";
import "../styles/HeaderStyles.css"
import { Link } from "react-router-dom";

const handleClickScroll = () => {
  const element = document.getElementById('about-section');
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

class Header extends Component{
  state={clicked: false};
  handlecClick = () => {
    this.setState({clicked: !this.state.clicked})
  }
  render(){
  return(
    <>
      <nav>
        <a href="/"><img className="logo-img" src= {Logo} alt="Little Lemon"/></a>

        <div>
          <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/about">AboutUs</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservation">Reservation</Link></li>
            <li><Link to="/order">Order</Link></li>
            <li><Link>Login</Link></li>
          </ul>
        </div>

        <div id="mobile" onClick={this.handlecClick}>
          <i id="bar"
          className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

      </nav>
    </>
  )
}
}

export default Header;