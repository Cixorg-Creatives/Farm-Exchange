import { IndianRupee } from 'lucide-react'
import React from 'react'

const CitiesList = ({cityImages,city}) => {
    return (
        <div className='col-span-1 grid grid-cols-[5fr_4fr] gap-2 md:gap-3 lg:gap-5'>
            {
                cityImages.map((item, index) => (
                    <div className='col-span-1 flex flex-col items-start gap-2 md:gap-4 lg:gap-6'>
                        <div key={index} className='relative'>
                            <img src={cityImages[index]} alt="" className='w-full h-auto' />
                            <div className='absolute inset-0 bg-[#31511E4D]'></div>
                        </div>
                        <div className='flex flex-col items-start gap-2 md:gap-3 lg:gap-4'>
                            <div className="flex gap-1 md:gap-2 h-full items-end">
                                <p className="flex items-end text-[#1E1E1E] font-bold text-sm md:text-xl lg:text-4xl">
                                    <IndianRupee className="text-[#1E1E1E] size-3 md:size-4 lg:size-8 -translate-y-1.5 lg:-translate-y-2" />
                                    1.75
                                    <span className="text-xs md:text-xl lg:text-3xl pl-1 md:pl-2">cr</span>
                                </p>
                                <p className="text-[#757575] font-normal text-[8px] md:text-sm lg:text-base -translate-y-[1px] lg:-translate-y-0.5">Onwards</p>
                            </div>
                            <div className='flex flex-col gap-0.5 md:gap-1 lg:gap-2'>
                                <p className='capitalize text-[#1E1E1E] font-normal text-[8px] md:text-sm lg:text-xl'>Nandi Hills, Chikballapur, {city}</p>
                                <p className='capitalize text-[#747474] font-normal text-[7px] md:text-xs lg:text-base'>Project Area - 55 Acre</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CitiesList