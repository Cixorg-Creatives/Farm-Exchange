import Button from '@/Button'
import List from '@/components/blogs/List'
import SearchBar from '@/components/blogs/SearchBar'
import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = () => {
  return (
    <div className='px-5 md:px-8 lg:px-12'>
      <Link to={'/add-blog'}>
        <Button title={"Add Blog"} />
      </Link>
      <SearchBar />
      <List />
    </div>
  )
}

export default Blogs