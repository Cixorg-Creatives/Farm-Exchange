import React, { useState } from 'react';
import Button from '../Button';

const List = () => {

    const items = [
        {
            date: '12.12.2025',
            name: 'Aditya Chandra',
            email: 'aditya.anil.chandra@gmail.com',
            phone: '6202226848',
            intrested: "Developer"
        },
        {
            date: '12.12.2025',
            name: 'Aditya Chandra',
            email: 'aditya.anil.chandra@gmail.com',
            phone: '6202226848',
            intrested: "Owner"
        },
    ];

    return (
        <div className='my-2 md:my-4 xl:my-6 clashdisplay'>
            <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-1.5 md:gap-x-3 lg:gap-x-5 gap-y-2 md:gap-y-4 lg:gap-y-6'>
                {items.map((item, index) => (
                    <div key={index} className='relative px-2 md:px-4 lg:px-8 py-2.5 md:py-5 lg:py-9 border border-[#D9E1C3] flex flex-col items-start gap-0.5 md:gap-[3px] lg:gap-1 cursor-pointer rounded-sm md:rounded-md lg:rounded-lg'>
                        <div className='absolute right-2 md:right-3 lg:right-4 top-2 md:top-4 lg:top-4'>
                            <Button variant='destructive' symbol='delete' icon='show' className='delete-button' />
                        </div>
                        <p className='uppercase text-[#859F3E] font-semibold text-[10px] md:text-xs lg:text-sm leading-tight'>{item.date}</p>
                        <p className='capitalize text-[#31511E] font-medium text-sm md:text-lg lg:text-2xl leading-tight'>{item.name}</p>
                        <p className='text-[#31511E] font-medium text-xs md:text-sm lg:text-base'>{item.email}</p>
                        <p className='capitalize text-[#31511E] font-medium text-xs md:text-sm lg:text-base leading-tight'>{item.phone}</p>
                        <p className='capitalize text-[#758A68] font-normal text-xs md:text-sm lg:text-base leading-tight line-clamp-3'>{item.intrested}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;
