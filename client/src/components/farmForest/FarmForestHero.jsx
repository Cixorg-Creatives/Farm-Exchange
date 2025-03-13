import { assets } from '@/assets/assets'
import { Calendar, Heart, IndianRupee, MessageSquareText } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const FarmForestHero = () => {
  return (
    <div className='pt-6 md:pt-10 xl:pt-14 old-standard-tt'>
      <div className="w-full flex flex-col lg:flex-row justify-between ">
        <div className="flex flex-col items-start justify-between gap-5 w-full lg:w-2/3">
          <div className="uppercase text-[#859F3E] font-bold text-4xl md:text-5xl lg:text-[5rem] w-full lg:w-2/3">
            The Forest Farms
          </div>
          <div className="flex flex-col items-start justify-between gap-5 md:gap-7">
            <div className="flex flex-col gap-3 md:gap-4 lg:w-[43.75rem]">
              <p className="capitalize text-[#747474] font-normal text-base md:text-xl">
                This is a premium chance to gain the access of premium The Forest Farms at right destination. The property offers customizable cottages with serene landscape gardens.
              </p>
              <p className="capitalize text-[#1E1E1E] font-normal text-base md:text-xl">
                Nandi Hills, Chikballapur, Karnataka
              </p>
            </div>
            <div className="flex gap-2 md:gap-4 h-full items-end">
              <p className="flex items-end text-[#1E1E1E] font-bold text-4xl md:text-5xl">
                <IndianRupee className="text-[#1E1E1E] size-8 md:size-10 -translate-y-2" />
                1.75
                <span className="text-2xl md:text-4xl pl-1 md:pl-2">cr</span>
              </p> 
              <p className="text-[#757575] font-normal text-base md:text-xl -translate-y-0.5">Onwards</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:gap-4 w-full lg:w-[30.5rem] mt-6 lg:mt-0">
          <div className='flex flex-row lg:flex-col gap-3 md:gap-4 w-full lg:w-[30.5rem] mt-6 lg:mt-0'>
            <div className="bg-[#D9E1C3] p-3 md:p-5 w-full">
              <div className="flex items-end justify-start gap-1 capitalize">
                <p className="text-[#31511E] font-bold text-2xl md:text-4xl">10,890.0</p>
                <p className="text-[#859F3E] font-bold text-lg md:text-2xl">Sq ft</p>
              </div>
              <p className="capitalize text-[#5A744B] text-base md:text-xl font-normal">Plot Area</p>
            </div>
            <div className="bg-[#D9E1C3] p-3 md:p-5 w-[80%] lg:w-full">
              <p className="text-[#31511E] font-bold text-2xl md:text-4xl">1607</p>
              <p className="capitalize text-[#5A744B] text-base md:text-xl font-normal">Price Per sq. Ft</p>
            </div>
          </div>
          <div className="bg-[#C7D3A6] p-3 md:p-5 w-full">
            <div className="flex items-end justify-start gap-1 capitalize">
              <p className="text-[#31511E] font-bold text-2xl md:text-4xl">10,890.0</p>
              <p className="text-[#31511E] font-normal text-lg md:text-2xl">Acres</p>
            </div>
            <p className="capitalize text-[#5A744B] text-base md:text-xl font-normal">Project Area</p>
            <p className="capitalize text-[#5A744B] text-base md:text-xl font-normal">A little detailed information about individual card in 2 lines</p>
          </div>
        </div>
      </div>
      <div className='pt-12 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6'>
        <div className='col-span-1 row-span-1 h-auto'>
          <img src={assets.farmforest_1} alt="" className='w-full' />
        </div>
        <div className='flex flex-col'>
          <div className='grid grid-cols-[1fr_1fr] gap-3 md:gap-5 h-2/3'>
            <img src={assets.farmforest_2} alt="" className='w-full h-2/3' />
            <img src={assets.farmforest_3} alt="" className='w-full h-2/3' />
          </div>
          <div className='flex items-center justify-start gap-3 md:gap-6'>
            <Button className='flex items-center justify-center gap-1 md:gap-3 bg-[#859F3E] hover:bg-[#859F3E] w-40 h-10 md:w-60 md:h-14 text-white text-sm md:text-2xl font-bold leading-6 cursor-pointer'>
              Schedule Visit <Calendar className='size-4 md:size-6 pb-1' />
            </Button>
            <Button className='size-10 md:size-14 flex items-center justify-center bg-[#D9E1C3] cursor-pointer hover:bg-[#D9E1C3]'><MessageSquareText className='size-5 md:size-7 text-[#31511E]' /></Button>
            <Button className='size-10 md:size-14 flex items-center justify-center bg-[#D9E1C3] cursor-pointer hover:bg-[#D9E1C3]'><Heart className='size-5 md:size-7 text-[#31511E]' /></Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FarmForestHero