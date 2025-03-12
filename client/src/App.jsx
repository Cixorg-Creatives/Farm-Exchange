import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Services from './pages/Services'
import Journals from './pages/Journals'
import Contact from './pages/Contact'
import Journal from './pages/Journal'

const App = () => {
  return (
    <div className='bg-[#F6FCDF] inter'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/journal/:journalId" element={<Journal />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App