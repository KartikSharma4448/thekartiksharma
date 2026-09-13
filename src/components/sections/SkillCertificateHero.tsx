'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { SplineScene } from '@/components/ui/SplineScene';
import { DeferredMount } from '@/components/ui/DeferredMount';
import { cn } from '@/lib/utils';
import { usePerformance } from '@/hooks/usePerformance';

// ─── Atmospheric Background ───────────────────────────────────────────────────

function TechSchematic() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.06)_0%,transparent_55%)]" />
        </div>
    );
}

function VaporFog({ className }: { className?: string }) {
    return (
        <div className={cn('absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30', className)}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.08)_0%,transparent_70%)]" />
        </div>
    );
}

// ─── Floating Tech Bubbles (mouse-proximity reactive) ────────────────────────

const bubbleList = [
    // LEFT SIDE — Tech Stack
    { icon: 'python',     top: '15%', left: '8%',  delay: 0.2 },
    { icon: 'react',      top: '28%', left: '20%', delay: 1.5 },
    { icon: 'flutter',    top: '45%', left: '6%',  delay: 0.7 },
    { icon: 'nodejs',     top: '62%', left: '18%', delay: 2.4 },
    { icon: 'nextjs',     top: '78%', left: '10%', delay: 1.1 },
    // RIGHT SIDE — Certificate Publishers
    { icon: '', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',                                   name: 'Google',       top: '14%', right: '11%', delay: 0.4 },
    { icon: '', iconUrl: 'https://cdn.simpleicons.org/coursera/0056D2',                                                                      name: 'Coursera',     top: '30%', right: '22%', delay: 1.8 },
    { icon: '', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',                                           name: 'Microsoft',    top: '47%', right: '9%',  delay: 1.3 },
    { icon: '', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',      name: 'AWS',          top: '63%', right: '23%', delay: 2.8 },
    { icon: '', iconUrl: 'https://cdn.simpleicons.org/googleplay',                                                                           name: 'Google Play',  top: '79%', right: '14%', delay: 0.9 },
];

function Bubble({
    b,
    mouseX,
    mouseY,
}: {
    b: (typeof bubbleList)[number];
    mouseX: any;
    mouseY: any;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [center, setCenter] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const update = () => {
            if (!ref.current) return;
            const r = ref.current.getBoundingClientRect();
            setCenter({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
        };
        update();
        window.addEventListener('resize', update);
        return () => {
            window.removeEventListener('resize', update);
        };
    }, []);

    const proximity = useTransform([mouseX, mouseY], ([x, y]: number[]) => {
        const d = Math.sqrt((x - center.x) ** 2 + (y - center.y) ** 2);
        return Math.max(0, Math.min(1, (250 - d) / 250));
    });

    const grayscale  = useTransform(proximity, [0, 1], [100, 0]);
    const scaleFactor = useTransform(proximity, [0, 1], [1, 1.2]);
    const opacityFactor = useTransform(proximity, [0, 1], [0.3, 0.85]);

    const iconUrl = b.iconUrl || `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${b.icon}/${b.icon}-original.svg`;

    return (
        <motion.div
            ref={ref}
            animate={{ y: [0, -20, 0] }}
            style={{
                position: 'absolute',
                top: b.top,
                ...('left' in b ? { left: (b as any).left } : { right: (b as any).right }),
                opacity: opacityFactor,
                scale: scaleFactor,
            }}
            transition={{
                duration: 12 + Math.random() * 4,
                repeat: Infinity,
                delay: b.delay,
                ease: 'easeInOut',
            }}
            className="flex items-center justify-center w-14 h-14 md:w-20 md:h-20 rounded-full bg-foreground/[0.05] dark:bg-white/5 backdrop-blur-2xl border border-foreground/10 dark:border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.05)] transition-colors duration-500"
        >
            <motion.img
                src={iconUrl}
                className="w-7 h-7 md:w-10 md:h-10"
                style={{ filter: useTransform(grayscale, (v) => `grayscale(${v}%)`) }}
                alt={b.icon}
            />
        </motion.div>
    );
}

function FloatingTechBubbles({ mouseX, mouseY }: { mouseX: any; mouseY: any }) {
    return (
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
            {bubbleList.map((b, i) => (
                <Bubble key={i} b={b} mouseX={mouseX} mouseY={mouseY} />
            ))}
        </div>
    );
}

// ─── Main Hero ────────────────────────────────────────────────────────────────

export function SkillCertificateHero() {
    const { isLowPowerMode } = usePerformance();
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const handleMouseMove = (e: React.MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    // Scroll parallax — removed to prevent lag with heavy SplineScene WebGL
    // Only fade out the headline text on scroll (lightweight opacity only)
    const { scrollY } = useScroll();
    const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="min-h-screen bg-background relative selection:bg-primary/20"
        >
            <TechSchematic />

            <section className="relative h-screen flex items-end justify-center overflow-hidden pb-16">

                {/* 3D Robot — skip on low power / mobile */}
                <div className="absolute inset-0 z-0">
                    {!isLowPowerMode ? (
                        <DeferredMount fallback={<div className="w-full h-full opacity-10 bg-zinc-800 animate-pulse" />}>
                            <SplineScene
                                scene="https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode"
                                className="w-full h-full opacity-60 md:opacity-100"
                            />
                        </DeferredMount>
                    ) : (
                        <div className="w-full h-full bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />
                </div>

                {/* Atmospheric fog */}
                <VaporFog className="mix-blend-overlay" />

                {/* Floating tech icons — skip on low power */}
                {!isLowPowerMode && <FloatingTechBubbles mouseX={mouseX} mouseY={mouseY} />}

                {/* Bottom headline */}
                <div className="relative z-10 text-center px-6 w-full pointer-events-none select-none">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                        style={{ opacity: opacityHero }}
                        className="flex flex-col items-center"
                    >
                        {/* Main title */}
                        <motion.div
                            className="relative group px-10 cursor-default pointer-events-auto"
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                        >
                            <motion.h1
                                variants={{
                                    rest: { scale: 1, textShadow: '0px 0px 0px rgba(255,255,255,0)' },
                                    hover: { scale: 1.02, textShadow: '0px 0px 25px rgba(255,255,255,0.18)' },
                                }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="relative z-10 text-[9vw] md:text-[7vw] font-semibold uppercase leading-[0.9] tracking-tight select-none transition-colors duration-500"
                            >
                                <span className="text-zinc-800 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-500">
                                    SKILL &amp;{' '}
                                </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 drop-shadow-[0_0_35px_rgba(16,185,129,0.35)]">
                                    CERTIFICATE
                                </span>


                            </motion.h1>
                        </motion.div>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="max-w-4xl mx-auto mt-6 text-muted-foreground font-mono leading-relaxed uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-[11px] font-medium pointer-events-auto"
                        >
                            TECH STACK, TOOLS &amp; VERIFIED CREDENTIALS
                        </motion.p>
                    </motion.div>
                </div>

                {/* Subtle scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.05 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="w-[1px] h-24 bg-gradient-to-b from-foreground to-transparent"
                    />
                </motion.div>
            </section>

            {/* Vapor transition into next section */}
            <div className="relative h-64 -mt-32 z-20 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
                <VaporFog className="opacity-30" />
            </div>
        </div>
    );
}

export default SkillCertificateHero;
