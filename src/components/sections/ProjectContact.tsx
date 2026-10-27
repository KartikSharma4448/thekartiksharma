'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { InteractiveRobotSpline } from '@/components/ui/interactive-3d-robot';
import Link from 'next/link';
import { usePerformance } from '@/hooks/usePerformance';

// --- MAIN WRAPPER COMPONENT ---
export const ProjectContact = ({ isLowPowerMode: isLowPowerModeProp }: { isLowPowerMode?: boolean }) => {
    const { isLowPowerMode: detected } = usePerformance();
    const isLowPowerMode = isLowPowerModeProp ?? detected;
    const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

    return (
        <section className="relative z-10 w-full bg-transparent px-4 sm:px-6 md:px-12 py-12 sm:py-20 md:py-32 overflow-hidden">

            <div className="max-w-[1536px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
                <div className="relative z-10 w-full lg:w-1/2">
                    <BlockInTextCard
                        tag="/ Let's Connect"
                        isLowPowerMode={isLowPowerMode}
                        text={
                            <>
                                <strong className="block text-3xl sm:text-4xl lg:inline lg:text-inherit leading-tight">Ready to build the extraordinary?</strong>{' '}
                                <span className="mt-4 block text-muted-foreground lg:mt-0 lg:inline lg:text-inherit">From intelligent AI solutions to scalable software architectures, let&apos;s collaborate on your big idea.</span>
                            </>
                        }
                        examples={[
                            "Looking for a Software & AI Engineer?",
                            "Need an AI solution for your business?",
                            "Just want to say hi?",
                        ]}
                    />
                </div>

                <div className="relative z-10 hidden lg:flex w-1/2 justify-end h-[500px]">
                    <div className="relative w-full h-full overflow-hidden flex items-center justify-center [mask-image:radial-gradient(circle_at_center,black_40%,transparent_75%)] md:[mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] translate-x-6 lg:translate-x-12">
                        <div className="absolute inset-0 scale-[1.15] md:scale-110">
                            <InteractiveRobotSpline
                                scene={ROBOT_SCENE_URL}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- LEFT TEXT CARD COMPONENT ---
const BlockInTextCard = ({
    tag,
    text,
    examples,
    isLowPowerMode,
}: {
    tag: string;
    text: ReactNode;
    examples: string[];
    isLowPowerMode?: boolean;
}) => {
    return (
        <div className="w-full max-w-3xl space-y-6 sm:space-y-8 lg:space-y-12 border-none">
            <div>
                <p className="text-xs sm:text-base md:text-lg font-mono text-muted-foreground uppercase tracking-wider">{tag}</p>
            </div>

            <div className="max-w-2xl text-base sm:text-lg lg:text-5xl leading-relaxed lg:leading-[1.15] text-foreground font-medium tracking-tight">
                {text}
            </div>

            <div className="w-full border-none pt-1 lg:pt-4">
                <Typewrite examples={examples} isLowPowerMode={isLowPowerMode} />

                <div className="pt-5 lg:pt-8">
                    <Link
                        href="/contact"
                        className="group w-fit max-w-full relative flex items-center gap-3 sm:gap-6 py-3 lg:py-6 transition-colors border-none rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    >
                        <span className="relative text-xl sm:text-2xl md:text-4xl font-bold uppercase tracking-wide text-foreground pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-foreground group-hover:after:w-full after:transition-all after:duration-300 after:ease-out">
                            Send Message
                        </span>
                        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-foreground text-background transition-all duration-300 ease-out group-hover:-rotate-45 group-hover:scale-110">
                            <ArrowUpRight className="h-6 w-6" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

// --- TYPEWRITER COMPONENT ---
const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({ examples, isLowPowerMode }: { examples: string[]; isLowPowerMode?: boolean }) => {
    const [exampleIndex, setExampleIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setExampleIndex((pv) => (pv + 1) % examples.length);
        }, SWAP_DELAY_IN_MS);
        return () => clearInterval(intervalId);
    }, [examples]);

    return (
        <div className="flex items-start gap-3 rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-4 lg:gap-4 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
            <span className={twMerge("mt-1.5 shrink-0 size-2 rounded-full bg-emerald-500", !isLowPowerMode && "animate-pulse")} />
            <div className="min-w-0 flex-1">
                <p className="text-[10px] sm:text-xs font-mono text-muted-foreground mb-2 uppercase tracking-widest">
                    DISCUSSION TOPIC:
                </p>
                <div className="min-h-[3rem] text-sm sm:text-lg leading-relaxed font-medium text-foreground transition-opacity duration-500">
                    {examples[exampleIndex]}
                </div>
            </div>
        </div>
    );
};
