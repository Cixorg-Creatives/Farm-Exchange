import BlogsHero from '@/components/blog/BlogsHero';
import List from '@/components/blog/List';
import SearchBar from '@/components/blog/SearchBar';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // Stop fetching when no more blogs
  const observer = useRef(null); // Ref for Intersection Observer

  const fetchLatestBlogs = async () => {
    if (loading || !hasMore) return;
    setLoading(true);  
    try {
      const { data } = await axios.post(import.meta.env.VITE_SERVER_DOMAIN + '/latest-blogs', { 
        page, 
      });    
      setBlogs(prev => [...prev, ...data.blogs]); 
      setHasMore(data.blogs.length === 6);
    } catch (err) {
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchLatestBlogs();
  }, [page]);

  // Infinite Scroll Observer
  const lastBlogRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prev => prev + 1);
      }
    });

    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  return (
    <div className='px-4 md:px-6 lg:px-24'>
      <BlogsHero />
      <SearchBar />

      {blogs.length > 0 ? (
        <List blogs={blogs} lastBlogRef={lastBlogRef} />
      ) : (
        <div className='text-center text-gray-500'>No blogs available.</div>
      )}

      {loading && (
        <div className='pb-6 md:pb-10 xl:pb-14 grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr] gap-1.5 md:gap-x-3 lg:gap-x-5 gap-y-2 md:gap-y-4 lg:gap-y-6'>
          {[...Array(window.innerWidth < 768 ? 2 : 3)].map((_, index) => (
            <div key={index} className="grid-cols-1 px-2 md:px-4 lg:px-8 py-2.5 md:py-5 lg:py-9 border border-[#D9E1C3] flex flex-col items-start gap-1 md:gap-2 lg:gap-4 animate-pulse">
              <div className="w-full h-36 md:h-48 lg:h-56 bg-[#c7d3a7]" />
              <div className="w-1/5 h-2 md:h-3 lg:h-4 bg-[#c7d3a7] rounded" />
              <div className="w-3/4 h-3 md:h-4 lg:h-5 bg-[#c7d3a7] rounded" />
              <div className="w-full h-6 md:h-8 lg:h-10 bg-[#c7d3a7] rounded" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
