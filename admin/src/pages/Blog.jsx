import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimationWrapper from "@/common/page-animation";
import { Loader } from "lucide-react";
import BlogPreview from "@/components/blogs/BlogPreview";
import BlogSettings from "@/components/blogs/BlogSettings";
import BlogContent from "@/components/blogs/BlogContent";

export const BlogContext = createContext({ });

const blogStructure = {
    title: "",
    des: "",
    content: [],
    author: { personal_info: {} },
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
        fetchBlog();
    }, [blogId]);

    const fetchBlog = () => {
        setLoading(true);
        axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/get-blog", { blog_id: blogId })
            .then(({ data: { blog } }) => {
                console.log("Fetched Blog Data:", blog); // Debugging log
                setBlog(blog);
                fetchSimilarBlogs(blog.tags[0]); // Fetch similar blogs based on the first tag
                setLoading(false);
            })
            .catch(err => {
                console.log("Failed");
                setLoading(false);
            });
    };

    const fetchSimilarBlogs = (tag) => {
        axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/search-blogs", { tag, limit: 6, eliminate_blog: blogId })
            .then(({ data }) => {
                setSimilarBlogs(data.blogs);
            })
            .catch(err => console.error(err));
    };

    return (
        <AnimationWrapper>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <Loader className="animate-spin w-10 h-10 text-gray-600" />
                </div>
            ) : (
                <BlogContext.Provider value={{ blog, setBlog }}>
                    <div className="px-5 md:px-8 lg:px-12">
                        <BlogSettings blog_id={blogId} />
                        <BlogPreview blog={blog} />
                        
                        {/* Blog Content */}
                        <div className="my-12">
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
                    </div>
                </BlogContext.Provider>
            )}
        </AnimationWrapper>
    );
};

export default Blog;
