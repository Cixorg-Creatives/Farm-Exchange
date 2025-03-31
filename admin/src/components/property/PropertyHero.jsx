import { assets } from '@/assets/assets'
import { Heart, IndianRupee, MessageSquareText } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Button from '../button'
import { Link, useParams } from 'react-router-dom'

const PropertyHero = () => {
    const { propertyId } = useParams();
    console.log(propertyId)
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await fetch(`http://localhost:3000/get-properties/${propertyId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch property');
                }
                const data = await response.json();
                setProperty(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProperty();
    }, [propertyId]);

    if (loading) {
        return <div className="text-center py-8">Loading property details...</div>;
    }

    if (error) {
        return <div className="text-center py-8 text-red-500">Error: {error}</div>;
    }

    if (!property) {
        return <div className="text-center py-8">Property not found</div>;
    }

    return (
        <div className='py-6 md:py-10 xl:py-14'>
            <div className="w-full flex flex-col lg:flex-row justify-between ">
                <div className="flex flex-col items-start justify-between gap-5 w-full lg:w-2/3">
                    <div className="uppercase text-[#31511E] font-semibold text-[2.5rem] md:text-6xl lg:text-[5rem] leading-tight">
                        {property.name}
                    </div>
                    <div className="flex flex-col items-start justify-between gap-5 md:gap-7">
                        <div className="flex flex-col gap-3 md:gap-4 lg:w-[43.75rem]">
                            <p className="capitalize text-[#31511E] font-normal text-xs md:text-base lg:text-xl">
                                {property.propertyDescription}
                            </p>
                            <p className="capitalize text-[#31511E] font-medium text-xs md:text-base lg:text-xl">
                                {property.location.locality}, {property.location.city}, {property.location.state}
                            </p>
                        </div>
                        <div className="flex gap-2 md:gap-4 h-full items-end">
                            <p className="flex items-center text-[#1E1E1E] font-bold text-4xl md:text-5xl">
                                <IndianRupee className="text-[#1E1E1E] w-7 md:w-9 lg:w-11 h-auto " />
                                {property.price.value}
                                <span className="text-2xl md:text-4xl pl-1 md:pl-2">
                                    {property.price.unit === 'lakh' ? 'lakh' : 'cr'}
                                </span>
                            </p>
                            <p className="text-[#757575] font-normal text-base md:text-xl -translate-y-1">
                                {property.availabilityStatus === 'available' ? 'Onwards' : 'Sold Out'}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 md:gap-4 w-full lg:w-[30.5rem] mt-6 lg:mt-0">
                    <div className='flex flex-row lg:flex-col gap-3 md:gap-4 w-full lg:w-[30.5rem] mt-6 lg:mt-0'>
                        <div className="bg-[#D9E1C3] p-3 md:p-5 w-full">
                            <div className="flex items-end justify-start gap-1 capitalize">
                                <p className="text-[#31511E] font-semibold text-2xl md:text-3xl lg:text-4xl">
                                    {property.plotArea.value}
                                </p>
                                <p className="text-[#859F3E] font-semibold text-base md:text-xl lg:text-2xl">
                                    {property.plotArea.unit === 'ft' ? 'Sq ft' : 'Acres'}
                                </p>
                            </div>
                            <p className="capitalize text-[#5A744B] text-xs md:text-base lg:text-xl font-medium">Plot Area</p>
                        </div>
                        <div className="bg-[#D9E1C3] p-3 md:p-5 w-[80%] lg:w-full">
                            <p className="text-[#31511E] font-semibold text-2xl md:text-3xl lg:text-4xl">
                                {property.pricePerArea.value}
                            </p>
                            <p className="capitalize text-[#5A744B] text-xs md:text-base lg:text-xl font-medium">
                                Price Per {property.plotArea.unit === 'ft' ? 'sq. Ft' : 'acre'}
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#C7D3A6] p-3 md:p-5 w-full">
                        <div className="flex items-end justify-start gap-1 capitalize">
                            <p className="text-[#31511E] font-semibold text-2xl md:text-3xl lg:text-4xl">
                                {property.totalProjectArea.value}
                            </p>
                            <p className="text-[#31511E] font-semibold text-base md:text-xl lg:text-2xl">
                                {property.totalProjectArea.unit === 'ft' ? 'Sq ft' : 'Acres'}
                            </p>
                        </div>
                        <p className="capitalize text-[#5A744B] text-xs md:text-base lg:text-xl font-medium">Project Area</p>
                        <p className="capitalize text-[#5A744B] text-xs md:text-base lg:text-xl font-medium">
                            {property.projectDescription}
                        </p>
                    </div>
                </div>
            </div>
            <div className='pt-12 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6'>
                <div className='col-span-1 row-span-1 h-auto'>
                    <img 
                        src={property.banner} 
                        alt={property.name} 
                        className='w-full h-[400px] object-cover rounded-md'
                    />
                </div>
                <div className='h-full flex flex-col items-start gap-6 md:gap-18 lg:gap-14'>
                    <div className='grid grid-cols-[1fr_1fr] gap-3 md:gap-5 h-2/3'>
                        {property.gallery.slice(0, 2).map((image, index) => (
                            <img 
                                key={index} 
                                src={image} 
                                alt={`Gallery ${index + 1}`} 
                                className='col-span-1 w-full h-[250px] object-cover rounded-md'
                            />
                        ))}
                    </div>
                    <div className='flex items-center justify-start gap-3 md:gap-6'>
                        <Button link={'/properties/add-property'} title='add property' variant='primary' icon='show' symbol='visit' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyHero