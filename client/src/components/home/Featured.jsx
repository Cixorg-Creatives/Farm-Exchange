"use client"
import React, { useState, useEffect } from 'react'
import { assets } from '@/assets/assets'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Button from '../button'
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion'

const features = ["Fertile Lands", "High Yield", "Sustainable Growth"]
const MAX_FEATURED_PROPERTIES = 5;

const Featured = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [featuredProperties, setFeaturedProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeaturedProperties = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_SERVER_DOMAIN}/list?category=featured&status=published&limit=${MAX_FEATURED_PROPERTIES}&sort=latest`);
                const data = await response.json();
                setFeaturedProperties(data.slice(0, MAX_FEATURED_PROPERTIES));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching featured properties:', error);
                setFeaturedProperties([]);
                setLoading(false);
            }
        };
        fetchFeaturedProperties();
    }, []);

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? featuredProperties.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) =>
            prevIndex === featuredProperties.length - 1 ? 0 : prevIndex + 1
        );
    };

    const variants = {
        enter: (direction) => ({
            x: direction * 100,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeInOut" }
        },
        exit: (direction) => ({
            x: -direction * 100,
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
        })
    };
    console.log(featuredProperties)

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
                {
                    loading || featuredProperties.length === 0 ? (
                        <Skeleton />
                    ) : (
                        <AnimatePresence custom={direction} mode='wait'>
                            <motion.div
                                key={currentIndex}
                                variants={variants}
                                initial='enter'
                                animate='center'
                                exit='exit'
                                custom={direction}
                                className='relative h-auto w-full aspect-4/5 overflow-hidden'
                            >
                                <img
                                    src={featuredProperties[currentIndex]?.banner}
                                    alt={featuredProperties[currentIndex]?.name}
                                    className='w-full h-full object-cover'
                                    onError={(e) => {
                                        e.currentTarget.src = assets.home_7;
                                    }}
                                />
                                <div className='absolute inset-0 h-full w-full bg-gradient-to-t from-[#00000080] via-[#FFFFFF00] to-[#00000080] flex flex-col justify-between p-1 md:p-2 lg:p-4'>
                                    <Link to={loading || featuredProperties.length === 0 ? '' : `/properties/${featuredProperties[currentIndex]._id}`} className='h-full'>
                                        <div className='w-full text-start uppercase impact text-xl md:text-3xl lg:text-[4rem] font-normal featured-text-stroke'>
                                            {featuredProperties[currentIndex]?.name}
                                        </div>
                                    </Link>
                                    {featuredProperties.length > 1 && (
                                        <div className='flex gap-1 md:gap-2 lg:gap-4 w-full justify-end'>
                                            <button
                                                onClick={handlePrev}
                                                disabled={currentIndex === 0}
                                                className='cursor-pointer size-6 md:size-8 lg:size-12 flex items-center justify-center bg-[#859F3E] rounded-full hover:bg-[#5e722d] active:scale-50 ease-in duration-300 disabled:bg-[#c7d3a7]'
                                            >
                                                <ChevronLeft className='text-white size-2.5 md:size-3.5 lg:size-5' />
                                            </button>
                                            <button
                                                onClick={handleNext}
                                                disabled={currentIndex === featuredProperties.length - 1}
                                                className='cursor-pointer size-6 md:size-8 lg:size-12 flex items-center justify-center bg-[#859F3E] rounded-full hover:bg-[#5e722d] active:scale-50 ease-in duration-300 disabled:bg-[#c7d3a7]'
                                            >
                                                <ChevronRight className='text-white size-2.5 md:size-3.5 lg:size-5' />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    )
                }
            </div >
        </div >
    )
}

export default Featured

const Skeleton = () => {
    return (
        <div className='relative h-auto w-full aspect-4/5 overflow-hidden animate-pulse'>
            <div className='h-full w-full bg-[#c7d3a7] flex flex-col justify-between p-1 md:p-2 lg:p-4'>
                <div className='w-3/4 h-8 md:h-12 lg:h-16 bg-[#F6FCDF] rounded'></div>
                <div className='flex gap-1 md:gap-2 lg:gap-4 w-full justify-end'>
                    <div className='size-6 md:size-8 lg:size-12 bg-[#F6FCDF] rounded-full flex items-center justify-center'>
                        <ChevronLeft color='#c7d3a7' />
                    </div>
                    <div className='size-6 md:size-8 lg:size-12 bg-[#F6FCDF] rounded-full flex items-center justify-center'>
                        <ChevronRight color='#c7d3a7' />
                    </div>
                </div>
            </div>
        </div>
    )
}