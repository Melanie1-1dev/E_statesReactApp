import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Section2 from './Components/Section2/Section2'
import Projects from './Components/Projects/Projects'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
      <Section2 />
      <Projects />
      <Testimonials />
      <Contact />

      </div>
    </div>
  );
}

export default App
