import Call from '@/components/post-property/Call'
import Difference from '@/components/post-property/Difference'
import Faq from '@/components/post-property/Faq'
import IntrestingReads from '@/components/post-property/IntrestingReads'
import PostHero from '@/components/post-property/PostHero'
import RecentlyOnboarded from '@/components/post-property/RecentlyOnboarded'
import Steps from '@/components/post-property/Steps'
import Testimonials from '@/components/post-property/Testimonials'
import React from 'react'

const PostProperty = () => {
    return (
        <div className='px-4 md:px-6 lg:px-24'>
            <PostHero />
            <Steps />
            <Call />
            <RecentlyOnboarded />
            {/* <Testimonials /> */}
            {/* <Difference /> */}
            {/* <Faq /> */}
            <IntrestingReads />
        </div>
    )
}

export default PostProperty