'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ComingSoon = () => {
    const fullText = "CComing Soon";
    const [displayedChars, setDisplayedChars] = useState([]);
    const indexRef = useRef(0);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });

    useEffect(() => {
        if (!isInView) return;

        setDisplayedChars([]); // reset in case of re-entry
        indexRef.current = 0;

        const interval = setInterval(() => {
            if (indexRef.current < fullText.length) {
                setDisplayedChars(prev => [...prev, fullText[indexRef.current]]);
                indexRef.current += 1;
            } else {
                clearInterval(interval);
            }
        }, 150);

        return () => clearInterval(interval);
    }, [isInView]);

    return (
        <div className='py-6 md:py-10 xl:py-14'>
            <div
                ref={containerRef}
                className="relative min-h-[75vh] flex items-center justify-center overflow-hidden px-4"
            >
                {/* Glowing Blur */}
                <div className="absolute w-[500px] h-[500px] bg-[#859F3E] opacity-20 rounded-full blur-3xl z-0" />

                {/* Animated Text */}
                <motion.h1
                    className="z-10 text-[#31511E] font-semibold text-[2.5rem] md:text-6xl lg:text-[5rem] leading-tight uppercase text-center lg:text-left flex gap-1"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.05,
                            },
                        },
                    }}
                >
                    {displayedChars.map((char, i) => (
                        <motion.span
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.3 }}
                            className={char === ' ' ? 'w-8 inline-block' : ''}
                        >
                            {char}
                        </motion.span>
                    ))}
                    <motion.span
                        className="animate-pulse"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                    >
                        _
                    </motion.span>
                </motion.h1>
            </div>
        </div>
    );
};

export default ComingSoon;
