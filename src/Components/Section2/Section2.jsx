import React from 'react'
import './Section2.css'
import brand_img from '../../assets/brand_img.png'

const Section2 = () => {
  return (
    <div className='section'>
      <div className='about-title'>
        <h1>About <span>Our Brand</span></h1>
        <p>Passionate About Properties, 
            Dedicated to Your Vision</p>
        </div>
        
        <div className="float-item">
            <div className="about-imag">
            <img src={brand_img} alt="" />
            </div>
            <div className="flex-col">
                <div className='text-flex'>
            <div className="text-in">
                <p>10+</p>
                <p>Years of Excellence</p>
            </div>
            <div className="text-in">
                <p>12+</p>
                <p>Projects Completed</p>
            </div>
            <div className="text-in">
                <p>20+</p>
                <p>Mn.Sq.Ft.Delivered</p>
            </div>
            <div className="text-in">
                <p>25+</p>
                <p>Ongoing Projects</p>
            </div>
            </div>
            <p className='about-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptates alias id quibusdam aliquid inventore itaque ex neque
                 harum exercitationem, consequuntur ratione, voluptatem eius possimus,
                 labore repellendus? Aut pariatur voluptatum tenetur!</p>

                <button>Learn more</button>
                 </div>
        </div>

      
    </div>
  )
}

export default Section2
