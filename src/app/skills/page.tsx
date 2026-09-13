import type { Metadata } from 'next';
import React from 'react';
import { DeferredMount } from '@/components/ui/DeferredMount';
import { SkillCertificateHero } from '@/components/sections/SkillCertificateHero';
import { SkillCertificateTabsSection } from '@/components/sections/SkillCertificateTabsSection';

export const metadata: Metadata = {
    title: 'Technical Skills & Tech Stack | Kartik Sharma | Full Stack & AI Developer',
    description: 'Explore the comprehensive technical skillset of Kartik Sharma: React.js, Next.js, TypeScript, Node.js, Express, FastAPI, Python, Flutter, PostgreSQL, MongoDB, Redis, Docker, and full-stack architecture.',
    keywords: [
        'Kartik Sharma Skills',
        'Full Stack Developer Skills',
        'MERN Stack Developer Skills',
        'Flutter Developer Tech Stack',
        'Next.js 14 Developer',
        'React.js Specialist',
        'TypeScript Architecture',
        'Node.js REST APIs',
        'FastAPI Python Microservices',
        'PostgreSQL Database Optimization',
        'MongoDB NoSQL Databases',
        'Supabase Backend',
        'Firebase Realtime Database',
        'Docker Containerization',
        'Tailwind CSS UI UX',
        'GSAP Framer Motion Animations',
        'Three.js WebGL 3D',
        'State Management Redux Zustand',
        'Git GitHub CI CD',
        'RESTful API Design'
    ],
    authors: [{ name: 'Kartik Sharma', url: 'https://thekartiksharma.in' }],
    creator: 'Kartik Sharma',
    publisher: 'Kartik Sharma',
    alternates: {
        canonical: 'https://thekartiksharma.in/skills',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://thekartiksharma.in/skills',
        title: 'Technical Skills & Tech Stack | Kartik Sharma | Full Stack Developer',
        description: 'Comprehensive technical skills inventory across frontend, backend, mobile app development, databases, and DevOps.',
        siteName: 'Kartik Sharma Portfolio',
        images: [
            {
                url: '/profile.png',
                width: 1200,
                height: 630,
                alt: 'Kartik Sharma - Full Stack Skills and Tech Stack',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Technical Skills & Tech Stack | Kartik Sharma',
        description: 'Frontend, backend, Flutter, and AI technologies mastered by Kartik Sharma.',
        creator: '@itszeromind',
        images: ['/profile.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

const skillsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Technical Skills of Kartik Sharma',
    description: 'Programming languages, web frameworks, mobile SDKs, and cloud tools mastered by Kartik Sharma.',
    url: 'https://thekartiksharma.in/skills',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'React.js & Next.js' },
        { '@type': 'ListItem', position: 2, name: 'TypeScript & JavaScript' },
        { '@type': 'ListItem', position: 3, name: 'Node.js & Express.js' },
        { '@type': 'ListItem', position: 4, name: 'Flutter & Dart' },
        { '@type': 'ListItem', position: 5, name: 'FastAPI & Python' },
        { '@type': 'ListItem', position: 6, name: 'PostgreSQL & MongoDB' },
        { '@type': 'ListItem', position: 7, name: 'Tailwind CSS & Framer Motion' },
        { '@type': 'ListItem', position: 8, name: 'Docker & Git' },
    ],
};

export default function SkillsPage() {
    return (
        <main className="min-h-screen bg-background relative selection:bg-primary/20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(skillsJsonLd) }}
            />
            {/* Split Futuristic Hero: 3D Robot + Left Floating Tech Skills + Right Animated Certificate Cards */}
            <SkillCertificateHero />

            {/* Seamless Interactive Tabs: Skills & Tech Stack vs Verified Certifications */}
            <DeferredMount>
                <SkillCertificateTabsSection />
            </DeferredMount>
        </main>
    );
}
