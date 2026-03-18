import React from 'react'
import './Footer.css'
import logo_svg from '../../assets/logo_dark.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="content">
                <img src={logo_svg} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Nobis est nisi doloremque
                     deleniti sed neque, corporis nostrum natus 
                     laborum eveniet sequi aliquam in magnam dolore 
                    dignissimos excepturi harum veritatis dolores!</p>

            </div>
            <div className="content">
                <h3>COMPANY</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">Privacy policy</a></li>
                </ul>
                
            </div>
            <div className="content">
                <h3>Subscribe to outnewsLetter</h3>
                <p>The latest articles, news and resources sent
                    to you inbox weekly.
                </p>
                <input type="email" name='Email' placeholder='Enter your email'/>
                <br />
                <button>Subscribe</button>
                
            </div>
            <hr />
            <p>Copyright 2026 &copy; einaleM. All Rights are Reserved!</p>

        </div>
      
    </div>
  )
}

export default Footer
