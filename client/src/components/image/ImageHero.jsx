import { assets } from '@/assets/assets';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';

const ImageHero = () => {
    return (
        <div className='pb-6 md:pb-10 xl:pb-14 old-standard-tt'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='relative'>
                    <img src={assets.image_1} alt="" className='w-full h-auto object-cover hidden lg:block' />
                    <img src={assets.image_2} alt="" className='w-full h-auto object-cover lg:hidden' />
                    <div className='absolute w-full h-auto inset-0 bg-gradient-to-b from-[#859F3E4D] to-[#000000] flex items-end justify-start p-4 md:p-6 lg:p-8'>
                        <p className='w-full text-left capitalize text-[#D9E1C3] font-medium text-xs md:text-base lg:text-xl'>
                            This is a premium chance to gain the access of premium The<br /> Forest Farms at the right destination. The property offers<br /> customizable cottages with serene landscape gardens.
                        </p>
                    </div>
                </div>
                <div className='h-full col-span-1 bg-[#859F3E] px-3.5 md:px-7 lg:px-14 py-4 md:py-8 lg:py-16 flex flex-col items-start justify-between gap-3 md:gap-0'>
                    <p className=' uppercase text-[#F6FCDF] font-semibold text-4xl lg:text-[4rem]'>Cultivating <br /> Stories, One <br /> Field at a Time.</p>
                    <div className='flex flex-col gap-1.5 md:gap-3 lg:gap-6'>
                        <p className='capitalize text-[#F6FCDF] font-normal text-xs md:text-base lg:text-xl'>This is a premium chance to gain the access of <br /> premium The Forest Farms at right destination. The <br /> property offers customizable cottages with serene <br /> landscape gardens. </p>
                        <Link to={'/contact'}><Button title='Contact Now' variant='ternary' icon='show' /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageHero;
