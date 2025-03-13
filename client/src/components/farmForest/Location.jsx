import { assets } from '@/assets/assets'
import React from 'react'

const Location = () => {
  return (
    <div className='py-4 md:py-6 lg:py-8 flex flex-col gap-2 md:gap-3 lg:gap-4'>
      <div className='uppercase sticky top-0 left-0 z-10 lg:relative text-[#31511E] font-bold bg-[#F6FCDF] text-[2rem]'>Location</div>
      <div className='flex flex-col gap-4 md:gap-8 lg:gap-11'>
        <img src={assets.farmforest_14} alt="" className='w-full h-auto border-1 border-black' />
        <div className='w-2/3 lg:w-3/5 flex flex-col gap-2 md:gap-4 lg:gap-8'>
          <h2 className="text-black capitalize font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-left">
            Discover Properties with the Best Value
          </h2>
          <p className="text-[#747474] capitalize font-normal text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-left">
            This is a premium chance to gain access to <b>The Forest Farms</b> at the right destination. The property offers customizable cottages with serene landscape gardens.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Location