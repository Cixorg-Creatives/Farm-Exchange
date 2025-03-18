import Blog from '@/components/journal/Blog'
import Explore from '@/components/journal/Explore'
import Image from '@/components/journal/Image'
import JournalHero from '@/components/journal/JournalHero'
import Video from '@/components/journal/Video'
import React from 'react'

const Journal = () => {
  return (
    <div className=''>
      <JournalHero />
      <div className='px-4 md:px-6 lg:px-24'>
        <Explore />
        <Blog />
      </div>
      <Image />
      <Video />
    </div>
  )
}

export default Journal