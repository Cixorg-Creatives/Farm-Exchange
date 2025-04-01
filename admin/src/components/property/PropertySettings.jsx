import { useState } from 'react';
import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const PropertySettings = ({ id }) => {
    const navigate = useNavigate();
    const [deleteConfirm, setDeleteConfirm] = useState(null);
    const [deleteLoading, setDeleteLoading] = useState(false);

    const handleDelete = async () => {
        setDeleteLoading(true);
        try {
            const response = await fetch(`http://localhost:3000/delete-properties/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to delete property');
            }

            toast.success('Property deleted successfully');
            navigate('/properties');
        } catch (error) {
            console.error('Error deleting property:', error);
            toast.error(error.message || 'Failed to delete property');
        } finally {
            setDeleteLoading(false);
            setDeleteConfirm(null);
        }
    };

    return (
        <div className='flex items-center justify-end gap-2 md:gap-4 lg:gap-6'>
            <Button
                link={`/properties/edit-property/${id}`}
                variant='secondary'
                symbol='edit'
                icon='show'
                className='flex-row-reverse'
            />
            <Button
                onClick={() => setDeleteConfirm(true)}
                variant='destructive'
                symbol='delete'
                icon='show'
                className='flex-row-reverse'
            />
            {deleteConfirm && (
                <div className='fixed inset-0 flex items-center justify-center backdrop-blur-sm p-4' onClick={() => setDeleteConfirm(null)}>
                    <div className='bg-[#F6FCDF] px-4 py-6 border border-[#31511E]/50 max-w-sm w-full flex flex-col items-center rounded-md shadow-lg gap-1 md:gap-2 lg:gap-3' onClick={(e) => e.stopPropagation()}>
                        <p className='text-[#31511E] font-semibold text-base md:text-xl lg:text-3xl leading-tight'>Are you sure?</p>
                        <p className='text-[#859F3E] font-medium text-xs md:text-sm lg:text-base leading-tight'>Do you really want to delete this property?</p>
                        <div className='flex gap-3 mt-4'>
                            <Button loading={deleteLoading} icon='show' symbol='delete' variant='destructive' onClick={handleDelete}>
                                Delete
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PropertySettings;
