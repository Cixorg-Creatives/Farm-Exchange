import Developers from '@/components/home/Developers'
import Details from '@/components/farmForest/Details'
import ServicesHero from '@/components/farmForest/ServicesHero'
import React from 'react'

const FarmForest = () => {
    return (
        <div className='px-4 md:px-6 lg:px-24'>
            <ServicesHero />
            <Details />
            <Developers />
        </div>
    )
}

export default FarmForest