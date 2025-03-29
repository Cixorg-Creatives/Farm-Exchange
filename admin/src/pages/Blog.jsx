import { assets } from '@/assets/assets'
import BlogPreview from '@/components/blogs/BlogPreview'
import BlogSettings from '@/components/blogs/BlogSettings'
import React from 'react'

const Blog = () => {
    return (
        <div className='px-5 md:px-8 lg:px-12'>
            <BlogSettings />
            <BlogPreview />
        </div>
    )
}

export default Blog