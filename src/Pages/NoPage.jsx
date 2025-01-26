import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Title from '../Components/Title/Title'

const NoPage = () => {
    return (
      <div>
        <Navbar/>
        <div className="container">
            <Title title='The page you’re looking for can’t be found.'/>
        </div>
      </div>
    )
  }
  
  export default NoPage