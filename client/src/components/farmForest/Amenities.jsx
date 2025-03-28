import { assets } from '@/assets/assets'
import React from 'react'

const data=[
  {
    id:1,
    title:'Club House',
    image:assets.farmforest_4
  },
  {
    id:2,
    title:'Playing area',
    image:assets.farmforest_5
  },
  {
    id:3,
    title:'Security',
    image:assets.farmforest_6
  },
  {
    id:4,
    title:'Compounded Project',
    image:assets.farmforest_7
  },
  {
    id:5,
    title:'Golf Pavilion',
    image:assets.farmforest_8
  },
  {
    id:6,
    title:'Amphitheatre',
    image:assets.farmforest_9
  },
]

const Amenities = () => {
  return (
    <div className='py-4 md:py-6 lg:py-8 flex flex-col gap-2 md:gap-3 lg:gap-4'>
      <div className='uppercase sticky top-0 left-0 z-10 lg:relative text-[#31511E] font-bold bg-[#F6FCDF] text-[2rem]'>Amenities</div>
      <div className='grid grid-cols-[1fr_1fr_1fr] gap-3 md:gap-5 lg:gap-7'>
        {
          data.map((item)=>{
            return(
              <div key={item.id} className='col-span-1 row-span-1 flex flex-col items-start w-full h-full relative'>
                <img src={item.image} alt="" className='w-full h-auto border-1 border-[#ADBF7E]' />
                <div className='w-fit capitalize p-0.5 md:p-1.5 lg:p-2.5 bg-[#799138] -translate-y-1/2 flex items-center justify-center text-white font-semibold text-xs md:text-xl lg:text-2xl'>{item.title}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Amenities