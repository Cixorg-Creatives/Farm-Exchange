'use client';
import { useEffect, useState } from 'react';

const ComingSoon = () => {
    const fullText = "Coming Soon";
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + fullText[index]);
                setIndex(index + 1);
            }, 150);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <div className='py-6 md:py-10 xl:py-14'>
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
                {/* Glowing Blur */}
                <div className="absolute w-[500px] h-[500px] bg-green-300 opacity-20 rounded-full blur-3xl animate-pulse z-0" />

                {/* Text */}
                <h1 className="z-10 text-[#31511E] font-semibold text-[2.5rem] md:text-6xl lg:text-[5rem] leading-tight uppercase text-center lg:text-left">
                    {displayedText}
                    <span className="animate-pulse">|</span>
                </h1>
            </div>
        </div>

    );
};

export default ComingSoon;
