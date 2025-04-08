import { assets } from '@/assets/assets'
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'

const Build = () => {
  return (
    <div className='py-6 md:py-10 xl:py-14'>
      <h1 className='capitalize text-[#31511E] font-medium text-sm md:text-3xl lg:text-6xl leading-tight pb-2 md:pb-4 lg:pb-8'>Build Your future , <br /> one property at a time</h1>
      <div className='grid grid-cols-1 md:grid-cols-[5fr_8.8fr] gap-2 md:gap-4 lg:gap-6'>
        <div className='col-span-1 relative'>
          <img src={assets.services_2} alt="" className='w-full h-full object-cover' />
          <div className='absolute bg-[#00000033] inset-0'></div>
        </div>
        <div className='col-span-1 h-full flex flex-col items-center justify-between'>
          <div className='grid grid-cols-[1fr_1fr] gap-2 md:gap-4 lg:gap-6'>
            <div className='bg-[#D9E1C3] col-span-1 h-full w-full flex flex-col items-start justify-between gap-3 md:gap-0 px-2.5 md:px-5 lg:px-10 py-6 md:py-12 lg:py-16'>
              <p className='capitalize text-[#02542D] font-medium text-base md:text-lg lg:text-4xl leading-tight'>transforming land into legacy </p>
              <p className='capitalize text-[#757575] font-normal text-xs md:text-base lg:text-xl leading-tight'>Every piece of land at FarmExchange has the potential to create a lasting impact. Our services are for a small plot or a big acreage, and they’ll help you to reveal the true value of your property. </p>
            </div>
            <div className='bg-[#D9E1C3] col-span-1 h-full w-full flex flex-col items-center gap-2 md:gap-4 lg:gap-6'>
              <img src={assets.services_3} alt="" className='w-full h-auto aspect-3/2 object-cover' />
              <div className='flex flex-col items-center justify-center gap-2 md:gap-3.5 lg:gap-5 py-2 md:py-4 lg:py-6'>
                <p className='capitalize text-[#02542D] font-medium text-base md:text-xl lg:text-[2rem] leading-tight text-center '>Big Potential In Every Parcel </p>
                <Link to={'/properties'}><Button title='Explore Properties' variant='primary' icon='show' className='text-xs' /></Link>
              </div>
            </div>
          </div>
          <div className='boska uppercase text-[#859F3E] font-normal text-xs md:text-xl lg:text-[2rem] w-full'>The Power of Every Property <br /> Small Spaces, Big Possibilities <br /> One Field at a Time, Transform Your Future  </div>
        </div>
      </div>
    </div>
  )
}

export default Build