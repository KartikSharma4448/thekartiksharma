'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AppleHelloEnglishEffect } from '@/components/ui/apple-hello-effect';

interface LoadingScreenProps {
    onComplete?: () => void;
    onExitStart?: () => void;
    duration?: number;
}

export function LoadingScreen({ onComplete, onExitStart, duration }: LoadingScreenProps) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Lock body and notify components that intro is loading
        document.body.style.overflow = 'hidden';
        window.dispatchEvent(new CustomEvent('preload-state-change', { detail: true }));
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    const handleAnimationComplete = () => {
        // Hold for impact before curtain lifts
        setTimeout(() => {
            setIsLoading(false);
            onExitStart?.();
            window.dispatchEvent(new CustomEvent('preload-state-change', { detail: false }));
            setTimeout(() => {
                onComplete?.();
            }, 1200);
        }, 350);
    };

    // Safety fallback timer ensuring loading curtain always lifts even if animation event is interrupted
    useEffect(() => {
        const timer = setTimeout(() => {
            handleAnimationComplete();
        }, 4200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{
                        y: "-100%",
                        transition: {
                            duration: 1.1,
                            ease: [0.7, 0, 0.3, 1]
                        }
                    }}
                    className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background text-foreground overflow-hidden will-change-transform select-none"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{
                            opacity: 0,
                            scale: 0.95,
                            y: -40,
                            transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] }
                        }}
                        transition={{ duration: 0.4 }}
                        className="relative flex flex-col items-center justify-center w-full max-w-[900px] px-6 sm:px-12 will-change-transform"
                    >
                        {/* Hero-sized prominent Apple Hello animation */}
                        <AppleHelloEnglishEffect
                            speed={1.1}
                            onAnimationComplete={handleAnimationComplete}
                            className="text-foreground dark:text-white text-zinc-900 w-[85vw] max-w-[480px] sm:max-w-[620px] md:max-w-[750px] lg:max-w-[820px] h-auto will-change-transform drop-shadow-sm"
                        />
                    </motion.div>

                    {/* Subtle aesthetic pulse indicator */}
                    <motion.div
                        animate={{ opacity: [0.2, 0.6, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        exit={{ opacity: 0, transition: { duration: 0.3 } }}
                        className="absolute bottom-12 w-2 h-2 rounded-full bg-foreground/20"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}