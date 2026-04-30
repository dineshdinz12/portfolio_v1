'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section py-20 relative overflow-hidden" id="about-me">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="container relative z-10" ref={container}>
                <div className="max-w-[1100px]">
                    <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-thin leading-[1.3] mb-24 slide-up-and-fade">
                        I believe every <span className="text-primary font-normal">backend system</span> should be built like <span className="text-muted-foreground/40 font-normal">infrastructure</span> - reliable, observable, and ready to <span className="text-primary italic underline decoration-2 underline-offset-8 font-normal"></span> scale before it needs to.
                    </h2>
                </div>

                <div className="w-full h-px bg-white/10 mb-16 slide-up-and-fade" />

                <div className="grid md:grid-cols-12 gap-12 items-start">
                    <div className="md:col-span-5">
                        <div className="slide-up-and-fade">
                            <p className="text-primary font-medium tracking-widest uppercase mb-4">About Me</p>
                            <h3 className="text-3xl sm:text-4xl font-anton leading-tight">
                                HI, I&apos;M <br /> DINESH R
                            </h3>
                        </div>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-base sm:text-lg text-muted-foreground leading-relaxed space-y-6">
                            <p className="slide-up-and-fade">
                                I&apos;m a <span className="text-foreground font-medium">backend and AI engineer</span> pursuing
                                B.Tech in IT at <span className="">Bannari Amman Institute of Technology</span>. 
                                I specialize in building <span className="text-primary">LLM-powered automation</span> systems, 
                                real-time data pipelines, and high-performance REST APIs.
                            </p>
                            <p className="slide-up-and-fade">
                                From winning a <span className="text-foreground font-medium">global merit scholarship</span> awarded
                                to only 4 engineers worldwide, to shipping <span className="text-primary">AI systems</span> for real police operations. 
                                I build things that work at scale and make an impact.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
