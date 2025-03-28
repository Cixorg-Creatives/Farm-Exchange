import { assets } from '@/assets/assets'
import React from 'react'

const data = [
  {
    image: assets.post_2,
    step: "Sign Up Now and Unlock Exclusive Access to Our Website!",
  },
  {
    image: assets.post_3,
    step: "Add Your Details Now to Get Started!",
  },
  {
    image: assets.post_4,
    step: "upload Property",
  },
]

const Steps = () => {
  return (
    <div className='py-6 md:py-10 xl:py-14'>
      <h1 className='uppercase text-[#859F3E] font-bold text-lg md:text-2xl lg:text-4xl mb-4 md:mb-8 lg:mb-12 text-center'>How to Post Your Property In 3 Easy Steps</h1>
      <div className='grid grid-cols-[5fr_4fr_3fr] gap-3 md:gap-4 lg:gap-5'>
        {
          data.map((item, index) => (
            <div key={index} className='grid-cols-1 flex flex-col item-start justify-start gap-2 md:gap-4 lg:gap-6'>
              <img src={item.image} alt="" className='w-full h-auto' />
              <h1 className='capitalize text-[#31511E] font-medium text-[8px] md:text-base lg:text-2xl'>{item.step}</h1>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Steps