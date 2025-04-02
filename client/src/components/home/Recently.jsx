import { assets } from '@/assets/assets';
import { ChevronLeft, ChevronRight, IndianRupee } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';
// import { property } from 'lodash';

const Recently = () => {
    const scrollRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [recentProperties, setRecentProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecentProperties = async () => {
            try {
                const response = await axios.get('http://localhost:3000/list', {
                    params: {
                        sort: 'latest',
                        status: 'published'
                    }
                });
                setRecentProperties(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
                console.error('Error fetching recent properties:', err);
            }
        };

        fetchRecentProperties();
    }, []);

    const data = [
        { image: assets.home_24 },
        ...recentProperties.map(property => ({
            _id: property._id,
            image: property.banner,
            title: property.name,
            area: `${property.plotArea.value} ${property.plotArea.unit}`,
            location: `${property.location.locality}, ${property.location.city}, ${property.location.state}`,
            price: property.price.value.toString(),
            price_unit: property.price.unit
        })),
        { image: assets.home_25 }
    ];

    const totalItems = data.length - 2;

    const handleScroll = (direction) => {
        if (scrollRef.current) {
            let newIndex = direction === 'left' ? Math.max(0, currentIndex - 1) : Math.min(totalItems - 1, currentIndex + 1);
            setCurrentIndex(newIndex);
            const scrollElement = scrollRef.current.children[newIndex];
            if (scrollElement) {
                scrollElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            }
        }
    };

    if (loading) {
        return <div className='my-6 md:my-10 xl:my-14'>Loading recent properties...</div>;
    }

    if (error) {
        return <div className='my-6 md:my-10 xl:my-14'>Error loading recent properties: {error}</div>;
    }

    return (
        <div className='my-6 md:my-10 xl:my-14 flex flex-col gap-6 md:gap-12 lg:gap-24'>
            <div className='flex items-end justify-between'>
                <Link to='/properties?sort=latest'>
                    <Button title='View More' variant='primary' icon='show' />
                </Link>
                <div className='flex flex-col items-end gap-2.5 md:gap-3.5 lg:gap-5'>
                    <div className='boska font-normal text-[#859F3E] text-base md:text-xl lg:text-[1.75rem] leading-tight uppercase text-right'>Recently added Properties</div>
                    <div className='capitalize text-[#31511E] font-medium text-sm md:text-3xl lg:text-6xl leading-tight lg:leading-[4.5rem] text-right'>Explore top farms and <br /> premium produce, handpicked <br /> for quality.</div>
                </div>
            </div>
            <div className="relative w-full flex flex-col lg:flex-row items-end justify-start gap-2 md:gap-3 lg:gap-0">
                <div ref={scrollRef} className="lg:w-4/5 h-full overflow-x-auto flex items-center justify-start">
                    {data.map((item, index) => (
                        <div key={index} className='w-1/3 aspect-[2/3] flex-shrink-0'>
                            <img src={item.image} alt="" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
                <div className='absolute inset-0 lg:w-4/5 flex items-start justify-between'>
                    <div className='w-1/3 aspect-2/3 bg-[#BFC9B9] border border-[#31511E] group hover:bg-[#5E722D66] flex items-start p-3 md:p-6 lg:p-9 hover:duration-400 hover:ease-in-out'>
                        <AnimatePresence mode='wait'>
                            <motion.div key={currentIndex} initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }} animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }} exit={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }} transition={{ duration: 1, ease: "easeInOut" }} className='uppercase group-hover:text-white text-[#31511E] font-medium text-base md:text-xl lg:text-[2.5rem] leading-tight text-left hover:duration-400 hover:ease-in-out'>{data[currentIndex + 1].title}</motion.div>
                        </AnimatePresence>
                    </div>
                    <Link to={`/properties/${data[currentIndex + 1]._id}`} className='w-1/3 h-full bg-transparent'></Link>
                    <div className='w-1/3 aspect-2/3 bg-[#5E722D] border border-[#31511E] group hover:bg-[#859F3E33] flex items-end justify-center p-1.5 md:p-3 lg:p-6 hover:duration-400 hover:ease-in-out'>
                        <AnimatePresence mode='wait'>
                            <motion.div key={currentIndex} initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }} animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }} exit={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }} transition={{ duration: 1, ease: "easeInOut" }} className='group-hover:hidden w-full flex-col item-start gap-0.5 md:gap-1 lg:gap-2'>
                                <div className='flex items-end'>
                                    <IndianRupee className='h-5 md:h-8 lg:h-11 w-auto text-white py-1 md:py-1.5 lg:py-2' />
                                    <p className='text-white font-semibold text-sm md:text-xl lg:text-4xl mr-0.5 md:mr-1 lg:mr-1.5'>{data[currentIndex + 1].price}</p>
                                    <p className='text-white font-semibold text-xs md:text-lg lg:text-3xl mr-0.5 md:mr-1 lg:mr-1.5'>{data[currentIndex + 1].price_unit}</p>
                                    <p className='text-[#D9D9D9] font-normal text-[8px] md:text-xs lg:text-base my-0.5 md:my-[3px] lg:my-1 mr-0.5 md:mr-1 lg:mr-1.5'>Onwards</p>
                                </div>
                                <p className='capitalize text-white font-medium text-[9px] md:text-sm lg:text-xl'>{data[currentIndex + 1].location}</p>
                                <p className='capitalize text-[#D9D9D9] font-medium text-[7px] md:text-xs lg:text-base'>Project Area - {data[currentIndex + 1].area}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
                <div className='w-full lg:w-fit relative z-2 lg:translate-y-1/3 lg:-translate-x-1/4 flex items-center justify-center gap-3 md:gap-4 lg:gap-5'>
                    <button
                        className='size-6 md:size-8 lg:size-12 flex items-center justify-center bg-[#859F3E] rounded-full hover:bg-[#5e722d] active:scale-50 ease-in duration-300 disabled:bg-[#D9E2C3]'
                        onClick={() => handleScroll('left')}
                        disabled={currentIndex === 0}
                    >
                        <ChevronLeft className='text-white size-2.5 md:size-3.5 lg:size-5' />
                    </button>
                    <button
                        className='size-6 md:size-8 lg:size-12 flex items-center justify-center bg-[#859F3E] rounded-full hover:bg-[#5e722d] active:scale-50 ease-in duration-300 disabled:bg-[#D9E2C3]'
                        onClick={() => handleScroll('right')}
                        disabled={currentIndex === totalItems - 1}
                    >
                        <ChevronRight className='text-white size-2.5 md:size-3.5 lg:size-5' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Recently