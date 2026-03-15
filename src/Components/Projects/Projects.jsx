import React from 'react'
import './Projects.css'
import project_1 from '../../assets/project_img_1.jpg'
import project_2 from '../../assets/project_img_2.jpg'
import project_3 from '../../assets/project_img_3.jpg'
import project_4 from '../../assets/project_img_4.jpg'
import project_5 from '../../assets/project_img_5.jpg'
import project_6 from '../../assets/project_img_6.jpg'


const Projects = () => {
  return (
    <div className='projects'>
      <div className="container">
        <h1>Projects Completed</h1>

        <p>crfafting spaces, BUilding legacles-Explore <br /> Our Portfolio</p>
      </div>
      <div className="images">
        <img src={project_1} alt="" />
        <img src={project_2} alt="" />
        <img src={project_3} alt="" />
        <img src={project_4} alt="" />
        <img src={project_5} alt="" />
        <img src={project_6} alt="" />
      </div>
      
      
    </div>
  )
}

export default Projects
