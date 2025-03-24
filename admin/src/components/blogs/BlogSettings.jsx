import Button from '@/components/Button'
import React from 'react'

const BlogSettings = () => {
    return (
        <div className='flex items-center justify-end gap-2 md:gap-4 lg:gap-6'>
            <Button link={'/blogs'} variant={'secondary'} symbol={'edit'} icon={'show'} className='flex-row-reverse' />
            <Button link={'/blogs'} variant={'destructive'} symbol={'delete'} icon={'show'} className='flex-row-reverse' />
        </div>
    )
}

export default BlogSettings