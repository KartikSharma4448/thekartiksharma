'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';
import { Search, X, LayoutGrid, List, ArrowUpRight, Sparkles } from 'lucide-react';
import { Project } from '@/types';
import { cn } from '@/lib/utils';
import { getPlaceholderImageUrl } from '@/components/projects/ProjectPlaceholder';

interface SyedNoorWorksShowcaseProps {
    projects: Project[];
    initialViewMode?: 'grid' | 'list';
}

function SpinningClickBadge({ id, className }: { id: string; className?: string }) {
    return (
        <div className={cn("relative w-[70px] h-[70px] sm:w-[86px] sm:h-[86px] md:w-[96px] md:h-[96px] rounded-full bg-[#98e8d1] dark:bg-[#D1FF4D] text-black flex items-center justify-center shrink-0 shadow-lg select-none", className)}>
            <svg className="w-full h-full animate-[spin_10s_linear_infinite]" viewBox="0 0 200 200">
                <path
                    id={`badgePath-${id}`}
                    d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                    fill="transparent"
                />
                <text fill="#000000" fontSize="15" fontWeight="800" letterSpacing="3.5">
                    <textPath href={`#badgePath-${id}`} startOffset="0%">
                        • CLICK ME • CLICK ME •
                    </textPath>
                </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-lg sm:text-2xl font-black text-black">
                ↗
            </div>
        </div>
    );
}

export function SyedNoorWorksShowcase({
    projects,
    initialViewMode = 'grid'
}: SyedNoorWorksShowcaseProps) {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>(initialViewMode);
    const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
    const [selectedYear, setSelectedYear] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');

    // Floating List Preview state
    const [hoveredListProject, setHoveredListProject] = useState<Project | null>(null);
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);
    const springX = useSpring(cursorX, { stiffness: 280, damping: 25 });
    const springY = useSpring(cursorY, { stiffness: 280, damping: 25 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX + 32);
            cursorY.set(e.clientY - 90);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [cursorX, cursorY]);

    // Extract available years
    const availableYears = useMemo(() => {
        const years = new Set<string>();
        projects.forEach(p => {
            if (p.startDate) {
                const yr = new Date(p.startDate).getFullYear().toString();
                if (!isNaN(Number(yr))) years.add(yr);
            }
            if (p.customTimeline) {
                const match = p.customTimeline.match(/\b(20\d{2})\b/);
                if (match) years.add(match[1]);
            }
        });
        return Array.from(years).sort((a, b) => Number(b) - Number(a));
    }, [projects]);

    // Extract available industries / categories
    const availableIndustries = useMemo(() => {
        const set = new Set<string>();
        projects.forEach(p => {
            if (p.category) set.add(p.category);
        });
        return Array.from(set);
    }, [projects]);

    // Helper to extract year from project
    const getProjectYear = (p: Project) => {
        if (p.customTimeline) {
            const match = p.customTimeline.match(/\b(20\d{2})\b/);
            if (match) return match[1];
        }
        if (p.startDate) {
            const yr = new Date(p.startDate).getFullYear().toString();
            if (!isNaN(Number(yr))) return yr;
        }
        return '2026';
    };

    // Filter projects
    const filteredProjects = useMemo(() => {
        return projects.filter(p => {
            const yr = getProjectYear(p);
            const ind = p.category || 'Engineering';

            const matchesIndustry = selectedIndustry === 'all' || ind.toLowerCase() === selectedIndustry.toLowerCase();
            const matchesYear = selectedYear === 'all' || yr === selectedYear;
            const matchesSearch = !searchQuery.trim() || 
                p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

            return matchesIndustry && matchesYear && matchesSearch;
        });
    }, [projects, selectedIndustry, selectedYear, searchQuery]);

    return (
        <div className="w-full relative selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
            
            {/* Floating Image Preview for List View Mode */}
            <motion.div
                className="fixed pointer-events-none z-[9999] hidden lg:block w-[340px] h-[210px] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black -translate-y-1/2"
                style={{
                    left: springX,
                    top: springY,
                    opacity: hoveredListProject && viewMode === 'list' ? 1 : 0,
                    scale: hoveredListProject && viewMode === 'list' ? 1 : 0.8,
                }}
                transition={{ duration: 0.2 }}
            >
                {hoveredListProject && (
                    <Image
                        src={hoveredListProject.image || getPlaceholderImageUrl(hoveredListProject.title)}
                        alt={hoveredListProject.title}
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="340px"
                    />
                )}
            </motion.div>

            {/* ================= 1. HERO HEADER ================= */}
            <header className="pt-28 md:pt-36 pb-12 md:pb-16 max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-[#45b095] dark:text-[#D1FF4D] mb-4 md:mb-6"
                >
                    <Sparkles className="w-4 h-4" />
                    <span>Case Studies & Systems</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black uppercase tracking-tight text-neutral-950 dark:text-white leading-[0.92]"
                >
                    Selected Works
                </motion.h1>
            </header>

            {/* ================= 2. FILTER & CONTROLS BAR ================= */}
            <section className="w-full bg-[#efeeec] dark:bg-[#0a0a0f] text-neutral-900 dark:text-white rounded-t-[2.5rem] md:rounded-t-[3.5rem] border-t border-black/5 dark:border-white/10 transition-colors duration-500 pt-8 sm:pt-12 px-6 sm:px-10 md:px-16 lg:px-24">
                <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-black/10 dark:border-white/10">
                    
                    {/* Dropdown Filters & Search */}
                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3 sm:gap-6 w-full md:w-auto">
                        
                        {/* Industry Select */}
                        <div className="flex flex-col gap-1.5 col-span-1">
                            <label className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                                Industry
                            </label>
                            <div className="relative">
                                <select
                                    value={selectedIndustry}
                                    onChange={(e) => setSelectedIndustry(e.target.value)}
                                    className="w-full appearance-none bg-white/70 dark:bg-white/5 border border-black/15 dark:border-white/15 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 pr-8 sm:pr-10 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#98e8d1] dark:focus:ring-[#D1FF4D] cursor-pointer shadow-sm"
                                >
                                    <option value="all" className="dark:bg-[#121212]">All Industries</option>
                                    {availableIndustries.map(ind => (
                                        <option key={ind} value={ind} className="dark:bg-[#121212]">{ind}</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-neutral-500 text-xs">
                                    ▾
                                </div>
                            </div>
                        </div>

                        {/* Year Select */}
                        <div className="flex flex-col gap-1.5 col-span-1">
                            <label className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                                Year
                            </label>
                            <div className="relative">
                                <select
                                    value={selectedYear}
                                    onChange={(e) => setSelectedYear(e.target.value)}
                                    className="w-full appearance-none bg-white/70 dark:bg-white/5 border border-black/15 dark:border-white/15 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 pr-8 sm:pr-10 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#98e8d1] dark:focus:ring-[#D1FF4D] cursor-pointer shadow-sm"
                                >
                                    <option value="all" className="dark:bg-[#121212]">All Years</option>
                                    {availableYears.map(yr => (
                                        <option key={yr} value={yr} className="dark:bg-[#121212]">{yr}</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-neutral-500 text-xs">
                                    ▾
                                </div>
                            </div>
                        </div>

                        {/* Search Box */}
                        <div className="flex flex-col gap-1.5 col-span-2 sm:flex-1 min-w-full sm:min-w-[200px]">
                            <label className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                                Search
                            </label>
                            <div className="relative flex items-center">
                                <Search className="absolute left-3.5 w-3.5 sm:w-4 h-3.5 sm:h-4 text-neutral-400" />
                                <input
                                    type="text"
                                    placeholder="Search by tech or title..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-white/70 dark:bg-white/5 border border-black/15 dark:border-white/15 rounded-full pl-9 sm:pl-10 pr-9 sm:pr-10 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#98e8d1] dark:focus:ring-[#D1FF4D] shadow-sm"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-3 p-1 text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                                    >
                                        <X className="w-3.5 h-3.5" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* View Switcher Controls (Grid vs List) */}
                    <div className="flex items-center justify-between sm:justify-end w-full md:w-auto gap-3 pt-2 sm:pt-0">
                        <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                            {filteredProjects.length} {filteredProjects.length === 1 ? 'WORK' : 'WORKS'}
                        </span>
                        <div className="flex items-center bg-[#dcdbd8] dark:bg-white/10 p-1 rounded-full shadow-inner border border-black/5 dark:border-white/5">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={cn(
                                    "px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5",
                                    viewMode === 'grid'
                                        ? "bg-white dark:bg-neutral-900 text-neutral-950 dark:text-white shadow-md scale-102"
                                        : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                                )}
                                title="Grid Dual-Split View"
                            >
                                <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                <span>Grid</span>
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={cn(
                                    "px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5",
                                    viewMode === 'list'
                                        ? "bg-white dark:bg-neutral-900 text-neutral-950 dark:text-white shadow-md scale-102"
                                        : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                                )}
                                title="Editorial List View"
                            >
                                <List className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                <span>List</span>
                            </button>
                        </div>
                    </div>

                </div>

                {/* ================= 3. MAIN WORKS CONTENT ================= */}
                <div className="max-w-[1500px] mx-auto py-10 md:py-16">
                    
                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-24">
                            <p className="text-xl font-bold text-neutral-500 dark:text-neutral-400 mb-2">No works found matching your filter.</p>
                            <button
                                onClick={() => { setSelectedIndustry('all'); setSelectedYear('all'); setSearchQuery(''); }}
                                className="mt-4 px-6 py-2.5 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-black font-semibold text-sm hover:scale-105 transition-transform"
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}

                    {/* 1. 2-COLUMN ANIMATED GRID VIEW */}
                    {viewMode === 'grid' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                            <AnimatePresence mode="popLayout">
                                {filteredProjects.map((project, index) => {
                                    const year = getProjectYear(project);
                                    const imageSrc = project.image || getPlaceholderImageUrl(project.title);

                                    return (
                                        <motion.div
                                            key={project.id}
                                            layout
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-40px" }}
                                            transition={{ duration: 0.6, delay: (index % 2) * 0.12, ease: [0.16, 1, 0.3, 1] }}
                                            whileHover={{ y: -8 }}
                                        >
                                            <Link
                                                href={`/projects/${project.slug}`}
                                                className="group flex flex-col h-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#0c0c10] border border-black/10 dark:border-white/10 shadow-xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.18)] dark:hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-all duration-500 cursor-pointer p-4 sm:p-6"
                                            >
                                                {/* Top Visual Mockup Frame */}
                                                <div className="relative w-full h-[260px] sm:h-[320px] md:h-[340px] rounded-[1.5rem] sm:rounded-[1.75rem] overflow-hidden bg-gradient-to-br from-[#1b1b22] via-[#0f0f13] to-[#050507] p-5 sm:p-7 flex items-center justify-center border border-black/5 dark:border-white/10 group-hover:border-[#98e8d1]/30 dark:group-hover:border-[#D1FF4D]/30 transition-colors duration-500">
                                                    
                                                    {/* Ambient Glow */}
                                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(152,232,209,0.12)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(209,255,77,0.1)_0%,transparent_70%)] pointer-events-none" />
                                                    
                                                    {/* Category Tag Top Left */}
                                                    <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono font-bold uppercase tracking-wider text-[#98e8d1] dark:text-[#D1FF4D]">
                                                        ✦ {project.category || 'Engineering'}
                                                    </div>

                                                    {/* Mockup Frame */}
                                                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.8)] border border-white/10 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                                                        <Image
                                                            src={imageSrc}
                                                            alt={project.title}
                                                            fill
                                                            unoptimized
                                                            className="object-cover object-top"
                                                            sizes="(max-width: 768px) 100vw, 50vw"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-10 transition-opacity duration-500" />
                                                    </div>
                                                </div>

                                                {/* Bottom Editorial Content */}
                                                <div className="pt-6 sm:pt-8 px-2 sm:px-3 flex flex-col justify-between flex-1 space-y-6">
                                                    
                                                    {/* Headline */}
                                                    <div>
                                                        <h2 className="text-xl sm:text-2xl md:text-[1.65rem] font-bold text-neutral-950 dark:text-white leading-[1.3] tracking-tight group-hover:text-[#32987f] dark:group-hover:text-[#D1FF4D] transition-colors duration-300 line-clamp-2">
                                                            {project.highlights?.[0] || project.description}
                                                        </h2>
                                                    </div>

                                                    {/* Middle Row: Name + Year + Spinning Badge */}
                                                    <div className="flex items-end justify-between pt-2">
                                                        <div className="space-y-1">
                                                            <div className="flex items-baseline gap-3 flex-wrap">
                                                                <span className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-neutral-950 dark:text-white">
                                                                    {project.title.split(' - ')[0]}
                                                                </span>
                                                                <span className="text-sm sm:text-base font-mono font-semibold text-neutral-400 dark:text-neutral-500">
                                                                    [{year}]
                                                                </span>
                                                            </div>
                                                        </div>

                                                        {/* Spinning Click Badge */}
                                                        <div className="transition-transform duration-300 group-hover:scale-105 shrink-0">
                                                            <SpinningClickBadge id={project.id} />
                                                        </div>
                                                    </div>

                                                    {/* Tech Stack Footer */}
                                                    <div className="pt-4 border-t border-black/10 dark:border-white/10 text-xs sm:text-sm font-mono text-neutral-500 dark:text-neutral-400 tracking-wide line-clamp-1">
                                                        {project.techStack.join(' / ')}
                                                    </div>

                                                </div>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>
                    )}

                    {/* 2. EDITORIAL LIST VIEW */}
                    {viewMode === 'list' && (
                        <div className="flex flex-col border-t border-black/10 dark:border-white/10">
                            <AnimatePresence mode="popLayout">
                                {filteredProjects.map((project, index) => {
                                    const year = getProjectYear(project);

                                    return (
                                        <motion.div
                                            key={project.id}
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.35, delay: index * 0.04 }}
                                            onMouseEnter={() => setHoveredListProject(project)}
                                            onMouseLeave={() => setHoveredListProject(null)}
                                        >
                                            <Link
                                                href={`/projects/${project.slug}`}
                                                className="group flex flex-col sm:flex-row sm:items-center justify-between py-7 sm:py-9 border-b border-black/10 dark:border-white/10 transition-all duration-300 hover:px-4 hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer rounded-2xl"
                                            >
                                                {/* Left: Title + Year */}
                                                <div className="flex items-baseline gap-4 mb-2 sm:mb-0">
                                                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-neutral-900 dark:text-white group-hover:text-[#45b095] dark:group-hover:text-[#D1FF4D] transition-colors duration-200">
                                                        {project.title.split(' - ')[0]}
                                                    </span>
                                                    <span className="text-sm sm:text-base font-mono font-medium text-neutral-400 dark:text-neutral-500">
                                                        [ {year} ]
                                                    </span>
                                                </div>

                                                {/* Right: Category + Arrow */}
                                                <div className="flex items-center gap-6 self-end sm:self-auto">
                                                    <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                                                        {project.category || 'Engineering'}
                                                    </span>
                                                    <div className="w-10 h-10 rounded-full bg-neutral-950 text-white dark:bg-white dark:text-black flex items-center justify-center text-lg font-bold group-hover:scale-110 group-hover:bg-[#98e8d1] dark:group-hover:bg-[#D1FF4D] dark:group-hover:text-black transition-all">
                                                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>
                    )}

                </div>
            </section>
        </div>
    );
}
