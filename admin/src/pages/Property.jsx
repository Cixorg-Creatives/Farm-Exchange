import Details from '@/components/property/Details'
import PropertyHero from '@/components/property/PropertyHero'
import PropertySettings from '@/components/property/PropertySettings'
import React from 'react'
import { useParams } from 'react-router-dom'

const Property = () => {
    const {propertyId} = useParams()
    return (
        <div className='px-5 md:px-8 lg:px-12'>
            <PropertySettings id={propertyId} />
            <PropertyHero />
            <Details />
        </div>
    )
}

export default Property