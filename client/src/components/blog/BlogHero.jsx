import { getFullDay } from '@/common/date';
import React from 'react';

const BlogHero = ({blog}) => {
    const { title, author_name, publishedAt, tags } = blog;
    // const { personal_info: { fullname } = {} } = author || {};

    return (
        <div className='py-6 md:py-10 xl:py-14 flex flex-col items-start'>
            <p className='uppercase text-[#31511E] font-normal text-lg md:text-2xl lg:text-[2rem]'>{getFullDay(publishedAt)}</p>
            <p className='uppercase prata text-[#31511E] font-semibold text-3xl md:text-6xl lg:text-[6.25rem] leading-tight md:leading-snug'>{title}</p>
            <div className='w-3/4 lg:w-1/2 flex flex-col lg:flex-row items-start justify-between gap-4 md:gap-8 mt-6'>
                <div className='flex flex-col items-start justify-between'>
                    <p className='capitalize text-black font-normal text-base md:text-xl lg:text-2xl'>Written By</p>
                    <p className='uppercase text-[#859F3E] font-medium text-lg md:text-2xl lg:text-[2rem]'>{author_name || "Unknown"}</p>
                </div>
                <div className='flex flex-col items-start justify-between'>
                    <p className='capitalize text-black font-normal text-base md:text-xl lg:text-2xl'>Category</p>
                    <p className='uppercase text-[#859F3E] font-medium text-lg md:text-2xl lg:text-[2rem]'>{tags?.[0] || "Uncategorized"}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogHero;