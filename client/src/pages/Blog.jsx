import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimationWrapper from "@/common/page-animation";
import { Loader2 } from "lucide-react";
import BlogContent from "@/components/blog/BlogContent";
import BlogHero from "@/components/blog/BlogHero";
import Suggestions from "@/components/blog/Suggestions";

export const BlogContext = createContext({});

const blogStructure = {
    title: "",
    des: "",
    content: [],
    author: { personal_info: {} },
    author_name: "",
    banner: "",
    publishedAt: "",
    tags: []
};

const Blog = () => {
    let { blogId } = useParams();
    const [blog, setBlog] = useState(blogStructure);
    const [similarBlogs, setSimilarBlogs] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("useEffect triggered for blogId:", blogId);
        fetchBlog();
    }, [blogId]);

    const fetchBlog = () => {
        const cachedBlog = sessionStorage.getItem(`blog_${blogId}`);

        if (cachedBlog) {
            const parsedBlog = JSON.parse(cachedBlog);
            setBlog(parsedBlog);
            if (parsedBlog.tags && parsedBlog.tags.length > 0) {
                fetchSimilarBlogs(parsedBlog.tags[0]);
            }
            setLoading(false);
        } else {
            console.log("fetchBlog called");
            setLoading(true);
            axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/get-blog", { blog_id: blogId })
                .then(({ data: { blog } }) => {
                    console.log("Fetched Blog Data:", blog);
                    sessionStorage.setItem(`blog_${blogId}`, JSON.stringify(blog));
                    setBlog(blog);
                    if (blog.tags && blog.tags.length > 0) {
                        fetchSimilarBlogs(blog.tags[0]);
                    }
                    setLoading(false);
                })
                .catch(err => {
                    console.log("Failed to fetch blog");
                    setLoading(false);
                });
        }
    };

    const fetchSimilarBlogs = (tag) => {
        axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/search-blogs", { 
            tag, 
            limit: 6, 
            eliminate_blog: blogId 
        })
        .then(({ data }) => {
            setSimilarBlogs(data.blogs || []);
        })
        .catch(err => {
            console.error(err);
            setSimilarBlogs([]);
        });
    };

    return (
        <AnimationWrapper>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <Loader2 className="animate-spin w-10 h-10 text-gray-600" />
                </div>
            ) : (
                <BlogContext.Provider value={{ blog, setBlog }}>
                    <div className="px-4 md:px-6 lg:px-24 journal_bg">
                        <BlogHero blog={blog} />
                        {/* Blog Content */}
                        <div className="py-6 md:py-10 xl:py-14 blog">
                            {blog.content.length > 0 ? (
                                blog.content.map((section, i) => (
                                    <div key={i} className="space-y-4 md:space-y-6 lg:space-y-8">
                                        {section.blocks?.map((block, j) => (
                                            <BlogContent key={j} block={block} />
                                        ))}
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">No content available</p>
                            )}
                        </div>
                        
                        {/* Similar Blogs Section */}
                        {similarBlogs && similarBlogs.length > 0 && (
                            // <div className="mt-10">
                            //     <h2 className="text-[#31511E] font-bold text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 lg:mb-8">
                            //         Similar Articles
                            //     </h2>
                                <Suggestions suggested={similarBlogs} />
                            // {/* </div> */}
                        )}
                    </div>
                </BlogContext.Provider>
            )}
        </AnimationWrapper>
    );
};

export default Blog;