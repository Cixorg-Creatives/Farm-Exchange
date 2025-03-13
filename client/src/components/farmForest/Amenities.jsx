import { assets } from '@/assets/assets'
import React from 'react'

const Amenities = () => {
  return (
    <div className='py-4 md:py-6 lg:py-8 flex flex-col gap-2 md:gap-3 lg:gap-4'>
      <div className='uppercase sticky top-0 left-0 z-10 lg:relative text-[#31511E] font-bold bg-[#F6FCDF] text-[2rem]'>Amenities</div>
      <div className='grid grid-cols-3 gap-7'>
        <div className='col-span-1 row-span-1 flex flex-col items-start w-full h-full relative'>
          <img src={assets.farmforest_4} alt="" className='w-full h-auto border-1 border-[#ADBF7E]' />
          <div className='capitalize p-1 md:p-1.5 lg:p-2.5 bg-[#799138] -translate-y-1/2 flex items-center justify-center text-white font-bold text-[10px] sm:text-sm md:text-lg lg:text-2xl'>Club House</div>
        </div>
        <div className='col-span-1 row-span-1 flex flex-col items-start w-full h-full relative'>
          <img src={assets.farmforest_5} alt="" className='w-full h-auto border-1 border-[#ADBF7E]' />
          <div className='capitalize p-1 md:p-1.5 lg:p-2.5 bg-[#799138] -translate-y-1/2 flex items-center justify-center text-white font-bold text-[10px] sm:text-sm md:text-lg lg:text-2xl'>Playing area</div>
        </div>
        <div className='col-span-1 row-span-1 flex flex-col items-start w-full h-full relative'>
          <img src={assets.farmforest_6} alt="" className='w-full h-auto border-1 border-[#ADBF7E]' />
          <div className='capitalize p-1 md:p-1.5 lg:p-2.5 bg-[#799138] -translate-y-1/2 flex items-center justify-center text-white font-bold text-[10px] sm:text-sm md:text-lg lg:text-2xl'>security</div>
        </div>
        <div className='col-span-1 row-span-1 flex flex-col items-start w-full h-full relative'>
          <img src={assets.farmforest_7} alt="" className='w-full h-auto border-1 border-[#ADBF7E]' />
          <div className='capitalize p-1 md:p-1.5 lg:p-2.5 bg-[#799138] -translate-y-1/2 flex items-center justify-center text-white font-bold text-[10px] sm:text-sm md:text-lg lg:text-2xl'>Compounded Project</div>
        </div>
        <div className='col-span-1 row-span-1 flex flex-col items-start w-full h-full relative'>
          <img src={assets.farmforest_8} alt="" className='w-full h-auto border-1 border-[#ADBF7E]' />
          <div className='capitalize p-1 md:p-1.5 lg:p-2.5 bg-[#799138] -translate-y-1/2 flex items-center justify-center text-white font-bold text-[10px] sm:text-sm md:text-lg lg:text-2xl'>Golf Pavilion</div>
        </div>
        <div className='col-span-1 row-span-1 flex flex-col items-start w-full h-full relative'>
          <img src={assets.farmforest_9} alt="" className='w-full h-auto border-1 border-[#ADBF7E]' />
          <div className='capitalize p-1 md:p-1.5 lg:p-2.5 bg-[#799138] -translate-y-1/2 flex items-center justify-center text-white font-bold text-[10px] sm:text-sm md:text-lg lg:text-2xl'>Amphitheatre</div>
        </div>
      </div>
    </div>
  )
}

export default Amenities