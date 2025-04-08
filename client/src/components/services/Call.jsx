import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import Button from '../Button'

const Call = () => {
  return (
    <div className='py-6 md:py-10 xl:py-14'>
      <div className='bg-[#073D2C] py-3 md:py-6 lg:py-9 px-5 md:px-10 lg:px-14 flex flex-col md:flex-row md:items-end justify-between'>
        <div className='flex flex-col items-center md:items-start gap-4 md:gap-8 lg:gap-11'>
          <p className='capitalize text-[#F2F2F2] font-semibold text-xl md:text-2xl lg:text-[2.5rem] leading-tight text-center md:text-start'>Call us now for <br /> assistance with your <br /> property listing.</p>
          <a href='tel:+919876543210'><Button title='Call Now' variant='primary' icon='show' /></a>
        </div>
        <div className='md:w-3/5 flex items-end justify-center md:justify-end py-4 md:py-8 lg:py-0'>
          <p className='text-center md:text-right capitalize text-[#ADBF7E] font-normal text-xs md:text-base lg:text-xl'>Do you have the land that you wish to develop or sell, and we are here to assist. Our FarmExchange team will be delighted to assist you with your property listing process and help you make your property listing on FarmExchange quick and comfortable.</p>
        </div>
      </div>
    </div>
  )
}

export default Call