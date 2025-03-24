import React, { useState } from 'react';
import Button from '../Button';

const List = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const items = [...Array(6)].map((_, index) => ({
        date: '12.12.2025',
        name: 'Aditya Chandra',
        email: 'aditya.anil.chandra@gmail.com',
        phone: '6202226848',
        message: "India’s agricultural landscape has long been shaped by the resilience and ingenuity of women farmers.India’s agricultural landscape has long been shaped by the resilience and ingenuity of women farmers.India’s agricultural landscape has long been shaped by the resilience and ingenuity of women farmers.India’s agricultural landscape has long been shaped by the resilience and ingenuity of women farmers.India’s agricultural landscape has long been shaped by the resilience and ingenuity of women farmers.India’s agricultural landscape has long been shaped by the resilience and ingenuity of women farmers."
    }));

    return (
        <div className='my-2 md:my-4 xl:my-6 clashdisplay'>
            <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-1.5 md:gap-x-3 lg:gap-x-5 gap-y-2 md:gap-y-4 lg:gap-y-6'>
                {items.map((item, index) => (
                    <div key={index} className='relative px-2 md:px-4 lg:px-8 py-2.5 md:py-5 lg:py-9 border border-[#D9E1C3] flex flex-col items-start gap-0.5 md:gap-[3px] lg:gap-1 cursor-pointer rounded-sm md:rounded-md lg:rounded-lg' 
                    onClick={(e) => {
                        if (!e.target.closest('.delete-button')) {
                            setSelectedItem(item);
                        }
                    }} >
                        <div className='absolute right-2 md:right-3 lg:right-4 top-2 md:top-4 lg:top-4'>
                            <Button variant='destructive' symbol='delete' icon='show' className='delete-button' />
                        </div>
                        <p className='uppercase text-[#859F3E] font-semibold text-[10px] md:text-xs lg:text-sm leading-tight'>{item.date}</p>
                        <p className='capitalize text-[#31511E] font-medium text-sm md:text-lg lg:text-2xl leading-tight'>{item.name}</p>
                        <p className='text-[#31511E] font-medium text-xs md:text-sm lg:text-base'>{item.email}</p>
                        <p className='capitalize text-[#31511E] font-medium text-xs md:text-sm lg:text-base leading-tight'>{item.phone}</p>
                        <p className='capitalize text-[#758A68] font-normal text-xs md:text-sm lg:text-base leading-tight line-clamp-3'>{item.message}</p>
                    </div>
                ))}
            </div>
            {selectedItem && (
                <div className='fixed inset-0 flex items-center justify-center backdrop-blur-sm p-4' onClick={() => setSelectedItem(null)}>
                    <div className='bg-[#F6FCDF] px-2 md:px-4 lg:px-8 py-2.5 md:py-5 lg:py-9 border border-[#D9E1C3] max-w-lg w-full flex flex-col items-start gap-0.5 md:gap-[3px] lg:gap-1 rounded-sm md:rounded-md lg:rounded-lg shadow-2xl shadow-[#D9E1C3]' onClick={(e) => e.stopPropagation()}>
                        <p className='uppercase text-[#859F3E] font-semibold text-[10px] md:text-xs lg:text-sm leading-tight'>{selectedItem.date}</p>
                        <h3 className='capitalize text-[#31511E] font-medium text-sm md:text-lg lg:text-2xl leading-tight'>{selectedItem.name}</h3>
                        <p className='text-[#31511E] font-medium text-xs md:text-sm lg:text-base'>{selectedItem.email}</p>
                        <p className='capitalize text-[#31511E] font-medium text-xs md:text-sm lg:text-base leading-tight'>{selectedItem.phone}</p>
                        <p className='capitalize text-[#758A68] font-normal text-[10px] md:text-xs lg:text-sm leading-tight'>{selectedItem.message}</p>
                        <div onClick={() => setSelectedItem(null)}><Button variant='destructive' symbol='close' icon='show' className='mt-2 md:mt-3 lg:mt-4' /></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default List;
