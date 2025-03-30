import { assets } from '@/assets/assets';
import { ArrowUpRight } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../Button';

const data = [
  {
    title: "Top 15 Farmlands for Sale near Bangalore with High ROI Potential",
    description: "This beautiful city in Karnataka is famous for its cultural heritage, beautiful scenery, and rapid advancement.",
    banner: assets.journal_7,
    blogId: "1",
  },
  {
    title: "The Story Behind Farm Exchange",
    description: "Farming has always been the backbone of civilizations, yet modern farmers face numerous challenges...",
    banner: assets.journal_8,
    blogId: "2",
  },
  {
    title: "How IoT is Revolutionizing Modern Farming",
    description: "In recent years, the integration of technology in agriculture has significantly improved efficiency, productivity, and sustainability...",
    banner: assets.journal_5,
    blogId: "3",
  },
];

const BlogsHero = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);
  const totalItems = data.length;

  // Create an extended data array for seamless looping
  const extendedData = [data[data.length - 1], ...data, data[0]];

  const startCarousel = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);
  };

  useEffect(() => {
    if (!isHovered) {
      startCarousel();
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: currentIndex * scrollRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
    
    // Handle infinite loop effect
    if (currentIndex === totalItems + 1) {
      setTimeout(() => {
        setCurrentIndex(1);
        if (scrollRef.current) {
          scrollRef.current.scrollTo({
            left: scrollRef.current.clientWidth,
            behavior: 'instant',
          });
        }
      }, 500);
    }
    if (currentIndex === 0) {
      setTimeout(() => {
        setCurrentIndex(totalItems);
        if (scrollRef.current) {
          scrollRef.current.scrollTo({
            left: totalItems * scrollRef.current.clientWidth,
            behavior: 'instant',
          });
        }
      }, 500);
    }
  }, [currentIndex, totalItems]);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index + 1);
    startCarousel();
  };

  return (
    <div className="pt-6 md:pt-10 xl:pt-14 flex flex-col gap-5 md:gap-11">
      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="h-fit flex flex-nowrap overflow-x-auto scroll-smooth snap-x snap-mandatory w-full gap-2 md:gap-3 lg:gap-4 no-scrollbar"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {extendedData.map((item, index) => (
            <div key={index} className="min-w-full snap-center relative">
              <img
                src={item.banner}
                alt=""
                className="w-full h-auto aspect-[2/1] border-4 border-[#758A68] rounded-md md:rounded-lg"
              />
              <div className="absolute inset-0 bg-black/60 rounded-md md:rounded-lg flex flex-col items-start justify-end gap-4 md:gap-6 lg:gap-8 p-2 md:p-4 lg:p-6">
                <div className='flex items-end justify-between pb-4 md:pb-8 lg:pb-12'>
                  <motion.p
                    className="w-1/2 uppercase text-white font-semibold text-base md:text-4xl lg:text-[3.5rem] leading-tight"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.title}
                  </motion.p>
                  <div className="w-2/5 flex flex-col items-end justify-end">
                    <motion.p
                      className="capitalize text-[#D9D9D9] font-semibold text-[10px] md:text-lg lg:text-2xl leading-tight text-right line-clamp-3"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.description}
                    </motion.p>
                    <Link to={`/journal/blog/${item.blogId}`}>
                      <Button title="Read More" icon="show" className="!px-0" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {data.map((_, index) => (
            <button
              key={index}
              className={`h-1 md:h-2 lg:h-3 rounded-full transition-all duration-300 ${currentIndex === index + 1 ? 'bg-[#758A68] w-2 md:w-4 lg:w-6' : 'bg-gray-400 w-1 md:w-2 lg:w-3'}`}
              onClick={() => handleIndicatorClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsHero;