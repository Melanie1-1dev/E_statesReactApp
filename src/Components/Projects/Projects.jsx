import React from 'react'
import Data from "../../Data/Data"
import ProjectCard from "./ProjectCard"

import './Projects.css'

const Projects = () => {
  return (
    <section className='projects'>
      <div className="container">
        <h1>Projects Completed</h1>
        <p>Crafting spaces, Building legacles-Explore <br /> Our Portfolio</p>
      </div>
      <div className="projects-grid">
        {Projects.map((Data, index) => (
          <ProjectCard key={index} {...Projects} />
        ))}
      </div>   
      
    </section>
  )
}

export default Projects
