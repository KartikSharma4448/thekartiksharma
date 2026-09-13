'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, BookOpen, ImageIcon, FileText, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavLink {
    label: string;
    href: string;
    description?: string;
}

interface NavItem {
    label: string;
    links: NavLink[];
}

interface CardNavProps {
    items: NavItem[];
    theme?: 'light' | 'dark';
    pathname?: string;
}

function ActiveDot({ theme }: { theme: string }) {
    return (
        <span className="inline-flex ml-2 -translate-y-px align-middle">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[#D1FF4D]"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D1FF4D] shadow-[0_0_5px_rgba(209,255,77,0.8)]"></span>
            </span>
        </span>
    );
}

function SidebarLink({ href, icon: Icon, title, desc, theme, pathname }: any) {
    const isActive = pathname === href || (href !== '#' && pathname?.startsWith(`${href}/`));
    
    return (
        <Link href={href} className={cn(
            "group flex items-center justify-between rounded-2xl border p-4 transition-all duration-300 overflow-hidden relative hover:scale-[1.02] hover:-translate-y-0.5",
            theme === 'dark'
                ? cn("bg-[#141414] hover:bg-[#1c1c1c]", isActive ? "border-[#D1FF4D]/50 shadow-[0_0_15px_rgba(209,255,77,0.05)]" : "border-white/10 hover:border-white/20")
                : cn("hover:bg-white", isActive ? "bg-white border-[#D1FF4D]/80 shadow-sm shadow-[#D1FF4D]/10" : "bg-black/[0.02] border-black/10 hover:border-black/20")
        )}>
            <div className="flex-1 relative z-10 pr-2">
                <h4 className={cn("font-bold text-sm mb-1 transition-colors duration-300 flex items-center", theme === 'dark' ? (isActive ? "text-[#D1FF4D]" : "text-white") : (isActive ? "text-[#8cb815]" : "text-black"))}>
                    {title}
                    {isActive && <ActiveDot theme={theme} />}
                </h4>
                <p className={cn("text-[11px] font-medium transition-colors duration-300", theme === 'dark' ? "text-white/60 group-hover:text-white/80" : "text-black/60 group-hover:text-black/80")}>{desc}</p>
            </div>
            <div className={cn("p-2 rounded-xl transition-colors duration-300 shrink-0", theme === 'dark' ? "bg-white/5 group-hover:bg-white/10" : "bg-black/5 group-hover:bg-black/10")}>
                <Icon className={cn("w-4 h-4 transition-transform duration-300 group-hover:scale-115 group-hover:-rotate-6", theme === 'dark' ? (isActive ? "text-[#D1FF4D]" : "text-white/60 group-hover:text-white") : (isActive ? "text-[#8cb815]" : "text-black/60 group-hover:text-black"))} />
            </div>
        </Link>
    );
}

export default function CardNav({
    items,
    theme = "dark",
    pathname = "/"
}: CardNavProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsExpanded(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const currentItem = items[0] || { label: "Other" };
    const allHrefs = ['/blog', '/gallery', '/resume'];
    const isActive = useMemo(() => {
        return allHrefs.some(href => pathname === href || pathname?.startsWith(`${href}/`));
    }, [pathname]);

    return (
        <div ref={containerRef} className="relative">
            <motion.button
                onMouseEnter={() => setIsExpanded(true)}
                onClick={() => setIsExpanded(!isExpanded)}
                className={cn(
                    "relative px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full flex items-center gap-1.5 group",
                    isActive
                        ? (theme === 'dark' ? "text-white bg-white/10" : "text-black bg-black/5")
                        : (theme === 'dark' ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black")
                )}
            >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                <span className="relative z-10 flex items-center gap-2">
                    {isActive && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="flex items-center justify-center"
                        >
                            <motion.span
                                animate={{ opacity: [1, 0.4, 1], scale: [1, 1.3, 1] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                className="w-1.5 h-1.5 rounded-full bg-[#D1FF4D] shadow-[0_0_8px_rgba(209,255,77,0.6)]"
                            />
                        </motion.div>
                    )}
                    {currentItem.label}
                </span>
                <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                >
                    <ChevronDown className="w-4 h-4 opacity-50" />
                </motion.div>
            </motion.button>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        onMouseLeave={() => setIsExpanded(false)}
                        initial={{ opacity: 0, y: 10, scale: 0.98, x: "-50%" }}
                        animate={{ opacity: 1, y: 20, scale: 1, x: "-50%" }}
                        exit={{ opacity: 0, y: 10, scale: 0.98, x: "-50%" }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute top-full left-1/2 z-[100] pointer-events-auto"
                    >
                        <div className={cn(
                            "relative w-[380px] rounded-[1.5rem] border shadow-2xl flex flex-col p-3 gap-2 backdrop-blur-2xl transition-all overflow-hidden",
                            theme === 'dark'
                                ? "bg-[#0a0a0a]/95 border-white/10 shadow-black/80"
                                : "bg-white/95 border-black/10 shadow-black/5"
                        )}>
                            <SidebarLink href="/blog" icon={BookOpen} title="Blog" desc="Tech insights & articles" theme={theme} pathname={pathname} />
                            <SidebarLink href="/gallery" icon={ImageIcon} title="Gallery" desc="Moments & visual archive" theme={theme} pathname={pathname} />
                            <SidebarLink href="/resume" icon={FileText} title="Resume" desc="View or download my CV" theme={theme} pathname={pathname} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
