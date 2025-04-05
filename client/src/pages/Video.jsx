import ComingSoon from '@/components/image/ComingSoon'
import VideoHero from '@/components/video/VideoHero'
import React from 'react'

const Video = () => {
  return (
    <>
      <div className='px-4 md:px-6 lg:px-24'>
        <VideoHero />
        <ComingSoon />
      </div>
    </>
  )
}

export default Video