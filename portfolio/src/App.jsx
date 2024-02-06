import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom'
import {About, Contact, 
Experience,
Feedbacks,
Hero,
Navbar,
Tech,
Works,
StarsCanvas} from './/components'


function App() {


  return (
    <BrowserRouter>
    <div className='relative z-0 bg-gray-950'>
    <div className='="bg-hero-pattern bg-cover
    bg-no-repeat bg-center'>

      <Navbar />
      <Hero />

    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
   
    <Feedbacks />
    <div className='relative z-0'>
    <Contact />
    <StarsCanvas />

    </div>
    

    </div>
      
    </BrowserRouter>
    
  )
}

export default App
