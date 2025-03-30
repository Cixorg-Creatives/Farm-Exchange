import { assets } from '@/assets/assets'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'
import axios from 'axios'

const data = [
  {
    image: assets.home_18,
    title: 'Whispers Of Bali - A serene Farmhouse Retreat In Hyderabad',
  },
  {
    image: assets.home_19,
    title: '5 farmlands near Mysuru on our site you can look at',
  },
  {
    image: assets.home_20,
    title: 'The vermicompost pioneet of Kashmir',
  },
]

const Blog = () => {

  const [trendingBlogs, setTrendingBlogs] = useState([]);
  const [fetchedBlogs, setFetchedBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTrendingBlogs = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_SERVER_DOMAIN}/trending-blogs`);
      const blogs = data.blogs.slice(0, 3);
      setTrendingBlogs(blogs);
      fetchBlogsDetails(blogs);
    } catch (err) {
      console.error("Error fetching trending blogs:", err);
    }
  };

  const fetchBlogsDetails = async (blogs) => {
    try {
      const fetchedData = await Promise.all(
        blogs.map(async (blog) => {
          const response = await axios.post(`${import.meta.env.VITE_SERVER_DOMAIN}/get-blog`, {
            blog_id: blog.blog_id,
          });
          return response.data.blog;
        })
      );
      setFetchedBlogs(fetchedData);
    } catch (err) {
      console.error("Failed to fetch blog details:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrendingBlogs();
  }, []);

  return (
    <div className='py-6 md:py-10 xl:py-14'>
      <div className='grid grid-cols-[1fr_1fr] gap-4 md:gap-10 lg:gap-20 py-3 md:py-16'>
        <div className='col-span-1 h-full flex flex-col items-start justify-between py-4 md:py-8 lg:py-12'>
          <div className='flex flex-col gap-3 md:gap-5'>
            <p className='boska font-normal text-[#859F3E] text-base md:text-xl lg:text-[1.75rem] leading-tight uppercase'>Our blogs</p>
            <p className='capitalize text-[#31511E] font-semibold text-xl md:text-3xl lg:text-6xl leading-tight'>Explore Insights and Stories, <br />Rooted in the World of Farming.</p>
          </div>
          <div className='flex flex-col gap-0.5 md:gap-1 lg:gap-3'>
            <p className='capitalize text-[#31511E] font-semibold text-[8px] md:text-sm lg:text-xl leading-tight'>Dive into the world of farming with our curated blogs. From sustainable practices and crop management tips to inspiring farmer stories and the latest agricultural trends, we&pos;ve got it all covered. </p>
            <Link to={'/journal/blog'}><Button title={'View All'} icon={'show'} className='!text-[#859F3E] !p-0' /></Link>
          </div>
        </div>
        <div className='col-span-1 bg-[#859F3E1A] py-3.5 md:py-7 lg:py-14 px-1.5 md:px-3 lg:px-6'>
          <div className='grid grid-rows-[1fr_1fr_1fr] gap-3 md:gap-7 lg:gap-11'>
          {fetchedBlogs.length > 0 ? fetchedBlogs.map((item, index) => (
              <div key={index} className='bg-[#F1F8DB] p-2 md:p-4 w-full flex items-center justify-between'>
                <img src={item.banner} alt='' className='size-16 lg:size-42 aspect-square' />
                <div className='flex flex-col h-full items-start justify-between py-1 md:py-2 lg:py-4 w-1/2 md:w-3/5'>
                  <p className='capitalize text-[#31511E] font-semibold text-[7px] md:text-sm lg:text-2xl leading-tight'>{item.title}</p>
                  <Link to={`/journal/blog/${item.blog_id}`}><Button title={'Read More'} icon={'show'} className='!text-[#859F3E] !p-0 text-[8px]' symbolClassName="!w-2" /></Link>
                </div>
              </div>
            )) : (    
              [...Array(3)].map((_, index) => (
                <div key={index} className="bg-[#F1F8DB] p-2 md:p-4 w-full flex items-center justify-between animate-pulse">
                  <div className="size-16 lg:size-42 aspect-square bg-[#c7d3a7] rounded-md"></div>
                  <div className="flex flex-col h-full items-start justify-between py-1 md:py-2 lg:py-4 w-1/2 md:w-2/3">
                    <div className="bg-[#c7d3a7] h-6 md:h-10 lg:h-14 w-3/4 rounded-md"></div>
                    <Button title={'Read More'} icon={'show'} className='!text-[#c7d3a7] !p-0 text-[8px]' symbolClassName="!w-2"/>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog