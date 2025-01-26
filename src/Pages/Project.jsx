import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Projects from '../Components/Projects/Projects'

const Project = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
          <Projects/>
        </div>
    </div>
  )
}

export default Project