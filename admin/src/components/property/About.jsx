import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const About = () => {
  const { propertyId } = useParams()
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_SERVER_DOMAIN}/get-properties/${propertyId}`)
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
    return <div className="py-4 md:py-6 lg:py-8">Loading about section...</div>
  }

  if (!property) {
    return <div className="py-4 md:py-6 lg:py-8">No property information available</div>
  }

  return (
    <div className='py-4 md:py-6 lg:py-8 flex flex-col gap-2 md:gap-3 lg:gap-4'>
      <div className='uppercase sticky -top-7.5 left-0 z-10 lg:relative text-[#31511E] font-bold bg-[#F6FCDF] text-[2rem]'>
        About
      </div>
      <div className='capitalize text-[#31511E] font-normal text-xs sm:text-lg lg:text-xl'>
        {property.projectAbout || property.propertyDescription || 'No description available'}
      </div>
    </div>
  )
}

export default About