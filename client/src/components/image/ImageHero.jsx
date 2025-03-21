import { assets } from '@/assets/assets';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const ImageHero = () => {
    return (
        <div className='pb-6 md:pb-10 xl:pb-14 old-standard-tt'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='relative'>
                    <img src={assets.image_1} alt="" className='w-full h-auto object-cover hidden lg:block' />
                    <img src={assets.image_2} alt="" className='w-full h-auto object-cover lg:hidden' />
                    <div className='absolute w-full h-auto inset-0 bg-gradient-to-b from-[#859F3E4D] to-[#000000] flex items-end justify-start p-4 md:p-6 lg:p-8'>
                        <p className='w-full md:w-4/5 text-left capitalize text-[#D9E1C3] font-normal text-xs md:text-base lg:text-xl'>
                            This is a premium chance to gain the access of premium The Forest Farms at the right destination. The property offers customizable cottages with serene landscape gardens.
                        </p>
                    </div>
                </div>
                <div className='h-full col-span-1 bg-[#859F3E] px-3.5 md:px-7 lg:px-14 py-4 md:py-8 lg:py-16 flex flex-col items-start justify-between gap-3 md:gap-0'>
                    <p className='w-4/5 uppercase text-[#F6FCDF] font-bold text-4xl lg:text-[4rem]'>Cultivating Stories, One Field at a Time.</p>
                    <div className='lg:w-4/5 flex flex-col gap-1.5 md:gap-3 lg:gap-6'>
                        <p className='capitalize text-[#D9E1C3] font-normal text-xs md:text-base lg:text-xl'>This is a premium chance to gain the access of premium The Forest Farms at right destination. The property offers customizable cottages with serene landscape gardens. </p>
                        <Link to={'/contact'} className='group flex items-center justify-center gap-1 md:gap-2 lg:gap-3 bg-[#073D2C] w-fit px-2 md:px-4 lg:px-6 py-2 md:py-3 lg:py-4 old-standard-tt text-white text-xs md:text-lg lg:text-2xl font-bold leading-tight active:scale-75 duration-300 ease-in-out rounded-md md:rounded-lg lg:rounded-xl'>
                        Contact Now <ArrowUpRight className='group-hover:rotate-45 w-3.5 md:size-5 lg:w-6 h-auto' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageHero;
