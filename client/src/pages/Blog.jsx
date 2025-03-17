import BlogHero from '@/components/blog/BlogHero'
import Suggestions from '@/components/blog/Suggestions'
import React from 'react'

const Blog = () => {
    return (
        <div className='px-4 md:px-6 lg:px-24 journal_bg'>
            <BlogHero />
            <Suggestions />
        </div>
    )
}

export default Blog