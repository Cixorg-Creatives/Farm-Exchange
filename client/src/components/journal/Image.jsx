import { assets } from '@/assets/assets'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const front = [assets.journal_15, assets.journal_16, assets.journal_17]
const back = [assets.journal_19, assets.journal_22]

const Image = () => {
  return (
    <div className='py-6 md:py-10 lg:py-14 old-standard-tt flex flex-col gap-5 lg:gap-10'>
      <div className='flex items-center justify-center'>
        <div className='relative w-4/5 md:w-3/4 lg:w-[64%] pl-2 md:pl-4 lg:pl-8'>
          <p className='uppercase text-[#859F3E] font-bold text-lg md:text-7xl lg:text-[3.5rem]'>Capturing Nature's Essence, One Field at a Time.</p>
          <img src={assets.open_double_quotes} alt="" className='absolute top-0 -translate-x-full -translate-y-1/3 left-0 size-5 md:size-10 lg:size-20' />
          <img src={assets.close_double_quotes} alt="" className='absolute bottom-0 translate-x-full translate-y-1/3 right-0 size-5 md:size-10 lg:size-20' />
        </div>
      </div>
      <div className='relative'>
        <div className='w-full flex items-center justify-evenly'>
          <div className='w-[27.5%] flex flex-col items-center gap-11'>
            {
              back.map((item, index) => (
                <div key={index} className='relative'>
                  <img src={back[index]} alt="" className='w-full h-auto border-2 lg:border-4 border-[#859F3E]' />
                  <div className='absolute inset-0 bg-[#00000033]'></div>
                </div>
              ))
            }</div>
          <div className='relative w-[27.5%]'>
            <img src={assets.journal_18} alt="" className='w-full h-auto border-2 lg:border-4 border-[#859F3E]' />
            <div className='absolute inset-0 bg-[#00000033]'></div>
          </div>
        </div>
        <div className='absolute inset-0 flex items-center justify-between'>
          {
            front.map((item, index) => (
              <div key={index} className='relative w-[22.5%]'>
                <img src={front[index]} alt="" className='w-full h-auto border-2 lg:border-4 border-[#859F3E]' />
                <div className='absolute inset-0 bg-[#00000033]'></div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='px-4 md:px-6 lg:px-24 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 md:gap-4 lg:gap-0'>
        <div className='lg:w-[53%] capitalize text-[#747474] font-normal text-xs lg:text-xl'>Experience the beauty of nature through our farmland gallery. From lush green fields to golden harvests, every frame tells a story of hard work and dedication. Witness the harmony between the earth and those who nurture it. Explore the essence of farming, captured in every moment.</div>
        <Link to={'/services'}>
          <Button className='group rounded-none flex items-center justify-center gap-1 md:gap-2 lg:gap-3 bg-[#859F3E] w-36 h-10 md:w-56 md:h-16 lg:w-72 lg:h-20 old-standard-tt text-white text-sm md:text-lg lg:text-2xl font-bold leading-tight'>
            Explore Services <ArrowUpRight className='group-hover:rotate-45 duration-150 ease-in size-4 md:size-6 lg:size-8' />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Image