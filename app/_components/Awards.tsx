'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_AWARDS } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Awards = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'top 20%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.award-item', {
                y: 30,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: containerRef },
    );

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

    return (
        <section className="pb-section" id="awards">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Awards" />

                <div className="grid gap-8">
                    {MY_AWARDS.map((item) => {
                        const isImage = item.icon.startsWith('/');

                        return (
                            <div key={item.title} className="award-item flex gap-4 items-start">
                                {isImage ? (
                                    <div className="relative w-12 h-12 shrink-0 overflow-hidden mt-1">
                                        <Image src={item.icon} alt={item.title} fill className="object-contain" />
                                    </div>
                                ) : (
                                    <span className="text-3xl leading-none mt-1 shrink-0">
                                        {item.icon}
                                    </span>
                                )}
                                <div>
                                    <div className="flex items-center gap-2">
                                        <p className="text-xl sm:text-2xl font-anton leading-tight">
                                            {item.title}
                                        </p>
                                    </div>
                                    {'issuer' in item && item.issuer && (
                                        <div className="mt-1">
                                            {'url' in item && item.url ? (
                                                <Link 
                                                    href={item.url} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline group"
                                                >
                                                    {item.issuer}
                                                    <svg
                                                        className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                        />
                                                    </svg>
                                                </Link>
                                            ) : (
                                                <p className="text-sm font-medium text-primary">
                                                    {item.issuer}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                    <p className="text-muted-foreground mt-1">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Awards;
