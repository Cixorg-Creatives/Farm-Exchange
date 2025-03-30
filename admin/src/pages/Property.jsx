import Details from '@/components/property/Details'
import PropertyHero from '@/components/property/PropertyHero'
import PropertySettings from '@/components/property/PropertySettings'
import React from 'react'

const Property = () => {
    return (
        <div className='px-5 md:px-8 lg:px-12'>
            <PropertySettings />
            <PropertyHero />
            <Details />
        </div>
    )
}

export default Property