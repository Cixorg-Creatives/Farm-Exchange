"use client"
import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Button from '../button'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const data = [
    {
        image: assets.home_7,
        title: "Green Haven",
    },
    {
        image: assets.home_5,
        title: "Forest Farms",
    },
]

const features = ["Fertile Lands", "High Yield", "Sustainable Growth"]

const Featured = () => {
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
        <div className='mb-6 md:mb-10 xl:mb-14 w-full h-full grid grid-cols-[1fr_1fr]'>
            <div className='h-full flex flex-col justify-between'>
                <div className='flex flex-col items-start justify-center gap-2.5 md:gap-3.5 lg:gap-5'>
                    <h1 className='boska font-normal text-[#859F3E] text-base md:text-xl lg:text-[1.75rem] leading-tight uppercase'>
                        Featured Properties
                    </h1>
                    <div className='capitalize text-[#31511E] font-medium text-sm md:text-3xl lg:text-6xl leading-tight lg:leading-[4.5rem]'>
                        Explore top farms <br />
                        and premium <br />
                        produce, handpicked <br />
                        for quality.
                    </div>
                    <div className='capitalize text-[#31511E] font-normal text-[8px] md:text-base lg:text-xl flex flex-col gap-0.5 md:gap-1 lg:gap-1.5'>
                        {features.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>
                <Link to='/properties?category=featured' className='mt-auto'>
                    <Button title='View More' variant='primary' icon='show' className='w-fit' />
                </Link>
            </div>
            <div className='h-full flex flex-row justify-end'>
                <div className='w-7 md:w-10 lg:w-20 relative'>
                    <div className='absolute lg:h-20 w-7 md:w-10 lg:w-20 bottom-0 left-0 -rotate-90 text-start uppercase impact text-xl md:text-3xl lg:text-[4rem] font-normal custom-text-stroke flex items-center'>
                        Harvest
                    </div>
                </div>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 1.0 }}
                    className='relative h-auto w-full'
                >
                    <img src={data[currentIndex].image} alt="" className='w-full h-full object-cover' />
                    <div className='absolute inset-0 h-full w-full bg-gradient-to-b from-[#FFFFFF00] to-[#00000080] flex flex-col justify-between p-1 md:p-2 lg:p-4'>
                        <div className='w-full text-start uppercase impact text-xl md:text-3xl lg:text-[4rem] font-normal custom-text-stroke'>
                            {data[currentIndex].title}
                        </div>
                        <div className='flex gap-1 md:gap-2 lg:gap-4 w-full justify-end'>
                            <button onClick={handlePrev} disabled={currentIndex === 0} className='size-6 md:size-8 lg:size-12 flex items-center justify-center bg-[#859F3E] rounded-full hover:bg-[#5e722d] active:scale-50 ease-in duration-300 disabled:bg-[#c7d3a7]'>
                                <ChevronLeft className='text-white size-2.5 md:size-3.5 lg:size-5' />
                            </button>
                            <button onClick={handleNext} disabled={currentIndex === data.length - 1} className='size-6 md:size-8 lg:size-12 flex items-center justify-center bg-[#859F3E] rounded-full hover:bg-[#5e722d] active:scale-50 ease-in duration-300 disabled:bg-[#c7d3a7]'>
                                <ChevronRight className='text-white size-2.5 md:size-3.5 lg:size-5' />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Featured
