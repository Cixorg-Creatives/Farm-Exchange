import { assets } from '@/assets/assets'
import React from 'react'
import { Link } from 'react-router-dom'

const IntrestingReads = () => {
  return (
    <div className='py-6 md:py-10 xl:py-14 old-standard-tt'>
      <div className='w-full h-12 flex items-center justify-center'>
        <p className='uppercase text-[#859F3E] font-bold text-lg md:text-2xl lg:text-4xl mb-4 md:mb-8 lg:mb-12 text-center'>Interesting Reads</p>
      </div>
      <div className='grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-x-3 md:gap-x-6 lg:gap-x-12'>
        {
          [...Array(3)].map((item, index) => (
            <Link to={'/journal/blog/1'} key={index} className='grid-cols-1 px-2 md:px-4 lg:px-8 py-2.5 md:py-5 lg:py-9 flex flex-col items-start gap-1 md:gap-2 lg:gap-4 cursor-pointer'>
              <img src={assets.journal_5} alt="" className='w-full h-auto' />
              <p className='uppercase text-black font-bold text-[8px] md:text-[10px] lg:text-xs'>Small Text</p>
              <p className='capitalize text-black font-bold text-sm md:text-lg lg:text-2xl'>Women’s Day Special: <br /> Honoring India’s Women Farmers and Their Legacy of Resilience</p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default IntrestingReads