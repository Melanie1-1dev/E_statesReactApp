import React from 'react'
import './Testimonials.css'
import profile_1 from '../../assets/profile_img_1.png';

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <div className="container">
            <h1>Customer <span>Testimonials</span></h1>

            <p>Real stories from Those Who Found Home <br />with Us</p>

            <div className="images">
              <img src={profile_1} alt="" />
              <h3>Donald Jackman</h3>
              <span>Marketing Manager</span>
              <p>Fromthe very first meeting they understand my 
                vision and helped me find the perfect property.
                Their attention to detail and commitment to 
                client satisfication is unmatched.
              </p>
            </div>

            <div className="images">
              <img src={profile_2} alt="" />
              <h3>Richard Nelson</h3>
              <span>Marketing Manager</span>
              <p>Fromthe very first meeting they understand my 
                vision and helped me find the perfect property.
                Their attention to detail and commitment to 
                client satisfication is unmatched.
              </p>
            </div>

            <div className="images">
              <img src={profile_3} alt="" />
              <h3>Donald Jackman</h3>
              <span>Marketing Manager</span>
              <p>Fromthe very first meeting they understand my 
                vision and helped me find the perfect property.
                Their attention to detail and commitment to 
                client satisfication is unmatched.
              </p>
            </div>
            
        </div>

      
    </div>
  )
}

export default Testimonials
