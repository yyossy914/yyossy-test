import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Title from '../Components/Title/Title'
import AISV from '../Components/AISV/AISV'
import Gallery from '../Components/Gallery/Gallery'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container title-inverse text-inverse">
        <Title title='Our Goal' subTitle='The goal of the AIS Vienna Diversity Club is to educate and celebrate diversity and multiculturalism, and to facilitate a harmonious teaching and learning community through fostering a welcoming and tolerant environment.'/>
      </div>
      <div className="container">
        <AISV/>
      </div>
      <div className="container title-inverse text-inverse">
        <Title title='Project Gallery'/>
        <Gallery/>
      </div>
    </div>
  )
}
  
export default Home