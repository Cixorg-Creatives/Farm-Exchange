import { assets } from '@/assets/assets';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router-dom';

const Gallery = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_SERVER_DOMAIN}/get-properties/${propertyId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch property');
        }
        const data = await response.json();
        setProperty(data.data);
        if (data.data?.gallery?.length > 0) {
          setSelectedImage(data.data.gallery[0]);
        }
      } catch (error) {
        console.error('Error fetching property:', error);
      } finally {
        setLoading(false);
      }
    };

    if (propertyId) {
      fetchProperty();
    }
  }, [propertyId]);

  if (loading) {
    return (
      <div className='py-4 md:py-6 lg:py-8 flex flex-col gap-2 md:gap-3 lg:gap-4'>
        <div className='uppercase sticky -top-7.5 left-0 z-10 lg:relative text-[#31511E] font-bold bg-[#F6FCDF] text-[2rem]'>
          Gallery
        </div>
        <div className='grid lg:grid-cols-[3fr_1fr] gap-5 lg:h-[35.5rem]'>
          <div className='w-full h-full bg-gray-200 animate-pulse border border-black'></div>
          <div className='grid-cols-1 flex flex-row lg:flex-col gap-4 overflow-auto'>
            {[...Array(5)].map((_, index) => (
              <div 
                key={index}
                className='w-1/5 h-auto lg:w-full lg:h-1/5 bg-gray-200 animate-pulse border border-black'
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!property || !property.gallery || property.gallery.length === 0) {
    return (
      <div className='py-4 md:py-6 lg:py-8 flex flex-col gap-2 md:gap-3 lg:gap-4'>
        <div className='uppercase sticky top-0 left-0 z-10 lg:relative text-[#31511E] font-bold bg-[#F6FCDF] text-[2rem]'>
          Gallery
        </div>
        <div className='text-[#31511E] font-normal text-center py-4'>
          No gallery images available for this property
        </div>
      </div>
    );
  }

  return (
    <div className='py-4 md:py-6 lg:py-8 flex flex-col gap-2 md:gap-3 lg:gap-4'>
      <div className='uppercase sticky top-0 left-0 z-10 lg:relative text-[#31511E] font-bold bg-[#F6FCDF] text-[2rem]'>
        Gallery
      </div>
      <div className='grid lg:grid-cols-[3fr_1fr] gap-5 lg:h-[35.5rem]'>
        <div className='col-span-1 w-full h-full overflow-hidden'>
          <AnimatePresence mode='wait'>
            <motion.img
              key={selectedImage}
              src={selectedImage}
              alt='Property gallery'
              className='w-full h-auto lg:h-full object-cover border-2 md:border-3 lg:border-4 rounded-sm md:rounded-md lg:rounded-lg border-[#31511E]/50'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>        
        <div className='grid-cols-1 flex flex-row lg:flex-col gap-4 overflow-auto'>
          {property.gallery.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Gallery thumbnail ${index + 1}`}
              className={`w-1/5 h-auto lg:w-full lg:h-1/5 object-cover border-1 md:border-2 lg:border-3 rounded-sm md:rounded-md lg:rounded-lg cursor-pointer hover:opacity-75 ${
                selectedImage === image ? 'border-[#000000]/50' : ''
              }`}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;