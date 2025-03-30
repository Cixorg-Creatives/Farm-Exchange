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
        <div className='flex justify-center items-center w-full h-96'>
          <Loader2 className="size-12 md:size-18 lg:size-24 animate-spin" />
        </div>
      ) : blogs.length ? (
        <List blogs={blogs} />
      ) : (
        <h1 className='capitalize text-center text-[#31511E] font-medium text-sm md:text-lg lg:text-2xl'>No blogs available</h1>
      )}
    </div>
  );
};

export default Blogs;
