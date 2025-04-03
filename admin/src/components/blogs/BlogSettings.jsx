// import { useContext } from 'react';
// import { BlogContext } from '@/pages/Blog';
// import Button from '@/components/Button';

// const BlogSettings = ({ blog_id }) => {
   
//     return (
//         <div className='flex items-center justify-end gap-2 md:gap-4 lg:gap-6'>
//             <Button link={`/blogs/edit-blog/${blog_id}`} variant={'secondary'} symbol={'edit'} icon={'show'} className='flex-row-reverse' />
//             <Button onClick={handleDelete} variant={'destructive'} symbol={'delete'} icon={'show'} className='flex-row-reverse' />
//         </div>
//     );
// };

// export default BlogSettings;


import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Changed from Next.js to React Router
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Button from '@/components/Button';
import { UserContext } from '@/App';

const BlogSettings = ({ blog_id }) => {
    let { userAuth: { access_token } } = useContext(UserContext)
    const [isDeleting, setIsDeleting] = useState(false);
    const navigate = useNavigate(); // Replaced useRouter with useNavigate

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this blog permanently?")) return;

        setIsDeleting(true);
        
        try {
            const { data } = await axios.post('http://localhost:3000/delete-blog', { blog_id }, {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            });

            if (data.status === 'done') {
                toast.success('Blog deleted successfully');
                navigate('/blogs'); 
            }
        } catch (error) {
            console.error('Delete error:', error);
            toast.error(error.response?.data?.error || 'Failed to delete blog');
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className='flex items-center justify-end gap-2 md:gap-4 lg:gap-6'>
            <Button 
                link={`/blogs/edit-blog/${blog_id}`} 
                variant={'secondary'} 
                symbol={'edit'} 
                icon={'show'} 
                className='flex-row-reverse' 
            />
            <Button 
                onClick={handleDelete}
                variant={'destructive'}
                symbol={isDeleting ? 'Deleting...' : 'delete'}
                icon={'show'}
                className='flex-row-reverse'
                disabled={isDeleting}
            />
        </div>
    );
};

export default BlogSettings;