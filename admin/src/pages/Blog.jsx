import { assets } from '@/assets/assets'
import BlogHero from '@/components/blogs/BlogHero'
import BlogSettings from '@/components/blogs/BlogSettings'
import React from 'react'

const Blog = () => {
    return (
        <div className='px-5 md:px-8 lg:px-12'>
            <BlogSettings />
            <BlogHero />
        </div>
    )
}

export default Blog