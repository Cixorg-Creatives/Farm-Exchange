import { assets } from '@/assets/assets'
import React from 'react'

const Location = () => {
  return (
    <div className='py-4 md:py-6 lg:py-8 flex flex-col gap-2 md:gap-3 lg:gap-4'>
      <div className='uppercase sticky top-0 left-0 z-10 lg:relative text-[#31511E] font-bold bg-[#F6FCDF] text-[2rem]'>Location</div>
      <div className='flex flex-col gap-4 md:gap-8 lg:gap-11'>
        <img src={assets.farmforest_14} alt="" className='w-full h-auto border-1 border-black' />
        <div className='flex flex-col gap-2 md:gap-4 lg:gap-8'>
          <h2 className="text-[#31511E] capitalize font-medium text-2xl md:text-4xl lg:text-5xl leading-tight text-left">
            Discover Properties with <br /> the Best Value
          </h2>
          <p className="text-[#31511E] capitalize font-normal text-xs md:text-base lg:text-xl leading-relaxed text-left">
            This is a premium chance to gain access <br /> to <b>The Forest Farms</b> at the right <br /> destination. The property offers customizable <br /> cottages with serene landscape gardens.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Location