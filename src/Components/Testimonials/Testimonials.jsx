import React from 'react'
import './Testimonials.css'
import profile_1 from '../../assets/profile_img_1.png';
import profile_2 from '../../assets/profile_img_2.png';
import profile_3 from '../../assets/profile_img_3.png';

const Testimonials = () => {
  return (
    <div className='testimonials'>
            <h1>Customer <span>Testimonials</span></h1>

            <p>Real stories from Those Who Found Home <br />with Us</p>
          <div className="images-row">
            <div className="images">
              <img src={profile_1} alt="" />
              <h3>Donald Jackman</h3>
              <p>⭐⭐⭐⭐⭐</p>
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
              <p>⭐⭐⭐⭐⭐</p>
              <span>UI/UX Designer</span>
              <p>Fromthe very first meeting they understand my 
                vision and helped me find the perfect property.
                Their attention to detail and commitment to 
                client satisfication is unmatched.
              </p>
            </div>

            <div className="images">
              <img src={profile_3} alt="" />
              <h3>James Washington</h3>
              <p>⭐⭐⭐⭐⭐</p>
              <span>Co-Founder</span>
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
