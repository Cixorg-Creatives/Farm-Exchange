import { assets } from '@/assets/assets';
import { ArrowUpRight } from 'lucide-react';
import React, { useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const data = [
  { index: '01', title: 'Targeted Lead generation', image: assets.services_1, },
  { index: '02', title: 'Easy property browsing', image: assets.services_2, },
  { index: '03', title: 'Direct Deal with buyers', image: assets.services_3, },
  { index: '04', title: 'Verified Listings', image: assets.services_4, },
];

const floatAnimation = {
  hover: {
    rotate: [-30, 10, 10, 10],
    scale: [0, 1.2, 0.95, 1],
    transition: { duration: 1, ease: "easeInOut" },
  },
  exit: {
    rotate: [10, -30, -30, -30],
    scale: [1, 0, 0.25, 0],
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const arrowAnimation = {
  hover: {
    rotate: [0, 45, 45, 45],
    scale: [0, 1, 1, 1],
    x: [20, -5, 5, 0],
    transition: { duration: 1, ease: "easeInOut" },
  },
  exit: {
    // rotate: [45, 0, 0, 0],
    scale: [1, 0, 0, 0],
    x: [0, -20, -20, -20],
    transition: { duration: 0.5, ease: "easeInOut" },
  },
}

const textAnimation = {
  hover: {
    x: [0, 20, -5, 5, 0],
    transition: { duration: 1.2, ease: "easeInOut" },
  },
  exit: {
    x: [0, 5, -5, 0],
    transition: { duration: 0.8, ease: "easeInOut" },
  }
}

const Difference = () => {
  const [hovered, setHovered] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const springX = useSpring(0, { stiffness: 100, damping: 10 });
  const springY = useSpring(0, { stiffness: 100, damping: 10 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    const x = ((clientX - (left + width / 2)) / width) * -80;
    const y = ((clientY - (top + height / 2)) / height) * -40;

    const overshootX = x * 1.2;
    const overshootY = y * 1.2;

    springX.set(overshootX);
    springY.set(overshootY);

    setTimeout(() => {
      springX.set(x);
      springY.set(y);
    }, 100);
  };

  return (
    <div className='py-6 md:py-10 xl:py-14'>
      <h1 className='uppercase text-[#073D2C]/50 font-semibold text-5xl md:text-6xl lg:text-7xl xl:text-[6.25rem] leading-tight text-right'>
        Our Various
      </h1>
      <div className='w-full flex flex-col items-end '>
        <div className='border-t-2 border-dashed border-[#859F3E] w-1/2 md:w-2/5'></div>
        <div className='w-full flex'>
          <div className='w-full flex flex-col gap-4 md:gap-8 lg:gap-12 mt-3 md:mt-5 lg:mt-7 mr-4 md:mr-6 lg:mr-8'>
            {data.map((item, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onMouseMove={handleMouseMove}
                className='relative group hover:bg-[#D9E1C3] duration-150 ease-in px-1 md:px-3 lg:px-5 py-2 md:py-4 lg:py-6 flex justify-between shadow-inner shadow-black/25 rounded-sm md:rounded-lg lg:rounded-2xl'
              >
                <div className='flex items-center gap-5 md:gap-7 lg:gap-10'>
                  <motion.p variants={textAnimation} animate={hovered === index ? "hover" : "exit"} className='boska text-[#B3B3B3] font-bold text-sm md:text-lg lg:text-2xl'>{item.index}</motion.p>
                  <motion.p variants={textAnimation} animate={hovered === index ? "hover" : "exit"} className='capitalize text-[#02542D] font-normal text-base md:text-2xl lg:text-[2.5rem]'>
                    {item.title}
                  </motion.p>
                </div>
                <motion.div
                  variants={arrowAnimation}
                  animate={hovered === index ? "hover" : "exit"}
                  className='flex items-center w-fit'>
                  <ArrowUpRight className='w-4 md:w-6 lg:w-10 h-auto' />
                </motion.div>
                <motion.div className='flex absolute inset-0 w-full justify-end items-center'>
                  <motion.img
                    src={item.image}
                    alt='Floating Icon'
                    className='w-1/6 h-auto aspect-3/4 object-cover rounded-md lg:rounded-lg -translate-x-4/5'
                    variants={floatAnimation}
                    animate={hovered === index ? "hover" : "exit"}
                    style={{ x: springX, y: springY }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
          <div className='border-r-2 border-dashed border-[#859F3E] h-48 md:h-96'></div>
        </div>
      </div>
    </div>
  );
};

export default Difference;