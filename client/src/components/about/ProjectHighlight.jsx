"use client"
import React, { useState } from 'react';
import { assets } from '@/assets/assets';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const carouselData = [
    {
        image: assets.about_5,
        title: "Pool side partying playzones",
        description:
            "A luxurious weekend home in a pristine landscape in the countryside. No more congested spaces. A luxurious weekend home in a pristine landscape in the countryside. No more congested spaces.A luxurious weekend home in a pristine landscape in the countryside. No more congested spaces.",
    },
    {
        image: assets.video_1,
        title: "Expansive Greenery & Serenity",
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae similique iste sunt? Adipisci inventore explicabo eligendi, modi quod numquam quae ullam, nulla quia voluptas deleniti sunt officia atque architecto ipsa nobis nisi facere aspernatur vitae at. Aspernatur et quos atque.",
    },
];

const ProjectHighlight = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className='flex flex-col lg:flex-row items-start justify-center gap-4 lg:gap-11 py-6 md:py-10 xl:py-14'>
            <div className='flex flex-col items-start justify-start gap-0.5 lg:gap-5 w-full sm:w-[90%] md:w-[80%] lg:w-[495px]'>
                <p className='boska font-normal text-[#859F3E] text-base md:text-xl lg:text-[1.75rem] leading-tight uppercase text-left'>Farm Exchange</p>
                <h1 className='font-medium text-[#31511E] text-xl md:text-3xl lg:text-6xl leading-tight'>Project Highlights</h1>
            </div>
            <div className='w-full lg:w-3/5'>
                <div className='relative'>
                    <div className='w-full h-auto'>
                        <motion.div key={currentIndex} className='relative' initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 1.0 }} >
                            <img key={currentIndex} src={carouselData[currentIndex].image} alt="" className='w-full h-auto' />
                            <div className='absolute inset-0 bg-[#073D2C33]'></div>
                        </motion.div>
                    </div>
                    <div className='absolute w-full h-full lg:w-4/5 lg:h-3/5 bg-[#073D2C]/80 lg:bg-[#073D2C] inset-0 lg:translate-1/2 lg:-translate-x-[90%] p-2 md:p-4 lg:p-8 flex flex-col items-center lg:items-start justify-between'>
                        <motion.div key={currentIndex} className='flex flex-col gap-6' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 1.0 }}>
                            <p className='uppercase text-[#F6FCDF] font-normal text-base md:text-2xl md:text-[2rem] lg:text-3xl leading-tight'>{carouselData[currentIndex].title}</p>
                            <p className='text-[#D4E0AF] font-normal text-xs md:text-base lg:text-xl leading-tight'>{carouselData[currentIndex].description}</p>
                        </motion.div>
                        <div className='flex gap-4 w-full items-start'>
                            <button onClick={handlePrev} disabled={currentIndex === 0} className='size-10 sm:size-12 flex items-center justify-center bg-[#859F3E] rounded-full hover:bg-[#5e722d] active:scale-50 ease-in duration-300 disabled:bg-[#c7d3a7]'><ChevronLeft className='text-white size-5' /></button>
                            <button onClick={handleNext} disabled={currentIndex === carouselData.length - 1} className='size-10 sm:size-12 flex items-center justify-center bg-[#859F3E] rounded-full hover:bg-[#5e722d] active:scale-50 ease-in duration-300 disabled:bg-[#c7d3a7]'><ChevronRight className='text-white size-5' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectHighlight