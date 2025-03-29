import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "@/components/Button";
import List from "@/components/blogs/List";
import SearchBar from "@/components/blogs/SearchBar";
import { UserContext } from "@/App";
import { Loader2 } from "lucide-react";
import { filterPaginationData } from "@/common/filter-pagination-data";

const Blogs = () => {
  const [blogs, setBlogs] = useState(null);
  const [drafts, setDrafts] = useState(null);
  const [allBlogs, setAllBlogs] = useState(null);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const { userAuth: { access_token } } = useContext(UserContext);

  const getBlogs = async ({ page, draft }) => {
    console.log(`Fetching blogs - Draft: ${draft}, Query: "${query}"`);

    // Clear old data when query changes
    if (page === 1) {
      draft ? setDrafts(null) : setBlogs(null);
    }

    try {
      const { data } = await axios.post(
        import.meta.env.VITE_SERVER_DOMAIN + "/user-written-blogs",
        { page, draft, query },
        { headers: { 'Authorization': `Bearer ${access_token}` } }
      );

      const formattedData = await filterPaginationData({
        state: null, // Ensures no duplicate merging
        data: data.blogs,
        page,
        user: access_token,
        countRoute: "/user-written-blogs-count",
        data_to_send: { draft, query }
      });

      draft ? setDrafts(formattedData) : setBlogs(formattedData);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  useEffect(() => {
    if (access_token) {
      setBlogs(null); // Reset state on new search
      setDrafts(null);
      getBlogs({ page: 1, draft: false });
      getBlogs({ page: 1, draft: true });
    }
  }, [access_token, query]); // Fetch blogs when query changes

  useEffect(() => {
    if (blogs && drafts) {
      setAllBlogs({ results: [...blogs.results, ...drafts.results] });
    }
  }, [blogs, drafts]);

  const filteredBlogs =
    filter === "all" ? allBlogs
    : filter === "published" ? blogs
    : drafts;

  return (
    <div className='px-5 md:px-8 lg:px-12'>
      <Link to={'/blogs/add-blog'}>
        <Button title={"Add Blog"} variant='primary' icon={'show'} symbol={''} />
      </Link>
      <SearchBar setQuery={setQuery} setFilter={setFilter} />

      {filteredBlogs == null ? (
        <div className='flex justify-center items-center w-full h-96'>
          <Loader2 className="size-12 md:size-18 lg:size-24 animate-spin"/>
        </div>
      ) : filteredBlogs.results.length ? (
        <List blogs={filteredBlogs.results} />
      ) : (
        <h1 className='capitalize text-center text-[#31511E] font-medium text-sm md:text-lg lg:text-2xl'>No blogs available</h1>
      )}
    </div>
  );
};

export default Blogs;
