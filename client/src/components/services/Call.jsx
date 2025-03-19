import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const Call = () => {
  return (
    <div className='py-6 md:py-10 xl:py-14 old-standard-tt'>
      <div className='bg-[#073D2C] py-3 md:py-6 lg:py-9 px-5 md:px-10 lg:px-14 flex flex-col lg:flex-row items-end justify-between'>
        <div className='lg:w-2/5 flex flex-col items-center lg:items-start gap-4 md:gap-8 lg:gap-11'>
          <p className='capitalize text-[#F2F2F2] font-bold text-xl md:text-2xl lg:text-[2.5rem] leading-tight text-center lg:text-start'>Call us now for assistance with your property listing.</p>
          <a href='tel:+919876543210' className='group w-fit bg-[#859F3E] flex items-center justify-center gap-1 md:gap-2 lg:gap-3 text-white font-bold text-base md:text-lg lg:text-2xl py-1 md:py-2 lg:py-3 px-2 md:px-4 lg:px-6'>Call Now <ArrowUpRight className='size-4 md:size-6 lg:size-8 group-hover:rotate-45 duration-150 ease-in' /></a>
        </div>
        <div className='flex items-end justify-end py-4 md:py-8 lg:py-0'>
          <p className='lg:w-2/5 text-center lg:text-right capitalize text-[#ADBF7E] font-normal text-xs md:text-base lg:text-xl'>this beautiful city in Karnataka is famous for its cultural heritage, beautiful scenery, and rapid advancement.</p>
        </div>
      </div>
    </div>
  )
}

export default Call