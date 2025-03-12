import { assets } from '@/assets/assets'
import React from 'react'

const Overview = () => {
  return (
    <div className='py-4 md:py-6 lg:py-8 w-full flex flex-col gap-2 md:gap-3 lg:gap-4'>
      <div className='uppercase text-[#31511E] font-bold text-lg sm:text-xl md:text-2xl lg:text-[2rem]'>Overview</div>
      <div className='flex items-center justify-end'>
        <div className='relative flex flex-col lg:flex-row justify-end'>
          <img src={assets.farmforest_1} alt="" className='w-full lg:w-[70%] h-auto' />
          <div className='hidden lg:absolute w-full top-0 lg:w-96 lg:top-1/2 lg:-translate-y-1/2 lg:right-1/2 lg:flex flex-col items-center gap-3'>
            <div className='bg-[#D9E1C3] w-full px-4 py-3 lg:px-7 lg:py-4 flex items-start gap-3'>
              <div><img src={assets.fence} alt="" className='size-10 h-full w-full flex items-start justify-start' /></div>
              <div className='flex flex-col items-start gap-1.5'>
                <p className='uppercase text-[#31511E] font-bold text-base'>Property type</p>
                <p className='capitalize text-[#31511E] font-bold text-2xl'>Farmland</p>
              </div>
            </div>
            <div className='bg-[#D9E1C3] w-full px-4 py-3 lg:px-7 lg:py-4 flex items-start gap-3'>
              <div><img src={assets.fence} alt="" className='size-10 h-full w-full flex items-start justify-start' /></div>
              <div className='flex flex-col items-start gap-1.5'>
                <p className='uppercase text-[#31511E] font-bold text-base'>project area</p>
                <p className='capitalize text-[#31511E] font-bold text-2xl'>55 acre</p>
              </div>
            </div>
            <div className='bg-[#D9E1C3] w-full px-4 py-3 lg:px-7 lg:py-4 flex items-start gap-3'>
              <div><img src={assets.fence} alt="" className='size-10 h-full w-full flex items-start justify-start' /></div>
              <div className='flex flex-col items-start gap-1.5'>
                <p className='uppercase text-[#31511E] font-bold text-base'>availability status</p>
                <p className='capitalize text-[#31511E] font-bold text-2xl'>Available</p>
              </div>
            </div>
          </div>
          <div className='lg:hidden w-full flex flex-col items-center gap-3 pt-3'>
            <div className='bg-[#D9E1C3] w-full px-4 py-3 lg:px-7 lg:py-4 flex items-start gap-3'>
              <div><img src={assets.fence} alt="" className='size-10 h-full w-full flex items-start justify-start' /></div>
              <div className='flex flex-col items-start gap-1.5'>
                <p className='uppercase text-[#31511E] font-bold text-base'>Property type</p>
                <p className='capitalize text-[#31511E] font-bold text-2xl'>Farmland</p>
              </div>
            </div>
            <div className='bg-[#D9E1C3] w-full px-4 py-3 lg:px-7 lg:py-4 flex items-start gap-3'>
              <div><img src={assets.fence} alt="" className='size-10 h-full w-full flex items-start justify-start' /></div>
              <div className='flex flex-col items-start gap-1.5'>
                <p className='uppercase text-[#31511E] font-bold text-base'>project area</p>
                <p className='capitalize text-[#31511E] font-bold text-2xl'>55 acre</p>
              </div>
            </div>
            <div className='bg-[#D9E1C3] w-full px-4 py-3 lg:px-7 lg:py-4 flex items-start gap-3'>
              <div><img src={assets.fence} alt="" className='size-10 h-full w-full flex items-start justify-start' /></div>
              <div className='flex flex-col items-start gap-1.5'>
                <p className='uppercase text-[#31511E] font-bold text-base'>availability status</p>
                <p className='capitalize text-[#31511E] font-bold text-2xl'>Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview