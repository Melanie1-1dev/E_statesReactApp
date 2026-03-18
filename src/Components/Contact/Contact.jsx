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
                <div className="flex">
                  <label>Your Name: </label><br />
                <input type="text" name='name' placeholder='Your name' required/><br />
                <label>Your Email:</label><br />

                <input type="email" name='email' placeholder='Your email' required/><br />
                </div>
            <div className="flex1">
            
                <label>Message:</label><br />
                <textarea name="message" id="message" placeholder='Message' rows="9" cols="80"></textarea>
                <br />
                </div>
                <button>Send message</button>
                
              </form>
            </div>
        </div>

      
    </div>
  )
}

export default Contact
