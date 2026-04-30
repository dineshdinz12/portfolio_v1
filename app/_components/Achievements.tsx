'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_ACHIEVEMENTS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Define type based on data structure
type AchievementItem = typeof MY_ACHIEVEMENTS[0];

const Achievements = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedItem, setSelectedItem] = useState<AchievementItem | null>(null);
    const [isFading, setIsFading] = useState(false);

    useGSAP(
        () => {
            if (window.innerWidth < 768) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 5) % MY_ACHIEVEMENTS.length);
                setIsFading(false);
            }, 500);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Get the current 5 items (wrapping around if necessary)
    const currentItems = Array.from({ length: 5 }).map((_, i) => {
        return MY_ACHIEVEMENTS[(currentIndex + i) % MY_ACHIEVEMENTS.length];
    });

    return (
        <section className="pb-20 md:pb-section overflow-hidden" id="achievements">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Achievements & Certifications" />

                <div className={`w-full mt-8 flex flex-col gap-1 transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                    {/* Top Row: 2 Items */}
                    <div className="flex gap-1 h-[250px] sm:h-[300px]">
                        {currentItems.slice(0, 2).map((item, index) => (
                            <div
                                key={`top-${index}`}
                                onClick={() => setSelectedItem(item)}
                                className="relative flex-1 rounded-sm overflow-hidden group cursor-pointer"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3 sm:p-5">
                                    <p className="text-[10px] sm:text-sm text-white/80 font-medium mb-1">
                                        {item.date}
                                    </p>
                                    <p className="text-xs sm:text-lg text-white font-anton leading-tight">
                                        {item.title}
                                    </p>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Row: 3 Items */}
                    <div className="flex gap-1 h-[200px] sm:h-[250px]">
                        {currentItems.slice(2, 5).map((item, index) => (
                            <div
                                key={`bottom-${index}`}
                                onClick={() => setSelectedItem(item)}
                                className="relative flex-1 rounded-sm overflow-hidden group cursor-pointer"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-2 sm:p-5">
                                    <p className="text-[9px] sm:text-sm text-white/80 font-medium mb-0.5">
                                        {item.date}
                                    </p>
                                    <p className="text-[10px] sm:text-base text-white font-anton leading-tight">
                                        {item.title}
                                    </p>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Popup Modal */}
            {selectedItem && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={() => setSelectedItem(null)}
                >
                    <div 
                        className="bg-[#121212] border border-white/10 rounded-xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row shadow-2xl animate-fade-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full md:w-1/2 h-[250px] md:h-[450px] bg-white/5">
                            <Image 
                                src={selectedItem.image} 
                                alt={selectedItem.title} 
                                fill 
                                className="object-contain p-4" 
                            />
                        </div>
                        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center relative">
                            <button 
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors"
                            >
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <p className="text-sm text-primary font-medium mb-3 tracking-widest uppercase">
                                {selectedItem.date}
                            </p>
                            <h3 className="text-3xl md:text-4xl font-anton leading-tight text-white mb-4">
                                {selectedItem.title}
                            </h3>
                            {selectedItem.description && (
                                <p className="text-white/70 text-lg leading-relaxed">
                                    {selectedItem.description}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Achievements;
