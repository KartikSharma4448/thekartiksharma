"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { LoadingScreen } from "./LoadingScreen";

/**
 * IntroLoader — shows the Hello animation on the first-ever homepage visit.
 * Sets 'portfolioLoaded' in sessionStorage when done so ArcPreloaderWrapper
 * knows to skip its "done" short-circuit and run normally on subsequent pages.
 */
export function IntroLoader() {
    const pathname = usePathname();
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Only show on homepage and only if this is the first visit this session
        if (pathname !== "/") return;
        const isLoaded = sessionStorage.getItem("portfolioLoaded");
        if (!isLoaded) {
            setShow(true);
        }
    }, [pathname]);

    if (!show) return null;

    return (
        <LoadingScreen
            onComplete={() => {
                // Mark as loaded so ArcPreloaderWrapper runs on future navigations
                sessionStorage.setItem("portfolioLoaded", "true");
                setShow(false);
            }}
        />
    );
}
