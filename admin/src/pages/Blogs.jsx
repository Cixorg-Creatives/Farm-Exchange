// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { UserContext } from "@/App";
// import { filterPaginationData } from "@/common/filter-pagination-data";
// import SearchBar from "@/components/blogs/SearchBar";
// import List from "@/components/blogs/List";

// const Blogs = () => {
//   const [blogs, setBlogs] = useState(null);
//   const [drafts, setDrafts] = useState(null);
//   const [query, setQuery] = useState("");
//   const [filter, setFilter] = useState("all");
//   const [loading, setLoading] = useState(false);

//   const { userAuth: { access_token } } = useContext(UserContext);

//   const getBlogs = async ({ page = 1, draft = false, reset = false }) => {
//     setLoading(true);
//     try {
//       const { data } = await axios.post(
//         import.meta.env.VITE_SERVER_DOMAIN + "/user-written-blogs",
//         { page, draft, query },
//         { headers: { 'Authorization': `Bearer ${access_token}` } }
//       );

//       const formattedData = await filterPaginationData({
//         state: reset ? null : (draft ? drafts : blogs),
//         data: data.blogs,
//         page,
//         user: access_token,
//         countRoute: "/user-written-blogs-count",
//         data_to_send: { draft, query }
//       });

//       draft ? setDrafts(formattedData) : setBlogs(formattedData);
//     } catch (err) {
//       console.error("Error fetching blogs:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (access_token) {
//       if (filter === "all") {
//         getBlogs({ page: 1, draft: false, reset: true });
//         getBlogs({ page: 1, draft: true, reset: true });
//       } else if (filter === "published") {
//         getBlogs({ page: 1, draft: false, reset: true });
//       } else if (filter === "draft") {
//         getBlogs({ page: 1, draft: true, reset: true });
//       }
//     }
//   }, [access_token, query, filter]);

//   const getFilteredBlogs = () => {
//     if (filter === "published") {
//       return blogs;
//     } else if (filter === "draft") {
//       return drafts;
//     } else {
//       if (!blogs && !drafts) return null;

//       return {
//         results: [
//           ...(blogs?.results || []),
//           ...(drafts?.results || [])
//         ],
//         totalDocs: (blogs?.totalDocs || 0) + (drafts?.totalDocs || 0),
//         page: 1
//       };
//     }
//   };

//   const filteredBlogs = getFilteredBlogs();

//   return (
//     <div className='px-5 md:px-8 lg:px-12'>
//       <SearchBar 
//         setQuery={setQuery} 
//         setFilter={setFilter} 
//       />

//       {loading && (
//         <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-1.5 md:gap-x-3 lg:gap-x-5 gap-y-2 md:gap-y-4 lg:gap-y-6'>
//           {[...Array(3)].map((_, index) => (
//             <Skeleton key={index} />
//           ))}
//         </div>
//       )}

//       {!loading && filteredBlogs?.results?.length ? (
//         <List blogs={filteredBlogs.results} />
//       ) : !loading && filteredBlogs ? (
//         <h1 className='capitalize text-center text-[#31511E] font-medium text-sm md:text-lg lg:text-2xl'>
//           No blogs available
//         </h1>
//       ) : null}
//     </div>
//   );
// };

// const Skeleton = () => (
//   <div className="grid-cols-1 px-2 md:px-4 lg:px-8 py-2.5 md:py-5 lg:py-9 border border-[#D9E1C3] flex flex-col items-start gap-1 md:gap-2 lg:gap-4 cursor-pointer opacity-70 animate-pulse">
//     <div className='w-full h-auto aspect-[4/3] bg-[#c7d3a7]'></div>
//     <div className='w-1/3 h-3 bg-[#c7d3a7] rounded'></div>
//     <div className='w-2/3 h-6 bg-[#c7d3a7] rounded'></div>
//     <div className='w-full h-12 bg-[#c7d3a7] rounded'></div>
//   </div>
// );

// export default Blogs;

import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "@/App";
import { filterPaginationData } from "@/common/filter-pagination-data";
import SearchBar from "@/components/blogs/SearchBar";
import List from "@/components/blogs/List";

const Blogs = () => {
  const [blogs, setBlogs] = useState(null);
  const [drafts, setDrafts] = useState(null);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);

  const { userAuth: { access_token } } = useContext(UserContext);

  const getBlogs = async ({  draft = false, reset = false }) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        import.meta.env.VITE_SERVER_DOMAIN + "/user-written-blogs",
        { draft, query },
        { headers: { 'Authorization': `Bearer ${access_token}` } }
      );

      const formattedData = await filterPaginationData({
        state: reset ? null : (draft ? drafts : blogs),
        data: data.blogs,
        user: access_token,
        countRoute: "/user-written-blogs-count",
        data_to_send: { draft, query }
      });

      draft ? setDrafts(formattedData) : setBlogs(formattedData);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (access_token) {
      if (filter === "all") {
        getBlogs({ draft: false, reset: true });
        getBlogs({ draft: true, reset: true });
      } else if (filter === "published") {
        getBlogs({ draft: false, reset: true });
      } else if (filter === "draft") {
        getBlogs({ draft: true, reset: true });
      }
    }
  }, [access_token, query, filter]);

  const sortByPublishedAt = (a, b) => {
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  };

  const getFilteredBlogs = () => {
    if (filter === "published") {
      return blogs ? { ...blogs, results: [...blogs.results].sort(sortByPublishedAt) } : null;
    } else if (filter === "draft") {
      return drafts ? { ...drafts, results: [...drafts.results].sort(sortByPublishedAt) } : null;
    } else {
      if (!blogs && !drafts) return null;

      const combinedResults = [
        ...(blogs?.results || []),
        ...(drafts?.results || [])
      ].sort(sortByPublishedAt);

      return {
        results: combinedResults,
        totalDocs: (blogs?.totalDocs || 0) + (drafts?.totalDocs || 0),
      };
    }
  };

  const filteredBlogs = getFilteredBlogs();

  return (
    <div className='px-5 md:px-8 lg:px-12'>
      <SearchBar
        setQuery={setQuery}
        setFilter={setFilter}
      />

      {loading && (
        <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-1.5 md:gap-x-3 lg:gap-x-5 gap-y-2 md:gap-y-4 lg:gap-y-6'>
          {[...Array(3)].map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      )}

      {!loading && filteredBlogs?.results?.length ? (
        <List blogs={filteredBlogs.results} />
      ) : !loading && filteredBlogs ? (
        <h1 className='capitalize text-center text-[#31511E] font-medium text-sm md:text-lg lg:text-2xl'>
          No blogs available
        </h1>
      ) : null}
    </div>
  );
};

const Skeleton = () => (
  <div className="grid-cols-1 px-2 md:px-4 lg:px-8 py-2.5 md:py-5 lg:py-9 border border-[#D9E1C3] flex flex-col items-start gap-1 md:gap-2 lg:gap-4 cursor-pointer opacity-70 animate-pulse">
    <div className='w-full h-auto aspect-[4/3] bg-[#c7d3a7]'></div>
    <div className='w-1/3 h-3 bg-[#c7d3a7] rounded'></div>
    <div className='w-2/3 h-6 bg-[#c7d3a7] rounded'></div>
    <div className='w-full h-12 bg-[#c7d3a7] rounded'></div>
  </div>
);

export default Blogs;