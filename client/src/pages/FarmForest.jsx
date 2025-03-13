import Developers from '@/components/home/Developers'
import Details from '@/components/farmForest/Details'
import React from 'react'
import FarmForestHero from '@/components/farmForest/FarmForestHero'

const FarmForest = () => {
    return (
        <div className='px-4 md:px-6 lg:px-24'>
            <FarmForestHero />
            <Details />
            <Developers />
        </div>
    )
}

export default FarmForest