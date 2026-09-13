'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const SmoothScrollHero = () => {
    return (
        <section className="relative w-full py-20 md:py-28 px-6 sm:px-10 md:px-16 lg:px-24 bg-background text-foreground overflow-hidden flex flex-col items-center justify-center text-center">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 flex flex-col items-center max-w-5xl mx-auto"
            >
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.3em] text-primary mb-4 block">
                    Career Roadmap
                </span>

                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[-0.05em] leading-[0.85] uppercase text-neutral-950 dark:text-white mb-8 select-none">
                    EXPERIENCE
                </h1>

                <p className="w-full max-w-2xl text-center text-sm sm:text-base md:text-lg font-medium text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    Merging technical precision with creative vision.
                    <br className="hidden sm:block" />
                    A curated timeline of my professional journey, from foundational code to AI solutions.
                </p>
            </motion.div>
        </section>
    );
};

export default SmoothScrollHero;
