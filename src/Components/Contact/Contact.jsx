import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-us'>
        <div className="container">
            <h1>    CONTACT <span>WITH US</span></h1>
            <p>Readfy to make a move? Let's build your  <br />
            future together.</p>

            <div className="form">
              <form action="#">
                <label>Your Name </label><br />
                <input type="text" name='name'/><br />
                <label>Your Email</label><br />
                <input type="email" name='email'/><br />
                <label>Message</label><br />
                <textarea name="message" id=""></textarea>
              </form>
            </div>
        </div>

      
    </div>
  )
}

export default Contact
