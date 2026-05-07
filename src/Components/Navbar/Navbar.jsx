import React, { useState } from 'react'
import './Navbar.css'
import logo_svg from '../../assets/logo_dark.svg'

const Navbar = () => {

    const {menuOpen, setMenuOpen} = useState(false);
  return (
    <div className='navbar'>
        <nav>
        <div className="imag-nav">
            <img src={logo_svg} alt="" />
            
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}> ☰ </div>

        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Testimonials</a></li>
            <li className='sign-btn'><a href="#">Sign Up</a></li>

        </ul>
        </nav>

        <div className="header-text">
            <h1>Explore homes that <br />
            fit your dreams.
             </h1>

             <button>Projects</button>
             <button>Contact Us</button>
        </div>

      
    </div>
  )
}

export default Navbar
