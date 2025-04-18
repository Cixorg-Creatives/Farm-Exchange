import { assets } from '@/assets/assets'
import { getFullDay } from '@/common/date';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const IntrestingReads = () => {

  const [trendingBlogs, setTrendingBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

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
    <div className='py-6 md:py-10 xl:py-14'>
      <div className='w-full h-12 flex items-center justify-center'>
        <p className='uppercase text-[#859F3E] font-bold text-lg md:text-2xl lg:text-4xl mb-4 md:mb-8 lg:mb-12 text-center'>Interesting Reads</p>
      </div>
      <div className='grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] gap-x-3 md:gap-x-6 lg:gap-x-12 gap-y-6 md:gap-y-10 lg:gap-y-16'>
        {loading
          ? [...Array(window.innerWidth < 768 ? 2 : 3)].map((_, index) => <Skeleton key={index} />)
          : trendingBlogs.slice(0, window.innerWidth < 768 ? 2 : 3).map((item, index) => (
            <Link to={`/journal/blog/${item.blog_id}`} key={index} className='grid-cols-1 flex flex-col items-start gap-1 md:gap-2 lg:gap-4 cursor-pointer'>
              <img src={item.banner} alt="" className='w-full h-auto aspect-4/3 object-cover border-1 md:border-2 border-[#ADBF7E] rounded-sm md:rounded-md lg:rounded-lg' />
              <p className='uppercase text-[#859F3E] font-semibold text-[8px] md:text-[10px] lg:text-xs'>{getFullDay(item.publishedAt)}</p>
              <p className='capitalize text-[#31511E] font-medium text-sm md:text-lg lg:text-2xl line-clamp-1'>{item.title}</p>
            </Link>
          ))
        }
      </div>
    </div >
  )
}

export default IntrestingReads

const Skeleton = () => {
  return (
    <div className='grid-cols-1 flex flex-col items-start gap-1 md:gap-2 lg:gap-4 cursor-pointer animate-pulse'>
      <div className='w-full h-auto aspect-4/3 bg-[#c7d3a7] rounded-sm md:rounded-md lg:rounded-lg'></div>
      <div className='w-20 h-4 bg-[#c7d3a7] rounded'></div>
      <div className='w-full h-6 md:h-8 lg:h-10 bg-[#c7d3a7] rounded'></div>
    </div>
  )
}