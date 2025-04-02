import { assets } from '@/assets/assets'
import { IndianRupee } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const RecentlyOnboarded = () => {
  const [recentProperties, setRecentProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const fetchRecentProperties = async () => {
      try {
        const response = await axios.get('http://localhost:3000/list', {
          params: {
            sort: 'latest',
            status: 'published',
            limit: 3
          }
        })
        setRecentProperties(response.data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
        console.error('Error fetching recent properties:', err)
      }
    }

    fetchRecentProperties()

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (loading) {
    return (
      <div className='py-6 md:py-10 xl:py-14'>
        <div className='w-full h-12 flex items-center justify-center'>
          <p className='uppercase text-[#859F3E] font-bold text-lg md:text-2xl lg:text-4xl mb-4 md:mb-8 lg:mb-12 text-center'>
            Loading recently onboarded properties...
          </p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='py-6 md:py-10 xl:py-14'>
        <div className='w-full h-12 flex items-center justify-center'>
          <p className='uppercase text-[#859F3E] font-bold text-lg md:text-2xl lg:text-4xl mb-4 md:mb-8 lg:mb-12 text-center'>
            Error loading properties: {error}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className='py-6 md:py-10 xl:py-14'>
      <div className='w-full h-12 flex items-center justify-center'>
        <p className='uppercase text-[#859F3E] font-bold text-lg md:text-2xl lg:text-4xl mb-4 md:mb-8 lg:mb-12 text-center'>
          Recently Onboarded Properties
        </p>
      </div>
      <div className='grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] gap-x-3 md:gap-x-6 lg:gap-x-12 gap-y-6 md:gap-y-10 lg:gap-y-16'>
        {recentProperties
          .slice(0, windowWidth < 768 ? 2 : 3)
          .map((property, index) => (
            <Link
              to={`/properties/${property._id}`}
              key={index}
              className='flex flex-col items-start justify-between gap-2 md:gap-4 lg:gap-6 text-[#31511E]'
            >
              <div className='relative'>
                <img
                  src={property.banner || assets.properties_1}
                  alt={property.name}
                  className='w-full h-auto aspect-4/3 object-cover border-1 md:border-2 border-[#ADBF7E] rounded-sm md:rounded-md lg:rounded-lg'
                />
                <div className='absolute inset-0 bg-[#00000033] rounded-sm md:rounded-md lg:rounded-lg'></div>
              </div>
              <div className='flex flex-col items-start gap-2 md:gap-3 lg:gap-4'>
                <div className='flex flex-col gap-0.5 md:gap-1 lg:gap-2'>
                  <p className='capitalize font-bold text-xs md:text-lg lg:text-2xl'>
                    {property.name}
                  </p>
                  <p className='capitalize font-normal text-[0.625rem] md:text-base lg:text-xl'>
                    {property.location.locality}, {property.location.city}, {property.location.state}
                  </p>
                </div>
                <div className='flex gap-2 md:gap-4 h-full items-end'>
                  <p className='flex items-end font-bold text-xl md:text-2xl lg:text-4xl'>
                    <IndianRupee className='size-4 md:size-6 lg:size-8 -translate-y-2' />
                    {property.price.value}
                    <span className='text-base md:text-xl lg:text-3xl pl-1 md:pl-2'>
                      {property.price.unit === 'lakh' ? 'lakh' : 'cr'}
                    </span>
                  </p>
                  <p className='text-[#A0AF98] font-normal text-xs md:text-sm lg:text-base -translate-y-0.5'>
                    Onwards
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default RecentlyOnboarded