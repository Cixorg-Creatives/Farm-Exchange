import { assets } from '@/assets/assets'
import { Heart, IndianRupee, MessageSquareText } from 'lucide-react'
import React from 'react'
import Button from '../button'
import { Link } from 'react-router-dom'

const PropertyHero = () => {
    return (
        <div className='py-6 md:py-10 xl:py-14'>
            <div className="w-full flex flex-col lg:flex-row justify-between ">
                <div className="flex flex-col items-start justify-between gap-5 w-full lg:w-2/3">
                    <div className="uppercase text-[#31511E] font-semibold text-[2.5rem] md:text-6xl lg:text-[5rem] leading-tight">
                        The Forest <br /> Farms
                    </div>
                    <div className="flex flex-col items-start justify-between gap-5 md:gap-7">
                        <div className="flex flex-col gap-3 md:gap-4 lg:w-[43.75rem]">
                            <p className="capitalize text-[#31511E] font-normal text-xs md:text-base lg:text-xl">
                                This is a premium chance to gain the access of premium The Forest Farms at right destination. The property offers customizable cottages with serene landscape gardens.
                            </p>
                            <p className="capitalize text-[#31511E] font-medium text-xs md:text-base lg:text-xl">
                                Nandi Hills, Chikballapur, Karnataka
                            </p>
                        </div>
                        <div className="flex gap-2 md:gap-4 h-full items-end">
                            <p className="flex items-center text-[#1E1E1E] font-bold text-4xl md:text-5xl">
                                <IndianRupee className="text-[#1E1E1E] w-7 md:w-9 lg:w-11 h-auto " />
                                1.75
                                <span className="text-2xl md:text-4xl pl-1 md:pl-2">cr</span>
                            </p>
                            <p className="text-[#757575] font-normal text-base md:text-xl -translate-y-1">Onwards</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 md:gap-4 w-full lg:w-[30.5rem] mt-6 lg:mt-0">
                    <div className='flex flex-row lg:flex-col gap-3 md:gap-4 w-full lg:w-[30.5rem] mt-6 lg:mt-0'>
                        <div className="bg-[#D9E1C3] p-3 md:p-5 w-full">
                            <div className="flex items-end justify-start gap-1 capitalize">
                                <p className="text-[#31511E] font-semibold text-2xl md:text-3xl lg:text-4xl">10,890.0</p>
                                <p className="text-[#859F3E] font-semibold text-base md:text-xl lg:text-2xl">Sq ft</p>
                            </div>
                            <p className="capitalize text-[#5A744B] text-xs md:text-base lg:text-xl font-medium">Plot Area</p>
                        </div>
                        <div className="bg-[#D9E1C3] p-3 md:p-5 w-[80%] lg:w-full">
                            <p className="text-[#31511E] font-semibold text-2xl md:text-3xl lg:text-4xl">1607</p>
                            <p className="capitalize text-[#5A744B] text-xs md:text-base lg:text-xl font-medium">Price Per sq. Ft</p>
                        </div>
                    </div>
                    <div className="bg-[#C7D3A6] p-3 md:p-5 w-full">
                        <div className="flex items-end justify-start gap-1 capitalize">
                            <p className="text-[#31511E] font-semibold text-2xl md:text-3xl lg:text-4xl">10,890.0</p>
                            <p className="text-[#31511E] font-semibold text-base md:text-xl lg:text-2xl">Acres</p>
                        </div>
                        <p className="capitalize text-[#5A744B] text-xs md:text-base lg:text-xl font-medium">Project Area</p>
                        <p className="capitalize text-[#5A744B] text-xs md:text-base lg:text-xl font-medium">A little detailed information about individual card in 2 lines</p>
                    </div>
                </div>
            </div>
            <div className='pt-12 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6'>
                <div className='col-span-1 row-span-1 h-auto'>
                    <img src={assets.login_1} alt="" className='w-full h-auto' />
                </div>
                <div className='h-full flex flex-col items-start gap-6 md:gap-18 lg:gap-14'>
                    <div className='grid grid-cols-[1fr_1fr] gap-3 md:gap-5 h-2/3'>
                        <img src={assets.login_2} alt="" className='col-span-1 w-full h-auto' />
                        <img src={assets.blogs_1} alt="" className='col-span-1 w-full h-auto' />
                    </div>
                    <div className='flex items-center justify-start gap-3 md:gap-6'>
                        <Button title='Scheduled Visit' variant='primary' icon='show' symbol='visit' />
                        <Link to={'/contact'}><button className='size-10 md:size-14 flex items-center justify-center bg-[#D9E1C3] cursor-pointer hover:bg-[#D9E1C3] rounded-sm md:rounded-md lg:rounded-lg active:scale-75 duration-300 ease-in-out'><MessageSquareText className='size-5 md:size-7 text-[#31511E] ' /></button></Link>
                        <button className='size-10 md:size-14 flex items-center justify-center bg-[#D9E1C3] cursor-pointer hover:bg-[#D9E1C3] rounded-sm md:rounded-md lg:rounded-lg active:scale-75 duration-300 ease-in-out'><Heart className='size-5 md:size-7 text-[#31511E] ' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyHero 