import { assets } from '@/assets/assets'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className='py-6 md:py-10 lg:py-14 old-standard-tt'>
      <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 md:gap-20'>
        <div className='col-span-1 h-full flex flex-col items-start gap-3 md:gap-6 lg:gap-9 py-4 md:py-16'>
          <div className='w-[90%] flex flex-col gap-3 md:gap-5'>
            <p className='uppercase text-[#859F3E] font-bold text-lg md:text-xl lg:text-[1.75rem]'>Our blogs</p>
            <p className='capitalize text-[#31511E] font-normal text-2xl md:text-4xl lg:text-6xl leading-tight'>Explore Insights and Stories,<br />Rooted in the World of Farming.</p>
          </div>
          <div className='col-span-1 bg-[#859F3E1A] py-7 px-3 md:py-10 md:px-4 lg:hidden'>
            <div className='grid grid-rows-[1fr_1fr_1fr] gap-11'>
              <div className='bg-[#F1F8DB] p-2 md:p-4 w-full flex items-center justify-between'>
                <div className='size-36 md:size-42'><img src={assets.home_18} alt="" className='size-36 md:size-42' /></div>
                <div className='group flex flex-col h-full items-start justify-end gap-6 w-1/2 md:w-2/3'>
                  <p className='capitalise text-[#31511E] font-normal text-xs sm:text-2xl leading-tight'>Whispers Of Bali - A serene Farmhouse Retreat In Hyderabad</p>
                  <Link to={'/journal/blog/1'} className='flex items-center gap-1 md:gap-4 text-[#859F3E] font-normal text-xs md:text-2xl leading-6 md:leading-8'>Read Now <ArrowUpRight className='size-3 md:size-8' /></Link>
                </div>
              </div>
              <div className='bg-[#F1F8DB] p-2 md:p-4 w-full flex flex-row-reverse items-center justify-between'>
                <div className='size-36 md:size-42'><img src={assets.home_19} alt="" className='size-36 md:size-42' /></div>
                <div className='group flex flex-col h-full items-start justify-end gap-6 w-1/2 md:w-2/3'>
                  <p className='capitalise text-[#31511E] font-normal text-xs md:text-2xl leading-tight'>5 farmlands near Mysuru on our site you can look at</p>
                  <Link to={'/journal/blog/1'} className='flex items-center gap-1 md:gap-4 text-[#859F3E] font-normal text-xs md:text-2xl leading-6 md:leading-8'>Read Now <ArrowUpRight className='size-3 md:size-8' /></Link>
                </div>
              </div><div className='bg-[#F1F8DB] p-2 md:p-4 w-full flex items-center justify-between'>
                <div className='size-36 md:size-42'><img src={assets.home_20} alt="" className='size-36 md:size-42' /></div>
                <div className='group flex flex-col h-full items-start justify-end gap-6 w-1/2 md:w-2/3'>
                  <p className='capitalise text-[#31511E] font-normal text-xs md:text-2xl leading-tight'>The vermicompost pioneet of Kashmir</p>
                  <Link to={'/journal/blog/1'} className='flex items-center gap-1 md:gap-4 text-[#859F3E] font-normal text-xs md:text-2xl leading-6 md:leading-8'>Read Now <ArrowUpRight className='size-3 md:size-8' /></Link>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2 md:gap-3'>
            <p className='capitalize text-[#747474] font-normal text-sm md:text-base lg:text-xl'>Dive into the world of farming with our curated blogs. From sustainable practices and crop management tips to inspiring farmer stories and the latest agricultural trends, we’ve got it all covered.</p>
          </div>
        </div>
        <div className='col-span-1 bg-[#859F3E1A] py-14 px-6 hidden lg:block'>
          <div className='grid grid-rows-[1fr_1fr_1fr] gap-11'>
            <div className='bg-[#F1F8DB] p-2 md:p-4 w-full flex items-center justify-between'>
              <div className='size-36 md:size-42'><img src={assets.home_18} alt="" className='size-36 md:size-42' /></div>
              <div className='group flex flex-col h-full items-start justify-end gap-2 md:gap-6 w-1/2 md:w-2/3'>
                <p className='capitalise text-[#31511E] font-normal text-xs sm:text-2xl leading-6 md:leading-8'>Whispers Of Bali - A serene Farmhouse Retreat In Hyderabad</p>
                <Link to={'/journal/blog/1'} className='flex items-center gap-2 md:gap-4 text-[#859F3E] font-normal text-xs md:text-2xl leading-6 md:leading-8'>Read Now <ArrowUpRight className='size-7 group-hover:rotate-45' /></Link>
              </div>
            </div>
            <div className='bg-[#F1F8DB] p-2 md:p-4 w-full flex flex-row-reverse items-center justify-between'>
              <div className='size-36 md:size-42'><img src={assets.home_19} alt="" className='size-36 md:size-42' /></div>
              <div className='group flex flex-col h-full items-start justify-end gap-2 md:gap-6 w-1/2 md:w-2/3'>
                <p className='capitalise text-[#31511E] font-normal txet-xs md:text-2xl leading-6 md:leading-8'>5 farmlands near Mysuru on our site you can look at</p>
                <Link to={'/journal/blog/1'} className='flex items-center gap-2 md:gap-4 text-[#859F3E] font-normal text-xs md:text-2xl leading-6 md:leading-8'>Read Now <ArrowUpRight className='size-7 group-hover:rotate-45' /></Link>
              </div>
            </div><div className='bg-[#F1F8DB] p-2 md:p-4 w-full flex items-center justify-between'>
              <div className='size-36 md:size-42'><img src={assets.home_20} alt="" className='size-36 md:size-42' /></div>
              <div className='group flex flex-col h-full items-start justify-end gap-2 md:gap-6 w-1/2 md:w-2/3'>
                <p className='capitalise text-[#31511E] font-normal txet-xs md:text-2xl leading-6 md:leading-8'>The vermicompost pioneet of Kashmir</p>
                <Link to={'/journal/blog/1'} className='flex items-center gap-2 md:gap-4 text-[#859F3E] font-normal text-xs md:text-2xl leading-6 md:leading-8'>Read Now <ArrowUpRight className='size-7 group-hover:rotate-45' /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog