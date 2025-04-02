import { assets } from '@/assets/assets';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

const Gallery = () => {
  const { propertiesId } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`http://localhost:3000/get-properties/${propertiesId}`);
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

    if (propertiesId) {
      fetchProperty();
    }
  }, [propertiesId]);

  if (loading) {
    return (
      <div className='py-4 md:py-6 lg:py-8 flex flex-col gap-2 md:gap-3 lg:gap-4'>
        <div className='uppercase sticky top-0 left-0 z-10 lg:relative text-[#31511E] font-bold bg-[#F6FCDF] text-[2rem]'>
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
        {selectedImage ? (
          <motion.div 
            className='grid-cols-1'
            key={selectedImage} 
            initial={{ opacity: 0, scale: 0.75 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <img 
              src={selectedImage} 
              alt='Property gallery' 
              className='w-full h-auto lg:h-full object-cover border border-black' 
            />
          </motion.div>
        ) : (
          <div className='w-full h-full bg-gray-200 border border-black'></div>
        )}
        
        <div className='grid-cols-1 flex flex-row lg:flex-col gap-4 overflow-auto'>
          {property.gallery.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Gallery thumbnail ${index + 1}`}
              className={`w-1/5 h-auto lg:w-full lg:h-1/5 object-cover border border-black cursor-pointer hover:opacity-75 ${
                selectedImage === image ? 'ring-2 ring-[#799138]' : ''
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