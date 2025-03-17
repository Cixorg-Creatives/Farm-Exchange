import BlogsHero from '@/components/blog/BlogsHero'
import Latest from '@/components/blog/Latest'
import SearchBar from '@/components/blog/SearchBar'
import Top from '@/components/blog/Top'
import React from 'react'

const Blogs = () => {
  return (
    <div className='px-4 md:px-6 lg:px-24'>
      <BlogsHero />
      <SearchBar />
      <Top />
      <Latest />
    </div>
  )
}

export default Blogs