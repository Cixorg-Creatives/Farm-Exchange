import React, { useRef, useState, useEffect } from 'react';
import Overview from './Overview';
import About from './About';
import Amenities from './Amenities';
import Gallery from './Gallery';
import Location from './Location';

const Details = () => {
    const overviewRef = useRef(null);
    const aboutRef = useRef(null);
    const amenitiesRef = useRef(null);
    const galleryRef = useRef(null);
    const locationRef = useRef(null);

    const sectionRefs = [overviewRef, aboutRef, amenitiesRef, galleryRef, locationRef];
    const sectionIds = ['Overview', 'About', 'Amenities', 'Gallery', 'Location'];
    
    const [activeSection, setActiveSection] = useState(0);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        let currentActive = 0;

        sectionRefs.forEach((ref, index) => {
            if (ref.current) {
                const { top } = ref.current.getBoundingClientRect();
                if (top < window.innerHeight * 0.5) {
                    currentActive = index;
                }
            }
        });

        setActiveSection(currentActive);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (ref, index) => {
        if (ref.current) {
            ref.current.scrollIntoView({ 
                behavior: 'smooth', 
                // block: index === 0 ? 'start' : index === sectionRefs.length - 1 ? 'start' : 'start' 
                block: 'start'
            });
        }
    };

    return (
        <div className='py-6 md:py-10 xl:py-14 flex justify-between'>
            <div className='h-auto w-full lg:w-3/5 flex flex-col items-start justify-start'>
                <div ref={overviewRef}><Overview /></div>
                <div ref={aboutRef}><About /></div>
                <div ref={amenitiesRef}><Amenities /></div>
                <div ref={galleryRef}><Gallery /></div>
                <div ref={locationRef}><Location /></div>
            </div>
            <aside className='hidden lg:sticky lg:flex flex-col items-end gap-1 w-[30%] top-20 right-0 overflow-y-auto max-h-screen'>
                {sectionIds.map((section, index) => (
                    <div
                        key={section}
                        onClick={() => scrollToSection(sectionRefs[index], index)}
                        className={`capitalize font-semibold text-[2rem] w-full h-28 flex items-center justify-end border-b-1 border-[#ADBF7E] cursor-pointer transition-colors duration-300 ${
                            index <= activeSection ? 'text-[#31511E]' : 'text-[#A0AF98]'
                        }`}
                    >
                        {section}
                    </div>
                ))}
            </aside>
        </div>
    );
};

export default Details;