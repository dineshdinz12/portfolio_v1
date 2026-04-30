'use client';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [expandedCompany, setExpandedCompany] = useState<string | null>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.experience-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
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
        <section className="py-section" id="my-experience">
            <div className="container" ref={containerRef}>
                <SectionTitle title="My Experience" />

                <div className="grid gap-14">
                    {MY_EXPERIENCE.map((item) => (
                        <div 
                            key={item.company} 
                            className="experience-item cursor-pointer group border-b border-border/50 pb-8 last:border-0"
                            onClick={() => setExpandedCompany(expandedCompany === item.company ? null : item.company)}
                        >
                            <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        {item.logo && (
                                            <div className="relative w-8 h-8 shrink-0 rounded-full overflow-hidden bg-white/10 flex items-center justify-center p-1">
                                                <Image 
                                                    src={item.logo} 
                                                    alt={item.company} 
                                                    width={32} 
                                                    height={32} 
                                                    className="object-contain"
                                                />
                                            </div>
                                        )}
                                        {item.url ? (
                                            <Link 
                                                href={item.url} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="text-xl text-muted-foreground transition-colors hover:text-primary hover:underline"
                                            >
                                                {item.company}
                                            </Link>
                                        ) : (
                                            <p className="text-xl text-muted-foreground transition-colors group-hover:text-primary">
                                                {item.company}
                                            </p>
                                        )}
                                    </div>
                                    <p className="text-4xl md:text-5xl font-anton leading-none mt-3.5 mb-2.5">
                                        {item.title}
                                    </p>
                                    <p className="text-lg text-muted-foreground">
                                        {item.duration}
                                    </p>
                                </div>
                                <div className="hidden md:block text-4xl text-muted-foreground group-hover:text-primary transition-colors">
                                    {expandedCompany === item.company ? '−' : '+'}
                                </div>
                            </div>
                            
                            <div className={`grid transition-all duration-300 ease-in-out ${expandedCompany === item.company ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <ul className="list-disc pl-5 space-y-2 text-lg text-muted-foreground">
                                        {item.description?.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;
