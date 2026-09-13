'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Instagram, Mail, Twitter, Check } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { cn } from '@/lib/utils';

export function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [localTime, setLocalTime] = useState<string>('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            });
            setLocalTime(timeString);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
            setTimeout(() => {
                setSubscribed(false);
                setEmail('');
            }, 3500);
        }
    };

    return (
        <footer className="w-full bg-[#efeeec] dark:bg-[#0a0a0f] text-neutral-900 dark:text-white pt-20 pb-8 px-6 sm:px-10 md:px-16 lg:px-24 rounded-t-[2.5rem] md:rounded-t-[3.5rem] border-t border-black/5 dark:border-white/10 transition-colors duration-500 overflow-hidden relative selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
            
            {/* Top Grid: Newsletter & Links */}
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-black/10 dark:border-white/10">
                
                {/* Left Column: Newsletter & Socials (Span 5) */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                    <div className="space-y-6">
                        <motion.h3 
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl lg:text-[2.6rem] font-medium tracking-tight text-neutral-950 dark:text-white leading-[1.15]"
                        >
                            Stay Updated with Kartik&apos;s Tech & Works
                        </motion.h3>

                        {/* Newsletter Pill Form */}
                        <form 
                            onSubmit={handleSubscribe} 
                            className="flex items-center bg-[#dcdbd8] dark:bg-white/10 rounded-full p-1.5 pl-6 max-w-md w-full focus-within:bg-[#d2d0cc] dark:focus-within:bg-white/15 transition-all shadow-inner border border-black/5 dark:border-white/5"
                        >
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your Email Address" 
                                required
                                className="bg-transparent border-none outline-none text-sm sm:text-base text-neutral-900 dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-400 flex-1 min-w-0"
                            />
                            <button 
                                type="submit" 
                                aria-label="Subscribe"
                                className="w-12 h-12 rounded-full bg-white dark:bg-neutral-900 text-neutral-950 dark:text-white flex items-center justify-center hover:scale-105 hover:bg-neutral-950 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-md group shrink-0"
                            >
                                <AnimatePresence mode="wait">
                                    {subscribed ? (
                                        <motion.span 
                                            key="check" 
                                            initial={{ scale: 0 }} 
                                            animate={{ scale: 1 }} 
                                            exit={{ scale: 0 }}
                                        >
                                            <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                        </motion.span>
                                    ) : (
                                        <motion.span 
                                            key="arrow" 
                                            initial={{ scale: 0 }} 
                                            animate={{ scale: 1 }} 
                                            exit={{ scale: 0 }}
                                        >
                                            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>
                        </form>
                    </div>

                    {/* Social Icon Square Badges */}
                    <div className="flex items-center gap-3 pt-2">
                        <a 
                            href="https://github.com/KartikSharma4448" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-11 h-11 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 rounded-xl flex items-center justify-center hover:scale-110 hover:-translate-y-0.5 transition-all shadow-md" 
                            title="GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a 
                            href="https://linkedin.com/in/kartik-sharma06" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-11 h-11 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 rounded-xl flex items-center justify-center hover:scale-110 hover:-translate-y-0.5 transition-all shadow-md" 
                            title="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a 
                            href="https://twitter.com/itszeromind" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-11 h-11 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 rounded-xl flex items-center justify-center hover:scale-110 hover:-translate-y-0.5 transition-all shadow-md" 
                            title="Twitter / X"
                        >
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a 
                            href="mailto:kartikuma9261@gmail.com" 
                            className="w-11 h-11 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 rounded-xl flex items-center justify-center hover:scale-110 hover:-translate-y-0.5 transition-all shadow-md" 
                            title="Email"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Right: 3 Nav Link Columns (Span 7) */}
                <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 pt-2">
                    
                    {/* Column 1: Main Pages */}
                    <div className="flex flex-col space-y-4">
                        <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-2">
                            Navigation
                        </span>
                        <Link href="/" className="text-base sm:text-lg font-medium text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white transition-colors w-fit hover:translate-x-1 duration-200">
                            Home
                        </Link>
                        <Link href="/about" className="text-base sm:text-lg font-medium text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white transition-colors w-fit hover:translate-x-1 duration-200">
                            About
                        </Link>
                        <Link href="/achievements" className="text-base sm:text-lg font-medium text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white transition-colors w-fit hover:translate-x-1 duration-200">
                            Achievements
                        </Link>
                        <Link href="/projects" className="text-base sm:text-lg font-medium text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white transition-colors w-fit hover:translate-x-1 duration-200">
                            Projects
                        </Link>
                        <Link href="/contact" className="text-base sm:text-lg font-medium text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white transition-colors w-fit hover:translate-x-1 duration-200">
                            Contact
                        </Link>
                    </div>

                    {/* Column 2: Featured Projects */}
                    <div className="flex flex-col space-y-4">
                        <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-2">
                            Featured
                        </span>
                        {portfolioData.projects.slice(0, 5).map((project) => (
                            <Link 
                                key={project.id} 
                                href={`/projects/${project.slug}`}
                                className="text-base sm:text-lg font-medium text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white transition-colors w-fit line-clamp-1 hover:translate-x-1 duration-200"
                            >
                                {project.title.split(' - ')[0]}
                            </Link>
                        ))}
                    </div>

                    {/* Column 3: Capabilities */}
                    <div className="flex flex-col space-y-4 col-span-2 sm:col-span-1">
                        <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-2">
                            Capabilities
                        </span>
                        <span className="text-base sm:text-lg font-medium text-neutral-800 dark:text-neutral-200">
                            MERN & Full-Stack Web
                        </span>
                        <span className="text-base sm:text-lg font-medium text-neutral-800 dark:text-neutral-200">
                            Flutter Mobile Apps
                        </span>
                        <span className="text-base sm:text-lg font-medium text-neutral-800 dark:text-neutral-200">
                            REST APIs & Backend
                        </span>
                        <span className="text-base sm:text-lg font-medium text-neutral-800 dark:text-neutral-200">
                            Database & Supabase
                        </span>
                        <span className="text-base sm:text-lg font-medium text-neutral-800 dark:text-neutral-200">
                            System Architecture
                        </span>
                    </div>

                </div>

            </div>

            {/* Bottom Giant Architectural Brand Typography */}
            <div className="w-full pt-10 pb-0 overflow-hidden flex flex-col items-center justify-center select-none">
                <div className="w-full max-w-[1600px] flex items-center justify-between text-xs sm:text-sm font-mono text-neutral-500 dark:text-neutral-400 pb-6 border-b border-black/5 dark:border-white/5">
                    <span>© {new Date().getFullYear()} Kartik. All Rights Reserved.</span>
                    {localTime && <span>{localTime}</span>}
                </div>

                <div className="w-full overflow-hidden text-center pt-6 -mb-3 sm:-mb-6 md:-mb-8">
                    <span className="block font-black text-[18vw] leading-[0.72] tracking-tighter text-neutral-950/15 dark:text-white/10 uppercase select-none hover:text-neutral-950/25 dark:hover:text-white/20 transition-colors duration-500">
                        KARTIK
                    </span>
                </div>
            </div>

        </footer>
    );
}
