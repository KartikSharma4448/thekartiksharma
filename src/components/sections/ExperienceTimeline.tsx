"use client";

import { useState, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
    ChevronDown,
    ExternalLink,
    FileText,
    Link2,
} from "lucide-react";
import { cn, formatDate } from "@/lib/utils";
import { portfolioData } from "@/data/portfolio";
import { Experience } from "@/types";
import { Timeline } from "@/components/ui/timeline";
import { DocumentPreviewModal } from "@/components/ui/DocumentPreviewModal";
import { getJourneyImages } from "@/app/actions/getJourneyImages";

// ─── Helpers ─────────────────────────────────────────────────────────────────

const slugify = (text: string) =>
    text
        .split("(")[0]
        .toLowerCase()
        .replace(/[^\w]/g, "");

// ─── LinkPreviewCard ──────────────────────────────────────────────────────────

function LinkPreviewCard({
    url,
    title,
    id,
    logo,
}: {
    url: string;
    title?: string;
    id: string;
    logo?: string;
}) {
    const domain = useMemo(() => {
        try {
            return new URL(url).hostname;
        } catch {
            return "external-link.com";
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
                        <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest truncate">
                            {domain}
                        </span>
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
                        <Image
                            src={logo}
                            alt="Logo"
                            fill
                            className="object-contain"
                            unoptimized
                            loading="lazy"
                        />
                    </div>
                )}
            </div>

            <div className="absolute inset-0 bg-black/5 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                <div className="w-10 h-10 rounded-full bg-black/80 dark:bg-white/90 flex items-center justify-center backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ExternalLink className="w-5 h-5 text-white dark:text-black" />
                </div>
            </div>

            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
        </motion.a>
    );
}

// ─── TimelineGallery ──────────────────────────────────────────────────────────

function TimelineGallery({
    images,
    id,
    title,
    externalLink,
    logo,
}: {
    images: string[];
    id: string;
    title?: string;
    externalLink?: string | string[];
    logo?: string;
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
    const [isMounted, setIsMounted] = useState(false);
    const [verifiedImages, setVerifiedImages] = useState<string[]>([]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleImageError = (index: number) => {
        setFailedImages((prev) => new Set(prev).add(index));
    };

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
            try {
                const results = await getJourneyImages(slugify(title));
                setVerifiedImages(results);
            } catch {
                setVerifiedImages([]);
            }
        };
        checkImages();
    }, [images, title]);

    const validImages = verifiedImages
        .map((src, i) => ({ src, index: i, type: "image" as const }))
        .filter((img) => !failedImages.has(img.index));

    const externalLinksArray = Array.isArray(externalLink)
        ? externalLink
        : externalLink
        ? [externalLink]
        : [];

    const galleryItems = [
        ...validImages,
        ...externalLinksArray.map((link, idx) => ({
            type: "link" as const,
            src: link,
            index: validImages.length + idx,
        })),
    ];

    const visibleItems = isExpanded
        ? galleryItems.slice(0, 4)
        : galleryItems.slice(0, 2);

    if (galleryItems.length === 0) return null;

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <AnimatePresence mode="popLayout">
                    {visibleItems.map((item) =>
                        item.type === "image" ? (
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
                    )}
                </AnimatePresence>
            </div>

            {galleryItems.length > 2 && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-1.5 text-xs font-bold text-neutral-500 hover:text-primary transition-colors uppercase tracking-widest pl-1"
                >
                    {isExpanded ? (
                        <>
                            Show Less <ChevronDown className="w-3 h-3 rotate-180" />
                        </>
                    ) : (
                        <>
                            +{galleryItems.length - 2} More Attachments{" "}
                            <ChevronDown className="w-3 h-3" />
                        </>
                    )}
                </button>
            )}

            {isMounted &&
                createPortal(
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

// ─── ExperienceTimeline ───────────────────────────────────────────────────────

export function ExperienceTimeline({
    isLowPowerMode = false,
}: {
    isLowPowerMode?: boolean;
}) {
    const [previewDoc, setPreviewDoc] = useState<{
        url: string;
        title: string;
        subtitle?: string;
    } | null>(null);

    const experiences = portfolioData.experiences;

    const groupedExperiences = useMemo(() => {
        const groups: { [key: string]: Experience[] } = {};
        const sorted = [...experiences].sort(
            (a, b) =>
                new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
        );
        sorted.forEach((exp) => {
            const year = new Date(exp.startDate).getFullYear().toString();
            if (!groups[year]) groups[year] = [];
            groups[year].push(exp);
        });
        return Object.keys(groups)
            .sort((a, b) => parseInt(b) - parseInt(a))
            .map((year) => ({ title: year, experiences: groups[year] }));
    }, [experiences]);

    const timelineData = groupedExperiences.map((group) => ({
        title: group.title,
        content: (
            <div className="space-y-12">
                {group.experiences.map((exp) => {
                    const logoSrc = exp.logo || "";
                    const needsInvertInDarkMode =
                        logoSrc.includes("McKinsey") ||
                        logoSrc.includes("TelkomUniversity") ||
                        logoSrc.includes("softagelogo") ||
                        logoSrc.includes("dinas-pangan") ||
                        logoSrc.includes("yotlogo") ||
                        logoSrc.includes("youth-ranger") ||
                        logoSrc.includes("aiesec") ||
                        logoSrc.includes("microsot") ||
                        logoSrc.includes("dicoding") ||
                        logoSrc.includes("cisometric");
                    const needsWhiteBgRemoval =
                        logoSrc.includes("logobei") || logoSrc.includes("birulangit");
                    const needsInvertInLightMode =
                        logoSrc.includes("flyrank") || logoSrc.includes("FlyRank");

                    const specificClasses = needsInvertInDarkMode
                        ? "dark:invert"
                        : needsWhiteBgRemoval
                        ? "dark:invert dark:hue-rotate-180"
                        : needsInvertInLightMode
                        ? "invert dark:invert-0"
                        : "";

                    return (
                        <div
                            key={exp.id}
                            className="relative pl-8 border-l-2 border-neutral-200 dark:border-neutral-800 group/timeline"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border-2 border-white dark:border-black" />

                            {/* Hover logo on the left (desktop only) */}
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
                                            <span
                                                className={cn(
                                                    "text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded",
                                                    exp.type === "freelance"
                                                        ? "bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/25"
                                                        : "bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-black/5 dark:border-white/10"
                                                )}
                                            >
                                                {exp.type}
                                            </span>
                                        )}
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 px-2 py-0.5 rounded border border-black/5 dark:border-white/10">
                                            {formatDate(exp.startDate)} –{" "}
                                            {exp.endDate
                                                ? formatDate(exp.endDate)
                                                : "Present"}
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
                                        <li
                                            key={i}
                                            className="flex items-start gap-2.5 text-xs md:text-sm text-neutral-500 dark:text-neutral-400 text-justify"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <div className="flex flex-wrap gap-2 mb-6">
                                {exp.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5 cursor-default shadow-sm hover:shadow-md"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {exp.certificateUrl && (
                                <div className="mb-6 flex items-center">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setPreviewDoc({
                                                url: exp.certificateUrl as string,
                                                title:
                                                    exp.certificateLabel ||
                                                    `${exp.position} Credential`,
                                                subtitle: `${exp.company} • ${formatDate(
                                                    exp.startDate
                                                )} – ${
                                                    exp.endDate
                                                        ? formatDate(exp.endDate)
                                                        : "Present"
                                                }`,
                                            })
                                        }
                                        className="group/btn inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-lime-500/10 hover:bg-lime-500/20 text-lime-600 dark:text-lime-400 border border-lime-500/30 hover:border-lime-500/60 font-mono text-xs font-bold transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md hover:shadow-lime-500/10 cursor-pointer text-left"
                                    >
                                        <FileText className="w-4 h-4 text-lime-500" />
                                        <span>
                                            {exp.certificateLabel ||
                                                "View Verified Credential"}
                                        </span>
                                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-lime-500/20 font-sans font-normal opacity-80 group-hover/btn:opacity-100">
                                            Preview
                                        </span>
                                    </button>
                                </div>
                            )}

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
        ),
    }));

    return (
        <div className="w-full">
            <Timeline data={timelineData} />
            <DocumentPreviewModal
                isOpen={!!previewDoc}
                onClose={() => setPreviewDoc(null)}
                url={previewDoc?.url || null}
                title={previewDoc?.title || ""}
                subtitle={previewDoc?.subtitle}
            />
        </div>
    );
}
