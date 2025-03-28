import { assets } from '@/assets/assets'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const data = {
  blog: {
    thumbnail: assets.journal_12,
    title: 'Our Blogs',
    button: 'Read Now',
    location: '/journal/blog'
  },
  image: {
    thumbnail: assets.journal_13,
    title: 'our Gallery',
    button: 'View Now',
    location: '/journal/image'
  },
  video: {
    thumbnail: assets.journal_14,
    title: 'watch videos',
    button: 'Watch Now',
    location: '/journal/video'
  },
}

const Explore = () => {
  return (
    <div className='py-6 md:py-10 xl:py-14 flex-col gap-4 md:gap-6 lg:gap-8'>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-2 md:gap-4 lg:gap-0 mb-4 md:mb-8 lg:mb-16'>
        <div className='text-[#859F3E] uppercase font-semibold text-3xl md:text-4xl lg:text-[3.5rem] leading-tight text-center lg:text-left'>Explore Farming <br className='hidden lg:block' /> Through</div>
        <div className='lg:w-1/2 capitalize text-[#747474] font-normal text-xs md:text-base lg:text-xl leading-tight flex justify-end items-center '>
          <p className='text-center lg:text-right'>Dive into our rich collection of blogs, captivating <br className='hidden lg:block' /> gallery, and engaging videos. Discover farming <br className='hidden lg:block' /> stories, innovative techniques, and nature's beauty, <br className='hidden lg:block' /> all in one place. Let your journey of knowledge and <br className='hidden lg:block' /> inspiration begin.</p>
        </div>
      </div>
      <div className='grid grid-cols-[9fr_8fr_7fr] gap-3 md:gap-5 lg:gap-7'>
        {
          Object.values(data).map((item, index) => (
            <div key={index} className='flex flex-col items-start justify-end'>
              <div><img src={item.thumbnail} alt="" className='w-full h-auto' /></div>
              <div className='flex-col items-start gap-1 lg:gap-2.5 mt-1 md:mt-2 lg:mt-4 text-start w-full h-12 md:h-24 lg:h-36'>
                <p className='capitalize text-[#31511E] font-medium text-xs md:text-lg lg:text-[2rem]'>{item.title}</p>
                <p className='capitalize text-[#758A68] font-normal text-[6px] md:text-xs lg:text-xl'>Stay updated with the latest trends, tips, and stories from the farming world.</p>
              </div>
              <Link to={item.location} className='group py-1 md:py-2 lg:py-4 px-2 md:px-4 lg:px-6 border-1 border-[#31511E] flex items-center justify-center gap-1 md:gap-1.5 lg:gap-2.5 cursor-pointer active:scale-75 ease-in duration-150'>
                <p className='capitalize text-[#31511E] font-medium text-[10px] md:text-base lg:text-2xl'>{item.button}</p>
                <ArrowUpRight className='group-active:rotate-45 ease-in duration-150 size-2.5 md:size-4 lg:size-8 text-[#31511E]' />
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Explore