import { IndianRupee } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'

const CitiesList = ({ cityImages, city }) => {
    return (
        <div className='flex flex-col items-start mt-6 md:mt-8 lg:mt-10'>    
            <div className='col-span-1 grid grid-cols-[5fr_4fr] gap-2 md:gap-3 lg:gap-5'>
                {
                    cityImages.map((item, index) => (
                        <div className='col-span-1 flex flex-col items-start gap-2 md:gap-4 lg:gap-6'>
                            <div key={index} className='relative'>
                                <img src={cityImages[index]} alt="" className='w-full h-auto' />
                                <div className='absolute inset-0 bg-[#31511E4D]'></div>
                            </div>
                            <div className='flex flex-col items-start gap-0.5 md:gap-1 lg:gap-2'>
                                <div className='flex items-end'>
                                    <IndianRupee className='h-5 md:h-8 lg:h-11 w-auto text-[#1E1E1E] py-1 md:py-1.5 lg:py-2' />
                                    <p className='text-[#1E1E1E] font-semibold text-sm md:text-xl lg:text-4xl mr-0.5 md:mr-1 lg:mr-1.5'>1.75</p>
                                    <p className='text-[#1E1E1E] font-semibold text-xs md:text-lg lg:text-3xl mr-0.5 md:mr-1 lg:mr-1.5'>cr</p>
                                    <p className='text-[#747474] font-normal text-[8px] md:text-xs lg:text-base my-0.5 md:my-[3px] lg:my-1 mr-0.5 md:mr-1 lg:mr-1.5'>Onwards</p>
                                </div>
                                <p className='capitalize text-[#1E1E1E] font-medium text-[9px] md:text-sm lg:text-xl'>Nandi Hills, Chikballapur, Karnataka</p>
                                <p className='capitalize text-[#747474] font-medium text-[7px] md:text-xs lg:text-base'>Project Area - 55 acres</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Link to={`/properties?city=${city.toLowerCase()}`} className='w-full flex items-center justify-end'><Button title='View All' variant='primary' icon='show' /></Link>
        </div>
    )
}

export default CitiesList