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
import bg from './assets/bg.png'


function App() {


  return (
    <BrowserRouter>
    <body className='bg-hero '>
    <div className='relative z-0 '>
    
    <div className='="bg-hero-pattern bg-cover
    bg-no-repeat bg-center '>
    
    
   
      <Navbar />
      <Hero />

    </div>
    
    <About />
    <Experience />
    <Tech />
    <Works />
   
    {/* <Feedbacks /> */}
    <div className='relative z-0'>
    <Contact />
    <StarsCanvas />

    </div>
    

    </div>
    </body>
      
    </BrowserRouter>
    
  )
}

export default App
