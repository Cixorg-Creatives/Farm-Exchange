import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Services from './pages/Services'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import ScrollToTop from './components/ScrollToTop'
import FarmForest from './pages/FarmForest'
import Properties from './pages/Properties'
import Journal from './pages/Journal'
import Image from './pages/Image'
import Video from './pages/Video'
import PostProperty from './pages/PostProperty'
import { Toaster } from 'react-hot-toast'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

const App = () => {
  return (
    <div className='bg-[#F6FCDF] clashdisplay'>
      <Toaster />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/journal/blog" element={<Blogs />} />
        <Route path="/journal/blog/:blogId" element={<Blog />} />
        <Route path="/journal/image" element={<Image />} />
        <Route path="/journal/video" element={<Video />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post-property" element={<PostProperty />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:propertiesId" element={<FarmForest />} />
        <Route path='/privacy-policy' element={<Privacy />} />
        <Route path='/terms-and-conditions' element={<Terms />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App