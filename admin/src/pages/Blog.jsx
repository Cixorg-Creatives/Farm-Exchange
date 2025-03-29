import { assets } from '@/assets/assets';
import BlogHero from '@/components/blogs/BlogHero';
import BlogSettings from '@/components/blogs/BlogSettings';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const Blog = () => {
    const { blog_id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlog();
    }, [blog_id]);

    const fetchBlog = async () => {
        try {
            const { data } = await axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/get-blog", { blog_id });
            setBlog(data.blog);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.post(import.meta.env.VITE_SERVER_DOMAIN + "/delete-blog", { blog_id });
            navigate('/blogs');
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

    return (
        <div className='px-5 md:px-8 lg:px-12'>
            <BlogSettings handleDelete={handleDelete} />
            {loading ? <Loader2 /> : <BlogHero blog={blog} />}
        </div>
    );
};

export default Blog;