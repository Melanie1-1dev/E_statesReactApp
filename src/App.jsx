import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Section2 from './Components/Section2/Section2'
import Projects from './Components/Projects/Projects'
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
      <Section2 />
      <Projects />

      </div>
    </div>
  );
}

export default App
