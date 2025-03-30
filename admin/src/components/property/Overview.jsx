import { assets } from '@/assets/assets'
import React from 'react'

const data = [
  {
    title: 'Property type',
    description: 'Farmland'
  },
  {
    title: 'project area',
    description: '55 acre'
  },
  {
    title: 'availability status',
    description: 'Available'
  },
]

const Overview = () => {
  return (
    <div className='py-4 md:py-6 lg:py-8 w-full flex flex-col gap-2 md:gap-3 lg:gap-4'>
      <div className='uppercase sticky top-0 left-0 z-10 lg:relative text-[#31511E] font-semibold bg-[#F6FCDF] text-[2rem]'>Overview</div>
      <div className='flex items-center justify-end'>
        <div className='relative flex flex-col lg:flex-row justify-end'>
          <img src={assets.login_1} alt="" className='w-full lg:w-[70%] h-auto' />
          <div className='hidden lg:absolute w-full top-0 lg:w-96 lg:top-1/2 lg:-translate-y-1/2 lg:right-1/2 lg:flex flex-col items-center gap-3'>
            {
              data.map((item, index) => (
                <div key={index} className='bg-[#D9E1C3] w-full px-4 py-3 lg:px-7 lg:py-4 flex items-start gap-3'>
                  <div className='size-10'><img src={assets.fence} alt="" className='h-full w-full flex items-start justify-start' /></div>
                  <div className='flex flex-col items-start gap-1'>
                    <p className='uppercase text-[#5A744B] font-medium text-base'>{item.title}</p>
                    <p className='capitalize text-[#31511E] font-semibold text-2xl'>{item.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
          <div className='lg:hidden w-full flex flex-col items-center gap-3 pt-3'>
            {
              data.map((item, index) => (
                <div key={index} className='bg-[#D9E1C3] w-full px-4 py-3 md:px-7 md:py-4 flex items-start gap-3'>
                  <div className='size-8 md:size-10'><img src={assets.fence} alt="" className='h-full w-full flex items-start justify-start' /></div>
                  <div className='flex flex-col items-start gap-0.5 md:gap-1'>
                    <p className='uppercase text-[#5A744B] font-medium text-xs md:text-sm'>{item.title}</p>
                    <p className='capitalize text-[#31511E] font-semibold text-base md:text-2xl'>{item.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview