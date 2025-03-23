import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Properties from './pages/Properties'
import AddProperties from './pages/AddProperties'
import AddBlogs from './pages/AddBlogs'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Request from './pages/Request'
import Sidebar from './components/Sidebar'
import Login from './pages/Login'

const token='dg';

const App = () => {
  return (
    <div className='h-screen overflow-hidden flex flex-col'>
      {
        token === '' ? (
          <Login />
        ) : (
          <div className=''>
            <Navbar />
            <div className='flex flex-1'>
              <Sidebar />
              <div className="w-[82%] h-[80vh] overflow-auto my-8 pb-10 text-gray-600 text-base">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/properties" element={<Properties />} />
                  <Route path="/add-property" element={<AddProperties />} />
                  <Route path="/blogs" element={<Blogs />} />
                  <Route path="/add-blog" element={<AddBlogs />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/post-property-request" element={<Request />} />
                </Routes>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default App