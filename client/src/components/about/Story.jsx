import { assets } from '@/assets/assets'
import React from 'react'

const Story = () => {
    return (
        <div className='py-6 md:py-10 xl:py-14'>
            {/* <div className='w-fit'>
                <p className='uppercase text-[#073D2C]/50 font-semibold text-5xl md:text-7xl lg:text-[6.25rem] ml-4 lg:ml-6 leading-tight text-left'>Our Story</p>
            </div> */}
            <div>
                <div className='border-t-2 border-dashed border-[#859F3E] w-1/2 md:w-2/5'></div>
                <div className='flex'>
                    <div className='border-l-2 border-dashed border-[#859F3E] h-48 md:h-96'></div>
                    <div className='pl-4 lg:pl-6 pt-4 lg:pt-6 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 lg:gap-6'>
                        <div className='col-span-1 flex flex-col items-start justify-between'>
                            <div className='relative mb-18 md:mb-24 lg:mb-28'>
                                <img src={assets.story_1} alt="" className='w-3/4 h-auto aspect-4/3 object-cover' />
                                <div className='w-4/5 absolute translate-x-1/4 -translate-y-3/4 p-[2.5%] bg-[#F6FCDF] flex items-center justify-center'>
                                    <img src={assets.story_2} alt="" className='w-full h-auto aspect-4/3 object-cover' />
                                </div>
                            </div>
                            <div className='capitalize text-[#31511E] font-medium text-xl md:text-3xl lg:text-6xl leading-tight w-4/5'>
                                The Telangana government is gearing up to conduct a comprehensive high-tech survey of agricultural lands
                            </div>
                        </div>
                        <div className='col-span-1 flex flex-col items-start gap-4 md:gap-8 lg:gap-12'>
                            <p className='capitalise text-[#31511E] font-normal text-base md:text-xl lg:text-2xl'>Telangana’s high-tech survey of agricultural lands is a transformative step toward streamlining land administration, resolving disputes, and ensuring transparency. By adopting advanced technologies and learning from successful models like Karnataka, the government aims to digitize land records and create a dispute-free ownership system. </p>
                            <p className='capitalise text-[#31511E] font-normal text-base md:text-xl lg:text-2xl'>However, the project’s success hinges on timely budget approvals, resource allocation, and effective implementation strategies.</p>
                            <p className='capitalise text-[#31511E] font-normal text-base md:text-xl lg:text-2xl'>If executed well, this initiative could serve as a model for other Indian states, paving the way for a more efficient and transparent land governance system. For more updates on agricultural land policies, farmland legalities, and real estate developments across India, stay tuned to FarmlandBazaar.</p>
                            <p className='capitalise text-[#31511E] font-normal text-base md:text-xl lg:text-2xl'>Telangana’s high-tech survey of agricultural lands is a transformative step toward streamlining land administration, resolving disputes, and ensuring transparency. By adopting advanced technologies and learning from successful models like Karnataka, the government aims to digitize land records and create a dispute-free ownership system.</p>
                            <p className='capitalise text-[#31511E] font-normal text-base md:text-xl lg:text-2xl'>However, the project’s success hinges on timely budget approvals, resource allocation, and effective implementation strategies.</p>
                            <p className='capitalise text-[#31511E] font-normal text-base md:text-xl lg:text-2xl'>If executed well, this initiative could serve as a model for other Indian states, paving the way for a more efficient and transparent land governance system. For more updates on agricultural land policies, farmland legalities, and real estate developments across India, stay tuned to FarmlandBazaar. If executed well, this initiative could serve as a model for other Indian states, paving the way for a more efficient and transparent land governance system. For more updates on agricultural land policies, farmland legalities, and real estate developments across India, stay tuned to FarmlandBazaar.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story