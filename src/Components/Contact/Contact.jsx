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
                  <label>Your Name </label><br />
                <input type="text" name='name' placeholder='Your name'/><br />
                <label>Your Email</label><br />

                <input type="email" name='email' placeholder='Your email'/><br />
                <label>Message</label><br />
                </div>
                <textarea name="message" id="" placeholder='Message'></textarea>
                <br />
                <button>Send message</button>
              </form>
            </div>
        </div>

      
    </div>
  )
}

export default Contact
