"use client";

import React from 'react';
import './Navbar.css'
import logo from '../../assets/Diversity_Club_Logo.webp'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  const goToHome = () => {
    window.scrollTo(0, 0); 
    navigate('/'); 
  }
  const goToStory = () => {
    window.scrollTo(0, 0);
    navigate('/our-stories')
  }
  const goToProject = () => {
    window.scrollTo(0, 0);
    navigate('/project')
  }
  const goToResources = () => {
    window.scrollTo(0, 0);
    navigate('/resources')
  }
  const goToContact = () => {
    window.scrollTo(0, 0);
    navigate('/share-voice')
  }

  return (
    <nav className= 'container navbar-inverse'>
      <img 
        src={logo} 
        alt="Logo" 
        className='logo'
        onClick={goToHome} 
      />
      <ul>
          <li 
            onClick={goToStory}
          >
            Our Stories
          </li>
          <li
            onClick={goToProject}
          >
            Project
          </li>
          <li
            onClick={goToResources}
          >
            Resources
          </li>
          <li>
            <button 
              className='btn'
              onClick={goToContact}
            >                
            Share Voice
            </button>
          </li>
      </ul>
    </nav>
  )
}

export default Navbar