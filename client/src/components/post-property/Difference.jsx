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
    rotate: [-10, -5, -10],
    y: [0, 50, 0],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
}

const Difference = () => {
  return (
    <div className='py-6 md:py-10 xl:py-14'>
      <h1 className='uppercase text-[#859F3E] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center'>How are we different from others</h1>
      <div className='w-full pt-6 md:pt-10 xl:pt-14 flex flex-col gap-4 md:gap-8 lg:gap-12'>
        {
          data.map((item, index) => (
            <motion.div key={index} className='relative group hover:bg-[#D9E1C3] duration-150 ease-in px-1 md:px-3 lg:px-5 py-2 md:py-4 lg:py-6 flex justify-between shadow-inner shadow-black/25 rounded-sm md:rounded-lg lg:rounded-2xl'>
              <div className='flex items-center gap-5 md:gap-7 lg:gap-10'>
                <p className='boska text-[#B3B3B3] font-bold text-sm md:text-lg lg:text-2xl'>{item.index}</p>
                <p className='capitalize text-[#02542D] font-normal text-base md:text-2xl lg:text-[2.5rem]'>{item.title}</p>
              </div>
              <div className='flex items-center'>
                <ArrowUpRight className='group-hover:block hidden duration-150 ease-in w-4 md:w-6 lg:w-10 h-auto' />
              </div>
              <motion.div
                className='lg:group-hover:block hidden absolute inset-0'
                variants={floatAnimation}
                whileHover="hover"
              >
                <div className='w-full flex justify-end items-center'><img src={assets.services_4} alt="" className='w-1/4 h-auto -translate-y-1/6 -translate-x-3/5' /></div>
              </motion.div>
            </motion.div>
          ))
        }
      </div>
    </div>
  )
}

export default Difference
