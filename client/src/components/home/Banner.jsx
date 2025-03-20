import { assets } from '@/assets/assets'
import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='my-6 md:my-10 xl:my-14'>
      <div className='w-full relative'>
        <img src={assets.home_21} alt="" className='w-full h-full lg:h-[90vh] object-cover' />
        <div className='absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-10 px-4 md:px-8'>
          <div className='w-full md:w-4/5 flex flex-col items-center gap-2 md:gap-4'>
            <p className='uppercase prata text-white text-center font-normal text-2xl md:text-4xl lg:text-7xl leading-tight lg:leading-[5rem]'>Unlock the Potential of your land<span className='text-xl md:text-2xl lg:text-4xl font-bold'>!</span></p>
            <p className='uppercase prata text-[#D9E2C3] text-center font-normal text-sm md:text-xxl lg:text-2xl leading-snug md:leading-9 lg:leading-[2.75rem] w-full md:w-3/4'><span className='text-base md:text-2xl lg:text-4xl'>P</span>ost <span className='text-base md:text-2xl lg:text-4xl'>Y</span>our <span className='text-base md:text-2xl lg:text-4xl'>P</span>roperty <span className='text-base md:text-2xl lg:text-4xl'>T</span>oday <span className='text-base md:text-2xl lg:text-4xl'>A</span>nd <span className='text-base md:text-2xl lg:text-4xl'>C</span>onnect <span className='text-base md:text-2xl lg:text-4xl'>W</span>ith <span className='text-base md:text-2xl lg:text-4xl'>I</span>nterested <span className='text-base md:text-2xl lg:text-4xl'>B</span>uyers!</p>
          </div>
          <div>
            <Link to={'/post-property'} className='group flex items-center justify-center gap-1 md:gap-2 lg:gap-3 bg-[#859F3E] w-fit px-1.5 md:px-3  lg:px-6 py-1 md:py-1.5 lg:py-3 old-standard-tt text-white text-sm md:text-lg lg:text-2xl font-bold leading-6 md:leading-7 lg:leading-8 active:scale-75 duration-300 ease-in-out rounded-md md:rounded-lg lg:rounded-xl'>
              Post Property <ArrowUpRight className='group-hover:rotate-45 w-3.5 md:size-5 lg:w-6 h-auto' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner