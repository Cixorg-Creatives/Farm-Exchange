import { assets } from '@/assets/assets'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const data = [
  {
    image: [assets.testimonials_1, assets.testimonials_2],
    testimonial: "the industry The Most Renowned and influential developers in the industry The Most Renowned and influential developers in the industry The Most Renowned and influential",
  },
  {
    image: [assets.testimonials_2, assets.testimonials_2],
    testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repudiandae id fugit blanditiis eaque nobis illo ipsam laboriosam sequi placeat.",
  },
  {
    image: [assets.testimonials_1, assets.testimonials_1],
    testimonial: "Lorem ipsa hic porro aliquam nemo cum, eligendi ab. Pariatur nam voluptate facere animi voluptatibus quos ex similique voluptates quibusdam, laudantium, alias non quod. Quidem, optio magni.",
  },
]
const Testimonials = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = data.length;

  const handleScroll = (direction) => {
    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else if (direction === 'right' && currentIndex < totalItems - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className='py-6 md:py-10 xl:py-14'>
      <h1 className='boska font-normal text-[#859F3E] text-base md:text-xl lg:text-[1.75rem] leading-tight uppercase mb-4 md:mb-8 lg:mb-12'>What the farmland developers are saying for us</h1>
      <div className='flex flex-col items-center gap-4 md:gap-8 lg:gap-12'>
        <AnimatePresence mode='wait'>
          <motion.div key={currentIndex} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }} className='flex flex-col items-center gap-6 md:gap-12'>
            <div className='flex justify-around lg:justify-between items-center'>
              <img src={data[currentIndex].image[0]} alt="" className='w-2/5 md:w-1/5 h-auto' />
              <div className='w-[30%] hidden md:block relative'>
                <p className='capitalize text-[#31511E] font-normal text-base lg:text-xl'>{data[currentIndex].testimonial}</p>
                <img src={assets.open_double_quotes} alt="" className='absolute top-0 -translate-x-1/2 -translate-y-[130%] left-0 size-4 md:size-8 lg:size-16' />
                <img src={assets.close_double_quotes} alt="" className='absolute bottom-0 translate-x-1/2 translate-y-4/5 right-0 size-4 md:size-8 lg:size-16' />
              </div>
              <img src={data[currentIndex].image[1]} alt="" className='w-2/5 md:w-1/5 h-auto' />
            </div>
            <div className='w-4/5 md:hidden relative'>
              <p className='capitalize text-[#31511E] font-normal text-base md:text-xl'>{data[currentIndex].testimonial} </p>
              <img src={assets.open_double_quotes} alt="" className='absolute top-0 -translate-x-[125%] -translate-y-1/3 left-0 size-5 md:size-10' />
              <img src={assets.close_double_quotes} alt="" className='absolute bottom-0 translate-x-0 translate1/3 right-0 size-5 md:size-10' />
            </div>
          </motion.div>
        </AnimatePresence>
        <div className='w-full lg:w-fit flex items-center justify-center gap-3 md:gap-4 lg:gap-5'>
          <button
            className='cursor-pointer size-6 md:size-8 lg:size-12 flex items-center justify-center bg-[#859F3E] rounded-full hover:bg-[#5e722d] active:scale-50 ease-in duration-300 disabled:bg-[#D9E2C3]'
            onClick={() => handleScroll('left')}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className='text-white size-2.5 md:size-3.5 lg:size-5' />
          </button>
          <button
            className='cursor-pointer size-6 md:size-8 lg:size-12 flex items-center justify-center bg-[#859F3E] rounded-full hover:bg-[#5e722d] active:scale-50 ease-in duration-300 disabled:bg-[#D9E2C3]'
            onClick={() => handleScroll('right')}
            disabled={currentIndex === totalItems - 1}
          >
            <ChevronRight className='text-white size-2.5 md:size-3.5 lg:size-5' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials