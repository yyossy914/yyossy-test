import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import OurStories from './Pages/OurStories'
import Project from './Pages/Project'
import Resources from './Pages/Resources'
import ShareVoice from'./Pages/ShareVoice'
import NoPage from './Pages/NoPage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/yyossy-test" element={<Home />} />
          <Route path="/our-stories" element={<OurStories/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/resources" element={<Resources/>} />
          <Route path="/share-voice" element={<ShareVoice />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App