import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const PropertySettings = ({ id }) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
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
        }
    };

    return (
        <div className='flex items-center justify-end gap-2 md:gap-4 lg:gap-6'>
            <Button 
                link={`/properties/edit-property/${id}`} 
                variant={'secondary'} 
                symbol={'edit'} 
                icon={'show'} 
                className='flex-row-reverse' 
            />
            <Button 
                onClick={handleDelete}
                variant={'destructive'} 
                symbol={'delete'} 
                icon={'show'} 
                className='flex-row-reverse' 
            />
        </div>
    );
};

export default PropertySettings;