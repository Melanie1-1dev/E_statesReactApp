import React, { useRef } from 'react'
import Data from "../../Data/Data"
import ProjectCard from "./ProjectCard"
import left_arrow from "../../assets/left_arrow.svg"
import right_arrow from "../../assets/right_arrow.svg"

import './Projects.css'

const Projects = () => {
  const slider = useRef();

  let tx = 0;
  const slideForward = () =>{
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `transformX(${tx}%)`;

  }

  const slideLeft = () =>{
    if(tx < 0){
      tx +=25;
    }
    slider.current.style.transform = `transformX(${tx}%)`;
  }

  return (
    <section className='projects'>
      <div className="container">
        <h1>Projects Completed</h1>
        <p>Crafting spaces, Building legacles-Explore <br /> Our Portfolio</p>
      </div>

      <div className="scroll-arrows">
     <button><img src={left_arrow} alt=""  className='arrows' onClick={slideBackward} /></button>
     <button><img src={right_arrow} alt="" className='arrows'  onClick={slideLeft} /></button>
      </div>
      <div className="projects-grid projects-scroll" ref={scroll}> 
        {Data.map((Project, index) => (
          <ProjectCard key={index} {...Project} />
        ))}
      </div>   
      
    </section>
  )
}

export default Projects
