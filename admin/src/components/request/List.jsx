import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../Button';

const List = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deleteConfirm, setDeleteConfirm] = useState(null);
    const [deleteLoading, setDeleteLoading] = useState(false);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get('http://localhost:3000/get-post-property');

                console.log("API Response:", response.data);

                if (Array.isArray(response.data.posts)) {
                    setProperties(response.data.posts);
                } else {
                    setProperties([]);
                    console.error("Error: API did not return an array");
                    toast.error("Error: API did not return an array");
                }
            } catch (error) {
                console.error('Error fetching properties:', error);
                toast.error('Error fetching properties:', error);
                setError('Failed to load properties');
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    const deleteProperty = async (id) => {
        setDeleteLoading(true)
        try {
            const response = await axios.post('http://localhost:3000/delete-post-property', { id });

            if (response.data.success) {
                setProperties(properties.filter(property => property._id !== id));
            } else {
                console.error("Failed to delete property:", response.data.message);
            }
        } catch (error) {
            console.error("Error deleting property:", error);
            setDeleteLoading(false)
        } finally {
            setDeleteLoading(false)
            setDeleteConfirm(null)
        }
    };

    if (loading) return (
        <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-1.5 md:gap-x-3 lg:gap-x-5 gap-y-2 md:gap-y-4 lg:gap-y-6'>
            {
                [...Array(6)].map((item, index) => (
                    <Skeleton />
                ))
            }
        </div>
    )
    if (error) return (
        <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-1.5 md:gap-x-3 lg:gap-x-5 gap-y-2 md:gap-y-4 lg:gap-y-6'>
            {
                [...Array(6)].map((item, index) => (
                    <Skeleton />
                ))
            }
        </div>
    )

    return (
        <div className='my-2 md:my-4 xl:my-6 clashdisplay'>
            <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-1.5 md:gap-x-3 lg:gap-x-5 gap-y-2 md:gap-y-4 lg:gap-y-6'>
                {properties.length > 0 ? (
                    properties.map((property) => (
                        <div key={property._id} className='relative px-2 md:px-4 lg:px-8 py-2.5 md:py-5 lg:py-9 border border-[#D9E1C3] flex flex-col items-start gap-0.5 md:gap-[3px] lg:gap-1 cursor-pointer rounded-sm md:rounded-md lg:rounded-lg'>
                            <div className='absolute right-2 md:right-3 lg:right-4 top-2 md:top-4 lg:top-4'>
                                <Button
                                    variant='destructive'
                                    symbol='delete'
                                    icon='show'
                                    className='delete-button'
                                    onClick={() => setDeleteConfirm(property)}
                                />
                            </div>
                            <p className='uppercase text-[#859F3E] font-semibold text-[10px] md:text-xs lg:text-sm leading-tight'>
                                {new Date(property.publishedAt).toLocaleDateString()}
                            </p>
                            <p className='capitalize text-[#31511E] font-medium text-sm md:text-lg lg:text-2xl leading-tight'>{property.full_name}</p>
                            <p className='text-[#31511E] font-medium text-xs md:text-sm lg:text-base'>{property.email}</p>
                            <p className='capitalize text-[#31511E] font-medium text-xs md:text-sm lg:text-base leading-tight'>{property.phone}</p>
                            <p className='capitalize text-[#758A68] font-normal text-xs md:text-sm lg:text-base leading-tight line-clamp-3'>{property.interested_in}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No properties found.</p>
                )}
            </div>
            {deleteConfirm && (
                <div className='fixed inset-0 flex items-center justify-center backdrop-blur-sm p-4' onClick={() => setDeleteConfirm(null)}>
                    <div className='bg-[#F6FCDF] px-4 py-6 border-1 border-[#31511E]/50 max-w-sm w-full flex flex-col items-center rounded-md shadow-lg gap-1 md:gap-2 lg:gap-3' onClick={(e) => e.stopPropagation()}>
                        <p className='text-[#31511E] font-semibold text-base md:text-xl lg:text-3xl leading-tight'>Are you sure?</p>
                        <p className='text-[#859F3E] font-medium text-xs md:text-sm lg:text-base leading-tight'>Do you really want to delete this contact?</p>
                        <div className='flex gap-3 mt-4'>
                            <Button loading={deleteLoading} icon='show' symbol='delete' variant='destructive' onClick={() => deleteProperty(deleteConfirm._id)}>Delete</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default List;

const Skeleton = () => {
    return (
        <div className='relative px-2 md:px-4 lg:px-8 py-2.5 md:py-5 lg:py-9 border border-[#D9E1C3] flex flex-col items-start gap-0.5 md:gap-[3px] lg:gap-1 cursor-pointer rounded-sm md:rounded-md lg:rounded-lg animate-pulse'>
            <div className='w-20 h-3 md:h-4 lg:h-5 bg-[#c7d3a7] rounded'></div>
            <div className='w-36 h-4 md:h-6 lg:h-8 bg-[#c7d3a7] rounded'></div>
            <div className='w-40 h-3 md:h-4 lg:h-5 bg-[#c7d3a7] rounded'></div>
            <div className='w-36 h-3 md:h-4 lg:h-5 bg-[#c7d3a7] rounded'></div>
            <div className='w-full h-10 md:h-12 lg:h-14 bg-[#c7d3a7] rounded'></div>
        </div>
    )
}