'use client';

import React from 'react';
import { DeferredMount } from '@/components/ui/DeferredMount';
import { SkillCertificateHero } from '@/components/sections/SkillCertificateHero';
import { SkillCertificateTabsSection } from '@/components/sections/SkillCertificateTabsSection';

export default function SkillsPage() {
    return (
        <main className="min-h-screen bg-background relative selection:bg-primary/20">
            {/* Split Futuristic Hero: 3D Robot + Left Floating Tech Skills + Right Animated Certificate Cards */}
            <SkillCertificateHero />

            {/* Seamless Interactive Tabs: Skills & Tech Stack vs Verified Certifications */}
            <DeferredMount>
                <SkillCertificateTabsSection />
            </DeferredMount>
        </main>
    );
}
