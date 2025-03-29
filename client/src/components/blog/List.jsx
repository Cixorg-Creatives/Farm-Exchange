import { getFullDay } from '@/common/date';
import React from 'react';
import { Link } from 'react-router-dom';

const List = ({ blogs }) => {
    return (
        <div className='my-2 md:my-4 xl:my-6 clashdisplay'>
            {/* <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-1.5 md:gap-x-3 lg:gap-x-5 gap-y-2 md:gap-y-4 lg:gap-y-6'>
                {blogs.map((blog, index) => (
                    <Link to={`/journal/blog/${blog.blog_id}`} key={index} className={`grid-cols-1 px-2 md:px-4 lg:px-8 py-2.5 md:py-5 lg:py-9 border-1 border-[#D9E1C3] flex flex-col items-start gap-1 md:gap-2 lg:gap-4 cursor-pointer`}>
                        <img src={blog.banner} alt="" className='w-full h-auto aspect-[4/3] object-cover border-1 border-[#000000]' />
                        <p className='uppercase text-[#859F3E] font-semibold text-[8px] md:text-[10px] lg:text-xs'>{getFullDay(blog.publishedAt)}</p>
                        <p className='capitalize text-[#31511E] font-medium text-sm md:text-lg lg:text-2xl'>{blog.title}</p>
                        <p className='capitalize text-[#758A68] font-normal text-xs md:text-sm lg:text-base line-clamp-3'>{blog.des}</p>
                    </Link>
                ))}
            </div> */}
        </div>
    );
};

export default List;