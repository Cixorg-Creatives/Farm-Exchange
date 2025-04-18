import { assets } from '@/assets/assets';
import { ArrowUpRight } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import axios from 'axios';
// import { blogStructure } from '@/pages/Blog';

const Skeleton = ({ index }) => {
  return (
    <div key={index} className="min-w-full snap-center relative">
      <div className="w-full h-auto aspect-[2/1] rounded-md md:rounded-lg bg-[#F1F8DB] border-1 md:border-2 lg:border-4 border-[#758A68]/50 animate-pulse flex flex-col items-start justify-end gap-4 md:gap-6 lg:gap-8 p-2 md:p-3 lg:p-4">
        <div className='flex items-end justify-between pb-4 md:pb-8 lg:pb-12 w-full'>
          <div className="w-1/2 h-full bg-[#c7d3a7] animate-pulse rounded-md md:rounded-lg"></div>
          <div className="w-2/5 flex flex-col items-end justify-end">
            <div className="w-full h-10 md:h-16 lg:h-20 bg-[#c7d3a7] animate-pulse rounded-md md:rounded-lg"></div>
            <Button title={'Read More'} icon={'show'} className='!text-[#c7d3a7]' />
          </div>
        </div>
        <div className='w-full z-10 flex item-center justify-center gap-2'>
          {
            [...Array(3)].map((item, index) => (
              <div key={index} className='w-1 md:w-2 lg:w-3 bg-[#c7d3a7] rounded-full'></div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

const BlogsHero = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [trendingBlogs, setTrendingBlogs] = useState([]);
  const [loading, setLoading] = useState(false)
  const intervalRef = useRef(null);
  const totalItems = trendingBlogs.length;

  const extendedData = totalItems > 0
    ? [trendingBlogs[totalItems - 1], ...trendingBlogs, trendingBlogs[0]]
    : [];

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

    if (currentIndex === totalItems + 1) {
      setTimeout(() => {
        setCurrentIndex(1);
        if (scrollRef.current) {
          scrollRef.current.style.scrollBehavior = 'auto';
          scrollRef.current.scrollLeft = scrollRef.current.clientWidth;
          setTimeout(() => {
            scrollRef.current.style.scrollBehavior = 'smooth';
          }, 0);
        }
      }, 600);
    } else if (currentIndex === 0) {
      setTimeout(() => {
        setCurrentIndex(totalItems);
        if (scrollRef.current) {
          scrollRef.current.style.scrollBehavior = 'auto';
          scrollRef.current.scrollLeft = totalItems * scrollRef.current.clientWidth;
          setTimeout(() => {
            scrollRef.current.style.scrollBehavior = 'smooth';
          }, 0);
        }
      }, 300);
    }
  }, [currentIndex, totalItems]);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index + 1);
    startCarousel();
  };

  const fetchTrendingBlogs = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(import.meta.env.VITE_SERVER_DOMAIN + '/latest-blogs', {})
      const topBlogs = data.blogs
        .sort((a, b) => b.activity.total_reads - a.activity.total_reads)
        .slice(0, 3);
      setTrendingBlogs(topBlogs);
    } catch (err) {
      console.error("Error fetching trending blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (trendingBlogs.length === 0) {
      fetchTrendingBlogs();
    }
  }, []);

  return (
    <div className="pt-6 md:pt-10 xl:pt-14 flex flex-col gap-5 md:gap-11">
      <div className="relative overflow-hidden">
        <div
          ref={scrollRef}
          className="h-fit flex flex-nowrap overflow-x-auto scroll-smooth snap-x snap-mandatory w-full gap-2 md:gap-3 lg:gap-4 no-scrollbar"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {extendedData.map((item, index) =>
            loading ? (
              <Skeleton key={index} />
            ) : (
              <div key={index} className="min-w-full snap-center relative">
                <img
                  src={item.banner}
                  alt=""
                  className="w-full h-auto aspect-[2/1] border-1 md:border-2 lg:border-4 border-[#758A68] rounded-md md:rounded-lg"
                />
                <div className="absolute inset-0 bg-black/60 rounded-md md:rounded-lg flex flex-col items-start justify-end gap-4 md:gap-6 lg:gap-8 p-2 md:p-4 lg:p-6">
                  <div className='flex items-end justify-between pb-4 md:pb-8 lg:pb-12 w-full'>
                    <p className="w-1/2 uppercase text-white font-semibold text-base md:text-4xl lg:text-[3.5rem] leading-tight">
                      {item.title}
                    </p>
                    <div className="w-2/5 flex flex-col items-end justify-end">
                      <p className="capitalize text-[#D9D9D9] font-semibold text-[10px] md:text-lg lg:text-2xl leading-tight text-right line-clamp-3">
                        {item.des}
                      </p>
                      <Link to={`/journal/blog/${item.blog_id}`}>
                        <Button title="Read More" icon="show" className="!px-0" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {trendingBlogs.map((_, index) => (
            <button
              key={index}
              className={`cursor-pointer h-1 md:h-2 lg:h-3 rounded-full transition-all duration-300 ${currentIndex === index + 1 ? 'bg-[#758A68] w-2 md:w-4 lg:w-6' : 'bg-gray-400 w-1 md:w-2 lg:w-3'}`}
              onClick={() => handleIndicatorClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </div >
  );
};

export default BlogsHero;
