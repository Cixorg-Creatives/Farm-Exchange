import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../Button';

const List = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                }
            } catch (error) {
                console.error('Error fetching properties:', error);
                setError('Failed to load properties');
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    const deleteProperty = async (id) => {
        try {
            const response = await axios.post('http://localhost:3000/delete-post-property', { id });

            if (response.data.success) {
                setProperties(properties.filter(property => property._id !== id));
            } else {
                console.error("Failed to delete property:", response.data.message);
            }
        } catch (error) {
            console.error("Error deleting property:", error);
        }
    };

    if (loading) return <p>Loading properties...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

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
                                    onClick={() => deleteProperty(property._id)}
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
        </div>
    );
};

export default List;