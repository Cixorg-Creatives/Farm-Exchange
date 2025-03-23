import List from '@/components/blogs/List'
import SearchBar from '@/components/blogs/SearchBar'
import React from 'react'

const Blogs = () => {
  return (
    <div className='px-5 md:px-8 lg:px-12'>
      <SearchBar />
      <List />
    </div>
  )
}

export default Blogs