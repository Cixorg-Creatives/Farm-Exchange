import { assets } from '@/assets/assets';
import { ArrowUpRight, Play } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import axios from 'axios';

const HomeJournal = () => {
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
      <div className="w-full flex flex-row items-end justify-between">
        <div className="flex flex-col items-start justify-between h-full text-center md:text-left">
          <p className="uppercase text-[#859F3E] font-semibold text-xs md:text-xl lg:text-[2.5rem] leading-tight">
            The Farm
          </p>
          <p className="uppercase text-[#073D2C] font-semibold text-base md:text-3xl lg:text-[4rem] leading-tight">
            Journal
          </p>
        </div>
        <div className="w-fit flex flex-col items-start lg:items-end justify-start h-full text-start lg:text-right">
          <p className="capitalize text-[#859F3E] font-bold text-xs md:text-2xl lg:text-4xl leading-tight text-right">
          Your one-stop knowledge center for <br /> smarter farm decisions and strategies.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-[1fr_1fr] gap-4 md:gap-10 lg:gap-20 my-4 md:my-8 lg:my-12'>
        <div className='col-span-1 h-full flex flex-col items-start justify-between'>
          <div className='flex flex-col gap-3 md:gap-5'>
            <p className='boska font-normal text-[#859F3E] text-base md:text-xl lg:text-[1.75rem] leading-tight uppercase'>Trending Videos</p>
            <p className='capitalize text-[#31511E] font-semibold text-xs md:text-xl lg:text-[2.5rem] leading-tight'>Wooden valley By <br /> rugvedha developers</p>
          </div>
          <div className='flex flex-col gap-0.5 md:gap-1 lg:gap-3'>
            <p className='capitalize text-[#31511E] font-semibold text-[8px] md:text-sm lg:text-2xl leading-tight'>Unlock Farming Insights, Market Trends, and Investment OpportunitiesUnlock Farming Insights, Market Trends, and Investment Opportunities</p>
            <Link to={'/journal/video'}><Button title={'View All'} icon={'show'} className='!text-[#859F3E] !p-0' /></Link>
          </div>
        </div>
        <div className='col-span-1 relative'>
          <img src={assets.home_17} alt="" className='w-full h-auto aspect-3/4' />
          <div className='active:scale-75 ease-in-out duration-150 z-10 border-[0.1875rem] md:border-[0.25rem] lg:border-[0.3125rem] border-white rounded-full size-8 md:size-16 lg:size-24 bg-[#859F3E] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='flex items-center justify-center h-full w-full'><Play className='size-4 md:size-8 lg:size-12 text-white fill-white' /></div>
          </div>
          <div className='absolute w-full h-full top-0 left-0 bg-black/50'></div>
        </div>
      </div>

      <div className='grid grid-cols-[1fr_1fr] [&>*:nth-child(1)]:order-2 gap-4 md:gap-10 lg:gap-20 mt-4 md:mt-8 lg:mt-12'>
        <div className='col-span-1 h-full flex flex-col items-start justify-between'>
          <div className='flex flex-col gap-3 md:gap-5'>
            <p className='boska font-normal text-[#859F3E] text-base md:text-xl lg:text-[1.75rem] leading-tight uppercase'>Farmland Knowledge Center</p>
            <p className='capitalize text-[#31511E] font-semibold text-xs md:text-xl lg:text-[2.5rem] leading-tight'>Your Ultimate Guide <br /> to Farming and <br /> Investment Strategies. </p>
          </div>
          <div className='flex flex-col gap-0.5 md:gap-1 lg:gap-3'>
            <p className='capitalize text-[#31511E] font-semibold text-[8px] md:text-sm lg:text-2xl leading-tight'>Discover gold nuggets of what farming, land investments, and market shifts are like. Our hub is a source of knowledge that you have to make sound, strategic decisions in the agricultural space. </p>
            <Link to={'/journal/blog'}><Button title={'View All'} icon={'show'} className='!text-[#859F3E] !p-0' /></Link>
          </div>
        </div>
        <div className='col-span-1 bg-[#859F3E1A] py-3.5 md:py-7 lg:py-14 px-1.5 md:px-3 lg:px-6'>
          <div className='grid grid-rows-[1fr_1fr_1fr] gap-3 md:gap-7 lg:gap-11'>
            {trendingBlogs.length > 0 ? trendingBlogs.map((item, index) => (
              <div key={index} className='bg-[#F1F8DB] p-2 md:p-4 w-full flex items-center justify-between'>
                <img src={item.banner} alt='' className='size-16 lg:size-42 aspect-square' />
                <div className='flex flex-col h-full items-start justify-between py-1 md:py-2 lg:py-4 w-1/2 md:w-3/5'>
                  <p className='capitalize text-[#31511E] font-semibold text-[7px] md:text-sm lg:text-2xl leading-tight'>{item.title}</p>
                  <Link to={`/journal/blog/${item.blog_id}`}><Button title={'Read More'} icon={'show'} className='!text-[#859F3E] !p-0 text-[8px]' /></Link>
                </div>
              </div>
            )) : (    
              [...Array(3)].map((_, index) => (
                <div key={index} className="bg-[#F1F8DB] p-2 md:p-4 w-full flex items-center justify-between animate-pulse">
                  <div className="size-16 lg:size-42 aspect-square bg-[#c7d3a7] rounded-md"></div>
                  <div className="flex flex-col h-full items-start justify-between py-1 md:py-2 lg:py-4 w-1/2 md:w-2/3">
                    <div className="bg-[#c7d3a7] h-6 md:h-10 lg:h-14 w-3/4 rounded-md"></div>
                    <Button title={'Read More'} icon={'show'} className='!text-[#c7d3a7] !p-0 text-[8px]'/>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeJournal;
