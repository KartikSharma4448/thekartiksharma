"use client";

import React from "react";
import { ArcRevealHero } from "@/components/ui/arc-preloader-hero";

export function ArcPreloaderWrapper({ children }: { children: React.ReactNode }) {
    return (
        <ArcRevealHero revealDuration={450} greetingHold={300}>
            {children}
        </ArcRevealHero>
    );
}
