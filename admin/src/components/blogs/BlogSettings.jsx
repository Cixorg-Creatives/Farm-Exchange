import { useContext } from 'react';
import { BlogContext } from '@/pages/Blog';
import Button from '@/components/Button';

const BlogSettings = ({ blog_id }) => {
    const { handleDelete } = useContext(BlogContext);
    return (
        <div className='flex items-center justify-end gap-2 md:gap-4 lg:gap-6'>
            <Button link={`/blogs/edit-blog/${blog_id}`} variant={'secondary'} symbol={'edit'} icon={'show'} className='flex-row-reverse' />
            <Button onClick={handleDelete} variant={'destructive'} symbol={'delete'} icon={'show'} className='flex-row-reverse' />
        </div>
    );
};

export default BlogSettings;
