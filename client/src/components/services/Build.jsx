import { assets } from '@/assets/assets'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Build = () => {
  return (
    <div className='py-6 md:py-10 xl:py-14 old-standard-tt'>
      <h1 className='capitalize text-[#02542D] font-normal text-base md:text-3xl lg:text-[4rem] w-1/2 lg:w-[49.8%] pb-6 md:pb-8 lg:pb-12'>Build Your future , one property at a time</h1>
      <div className='grid grid-cols-[5fr_8.8fr] gap-2 md:gap-4 lg:gap-6'>
        <div className='col-span-1 relative'>
          <img src={assets.services_2} alt="" className='w-full h-auto' />
          <div className='absolute bg-[#00000033] inset-0'></div>
        </div>
        <div className='col-span-1 h-full flex flex-col items-center justify-between'>
          <div className='grid grid-cols-[1fr_1fr] gap-2 md:gap-4 lg:gap-6'>
            <div className='bg-[#D9E1C3] col-span-1 h-full w-full flex flex-col items-start gap-2.5 md:gap-5 lg:gap-10 px-2.5 md:px-5 lg:px-10 py-4 md:py-10 lg:py-24'>
              <p className='capitalize text-[#02542D] font-normal text-[10px] lg:text-4xl'>Big things can happen in small spaces</p>
              <p className='capitalize text-[#757575] font-normal text-[5.5px] lg:text-xl'>Big things can happen in small Big things can happen in small Big things can happen in small Big things can happen in small Big things can happen in small</p>
            </div>
            <div className='bg-[#D9E1C3] col-span-1 h-full w-full flex flex-col items-start gap-0'>
              <img src={assets.services_3} alt="" className='w-full h-auto' />
              <div className='flex flex-col items-center justify-center gap-1 md:gap-3 lg:gap-5 pt-2 md:pt-4 lg:pt-8'>
                <p className='capitalize text-[#02542D] font-normal text-[8px] lg:text-[2rem] text-center w-2/3'>Big things can happen in small </p>
                <Link to={'/properties'} className='group w-fit bg-[#859F3E] flex items-center justify-center gap-1 md:gap-2 lg:gap-3 text-white font-bold text-[6px] md:text-base lg:text-2xl py-0.5 md:py-1.5 lg:py-3 px-1.5 md:px-3 lg:px-6'>Explore Properties <ArrowUpRight className='size-1.5 md:size-4 lg:size-8 group-hover:rotate-45 duration-150 ease-in' /></Link>
              </div>
            </div>
          </div>
          <div className='uppercase text-[#859F3E] font-bold text-[8px] lg:text-[1.75rem]'>Big things can happen in small Big things can happen in small Big things Big things can happen in small Big things </div>
        </div>
      </div>
    </div>
  )
}

export default Build