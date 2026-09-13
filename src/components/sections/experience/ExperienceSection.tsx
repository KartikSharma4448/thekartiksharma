'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Transition } from "@headlessui/react";
import {
    Calendar,
    MapPin,
    ChevronDown,
    ChevronRight,
    Briefcase,
    GraduationCap,
    Filter,
    Rocket,
    Award,
    Heart,
    Users,
    ExternalLink,
    ArrowRight,
    Link2,
    FileText
} from 'lucide-react';
import { cn, formatDate } from '@/lib/utils';
import { portfolioData } from '@/data/portfolio';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { Experience, Education } from '@/types';

import ExperienceMarquee from '@/components/sections/ExperienceMarquee';
import ExperienceStickyScroll from '@/components/sections/ExperienceStickyScroll';
import { Timeline } from '@/components/ui/timeline';
import { InnovativeExperienceHero } from '@/components/sections/InnovativeExperienceHero';
import { DeferredMount } from '@/components/ui/DeferredMount';
import { DocumentPreviewModal } from '@/components/ui/DocumentPreviewModal';

type TabType = 'education' | 'journey' | 'experience';

const highlightContent = {
    education: {
        title: "Building the Future",
        highlight: "Through Knowledge",
        description: "Every line of code starts with understanding. My academic journey at Vivekananda Global University shapes how I approach complex problems with systematic thinking."
    },
    journey: {
        title: "Crafting Experiences",
        highlight: "That Matter",
        description: "From internships to leadership roles, each step has been a lesson in collaboration, innovation, and pushing boundaries."
    },
    experience: {
        title: "Turning Ideas",
        highlight: "Into Reality",
        description: "Real-world projects that solve real problems. Building solutions that make a difference."
    }
};

import { usePerformance } from '@/hooks/usePerformance';

import { getJourneyImages } from '@/app/actions/getJourneyImages';

function ExperienceHighlightSection({ type, isLowPowerMode }: { type: TabType; isLowPowerMode: boolean }) {
    const content = highlightContent[type];

    return (
        <div className="mt-6">
            <InnovativeExperienceHero
                type={type}
                title={content.title}
                highlight={content.highlight}
                description={content.description}
            />
        </div>
    );
}

function FloatingShape({ className, gradient, delay = 0, isLowPowerMode }: { className?: string; gradient: string; delay?: number; isLowPowerMode: boolean }) {
    return (
        <motion.div
            className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
            style={{ background: gradient }}
            animate={isLowPowerMode ? {} : { y: [0, -20, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, delay }}
        />
    );
}

interface TabItem {
    id: TabType;
    label: string;
    description: string;
}

import MagneticEffect from '@/components/ui/MagneticEffect';

function ExperienceTabSlider({ isLowPowerMode }: { isLowPowerMode: boolean }) {
    const [activeTab, setActiveTab] = useState<number>(0);

    const tabs: TabItem[] = [
        { id: 'education', label: 'Education', description: 'Building strong foundations through academic excellence and systematic learning.' },
        { id: 'journey', label: 'Journey', description: 'A curated timeline of roles, engineering responsibilities, and professional growth.' },
    ];

    return (
        <div className="mb-24">
            {/* Header with Title & Description */}
            <div className="mx-auto w-full max-w-5xl px-4 sm:px-8 text-center mb-10 sm:mb-14">
                <div className="mb-6 sm:mb-8">
                    <p className="text-base sm:text-xl md:text-2xl font-bold text-foreground max-w-2xl mx-auto leading-snug">
                        &ldquo;{tabs[activeTab].description}&rdquo;
                    </p>
                </div>

                {/* Tab Buttons */}
                <div className="flex justify-center gap-3 sm:gap-4">
                    {tabs.map((tab, index) => {
                        const isActive = activeTab === index;
                        return (
                            <button
                                key={tab.id}
                                className={cn(
                                    "relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 sm:px-7 sm:py-3 text-sm sm:text-base font-bold transition-all duration-200 active:scale-95 shadow-sm",
                                    isActive
                                        ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-md"
                                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800"
                                )}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab.id === 'education' && <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />}
                                {tab.id === 'journey' && <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />}
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {activeTab === 0 && (
                    <motion.div
                        key="education"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        <ExperienceStickyScroll />
                        <div className="pb-[clamp(40px,10vh,120px)]" />
                        <ExperienceHighlightSection type="education" isLowPowerMode={isLowPowerMode} />
                    </motion.div>
                )}

                {activeTab === 1 && (
                    <motion.div
                        key="journey"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        <ExperienceTimeline isLowPowerMode={isLowPowerMode} />
                        <div className="pb-[clamp(40px,10vh,120px)]" />
                        <ExperienceHighlightSection type="journey" isLowPowerMode={isLowPowerMode} />
                    </motion.div>
                )}
            </div>
        </div>
    );
}

import { SmoothScrollHero } from '@/components/sections/SmoothScrollHero';

export function ExperienceSection() {
    const t = useTranslations('experience');
    const { resolvedTheme } = useTheme();
    const { isLowPowerMode } = usePerformance();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-background text-foreground relative"
        >
            {/* Smooth Scroll Hero Section */}
            <SmoothScrollHero />

            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <FloatingShape
                    className="w-[min(500px,80vw)] h-[min(500px,80vw)] -top-20 -right-40"
                    gradient="radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)"
                    isLowPowerMode={isLowPowerMode}
                />
                <FloatingShape
                    className="w-[min(400px,70vw)] h-[min(400px,70vw)] bottom-40 -left-20"
                    gradient="radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)"
                    delay={3}
                    isLowPowerMode={isLowPowerMode}
                />
            </div>

            <DeferredMount>
                {/* 1. Work Experience Gallery Marquee */}
                <motion.div
                    initial={{ opacity: 0, y: isLowPowerMode ? 0 : 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="w-full relative z-10 pt-20 mb-20 -mt-10 md:-mt-20 overflow-hidden"
                >
                    <ExperienceMarquee />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: isLowPowerMode ? 0 : 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                >
                    {/* 2. Tab Slider Section (Testimonial-style UI) */}
                    <ExperienceTabSlider isLowPowerMode={isLowPowerMode} />
                </motion.div>
            </DeferredMount>
        </motion.div>
    );
}

function CollapsibleExperienceCard({ exp, idx, isLowPowerMode }: { exp: Experience; idx: number; isLowPowerMode: boolean }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const t = useTranslations('experience');

    // Helper to calculate duration in months/years
    const getDuration = (start: string, end?: string | null) => {
        const startDate = new Date(start);
        const endDate = end ? new Date(end) : new Date();
        const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
        const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44));

        if (diffMonths < 12) return `${diffMonths} ${t('months')}`;
        const years = Math.floor(diffMonths / 12);
        const months = diffMonths % 12;
        if (months === 0) return `${years} ${t(years === 1 ? 'year' : 'years')}`;
        return `${years} ${t('year')} ${months} ${t('months')}`;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: isLowPowerMode ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isLowPowerMode ? 0 : idx * 0.1 }}
            className={cn(
                "group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-[2rem] transition-all duration-500 overflow-hidden",
                "hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.2)] dark:hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.2)] hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:z-10",
                isExpanded ? "shadow-2xl ring-1 ring-neutral-200 dark:ring-neutral-700" : ""
            )}
        >
            {/* Animated Inner Glow Effect on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />

            <div className="p-6 md:p-8 cursor-pointer relative z-10" onClick={() => setIsExpanded(!isExpanded)}>
                <div className="flex gap-4 md:gap-6 items-start">
                    <div className={cn("w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shrink-0 border border-neutral-100 dark:border-neutral-800 overflow-hidden relative shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-lg", exp.logoBg || "bg-white")}>
                        {exp.logo ? (
                            <Image src={exp.logo} alt={exp.company} fill className="object-contain" unoptimized loading="lazy" />
                        ) : (
                            <Briefcase className="w-8 h-8 text-neutral-300" />
                        )}
                    </div>

                    {/* Content (Right Side) */}
                    <div className="flex-1 space-y-3">
                        {/* Header: Position & Company */}
                        <div>
                            <h4 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white leading-tight mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {exp.position}
                            </h4>
                            <div className="text-base font-medium text-neutral-600 dark:text-neutral-400 flex flex-wrap items-center gap-2">
                                <span>{exp.company}</span>
                                {exp.location && (
                                    <>
                                        <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                                        <span>{exp.location}</span>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Metadata Row (Reference Style) */}
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-neutral-500 dark:text-neutral-500 font-medium">
                            <span className="text-neutral-700 dark:text-neutral-300">
                                {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : t('present')}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                            <span className="text-neutral-400 dark:text-neutral-600">
                                {getDuration(exp.startDate, exp.endDate)}
                            </span>
                            {exp.type && (
                                <>
                                    <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                                    <span className="capitalize">{t(`type.${exp.type}`)}</span>
                                </>
                            )}
                            {exp.location && (
                                <>
                                    <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                                    <span>{exp.location}</span>
                                </>
                            )}
                        </div>

                        {/* Show Detail Action (Collapsed Only) */}
                        {!isExpanded && (
                            <div className="pt-2 flex items-center gap-1 text-sm font-medium text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                <span>{t('showDetail')}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 md:px-8 pb-8 pt-0 space-y-8 border-t border-neutral-100 dark:border-neutral-800/50 mt-4">
                            {/* 1. TASKS / RESPONSIBILITIES */}
                            {exp.responsibilities && exp.responsibilities.length > 0 && (
                                <div className="pt-6">
                                    <h5 className="text-xs font-black text-neutral-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        {t('tasks')}
                                    </h5>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {exp.responsibilities.map((task, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-300">
                                                <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                                <span>{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* 2. WHAT I LEARNED */}
                            {exp.keyLearnings && exp.keyLearnings.length > 0 && (
                                <div>
                                    <h5 className="text-xs font-black text-neutral-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                        {t('learned')}
                                    </h5>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {exp.keyLearnings.map((learn, i) => (
                                            <div key={i} className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-800">
                                                <p className="text-sm text-neutral-600 dark:text-neutral-300">{learn}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* 3. IMPACT */}
                            {exp.impact && exp.impact.length > 0 && (
                                <div>
                                    <h5 className="text-xs font-black text-neutral-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        {t('impact')}
                                    </h5>
                                    <ul className="space-y-3">
                                        {exp.impact.map((imp, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-neutral-800 dark:text-neutral-200">
                                                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                                                    <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                                </div>
                                                <span>{imp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Skills (Full List in Expanded View) */}
                            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/50">
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill, i) => (
                                        <span key={i} className="px-3 py-1 rounded-lg text-xs font-bold bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="flex justify-center pt-2">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsExpanded(false);
                                    }}
                                    className="px-6 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-bold text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                                >
                                    {t('hideDetail')}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

const slugify = (text: string) => {
    return text
        .split('(')[0]
        .toLowerCase()
        .replace(/[^\w]/g, '');
};

const LinkPreviewCard = ({ url, title, id, logo }: { url: string; title?: string; id: string; logo?: string }) => {
    const domain = useMemo(() => {
        try {
            return new URL(url).hostname;
        } catch {
            return 'external-link.com';
        }
    }, [url]);

    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            layoutId={`${id}-link-card-${url}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="group relative flex flex-col justify-center p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl h-24 md:h-32 w-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30"
        >
            <div className="flex items-center gap-4 relative z-10 w-full">
                <div className="flex-1 flex flex-col overflow-hidden">
                    <div className="flex items-center gap-2 mb-1 overflow-hidden">
                        <div className="p-1 rounded bg-primary/10 text-primary shrink-0">
                            <Link2 className="w-2.5 h-2.5" />
                        </div>
                        <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest truncate">{domain}</span>
                    </div>
                    <h4 className="text-xs font-bold text-neutral-900 dark:text-white line-clamp-1 leading-tight mb-0.5">
                        {title || "Project Resource"}
                    </h4>
                    <p className="text-[9px] text-neutral-500 line-clamp-2 leading-relaxed opacity-80">
                        View documentation and project details on {domain}.
                    </p>
                </div>
                {logo && (
                    <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 overflow-hidden relative shadow-sm">
                        <Image src={logo} alt="Logo" fill className="object-contain" unoptimized loading="lazy" />
                    </div>
                )}
            </div>

            {/* Hover Overlay - LinkedIn Style */}
            <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                <div className="w-10 h-10 rounded-full bg-black/80 dark:bg-white/90 flex items-center justify-center backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ExternalLink className="w-5 h-5 text-white dark:text-black" />
                </div>
            </div>

            {/* Subtle background decoration */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
        </motion.a>
    );
};

function TimelineGallery({ images, id, title, externalLink, logo }: { images: string[]; id: string; title?: string; externalLink?: string | string[]; logo?: string }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleImageError = (index: number) => {
        setFailedImages(prev => new Set(prev).add(index));
    };

    const [verifiedImages, setVerifiedImages] = useState<string[]>([]);

    useEffect(() => {
        const checkImages = async () => {
            if (images.length > 0) {
                setVerifiedImages(images);
                return;
            }

            if (!title) {
                setVerifiedImages([]);
                return;
            }



            const baseSlug = slugify(title);

            try {
                const results = await getJourneyImages(baseSlug);
                setVerifiedImages(results);
            } catch (error) {
                console.error("Failed to verify images", error);
                setVerifiedImages([]);
            }
        };

        checkImages();
    }, [images, title]);

    const allImages = verifiedImages.map((src, i) => ({ src, index: i, type: 'image' as const }));
    const validImages = allImages.filter(img => !failedImages.has(img.index));

    const externalLinksArray = Array.isArray(externalLink) ? externalLink : (externalLink ? [externalLink] : []);

    const galleryItems = [
        ...validImages,
        ...externalLinksArray.map((link, idx) => ({ type: 'link' as const, src: link, index: validImages.length + idx }))
    ];

    const visibleItems = isExpanded ? galleryItems.slice(0, 4) : galleryItems.slice(0, 2);

    if (galleryItems.length === 0) return null;

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <AnimatePresence mode="popLayout">
                    {visibleItems.map((item) => (
                        item.type === 'image' ? (
                            <motion.div
                                key={`${id}-gallery-${item.index}`}
                                layoutId={`${id}-gallery-${item.index}`}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                onClick={() => setSelectedImage(item.src)}
                                className="relative h-24 md:h-32 w-full group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 bg-neutral-100 dark:bg-neutral-800 cursor-zoom-in"
                            >
                                <Image
                                    src={item.src}
                                    alt={`experience gallery ${item.index}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    unoptimized
                                    loading="lazy"
                                    onError={() => handleImageError(item.index)}
                                />
                            </motion.div>
                        ) : (
                            <LinkPreviewCard
                                key={`${id}-link-preview-${item.index}`}
                                url={item.src}
                                title={title}
                                id={id}
                                logo={logo}
                            />
                        )
                    ))}
                </AnimatePresence>
            </div>
            {galleryItems.length > 2 && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-1.5 text-xs font-bold text-neutral-500 hover:text-primary transition-colors uppercase tracking-widest pl-1"
                >
                    {isExpanded ? (
                        <>Show Less <ChevronDown className="w-3 h-3 rotate-180" /></>
                    ) : (
                        <>+{galleryItems.length - 2} More Attachments <ChevronDown className="w-3 h-3" /></>
                    )}
                </button>
            )}

            {/* Lightbox Overlay */}
            {isMounted && createPortal(
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                            className="fixed inset-0 z-[9999] flex items-center justify-center cursor-zoom-out"
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                            />
                            <motion.img
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                src={selectedImage}
                                alt="Gallery expanded"
                                className="relative max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-2xl shadow-2xl ring-1 ring-white/10"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
}

function ExperienceTimeline({ isLowPowerMode }: { isLowPowerMode: boolean }) {
    const experiences = portfolioData.experiences;
    const [previewDoc, setPreviewDoc] = useState<{ url: string; title: string; subtitle?: string } | null>(null);

    const groupedExperiences = useMemo(() => {
        const groups: { [key: string]: Experience[] } = {};

        const sortedAll = [...experiences].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

        sortedAll.forEach(exp => {
            const year = new Date(exp.startDate).getFullYear().toString();
            if (!groups[year]) {
                groups[year] = [];
            }
            groups[year].push(exp);
        });

        return Object.keys(groups)
            .sort((a, b) => parseInt(b) - parseInt(a))
            .map(year => ({
                title: year,
                experiences: groups[year]
            }));
    }, [experiences]);

    const timelineData = groupedExperiences.map(group => ({
        title: group.title,
        content: (
            <div className="space-y-12">
                {group.experiences.map((exp) => {
                    const logoSrc = exp.logo || "";
                    const needsInvertInDarkMode = logoSrc.includes("McKinsey") || 
                                                logoSrc.includes("TelkomUniversity") || 
                                                logoSrc.includes("softagelogo") || 
                                                logoSrc.includes("dinas-pangan") ||
                                                logoSrc.includes("yotlogo") ||
                                                logoSrc.includes("youth-ranger") ||
                                                logoSrc.includes("aiesec") ||
                                                logoSrc.includes("microsot") ||
                                                logoSrc.includes("dicoding") ||
                                                logoSrc.includes("cisometric");
                    
                    const needsWhiteBgRemovalInDarkMode = logoSrc.includes("logobei") || logoSrc.includes("birulangit");
                    const needsInvertInLightMode = logoSrc.includes("flyrank") || logoSrc.includes("FlyRank");

                    let specificClasses = "";
                    if (needsInvertInDarkMode) specificClasses = "dark:invert";
                    if (needsWhiteBgRemovalInDarkMode) specificClasses = "dark:invert dark:hue-rotate-180";
                    if (needsInvertInLightMode) specificClasses = "invert dark:invert-0";

                    return (
                    <div key={exp.id} className="relative pl-8 border-l-2 border-neutral-200 dark:border-neutral-800 group/timeline">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border-2 border-white dark:border-black" />

                        {/* HOVER LOGO ON THE LEFT */}
                        {exp.logo && (
                            <div className="absolute top-0 right-full mr-6 w-32 h-10 md:w-40 md:h-16 opacity-0 group-hover/timeline:opacity-100 transition-all duration-300 pointer-events-none flex items-center justify-end -translate-x-4 group-hover/timeline:translate-x-0 hidden md:flex">
                                <div className="relative w-full h-full">
                                    <Image 
                                        src={exp.logo} 
                                        alt={`${exp.company} Logo`} 
                                        fill 
                                        unoptimized
                                        className={`object-contain object-right ${specificClasses}`}
                                    />
                                </div>
                            </div>
                        )}

                        <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white leading-tight">
                                    {exp.position}
                                </h3>
                                <p className="text-lg font-medium text-primary">
                                    {exp.company}
                                </p>
                            </div>
                            <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 sm:gap-2">
                                <div className="flex flex-wrap items-center gap-1.5">
                                    {exp.type && (
                                        <span className={cn(
                                            "text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded",
                                            exp.type === 'freelance'
                                                ? "bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/25"
                                                : "bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-black/5 dark:border-white/10"
                                        )}>
                                            {exp.type}
                                        </span>
                                    )}
                                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5 rounded border border-black/5 dark:border-white/10">
                                        {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed text-sm md:text-base text-justify">
                            {exp.description}
                        </p>

                        {exp.responsibilities && (
                            <ul className="mb-8 space-y-3">
                                {exp.responsibilities.slice(0, 3).map((resp, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-500 dark:text-neutral-400 text-justify">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                                        <span>{resp}</span>
                                    </li>
                                ))}
                            </ul>
                        )}

                        <div className="flex flex-wrap gap-2 mb-6">
                            {exp.skills.map((skill, i) => (
                                <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5 cursor-default shadow-sm hover:shadow-md">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Verified Document / Offer Letter Button (Modal Trigger) */}
                        {exp.certificateUrl && (
                            <div className="mb-6 flex items-center">
                                <button
                                    type="button"
                                    onClick={() => setPreviewDoc({
                                        url: exp.certificateUrl as string,
                                        title: exp.certificateLabel || `${exp.position} Credential`,
                                        subtitle: `${exp.company} • ${formatDate(exp.startDate)} - ${exp.endDate ? formatDate(exp.endDate) : 'Present'}`
                                    })}
                                    className="group/btn inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-lime-500/10 hover:bg-lime-500/20 text-lime-600 dark:text-lime-400 border border-lime-500/30 hover:border-lime-500/60 font-mono text-xs font-bold transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md hover:shadow-lime-500/10 cursor-pointer text-left"
                                >
                                    <FileText className="w-4 h-4 text-lime-500" />
                                    <span>{exp.certificateLabel || "View Verified Credential"}</span>
                                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-lime-500/20 font-sans font-normal opacity-80 group-hover/btn:opacity-100">
                                        Preview
                                    </span>
                                </button>
                            </div>
                        )}

                        {/* Expandable Gallery Component */}
                        <TimelineGallery
                            images={exp.galleryImages || []}
                            id={exp.id}
                            title={exp.position}
                            externalLink={exp.externalLink}
                            logo={exp.logo}
                        />
                    </div>
                );
                })}
            </div>
        )
    }));

    return (
        <div className="w-full">
            <Timeline data={timelineData} />
            <DocumentPreviewModal
                isOpen={!!previewDoc}
                onClose={() => setPreviewDoc(null)}
                url={previewDoc?.url || null}
                title={previewDoc?.title || ''}
                subtitle={previewDoc?.subtitle}
            />
        </div>
    );
}

export default ExperienceSection;

