import { assets } from '@/assets/assets';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    assets.farmforest_10,
    assets.farmforest_11,
    assets.farmforest_12,
    assets.farmforest_13,
    assets.farmforest_10,
    assets.farmforest_11,
    assets.farmforest_12,
    assets.farmforest_13,
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className='py-4 md:py-6 lg:py-8 flex flex-col gap-2 md:gap-3 lg:gap-4'>
      <div className='uppercase sticky top-0 left-0 z-10 lg:relative text-[#31511E] font-bold bg-[#F6FCDF] text-[2rem]'>Gallery</div>
      <div className='grid lg:grid-cols-[3fr_1fr] gap-5 lg:h-[35.5rem]'>
        <motion.div 
          className='grid-cols-1'
          key={selectedImage} 
          initial={{ opacity: 0, scale: 0.75 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
        >
          <img src={selectedImage} alt='' className='w-full h-auto lg:h-full border border-black' />
        </motion.div>
        <div className='grid-cols-1 flex flex-row lg:flex-col gap-4 overflow-auto'>
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt='Thumbnail'
              className='w-1/5 h-auto lg:w-full lg:h-1/5 border border-black cursor-pointer hover:opacity-75'
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
