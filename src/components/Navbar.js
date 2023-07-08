import { Component } from 'react'
import Logo from "../assets/logo.jpg";
import "../styles/Navbar.css";
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state={clicked: false};
  handlecClick = () => {
    this.setState({clicked: !this.state.clicked})
  }
  render(){
  return(
    <>
      <nav>
        <Link href="/"><img className="logo-img" src= {Logo} alt="Little Lemon"/></Link>

        <div>
          <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservation">Reservation</Link></li>
            <li><Link to="/order">Order</Link></li>
            <li><Link to="/login">Login</Link></li>
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

export default Navbar