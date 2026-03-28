import React from 'react'
import './Section2.css'
import brand_img from '../../assets/brand_img.png'

const Section2 = () => {
  return (
    <div className='section'>
      <div className='about-title'>
        <h1>About <span>Our Brand</span></h1>
        <br />
        <p>Passionate About Properties, 
            Dedicated to <br /> Your Vision</p>
        </div>
                
        <div className="float-item">
            <div className="about-imag">
            <img src={brand_img} alt="" />
            </div>
            <div className="flex-col">
                <div className='text-flex'>
            <div className="text-in">
                <h3>10+</h3>
                <p>Years of Excellence</p>
            </div>
            <div className="text-in">
                <h3>12+</h3>
                <p>Projects Completed</p>
            </div>
            <div className="text-in">
                <h3>20+</h3>
                <p>Mn.Sq.Ft.Delivered</p>
            </div>
            <div className="text-in">
                <h3>25+</h3>
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
