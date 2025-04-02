import { assets } from '@/assets/assets'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Amenities = () => {
  const { propertiesId } = useParams()
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`http://localhost:3000/get-properties/${propertiesId}`)
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

    if (propertiesId) {
      fetchProperty()
    }
  }, [propertiesId])

  if (loading) {
    return (
      <div className='py-4 md:py-6 lg:py-8 flex flex-col gap-2 md:gap-3 lg:gap-4'>
        <div className='uppercase sticky top-0 left-0 z-10 lg:relative text-[#31511E] font-bold bg-[#F6FCDF] text-[2rem]'>
          Amenities
        </div>
        <div className='grid grid-cols-[1fr_1fr_1fr] gap-3 md:gap-5 lg:gap-7'>
          {[...Array(6)].map((_, index) => (
            <div key={index} className='col-span-1 row-span-1 flex flex-col items-start w-full h-full relative'>
              <div className='w-full h-24 md:h-32 lg:h-40 bg-gray-200 animate-pulse border-1 border-[#ADBF7E]'></div>
              <div className='w-fit capitalize p-0.5 md:p-1.5 lg:p-2.5 bg-[#799138] -translate-y-1/2 flex items-center justify-center text-white font-semibold text-xs md:text-xl lg:text-2xl'>
                Loading...
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (!property || !property.amenities || property.amenities.length === 0) {
    return (
      <div className='py-4 md:py-6 lg:py-8 flex flex-col gap-2 md:gap-3 lg:gap-4'>
        <div className='uppercase sticky top-0 left-0 z-10 lg:relative text-[#31511E] font-bold bg-[#F6FCDF] text-[2rem]'>
          Amenities
        </div>
        <div className='text-[#31511E] font-normal text-center py-4'>
          No amenities available for this property
        </div>
      </div>
    )
  }

  return (
    <div className='py-4 md:py-6 lg:py-8 flex flex-col gap-2 md:gap-3 lg:gap-4'>
      <div className='uppercase sticky top-0 left-0 z-10 lg:relative text-[#31511E] font-bold bg-[#F6FCDF] text-[2rem]'>
        Amenities
      </div>
      <div className='grid grid-cols-[1fr_1fr_1fr] gap-3 md:gap-5 lg:gap-7'>
        {property.amenities.map((amenity) => (
          <div key={amenity._id || amenity.name} className='col-span-1 row-span-1 flex flex-col items-start w-full h-full relative'>
            <img 
              src={amenity.image || assets.properties_1} 
              alt={amenity.name} 
              className='w-full h-auto border-1 border-[#ADBF7E] object-cover aspect-square'
            />
            <div className='w-fit capitalize p-0.5 md:p-1.5 lg:p-2.5 bg-[#799138] -translate-y-1/2 flex items-center justify-center text-white font-semibold text-xs md:text-xl lg:text-2xl'>
              {amenity.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Amenities