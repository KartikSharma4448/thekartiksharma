'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { cn } from '@/lib/utils';
import { 
    SiAndroidstudio, 
    SiPostman, 
    SiGit, 
    SiGithub, 
    SiFigma, 
    SiVercel, 
    SiSupabase, 
    SiDocker,
    SiLinux,
    SiJupyter,
    SiAnaconda,
    SiGooglecolab
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { Terminal as TerminalIcon } from 'lucide-react';

// Robust vector icon mapping with accurate brand colors
const toolIconComponents: Record<string, { icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; color: string }> = {
    'VS Code': { icon: VscVscode, color: '#007ACC' },
    'Android Studio': { icon: SiAndroidstudio, color: '#3DDC84' },
    'Postman': { icon: SiPostman, color: '#FF6C37' },
    'Git': { icon: SiGit, color: '#F05032' },
    'GitHub': { icon: SiGithub, color: '#FFFFFF' },
    'Figma': { icon: SiFigma, color: '#F24E1E' },
    'Vercel': { icon: SiVercel, color: '#FFFFFF' },
    'Supabase': { icon: SiSupabase, color: '#3ECF8E' },
    'Docker': { icon: SiDocker, color: '#2496ED' },
    'Terminal / CLI': { icon: TerminalIcon, color: '#22C55E' },
    'Linux': { icon: SiLinux, color: '#FCC624' },
    'Jupyter': { icon: SiJupyter, color: '#F37626' },
    'Conda': { icon: SiAnaconda, color: '#44A833' },
    'Google Colab': { icon: SiGooglecolab, color: '#F9AB00' },
};

export const ToolsSection = () => {
    const topRow = portfolioData.tools.slice(0, 5);
    const bottomRow = portfolioData.tools.slice(5, 10);

    return (
        <section
            id="tools"
            className="py-32 relative bg-background min-h-[80vh] flex flex-col items-center justify-center overflow-hidden"
        >
            {/* BACKGROUND AMBIENCE */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--background)_0%,_#050505_100%)] z-0" />

            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 text-center mb-12 sm:mb-24 pointer-events-none select-none px-4 sm:px-6"
            >
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-foreground block mb-3 sm:mb-6"
                >
                    WORKFLOW & INFRASTRUCTURE
                </motion.span>
                <h2 className="text-3xl sm:text-5xl md:text-8xl font-bold tracking-tighter text-foreground mb-4 sm:mb-8 max-w-4xl mx-auto leading-[1.1]">
                    Professional Tooling
                </h2>
                <p className="max-w-3xl mx-auto text-sm sm:text-lg md:text-xl text-foreground/60 leading-relaxed font-medium px-2 sm:px-4">
                    Leveraging industrial-grade platforms for development, design, and deployment to ensure rapid and reliable software delivery.
                </p>
            </motion.div>

            {/* MARQUEE ROWS - Constrained container for side spacing */}
            <div className="relative z-20 w-full max-w-[1700px] mx-auto px-2 sm:px-8 lg:px-12">
                <div className="flex flex-col gap-4 sm:gap-10 mask-horizontal-fixed">
                    {/* Row 1: Left to Right */}
                    <MarqueeRow items={topRow} direction="right" speed={45} />

                    {/* Row 2: Right to Left */}
                    <MarqueeRow items={bottomRow} direction="left" speed={40} />
                </div>
            </div>

            <div className="absolute bottom-12 text-center w-full pointer-events-none opacity-30 text-white/50">
            </div>

            {/* CSS Mask optimized for performance */}
            <style jsx global>{`
                .mask-horizontal-fixed {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    transform: translateZ(0); 
                }
            `}</style>
        </section>
    );
};

const MarqueeRow = ({ items, direction, speed }: { items: any[], direction: 'left' | 'right', speed: number }) => {
    // 4x duplication for ultra-smooth loop on all screen widths
    const doubledItems = [...items, ...items, ...items, ...items];

    return (
        <div className="flex w-full overflow-hidden py-2 sm:py-4">
            <motion.div
                className="flex gap-3 sm:gap-6 md:gap-8 whitespace-nowrap"
                style={{
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d"
                }}
                animate={{
                    x: direction === 'right' ? ['-50%', '0%'] : ['0%', '-50%'],
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {doubledItems.map((tool, idx) => (
                    <ToolPill key={`${tool.name}-${idx}`} tool={tool} />
                ))}
            </motion.div>
        </div>
    );
};

const ToolPill = ({ tool }: { tool: any }) => {
    const config = toolIconComponents[tool.name];
    const IconComp = config?.icon || TerminalIcon;
    const brandColor = config?.color || '#38BDF8';

    return (
        <div className="flex items-center gap-2.5 sm:gap-4 md:gap-6 px-4 py-2 sm:px-7 sm:py-3.5 md:px-10 md:py-5 bg-neutral-900/5 dark:bg-white/5 backdrop-blur-xl border border-neutral-300/40 dark:border-white/10 rounded-full transition-all duration-300 hover:scale-105 hover:bg-neutral-900/10 dark:hover:bg-white/10 group select-none shrink-0 cursor-default">
            <div className="relative w-5 h-5 sm:w-8 sm:h-8 md:w-11 md:h-11 shrink-0 flex items-center justify-center">
                <IconComp
                    className={cn(
                        "w-full h-full object-contain transition-all duration-300 text-neutral-400 dark:text-neutral-500 group-hover:scale-110",
                        tool.name === 'Vercel' ? "group-hover:text-black dark:group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]" :
                        tool.name === 'GitHub' ? "group-hover:text-black dark:group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]" :
                        "group-hover:text-[var(--brand-color)] group-hover:drop-shadow-[0_0_12px_var(--brand-color)]"
                    )}
                    style={{ 
                        '--brand-color': brandColor 
                    } as React.CSSProperties}
                />
            </div>
            <span className="text-xs sm:text-base md:text-2xl font-bold uppercase tracking-wider sm:tracking-[0.1em] text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                {tool.name}
            </span>
        </div>
    );
};
