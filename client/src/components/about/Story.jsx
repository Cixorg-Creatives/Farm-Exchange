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
                            A story Of opportunity And innovation and A Vision Born from the Fields

                            </div>
                        </div>
                        <div className='col-span-1 flex flex-col items-start gap-4 md:gap-8 lg:gap-12'>
                            <p className='capitalise text-[#31511E] font-normal text-base md:text-xl lg:text-2xl'>We started at FarmExchange when we recognized that the promises that are made by the real estate world, particularly with investors, don’t fail often enough. Most of us have experienced it firsthand; buyers coming in through grand promises of ROI, timely possession, or long-term growth are met with delays, vague responses, or even silence. </p>
                            <p className='capitalise text-[#31511E] font-normal text-base md:text-xl lg:text-2xl'>Here, we spotted two kinds of buyers: those using the property as a personal house and investing buyers, who are planning to sell in a few years to make a profit. But when the timelines and returns aren’t kept, then the confidence of both groups withers away. In particular, however, the investors are given little chance. However, they don’t want to keep the property, and now selling it is daunting. Consequently, they must either entrust a local broker or turn back to the very company that let them down in the first place. Unfortunately, there were no streamlined trusted platforms to support these property owners: no transparent resale system, no good network connecting them to respectable buyers.</p>
                            <p className='capitalise text-[#31511E] font-normal text-base md:text-xl lg:text-2xl'>Then, a client told us all too true when that client had just bought, with high hopes, a property that turned out to be something different. He was let go as he was disappointed by unfulfilled commitments and failed in selling in an easy manner. And his story wasn’t unique. There we heard many more just like his.Therefore, FarmExchange was born to help property owners and investors trust and have a place to buy and sell agricultural and investment land. Our mission is to bring back transparency, control, and confidence to your investment journey.It is much more than a marketplace. It’s a movement to patch the holes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story