import Button from '@/components/Button';

const PropertySettings = ({ blog_id }) => {
    return (
        <div className='flex items-center justify-end gap-2 md:gap-4 lg:gap-6'>
            <Button link={`/properties/edit-property/1`} variant={'secondary'} symbol={'edit'} icon={'show'} className='flex-row-reverse' />
            <Button variant={'destructive'} symbol={'delete'} icon={'show'} className='flex-row-reverse' />
        </div>
    );
};

export default PropertySettings;
