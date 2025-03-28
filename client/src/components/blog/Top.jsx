import { assets } from '@/assets/assets'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Top = () => {
  return (
    <div className='py-6 md:py-10 xl:py-14'>
      <div className='w-full h-12 flex items-center justify-between pb-2 md:pb-4 lg:pb-8'>
        <p className='uppercase text-[#859F3E] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Top blogs</p>
        <p className='flex group gap-2 md:gap-4 text-[#859F3E] font-normal text-base lg:text-2xl leading-6 md:leading-8 cursor-pointer'>View More <ArrowUpRight className='size-5 sm:size-6 md:size-8 group-hover:rotate-45 ease-in duration-150' /></p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-1.5 md:gap-x-3 lg:gap-x-5'>
        <div className='h-full grid-cols-1 gap-y-2 md:gap-y-3 lg:gap-y-4 flex flex-row md:flex-col justify-between'>
          <Link to={'/journal/blog/1'} className='px-2 md:px-4 lg:px-8 py-2.5 md:py-5 lg:py-9 border-1 border-[#D9E1C3] flex flex-col items-start gap-1 md:gap-2 lg:gap-4 cursor-pointer'>
            <div className='flex flex-col md:flex-row items-start gap-2 md:gap-3 lg:gap-4'>
              <img src={assets.journal_2} alt="" className='w-full md:w-32 h-auto border-1 border-black' />
              <div className='flex flex-col h-full items-start justify-around'>
                <p className='uppercase text-black font-bold text-[8px] md:text-[10px] lg:text-xs'>Small Text</p>
                <p className='capitalize text-black font-bold text-sm md:text-lg lg:text-2xl'>Women’s Day Special: Honoring India’s Women Farmers and Their Legacy of Resilience</p>
              </div>
            </div>
            <p className='capitalize text-[#747474] font-normal text-xs md:text-sm lg:text-base'>India’s agricultural landscape has long been shaped by the resilience and ingenuity of women farmers. From sowing seeds to managing livestock and innovating in sustainable farming, they have played an indispensable role in rural economies. </p>
          </Link>
          <Link to={'/journal/blog/1'} className='px-2 md:px-4 lg:px-8 py-2.5 md:py-5 lg:py-9 border-1 border-[#D9E1C3] flex flex-col items-start gap-1 md:gap-2 lg:gap-4 cursor-pointer'>
            <div className='flex flex-col md:flex-row items-start gap-2 md:gap-3 lg:gap-4'>
              <img src={assets.journal_3} alt="" className='w-full md:w-32 h-auto border-1 border-black' />
              <div className='flex flex-col h-full items-start justify-around'>
                <p className='uppercase text-black font-bold text-[8px] md:text-[10px] lg:text-xs'>Small Text</p>
                <p className='capitalize text-black font-bold text-sm md:text-lg lg:text-2xl'>Women’s Day Special: Honoring India’s Women Farmers and Their Legacy of Resilience</p>
              </div>
            </div>
            <p className='capitalize text-[#747474] font-normal text-xs md:text-sm lg:text-base'>India’s agricultural landscape has long been shaped by the resilience and ingenuity of women farmers. From sowing seeds to managing livestock and innovating in sustainable farming, they have played an indispensable role in rural economies. </p>
          </Link>
        </div>
        <Link to={'/journal/blog/1'} className='h-full grid-cols-1 px-2 md:px-4 lg:px-8 py-2.5 md:py-5 lg:py-9 border-1 border-[#D9E1C3] flex flex-col items-start gap-3 md:gap-7 lg:gap-14 cursor-pointer'>
          <div className='flex flex-col items-start gap-2.5 md:gap-5 lg:gap-9'>
            <img src={assets.journal_4} alt="" className='w-full h-auto border-1 border-black' />
            <p className='uppercase text-black font-bold text-[8px] md:text-[10px] lg:text-xs'>Small Text</p>
            <p className='capitalize text-black font-bold text-sm md:text-lg lg:text-2xl'>Women’s Day Special: Honoring India’s Women Farmers and Their Legacy of Resilience</p>
          </div>
          <p className='capitalize text-[#747474] font-normal text-xs md:text-sm lg:text-base'>India’s agricultural landscape has long been shaped by the resilience and ingenuity of women farmers. From sowing seeds to managing livestock and innovating in sustainable farming, they have played an indispensable role in rural economies. </p>
        </Link>
      </div>
    </div>
  )
}

export default Top