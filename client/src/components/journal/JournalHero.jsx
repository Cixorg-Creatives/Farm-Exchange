import { assets } from '@/assets/assets';
import React from 'react';
import { motion } from 'framer-motion';

const images = [
  assets.journal_15, assets.journal_16, assets.journal_17, assets.journal_18,
  assets.services_2, assets.home_17, assets.home_18
];

const JournalHero = () => {

  const extended_images = [...images, ...images]
  return (
    <div className='py-6 md:py-10 xl:py-14'>
      <div className='bg-[#F6FCDF] w-full px-4 md:px-6 lg:px-32 flex flex-col items-center justify-center gap-2 md:gap-4 lg:gap-8'>
        <p className='boska font-normal text-[#859F3E] text-base md:text-xl lg:text-[1.75rem] leading-tight uppercase text-center'>
          farm journal
        </p>
        <p className='uppercase text-[#859F3E] font-semibold text-lg md:text-3xl lg:text-[3.5rem] text-center'>
          &apos;&apos;Where Every Seed Tells a Story, And Every Field Holds a Memory.&apos;&apos;
        </p>
      </div>

      <div className='relative flex flex-col items-center gap-2 md:gap-3 lg:gap-4 w-full overflow-hidden'>
        <img src={assets.ellipse1} alt="" className='z-2 w-full absolute top-0 -translate-y-1/2 scale-105' />

        <div className='w-full flex items-center justify-center relative overflow-hidden'>
          <motion.div
            className="flex"
            animate={{ x: ["0%", "-175%"] }}  // Moves only halfway since images repeat
            transition={{ repeat: Infinity, repeatType: "loop", ease: "linear", duration: 30 }}  // Set a valid duration
          >
            {extended_images.map((item, index) => (
              <img key={index} src={item} alt="" className="w-1/4 h-auto aspect-2/3 object-cover px-1 md:px-2 lg:px-4" />
            ))}
          </motion.div>
        </div>

        <img src={assets.ellipse2} alt="" className='z-2 w-full absolute bottom-0 translate-y-1/2 scale-105' />
      </div>
    </div>
  );
};

export default JournalHero;
