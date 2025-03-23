import { useState } from 'react'
import './App.css'
import NavbarButton from './components/NavbarButton/NavbarButton'
import Navbar from './components/Navbar/Navbar'
import Chatbot from './components/Chatbot/Chatbot'

function App() {
  return (
    <div className='container'>
      <Navbar />
      <div className='hero'>
        <div className='hero-text'>
          <img src="src/assets/Hero Text.png" />
        </div>
        <div className='hero-image'>
          <img src='src/assets/Hero Picture.png' />
        </div>
      </div>
      <Chatbot />
    </div>
  )
}

export default App
