"use client"
import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'

const data = [
    {
        image: assets.home_7,
        title: "Explore top farms and premium produce, handpicked for quality.",
        features: ["Fertile Lands", "High Yield", "Sustainable Growth"],
    },
    {
        image: assets.home_7,
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit!",
        features: ["High Yield", "Fertile Lands", "Sustainable Growth"],
    },
]

const Properties1 = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className='flex flex-col lg:flex-row items-center justify-between gap-5 md:gap-10 lg:gap-0'>
            <div className=''>
                <div className='flex flex-col items-start justify-center gap-5 md:gap-10 lg:gap-20 old-standard-tt'>
                    <div className='uppercase text-[#859F3E] font-bold text-lg md:text-xl lg:text-[1.75rem]'>Featured Properties</div>
                    <motion.div key={currentIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 1.0 }} className='flex flex-col gap-2'>
                        <div className='capitalize text-[#31511E] font-normal text-2xl md:text-4xl lg:text-6xl leading-tight lg:leading-[4.5rem]'>{data[currentIndex].title}</div>
                        <div className='py-2.5 capitalize text-black font-normal text-base md:text-lg lg:text-xl flex flex-col gap-2.5'>
                            {data[currentIndex].features.map((feature, index) => (
                                <p key={index}>{feature}</p>
                            ))}
                        </div>
                    </motion.div>
                    <div>
                        <Button className='flex items-center justify-center gap-3 bg-[#859F3E] w-full sm:w-72 h-12 md:h-14 lg:h-16 old-standard-tt text-white text-sm md:text-lg lg:text-2xl font-bold leading-6 md:leading-7 lg:leading-8'>
                            Explore Services <ArrowUpRight className='size-4 md:size-6 lg:size-8' />
                        </Button>
                    </div>
                </div>
            </div>
            <div className='flex flex-row-reverse lg:flex-row justify-end w-full lg:w-auto'>
                <div className='w-8 md:w-14 lg:w-20 relative'>
                    <div className='absolute lg:h-20 w-8 md:w-14 lg:w-20 bottom-0 left-0 -rotate-90 text-start uppercase impact text-3xl md:text-6xl lg:text-[4rem] font-normal custom-text-stroke flex items-center'>Harvest</div>
                </div>
                <motion.div key={currentIndex} initial={{ opacity: 0.8, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 1.0 }} className='relative w-80 h-auto lg:w-[35.1875rem] lg:h-[44rem]'>
                    <img key={currentIndex} src={data[currentIndex].image} alt="" className='w-full h-full' />
                    <div className='absolute inset-0 h-full w-full bg-gradient-to-br from-white/15 to-black/15 flex flex-col justify-between p-4'>
                        <div className='w-full text-start uppercase impact text-3xl md:text-6xl lg:text-[4rem] font-normal custom-text-stroke'>Green Haven</div>
                        <div className='flex gap-4 w-full justify-end'>
                            <button onClick={handlePrev} disabled={currentIndex === 0} className='size-10 sm:size-12 flex items-center justify-center bg-[#859F3E] rounded-full hover:bg-[#5e722d] active:scale-50 ease-in duration-300 disabled:bg-[#c7d3a7]'><ChevronLeft className='text-white size-5' /></button>
                            <button onClick={handleNext} disabled={currentIndex === data.length - 1} className='size-10 sm:size-12 flex items-center justify-center bg-[#859F3E] rounded-full hover:bg-[#5e722d] active:scale-50 ease-in duration-300 disabled:bg-[#c7d3a7]'><ChevronRight className='text-white size-5' /></button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Properties1