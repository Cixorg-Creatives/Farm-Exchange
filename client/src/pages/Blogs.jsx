import BlogsHero from '@/components/blog/BlogsHero';
import List from '@/components/blog/List';
import SearchBar from '@/components/blog/SearchBar';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Loader2 } from 'lucide-react';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchLatestBlogs = ({ page = 1 }) => {
    setLoading(true);
    axios
      .post(import.meta.env.VITE_SERVER_DOMAIN + '/latest-blogs', { page })
      .then(({ data }) => {
        setBlogs(data.blogs); // Directly setting blogs without filtering
      })
      .catch((err) => {
        console.error('Error fetching blogs:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchLatestBlogs({ page });
  }, [page]);

  return (
    <div className='px-4 md:px-6 lg:px-24'>
      <BlogsHero />
      <SearchBar />
      {loading ? (
        <div className='pb-6 md:pb-10 xl:pb-14 grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] gap-1.5 md:gap-x-3 lg:gap-x-5 gap-y-2 md:gap-y-4 lg:gap-y-6'>
          {
            [...Array(window.innerWidth < 768 ? 2 : 3)].map((item, index) => (
              <div key={index} className="grid-cols-1 px-2 md:px-4 lg:px-8 py-2.5 md:py-5 lg:py-9 border border-[#D9E1C3] flex flex-col items-start gap-1 md:gap-2 lg:gap-4 animate-pulse">
                <div className="w-full h-36 md:h-48 lg:h-56 bg-[#c7d3a7]" />
                <div className="w-1/5 h-2 md:h-3 lg:h-4 bg-[#c7d3a7] rounded" />
                <div className="w-3/4 h-3 md:h-4 lg:h-5 bg-[#c7d3a7] rounded" />
                <div className="w-full h-6 md:h-8 lg:h-10 bg-[#c7d3a7] rounded" />
              </div>
            ))
          }
        </div>
      ) : blogs.length ? (
        <List blogs={blogs} />
      ) : (
        <div className='pb-6 md:pb-10 xl:pb-14 grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] gap-1.5 md:gap-x-3 lg:gap-x-5 gap-y-2 md:gap-y-4 lg:gap-y-6'>
          {
            [...Array(window.innerWidth < 768 ? 2 : 3)].map((item, index) => (
              <div key={index} className="grid-cols-1 px-2 md:px-4 lg:px-8 py-2.5 md:py-5 lg:py-9 border border-[#D9E1C3] flex flex-col items-start gap-1 md:gap-2 lg:gap-4 animate-pulse">
                <div className="w-full h-36 md:h-48 lg:h-56 bg-[#c7d3a7]" />
                <div className="w-1/5 h-2 md:h-3 lg:h-4 bg-[#c7d3a7] rounded" />
                <div className="w-3/4 h-3 md:h-4 lg:h-5 bg-[#c7d3a7] rounded" />
                <div className="w-full h-6 md:h-8 lg:h-10 bg-[#c7d3a7] rounded" />
              </div>
            ))
          }
        </div>
      )}
    </div>
  );
};

export default Blogs;
