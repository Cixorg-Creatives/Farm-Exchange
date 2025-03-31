import { assets } from '@/assets/assets'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Overview = () => {
  const { propertyId } = useParams()
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`http://localhost:3000/get-properties/${propertyId}`)
        if (!response.ok) {
          throw new Error('Failed to fetch property')
        }
        const data = await response.json()
        setProperty(data.data)
      } catch (error) {
        console.error('Error fetching property:', error)
      } finally {
        setLoading(false)
      }
    }

    if (propertyId) {
      fetchProperty()
    }
  }, [propertyId])

  if (loading) {
    return <div className="py-4 md:py-6 lg:py-8">Loading overview...</div>
  }

  if (!property) {
    return <div className="py-4 md:py-6 lg:py-8">No property data available</div>
  }

  const overviewData = [
    {
      title: 'Property type',
      description: property.type,
      icon: assets.fence
    },
    {
      title: 'Project area',
      description: `${property.totalProjectArea.value} ${property.totalProjectArea.unit === 'ft' ? 'sq ft' : 'acre'}`,
      icon: assets.fence
    },
    {
      title: 'Availability status',
      description: property.availabilityStatus === 'available' ? 'Available' : 'Not Available',
      icon: assets.fence
    }
  ]

  return (
    <div className='py-4 md:py-6 lg:py-8 w-full flex flex-col gap-2 md:gap-3 lg:gap-4'>
      <div className='uppercase sticky -top-7.5 left-0 z-10 lg:relative text-[#31511E] font-semibold bg-[#F6FCDF] text-[2rem]'>
        Overview
      </div>
      <div className='flex items-center justify-end'>
        <div className='relative flex flex-col lg:flex-row justify-end'>
          <img 
            src={property.banner || assets.login_1} 
            alt="Property overview" 
            className='w-full lg:w-[70%] h-auto object-cover'
          />
          <div className='hidden lg:absolute w-full top-0 lg:w-96 lg:top-1/2 lg:-translate-y-1/2 lg:right-1/2 lg:flex flex-col items-center gap-3'>
            {overviewData.map((item, index) => (
              <div key={index} className='bg-[#D9E1C3] w-full px-4 py-3 lg:px-7 lg:py-4 flex items-start gap-3'>
                <div className='size-10'>
                  <img 
                    src={item.icon} 
                    alt="" 
                    className='h-full w-full flex items-start justify-start' 
                  />
                </div>
                <div className='flex flex-col items-start gap-1'>
                  <p className='uppercase text-[#5A744B] font-medium text-base'>{item.title}</p>
                  <p className='capitalize text-[#31511E] font-semibold text-2xl'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className='lg:hidden w-full flex flex-col items-center gap-3 pt-3'>
            {overviewData.map((item, index) => (
              <div key={index} className='bg-[#D9E1C3] w-full px-4 py-3 md:px-7 md:py-4 flex items-start gap-3'>
                <div className='size-8 md:size-10'>
                  <img 
                    src={item.icon} 
                    alt="" 
                    className='h-full w-full flex items-start justify-start' 
                  />
                </div>
                <div className='flex flex-col items-start gap-0.5 md:gap-1'>
                  <p className='uppercase text-[#5A744B] font-medium text-xs md:text-sm'>{item.title}</p>
                  <p className='capitalize text-[#31511E] font-semibold text-base md:text-2xl'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview