import { assets } from '@/assets/assets'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const BlogsHero = () => {
  return (
    <div className='py-6 md:py-10 xl:py-14 flex flex-col gap-5 md:gap-11 old-standard-tt'>
      <div className='flex flex-col md:flex-row gap-2 md:gap-[6.625rem]'>
        <div className='uppercase text-[#859F3E] font-bold text-2xl md:text-4xl lg:text-[3.5rem] leading-tight md:leading-snug'>Top 15 Farmlands for Sale near Bangalore with High ROI Potential</div>
        <div className='md:py-5 flex flex-col gap-0.5 md:gap-9 items-start md:items-end'>
          <p className='text-[#747474] capitalize font-normat text-sm md:text-base lg:text-xl md:text-right'>this beautiful city in Karnataka is famous for its cultural heritage, beautiful scenery, and rapid advancement.</p>
          <Link to={'/journal/blog/1'} className='flex group cursor-pointer gap-2 md:gap-4 text-[#859F3E] font-normal text-xs md:text-sm lg:text-2xl leading-6 md:leading-8'>Read Now <ArrowUpRight className='size-6 md:size-8 group-hover:rotate-45 ease-in duration-150' /></Link>
        </div>
      </div>
      <div>
        <img src={assets.journal_7} alt="" className='w-full h-auto aspect-2/1 border-4 border-[#758A68]' />
      </div>
    </div>
  )
}

export default BlogsHero