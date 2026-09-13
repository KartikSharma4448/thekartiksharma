'use client';

import { useState, useMemo, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { useTranslations } from 'next-intl';
import { Search, X, Layers, ArrowRight, ArrowUpRight, Brain, Database, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { portfolioData } from '@/data/portfolio';
import { Project } from '@/types';
import { ProjectContact } from '@/components/sections/ProjectContact';
import { ProjectStats } from '@/components/sections/ProjectStats';
import { usePerformance } from '@/hooks/usePerformance';
import { ProjectPlaceholder, getPlaceholderImageUrl } from '@/components/projects/ProjectPlaceholder';
import { DeferredMount } from '@/components/ui/DeferredMount';
import { getProjectImages } from '@/app/actions/getProjectImages';

type FilterType = 'all' | 'ongoing' | 'completed';

// â”€â”€â”€ Magnetic Fill-Invert Button â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function MagneticFillButton({
    children,
    onClick,
    showArrowFlip = false,
}: {
    children: React.ReactNode;
    onClick: () => void;
    showArrowFlip?: boolean;
}) {
    const btnRef = useRef<HTMLButtonElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [fillProgress, setFillProgress] = useState(0);

    const magnetX = useMotionValue(0);
    const magnetY = useMotionValue(0);
    const springX = useSpring(magnetX, { stiffness: 300, damping: 22 });
    const springY = useSpring(magnetY, { stiffness: 300, damping: 22 });

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        if (!btnRef.current) return;
        const rect = btnRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        magnetX.set((e.clientX - cx) * 0.35);
        magnetY.set((e.clientY - cy) * 0.35);
    }, [magnetX, magnetY]);

    const handleMouseEnter = () => { setIsHovered(true); setFillProgress(1); };
    const handleMouseLeave = () => {
        setIsHovered(false);
        setFillProgress(0);
        magnetX.set(0);
        magnetY.set(0);
    };

    return (
        <motion.button
            ref={btnRef}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className="relative overflow-hidden px-8 py-3 rounded-full font-semibold text-sm bg-foreground text-background border border-foreground outline-none focus-visible:ring-2 focus-visible:ring-foreground/50"
        >
            <motion.span
                aria-hidden
                className="absolute inset-0 bg-background rounded-full pointer-events-none"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: fillProgress, originX: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
            <span className={cn(
                "relative z-10 flex items-center gap-2 transition-colors duration-300",
                isHovered ? "text-foreground" : "text-background"
            )}>
                {children}
                <ArrowRight className={cn("w-4 h-4 transition-transform duration-300", showArrowFlip && "rotate-180")} />
            </span>
        </motion.button>
    );
}

// â”€â”€â”€ Project List Item â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function ProjectListItem({
    project,
    onClick,
    index,
    isLowPowerMode
}: {
    project: Project;
    onClick: () => void;
    index: number;
    isLowPowerMode?: boolean;
}) {
    const itemRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const isOngoing = project.status === 'ongoing';
    const displayIndex = String(index + 1).padStart(2, '0');
    const rafRef = useRef<number | null>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!itemRef.current) return;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        const rect = itemRef.current.getBoundingClientRect();
        rafRef.current = requestAnimationFrame(() => {
            mouseX.set(e.clientX - rect.left);
            mouseY.set(e.clientY - rect.top);
        });
    };

    const handleMouseEnter = (e: React.MouseEvent) => {
        if (itemRef.current) {
            const rect = itemRef.current.getBoundingClientRect();
            mouseX.set(e.clientX - rect.left);
            mouseY.set(e.clientY - rect.top);
        }
        setIsHovered(true);
    };

    useEffect(() => { return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); }; }, []);

    const techText = project.techStack.join(' · ');
    const bgGradient = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.03), transparent 40%)`;

    return (
        <motion.div
            ref={itemRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group relative"
            data-project-slug={project.slug}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            onClick={onClick}
        >
            <motion.div
                className={cn(
                    "relative cursor-pointer overflow-hidden rounded-xl border-b border-white/5 transition-all duration-300",
                    isHovered ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
                )}
                whileHover={{ scale: 1.002 }}
            >
                {!isLowPowerMode && (
                    <motion.div
                        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
                        style={{ opacity: isHovered ? 1 : 0, background: bgGradient }}
                    />
                )}
                <div className="relative z-10 flex items-center gap-4 sm:gap-8 py-6 sm:py-10 px-4 sm:px-8">
                    <motion.span
                        className={cn(
                            "text-2xl sm:text-4xl md:text-5xl font-black tabular-nums transition-colors duration-500",
                            isHovered
                                ? (isOngoing ? "text-emerald-500 dark:text-emerald-400" : "text-blue-500 dark:text-blue-400")
                                : "text-muted-foreground/20"
                        )}
                        animate={{ scale: isHovered ? 1.1 : 1, x: isHovered ? 5 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {displayIndex}
                    </motion.span>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 sm:gap-4 mb-2">
                            <motion.h3
                                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground truncate"
                                animate={{ x: isHovered ? 8 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {project.title}
                            </motion.h3>
                            <span className={cn(
                                "shrink-0 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider",
                                isOngoing
                                    ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                                    : "bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30"
                            )}>
                                {isOngoing ? 'ongoing' : 'done'}
                            </span>
                        </div>
                        <p className="text-muted-foreground text-sm sm:text-base truncate max-w-2xl hidden sm:block">{project.description}</p>
                        <p className="text-muted-foreground text-xs line-clamp-1 sm:hidden">{project.description}</p>
                    </div>
                    <motion.div
                        className="shrink-0 hidden sm:flex items-center gap-2"
                        animate={{ x: isHovered ? -5 : 0, opacity: isHovered ? 1 : 0.4 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">view</span>
                        <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.3 }}>
                            <ArrowRight className={cn("w-5 h-5 transition-colors", isHovered ? (isOngoing ? "text-emerald-500" : "text-blue-500") : "text-muted-foreground")} />
                        </motion.div>
                    </motion.div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground sm:hidden" />
                </div>

                {/* Tech Marquee on Hover */}
                {!isLowPowerMode && (
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden border-t border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02]"
                            >
                                <div className="relative py-3 overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
                                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
                                    <motion.div
                                        className="flex whitespace-nowrap"
                                        animate={{ x: [0, -500] }}
                                        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                                    >
                                        {[...Array(4)].map((_, i) => (
                                            <span key={i} className={cn("mx-4 text-sm font-mono tracking-wider", isOngoing ? "text-emerald-600/60 dark:text-emerald-400/60" : "text-blue-600/60 dark:text-blue-400/60")}>
                                                {techText} ·
                                            </span>
                                        ))}
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                )}
            </motion.div>


        </motion.div>
    );
}


// â”€â”€â”€ Main Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export default function ProjectsPage() {
    const t = useTranslations('projects');
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState<FilterType>('all');
    const [visibleCount, setVisibleCount] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = sessionStorage.getItem('projects-visible-count');
            if (saved) return Math.max(10, parseInt(saved, 10));
        }
        return 10;
    });
    const { isLowPowerMode } = usePerformance();
    const router = useRouter();


    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = [
        { id: 'All',                    label: 'All Realms',           icon: Globe    },
        { id: 'AI & Machine Learning',  label: 'Artificial Intelligence', icon: Brain },
        { id: 'Software Engineering',   label: 'Software Architecture', icon: Database },
        { id: 'More',                   label: 'More',                 icon: Layers   },
    ];

    const [projects, setProjects] = useState(portfolioData.projects);

    useEffect(() => {
        const loadImages = async () => {
            const updated = await Promise.all(
                portfolioData.projects.map(async (project) => {
                    try {
                        const images = await getProjectImages(project.slug, project.title);
                        if (images.length > 0) return { ...project, image: images[0] };
                    } catch (e) {
                        console.error("Failed to load images for", project.title, e);
                    }
                    return { ...project, image: project.image || getPlaceholderImageUrl(project.title) };
                })
            );
            setProjects(updated);
        };
        loadImages();
    }, []);

    const filteredProjects = useMemo(() => {
        let list = [...projects];
        if (selectedCategory !== 'All') {
            if (selectedCategory === 'More') {
                list = list.filter(p => p.category && ['IoT & Embedded', 'Blockchain', 'Creative Tech'].includes(p.category));
            } else {
                list = list.filter(p => p.category === selectedCategory);
            }
        }
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            list = list.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.techStack.some(t => t.toLowerCase().includes(q)));
        }
        if (filter !== 'all') list = list.filter(p => p.status === filter);
        return list;
    }, [searchQuery, filter, selectedCategory, projects]);

    const [viewMode] = useState<'list'>('list');

    const lenis = useLenis();
    const hasRestoredScroll = useRef(false);

    useLayoutEffect(() => {
        if (hasRestoredScroll.current) return;
        const savedSlug = sessionStorage.getItem('projects-last-clicked');
        if (!savedSlug || !lenis) return;
        hasRestoredScroll.current = true;
        sessionStorage.removeItem('projects-last-clicked');
        sessionStorage.removeItem('projects-visible-count');
        sessionStorage.removeItem('projects-view-mode');
        lenis.stop();
        const el = document.querySelector(`[data-project-slug="${savedSlug}"]`);
        if (el) {
            const rect = el.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            window.scrollTo(0, Math.max(0, scrollTop + rect.top - 120));
        }
        requestAnimationFrame(() => lenis.start());
    }, [lenis]);

    const prevFilters = useRef({ searchQuery, filter, selectedCategory });
    useEffect(() => {
        const prev = prevFilters.current;
        prevFilters.current = { searchQuery, filter, selectedCategory };
        if (prev.searchQuery !== searchQuery || prev.filter !== filter || prev.selectedCategory !== selectedCategory) {
            setVisibleCount(10);
        }
    }, [searchQuery, filter, selectedCategory]);

    const filters: { key: FilterType; label: string }[] = [
        { key: 'all', label: t('filters.all') },
        { key: 'ongoing', label: t('filters.ongoing') },
        { key: 'completed', label: t('filters.completed') },
    ];

    const navigate = (slug: string) => {
        sessionStorage.setItem('projects-last-clicked', slug);
        sessionStorage.setItem('projects-visible-count', String(visibleCount));
        router.push(`/projects/${slug}`);
    };

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            <DeferredMount>
                <ProjectStats isLowPowerMode={isLowPowerMode} />

                <div id="project-archive" className="max-w-[1536px] mx-auto relative z-10 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8">
                    {/* Search & Filter Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-10 sm:mb-12 md:mb-16"
                    >
                        <div className="flex flex-col gap-6 p-0 sm:p-2 rounded-3xl bg-transparent">
                            {/* Top: Header & Search */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">Projects Archive</h2>
                                    <span className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-muted-foreground border border-white/5">
                                        {String(filteredProjects.length).padStart(2, '0')}
                                    </span>
                                </div>
                                <div className="relative group w-full md:w-80">
                                    <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary/20 via-primary/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
                                    <div className="relative flex items-center bg-transparent rounded-xl hover:bg-white/5 overflow-hidden transition-colors">
                                        <Search className="absolute left-3 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                        <input
                                            type="text"
                                            placeholder="Search projects..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full pl-9 pr-8 py-2.5 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none"
                                        />
                                        {searchQuery && (
                                            <button onClick={() => setSearchQuery('')} className="absolute right-2 p-1 rounded-sm hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors">
                                                <X className="w-3 h-3" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Bottom: Controls */}
                            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 xl:gap-4">
                                {/* Categories */}
                                <div className="w-full xl:w-auto overflow-x-auto pb-2 xl:pb-0 no-scrollbar">
                                    <div className="flex items-center gap-1.5 min-w-max px-2">
                                        {categories.map((cat) => {
                                            const Icon = cat.icon;
                                            const isActive = selectedCategory === cat.id;
                                            return (
                                                <button
                                                    key={cat.id}
                                                    onClick={() => setSelectedCategory(cat.id)}
                                                    className={cn(
                                                        "relative group flex items-center gap-2 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300",
                                                        isActive
                                                            ? "bg-primary/10 text-primary border border-primary/20"
                                                            : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-white/5 border border-transparent"
                                                    )}
                                                >
                                                    <Icon className={cn("w-3.5 h-3.5", isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
                                                    <span>{cat.label}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Filters only */}
                                <div className="flex items-center gap-3 px-2 self-end xl:self-auto">
                                    <div className="flex items-center p-1 bg-foreground/5 dark:bg-white/5 rounded-xl border border-foreground/10 dark:border-white/10">
                                        {filters.map((f) => (
                                            <button
                                                key={f.key}
                                                onClick={() => setFilter(f.key)}
                                                className={cn(
                                                    'relative px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-medium transition-all duration-300',
                                                    filter === f.key
                                                        ? 'bg-foreground text-background shadow-sm'
                                                        : 'text-muted-foreground hover:text-foreground hover:bg-foreground/10 dark:hover:bg-white/10'
                                                )}
                                            >
                                                {f.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Projects List */}
                    <div className="space-y-0 mb-8 sm:mb-10 md:mb-12">
                        <div className="border-t border-white/5">
                            <AnimatePresence mode="popLayout">
                                {filteredProjects.slice(0, visibleCount).map((project, index) => (
                                    <ProjectListItem
                                        key={project.id}
                                        project={project}
                                        onClick={() => navigate(project.slug)}
                                        index={index}
                                        isLowPowerMode={isLowPowerMode}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* View All / View Less Button */}
                    {filteredProjects.length > 10 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex justify-center mt-12 sm:mt-16 pb-12"
                        >
                            <MagneticFillButton
                                onClick={() => setVisibleCount(visibleCount < filteredProjects.length ? filteredProjects.length : 10)}
                                showArrowFlip={visibleCount >= filteredProjects.length}
                            >
                                {visibleCount < filteredProjects.length ? 'View All Projects' : 'View Less'}
                            </MagneticFillButton>
                        </motion.div>
                    )}

                    {filteredProjects.length === 0 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                            <Layers className="w-16 h-16 mx-auto text-white/20 mb-4" />
                            <p className="text-lg text-white/50">No projects found</p>
                        </motion.div>
                    )}

                    <ProjectContact isLowPowerMode={isLowPowerMode} />
                </div>
            </DeferredMount>
        </div>
    );
}
