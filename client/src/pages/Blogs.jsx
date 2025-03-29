import BlogsHero from '@/components/blog/BlogsHero'
import List from '@/components/blog/List'
import SearchBar from '@/components/blog/SearchBar'
import React from 'react'

const Blogs = () => {
  return (
    <div className='px-4 md:px-6 lg:px-24'>
      <BlogsHero />
      <SearchBar />
      <List />
    </div>
  )
}

export default Blogs