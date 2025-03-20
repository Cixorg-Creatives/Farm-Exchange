import { assets } from '@/assets/assets'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const data = [
  {
    index: '01',
    title: 'Targeted Lead generation',
  },
  {
    index: '02',
    title: 'Easy property browsing',
  },
  {
    index: '03',
    title: 'Direct Deal with buyers',
  },
  {
    index: '04',
    title: 'Direct Deal with buyers',
  },
]

const floatAnimation = {
  hover: {
    y: [0, -10, 0],
    rotate:[-15, -10, -15],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
}

const Difference = () => {
  return (
    <div className='py-6 md:py-10 xl:py-14 old-standard-tt'>
      <h1 className='uppercase text-[#859F3E] font-bold text-xs md:text-lg lg:text-4xl text-center'>How are we different from others</h1>
      <div className='w-full pt-6 md:pt-10 xl:pt-14 flex flex-col gap-4 md:gap-8 lg:gap-12'>
        {
          data.map((item, index) => (
            <div key={index} className='relative group hover:bg-[#D9E1C3] duration-150 ease-in px-1 md:px-3 lg:px-5 py-2 md:py-4 lg:py-6 flex justify-between shadow-inner shadow-black/25'>
              <div className='flex items-center gap-5 md:gap-7 lg:gap-10'>
                <p className='text-[#B3B3B3] font-bold text-sm md:text-lg lg:text-2xl'>{item.index}</p>
                <p className='capitalize text-[#02542D] font-normal text-base md:text-2xl lg:text-[2.5rem]'>{item.title}</p>
              </div>
              <div className='flex items-center'>
                <ArrowUpRight className='group-hover:block hidden duration-150 ease-in w-4 md:w-6 lg:w-10 h-auto' />
              </div>
              <motion.div 
                className='lg:group-hover:block hidden absolute top-1/2 -translate-y-1/2 right-1/6 w-1/4 h-auto'
                variants={floatAnimation}
                whileHover="hover"
              >
                <img src={assets.services_4} alt="" className='w-full h-auto' />
              </motion.div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Difference
