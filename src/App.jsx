import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Services from './components/Services'
import Hero from './components/Hero.jsx'
import Testimonials from './components/Testimonials.jsx'

import Portfolio from './components/Portfolio.jsx'
import Process from './components/Process.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
       <Portfolio />
       <Process />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
