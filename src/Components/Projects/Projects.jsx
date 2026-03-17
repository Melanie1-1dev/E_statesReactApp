import React, { useRef } from 'react'
import Data from "../../Data/Data"
import ProjectCard from "./ProjectCard"
import left_arrow from "../../assets/left_arrow.svg"
import right_arrow from "../../assets/right_arrow.svg"

import './Projects.css'

const Projects = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () =>{
    scrollRef.current.scrollBy({left:-300, behavior: "smooth"});
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({right:300, behavior: "smooth"});
  };

  return (
    <section className='projects'>
      <div className="container">
        <h1>Projects Completed</h1>
        <p>Crafting spaces, Building legacles-Explore <br /> Our Portfolio</p>
      </div>

      <div className="scroll-arrows">
     <button onClick={scrollLeft} ><img src={left_arrow} alt="" /></button>
     <button><img src={right_arrow} alt="" /></button>
      </div>
      <div className="projects-grid projects-scroll" ref={scrollRef}> 
        {Data.map((Project, index) => (
          <ProjectCard key={index} {...Project} />
        ))}
      </div>   
      
    </section>
  )
}

export default Projects
