'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ToolsSection } from "@/components/sections/skills/ToolsSection";
import { HeroVisual } from "@/components/sections/HeroVisual";
import { NumbersThatSpeak } from "@/components/sections/NumbersThatSpeak";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import CTASection from "@/components/sections/CTASection";
import { PixelPet } from "@/components/ui/PixelPet";
import { SocialCorner } from '@/components/layout/SocialCorner';
import { DeferredMount } from '@/components/ui/DeferredMount';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function HomePage() {
    useEffect(() => {
        if (typeof window === 'undefined' || !('ResizeObserver' in window)) return;
        const refreshLayout = () => {
            window.dispatchEvent(new Event('resize'));
            ScrollTrigger.refresh();
        };
        const resizeObserver = new ResizeObserver(() => { refreshLayout(); });
        resizeObserver.observe(document.body);
        window.addEventListener('load', refreshLayout);
        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('load', refreshLayout);
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-x-clip"
        >
            <HeroVisual isExiting={true} />

            <DeferredMount>
                <PixelPet isInline={true} />
                <ToolsSection />
                <NumbersThatSpeak />
                <ExpertiseSection />
                <CTASection />
                <SocialCorner className="fixed bottom-12 right-12 z-[30]" />
            </DeferredMount>
        </motion.main>
    );
}

