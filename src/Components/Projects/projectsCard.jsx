import React from 'react'
import './Projects.css'
const projectsCard = ({ name, location, price, image }) => {
  return (
    <div className='project-card'>
        <img src={image} alt={name} className='project_image'/>
        <h3>{name}</h3>
        <p>{price} | {location}</p>
      
    </div>
  );
}

export default projectsCard
