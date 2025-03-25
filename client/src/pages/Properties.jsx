import { assets } from '@/assets/assets'
import PropertiesHero from '@/components/properties/PropertiesHero'
import PropertiesList from '@/components/properties/PropertiesList'
import React from 'react'

const Properties = () => {
    return (
        <div className='px-4 md:px-6 lg:px-24 relative'>
            <PropertiesHero />
            <PropertiesList />
        </div>
    )
}

export default Properties