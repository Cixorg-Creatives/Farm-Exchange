import { assets } from '@/assets/assets'
import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../Button'

const Banner = () => {
  return (
    <div className='my-6 md:my-10 xl:my-14'>
      <div className='w-full relative'>
        <img src={assets.home_21} alt="" className='w-full h-full lg:h-[90vh] object-cover' />
        <div className='absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-10 px-4 md:px-8'>
          <div className='w-full md:w-4/5 flex flex-col items-center gap-2 md:gap-4'>
            <p className='uppercase text-white text-center font-semibold text-2xl md:text-4xl lg:text-7xl leading-tight'>Unlock the Potential <br /> of your land<span className='text-xl md:text-2xl lg:text-4xl font-bold'>!</span></p>
            <p className='uppercase text-[#D9E2C3] text-center font-semibold text-sm md:text-2xl lg:text-4xl leading-snug'>Post Your Property today and connect <br /> with interested buyers!</p>
          </div>
          <div>
            <Link to={'/post-property'}><Button title='Post Property' variant='primary' icon='show'/></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner