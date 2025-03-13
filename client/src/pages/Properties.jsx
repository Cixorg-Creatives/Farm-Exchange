import { assets } from '@/assets/assets'
import PropertiesHero from '@/components/properties/PropertiesHero'
import PropertiesList from '@/components/properties/PropertiesList'
import React from 'react'

const Properties = () => {
    return (
        <div>
            <div className='px-4 md:px-6 lg:px-24 relative'>
                <PropertiesHero />
            </div>
            <div className='relative'>
                <div className='px-4 md:px-6 lg:px-24 relative'>
                    <PropertiesList />
                </div>
                <div className='absolute top-0 right-0'>
                    <img src={assets.properties_2} alt="" className='w-24 md:w-48 lg:w-72 h-auto' />
                </div>
            </div>
        </div>
    )
}

export default Properties