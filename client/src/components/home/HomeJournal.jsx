import { assets } from '@/assets/assets'
import { ArrowUpRight, Play } from 'lucide-react'
import React from 'react'

const HomeJournal = () => {
  return (
    <div className='my-6 md:my-10 xl:my-14 old-standard-tt'>
      <div className="flex flex-col md:flex-row items-center justify-between w-full py-4 md:py-11">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-between h-full text-center md:text-left">
          <p className="uppercase text-[#859F3E] font-bold text-2xl md:text-3xl lg:text-4xl md:leading-10 lg:leading-12">
            The Farm
          </p>
          <p className="uppercase text-[#073D2C] font-bold text-4xl md:text-5xl lg:text-[4rem] md:leading-16 lg:leading-20">
            Journal
          </p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start lg:items-end justify-start h-full text-start lg:text-right">
          <p className="capitalize text-[#859F3E] font-bold text-xl md:text-2xl lg:text-4xl lg:leading-12">
            Discover Stories, tips, and trends <br /> from the land
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 md:gap-20 py-3 md:py-16'>
        <div className='col-span-1 h-full flex flex-col items-start md:justify-between gap-3 md:gap-0 py-4 md:py-12'>
          <div className='w-2/3 flex flex-col gap-3 md:gap-5'>
            <p className='uppercase text-[#859F3E] font-bold text-xl md:text-2xl leading-7 md:leading-9'>Trending Videos</p>
            <p className='capitalize text-[#31511E] font-normal text-2xl md:text-[2.5rem] leading-10 md:leading-14'>Wooden valley By rugvedha developers</p>
          </div>
          <div className='col-span-1 relative lg:hidden'>
            <img src={assets.home_17} alt="" className='w-full h-auto md:h-[49.375rem]' />
            <div className='z-10 border-[0.1875rem] md:border-[0.25rem] lg:border-[0.3125rem] border-white rounded-full size-16 md:size-20 lg:size-[6.2rem] bg-[#859F3E] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
              <div className='flex items-center justify-center h-full w-full'><Play className='size-8 md:size-12 lg:size-[3.75rem] text-white fill-white' /></div>
            </div>
            <div className='absolute w-full h-full top-0 left-0 bg-black/50'></div>
          </div>
          <div className='flex flex-col gap-2 md:gap-3'>
            <p className='capitalize text-[#31511E] font-normal text-lg md:text-2xl leading-7 md:leading-8'>Discover top farms and premium produce, carefully selected for quality.</p>
            <p className='flex gap-2 md:gap-4 text-[#859F3E] font-normal text-lg md:text-2xl leading-7 md:leading-8'>View all <ArrowUpRight className='size-6 md:size-8' /></p>
          </div>
        </div>
        <div className='col-span-1 relative hidden lg:block'>
          <img src={assets.home_17} alt="" className='w-full h-auto md:h-[49.375rem]' />
          <div className='z-10 border-[0.1875rem] md:border-[0.25rem] lg:border-[0.3125rem] border-white rounded-full size-16 md:size-20 lg:size-[6.2rem] bg-[#859F3E] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='flex items-center justify-center h-full w-full'><Play className='size-8 md:size-12 lg:size-[3.75rem] text-white fill-white' /></div>
          </div>
          <div className='absolute w-full h-full top-0 left-0 bg-black/50'></div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] md:[&>*:nth-child(1)]:order-2 gap-6 md:gap-20 py-3 md:py-16'>
        <div className='col-span-1 h-full flex flex-col items-start md:justify-between gap-3 md:gap-0 py-4 md:py-12'>
          <div className='w-[90%] flex flex-col gap-3 md:gap-5'>
            <p className='uppercase text-[#859F3E] font-bold text-xl md:text-2xl leading-7 md:leading-9'>Knowledge hub</p>
            <p className='capitalize text-[#31511E] font-normal text-2xl md:text-[2.5rem] leading-10 md:leading-14'>Your Go-To Resource for Farming & Farmland Insights</p>
          </div>
          <div className='col-span-1 bg-[#859F3E1A] py-14 px-6 lg:hidden'>
            <div className='grid grid-rows-[1fr_1fr_1fr] gap-11'>
              <div className='bg-[#F1F8DB] p-2 md:p-4 w-full flex items-center justify-between'>
                <div className='size-36 md:size-42'><img src={assets.home_18} alt="" className='size-36 md:size-42' /></div>
                <div className='flex flex-col h-full items-start justify-end gap-2 md:gap-6 w-1/2 md:w-2/3'>
                  <p className='capitalise text-[#31511E] font-normal text-xs sm:text-2xl leading-6 md:leading-8'>Whispers Of Bali - A serene Farmhouse Retreat In Hyderabad</p>
                  <p className='flex gap-2 md:gap-4 text-[#859F3E] font-normal text-xs md:text-2xl leading-6 md:leading-8'>Read Now <ArrowUpRight className='size-6 md:size-8' /></p>
                </div>
              </div>
              <div className='bg-[#F1F8DB] p-2 md:p-4 w-full flex flex-row-reverse items-center justify-between'>
                <div className='size-36 md:size-42'><img src={assets.home_19} alt="" className='size-36 md:size-42' /></div>
                <div className='flex flex-col h-full items-start justify-end gap-2 md:gap-6 w-1/2 md:w-2/3'>
                  <p className='capitalise text-[#31511E] font-normal txet-xs md:text-2xl leading-6 md:leading-8'>5 farmlands near Mysuru on our site you can look at</p>
                  <p className='flex gap-2 md:gap-4 text-[#859F3E] font-normal text-xs md:text-2xl leading-6 md:leading-8'>Read Now <ArrowUpRight className='size-6 md:size-8' /></p>
                </div>
              </div><div className='bg-[#F1F8DB] p-2 md:p-4 w-full flex items-center justify-between'>
                <div className='size-36 md:size-42'><img src={assets.home_20} alt="" className='size-36 md:size-42' /></div>
                <div className='flex flex-col h-full items-start justify-end gap-2 md:gap-6 w-1/2 md:w-2/3'>
                  <p className='capitalise text-[#31511E] font-normal txet-xs md:text-2xl leading-6 md:leading-8'>The vermicompost pioneet of Kashmir</p>
                  <p className='flex gap-2 md:gap-4 text-[#859F3E] font-normal text-xs md:text-2xl leading-6 md:leading-8'>Read Now <ArrowUpRight className='size-6 md:size-8' /></p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2 md:gap-3'>
            <p className='capitalize text-[#31511E] font-normal text-lg md:text-2xl leading-7 md:leading-8'>Explore farming insights, market trends, and investment strategies. Gain expert knowledge to make informed decisions.</p>
            <p className='flex gap-2 md:gap-4 text-[#859F3E] font-normal text-lg md:text-2xl leading-7 md:leading-8'>View all <ArrowUpRight className='size-6 md:size-8' /></p>
          </div>
        </div>
        <div className='col-span-1 bg-[#859F3E1A] py-14 px-6 hidden lg:block'>
          <div className='grid grid-rows-[1fr_1fr_1fr] gap-11'>
            <div className='bg-[#F1F8DB] p-2 md:p-4 w-full flex items-center justify-between'>
              <div className='size-36 md:size-42'><img src={assets.home_18} alt="" className='size-36 md:size-42' /></div>
              <div className='flex flex-col h-full items-start justify-end gap-2 md:gap-6 w-1/2 md:w-2/3'>
                <p className='capitalise text-[#31511E] font-normal text-xs sm:text-2xl leading-6 md:leading-8'>Whispers Of Bali - A serene Farmhouse Retreat In Hyderabad</p>
                <p className='flex gap-2 md:gap-4 text-[#859F3E] font-normal text-xs md:text-2xl leading-6 md:leading-8'>Read Now <ArrowUpRight className='size-6 md:size-8' /></p>
              </div>
            </div>
            <div className='bg-[#F1F8DB] p-2 md:p-4 w-full flex flex-row-reverse items-center justify-between'>
              <div className='size-36 md:size-42'><img src={assets.home_19} alt="" className='size-36 md:size-42' /></div>
              <div className='flex flex-col h-full items-start justify-end gap-2 md:gap-6 w-1/2 md:w-2/3'>
                <p className='capitalise text-[#31511E] font-normal txet-xs md:text-2xl leading-6 md:leading-8'>5 farmlands near Mysuru on our site you can look at</p>
                <p className='flex gap-2 md:gap-4 text-[#859F3E] font-normal text-xs md:text-2xl leading-6 md:leading-8'>Read Now <ArrowUpRight className='size-6 md:size-8' /></p>
              </div>
            </div><div className='bg-[#F1F8DB] p-2 md:p-4 w-full flex items-center justify-between'>
              <div className='size-36 md:size-42'><img src={assets.home_20} alt="" className='size-36 md:size-42' /></div>
              <div className='flex flex-col h-full items-start justify-end gap-2 md:gap-6 w-1/2 md:w-2/3'>
                <p className='capitalise text-[#31511E] font-normal txet-xs md:text-2xl leading-6 md:leading-8'>The vermicompost pioneet of Kashmir</p>
                <p className='flex gap-2 md:gap-4 text-[#859F3E] font-normal text-xs md:text-2xl leading-6 md:leading-8'>Read Now <ArrowUpRight className='size-6 md:size-8' /></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeJournal