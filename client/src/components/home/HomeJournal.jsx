import { assets } from '@/assets/assets'
import { ArrowUpRight, Play } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'

const data=[
  {
    image: assets.home_18,
    title: 'Whispers Of Bali - A serene Farmhouse Retreat In Hyderabad',
  },
  {
    image: assets.home_19,
    title: '5 farmlands near Mysuru on our site you can look at',
  },
  {
    image: assets.home_20,
    title: 'The vermicompost pioneet of Kashmir',
  },
]

const HomeJournal = () => {
  return (
    <div className='py-6 md:py-10 xl:py-14'>
      <div className="w-full flex flex-row items-end justify-between py-4 md:py-11">
        <div className="flex flex-col items-start justify-between h-full text-center md:text-left">
          <p className="uppercase text-[#859F3E] font-semibold text-xs md:text-xl lg:text-[2.5rem] leading-tight">
            The Farm
          </p>
          <p className="uppercase text-[#073D2C] font-semibold text-base md:text-3xl lg:text-[4rem] leading-tight">
            Journal
          </p>
        </div>
        <div className="w-fit flex flex-col items-start lg:items-end justify-start h-full text-start lg:text-right">
          <p className="capitalize text-[#859F3E] font-bold text-xs md:text-2xl lg:text-4xl leading-tight text-right">
            Discover Stories, tips, and trends <br /> from the land
          </p>
        </div>
      </div>
      <div className='grid grid-cols-[1fr_1fr] gap-4 md:gap-10 lg:gap-20 py-3 md:py-16'>
        <div className='col-span-1 h-full flex flex-col items-start justify-between py-4 md:py-8 lg:py-12'>
          <div className='flex flex-col gap-3 md:gap-5'>
            <p className='boska font-normal text-[#859F3E] text-base md:text-xl lg:text-[1.75rem] leading-tight uppercase'>Trending Videos</p>
            <p className='capitalize text-[#31511E] font-semibold text-xs md:text-xl lg:text-[2.5rem] leading-tight'>Wooden valley By <br /> rugvedha developers</p>
          </div>
          <div className='flex flex-col gap-0.5 md:gap-1 lg:gap-3'>
            <p className='capitalize text-[#31511E] font-semibold text-[8px] md:text-sm lg:text-2xl leading-tight'>Discover top farms and premium produce, carefully selected for quality.</p>
            <Link to={'/journal/video'}><Button title={'View All'} icon={'show'} className='!text-[#859F3E] !p-0' /></Link>
          </div>
        </div>
        <div className='col-span-1 relative'>
          <img src={assets.home_17} alt="" className='w-full h-auto md:h-[49.375rem]' />
          <div className='z-10 border-[0.1875rem] md:border-[0.25rem] lg:border-[0.3125rem] border-white rounded-full size-8 md:size-16 lg:size-24 bg-[#859F3E] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='flex items-center justify-center h-full w-full'><Play className='size-4 md:size-8 lg:size-12 text-white fill-white' /></div>
          </div>
          <div className='absolute w-full h-full top-0 left-0 bg-black/50'></div>
        </div>
      </div>
      <div className='grid grid-cols-[1fr_1fr] [&>*:nth-child(1)]:order-2 gap-4 md:gap-10 lg:gap-20 py-3 md:py-16'>
        <div className='col-span-1 h-full flex flex-col items-start justify-between py-4 md:py-8 lg:py-12'>
          <div className='flex flex-col gap-3 md:gap-5'>
            <p className='boska font-normal text-[#859F3E] text-base md:text-xl lg:text-[1.75rem] leading-tight uppercase'>Knowledge hub</p>
            <p className='capitalize text-[#31511E] font-semibold text-xs md:text-xl lg:text-[2.5rem] leading-tight'>Your Go-To Resource for <br /> Farming & Farmland <br /> Insights</p>
          </div>
          <div className='flex flex-col gap-0.5 md:gap-1 lg:gap-3'>
            <p className='capitalize text-[#31511E] font-semibold text-[8px] md:text-sm lg:text-2xl leading-tight'>Explore farming insights, market trends, and investment strategies. Gain expert knowledge to make informed decisions.</p>
            <Link to={'/journal/blog'}><Button title={'View All'} icon={'show'} className='!text-[#859F3E] !p-0' /></Link>
          </div>
        </div>
        <div className='col-span-1 bg-[#859F3E1A] py-3.5 md:py-7 lg:py-14 px-1.5 md:px-3 lg:px-6'>
          <div className='grid grid-rows-[1fr_1fr_1fr] gap-3 md:gap-7 lg:gap-11'>
            {
              data.map((item, index) => (
                <div key={index} className='bg-[#F1F8DB] p-2 md:p-4 w-full flex items-center justify-between'>
                  <div className='size-16 lg:size-42'><img src={item.image} alt="" className='size-16 lg:size-42' /></div>
                  <div className='flex flex-col h-full items-start justify-between py-1 md:py-2 lg:py-4 w-1/2 md:w-2/3'>
                    <p className='capitalize text-[#31511E] font-semibold text-[7px] md:text-sm lg:text-2xl leading-tight'>{item.title}</p>
                    <Link to={'/journal/blog/1'}><Button title={'Read More'} icon={'show'} className='!text-[#859F3E] !p-0 text-[10px]' /></Link>
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

export default HomeJournal