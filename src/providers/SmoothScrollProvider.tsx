'use client';

import { ReactLenis, useLenis } from 'lenis/react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

function LenisScrollSync() {
    const rafPending = useRef(false);

    useLenis(() => {
        // Throttle ScrollTrigger.update() to once per animation frame
        // instead of calling it on every single Lenis callback (~60fps)
        if (!rafPending.current) {
            rafPending.current = true;
            requestAnimationFrame(() => {
                // Only update if there are actual ScrollTrigger instances
                if (ScrollTrigger.getAll().length > 0) {
                    ScrollTrigger.update();
                }
                rafPending.current = false;
            });
        }
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return null;
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.12,
                duration: 1.0,
                smoothWheel: true,
                wheelMultiplier: 1.0,
                touchMultiplier: 1.0,
            }}
        >
            <LenisScrollSync />
            {children}
        </ReactLenis>
    );
}
