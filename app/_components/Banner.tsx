'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS, GENERAL_INFO } from '@/lib/data';
import Image from 'next/image';

const MediumIcon = ({ className }: { className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        className={className}
    >
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.11-.53 5.61-1.18 5.61-.66 0-1.18-2.5-1.18-5.61s.52-5.61 1.18-5.61C23.47 6.39 24 8.89 24 12z" />
    </svg>
);

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container min-h-[100svh] md:h-[100svh] max-md:py-28 flex justify-between items-center max-md:flex-col max-md:gap-12"
                ref={containerRef}
            >
                <div className="max-md:flex flex-col justify-center items-start max-md:items-center max-md:text-center max-w-[600px] w-full max-md:order-2">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-[10vw] md:text-[80px] font-anton">
                        <span className="text-primary">BACKEND</span>
                        <br className="hidden md:block" />
                        <span className="max-md:ml-2 md:ml-0"> & AI ENGINEER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-4 text-xl text-foreground font-medium">
                        Hi! I&apos;m{' '}
                        <span className="text-primary">
                            Dinesh R
                        </span>
                    </p>
                    <p className="banner-description slide-up-and-fade mt-3 text-lg text-muted-foreground max-w-[540px]">
                        An engineer who turns complex problems into scalable, intelligent systems from LLM pipelines to high-performance APIs.
                    </p>
                    <Button
                        as="link"
                        href="/Dinesh_R - Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        className="mt-9 banner-button slide-up-and-fade"
                    >
                        View My Work
                    </Button>

                    <div className="flex items-center max-md:justify-center gap-6 mt-8 slide-up-and-fade text-muted-foreground">
                        {SOCIAL_LINKS.map((link) => {
                            if (link.name === 'github') return (
                                <a key={link.name} href={link.url} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                                    <Github size={28} strokeWidth={1.5} />
                                </a>
                            );
                            if (link.name === 'linkedin') return (
                                <a key={link.name} href={link.url} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                                    <Linkedin size={28} strokeWidth={1.5} />
                                </a>
                            );
                            if (link.name === 'medium') return (
                                <a key={link.name} href={link.url} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                                    <MediumIcon className="w-7 h-7" />
                                </a>
                            );
                            return null;
                        })}
                        <a href={`mailto:${GENERAL_INFO.email}`} className="hover:text-foreground transition-colors">
                            <Mail size={28} strokeWidth={1.5} />
                        </a>
                    </div>
                </div>

                <div className="w-full flex-1 flex justify-center md:justify-end items-center slide-up-and-fade max-md:order-1">
                    <div className="relative w-[240px] md:w-[350px] lg:w-[450px] aspect-square">
                        <Image 
                            src="/image.png" 
                            alt="Dinesh R" 
                            fill 
                            className="object-contain drop-shadow-2xl" 
                            priority 
                        />
                    </div>
                </div>

                <div className="md:absolute bottom-[10%] right-[4%] flex max-md:flex-wrap max-md:justify-center md:flex-col gap-6 md:gap-8 text-center md:text-right w-full md:w-auto max-md:order-3">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            3+
                        </h5>
                        <p className="text-muted-foreground">
                            Internships
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            5+
                        </h5>
                        <p className="text-muted-foreground">
                            Projects Shipped
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            8+
                        </h5>
                        <p className="text-muted-foreground">Hackathon Wins</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
