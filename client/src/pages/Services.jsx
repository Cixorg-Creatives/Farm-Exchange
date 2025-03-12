import Details from '@/components/services/Details'
import Developers from '@/components/services/Developers'
import ServicesHero from '@/components/services/ServicesHero'
import React from 'react'

const Services = () => {
  return (
    <div className='px-4 md:px-6 lg:px-24'>
      <ServicesHero />
      <Details />
      <Developers />
    </div>
  )
}

export default Services