import type { Metadata } from 'next';
import React from 'react';
import { DeferredMount } from '@/components/ui/DeferredMount';
import { SkillCertificateHero } from '@/components/sections/SkillCertificateHero';
import { SkillCertificateTabsSection } from '@/components/sections/SkillCertificateTabsSection';

export const metadata: Metadata = {
    title: 'Achievements, Certifications & Awards | Kartik Sharma',
    description: 'Explore verified certifications, awards, and academic honors earned by Kartik Sharma: 9.43 CGPA distinction at Vivekananda Global University (VGU) Jaipur, AWS Academy Cloud Graduate, AI Innovation Challenge, and technical certifications.',
    keywords: [
        'Kartik Sharma Achievements',
        'Kartik Sharma Certifications',
        'Kartik Sharma Awards',
        'VGU Jaipur 9.43 CGPA',
        'Vivekananda Global University Academic Honors',
        'AWS Academy Cloud Graduate Kartik Sharma',
        'AI Innovation Challenge Award',
        'Machine Learning Certifications',
        'Full Stack Web Development Certification',
        'RSCIT VMOU Kartik Sharma',
        'Supervised Machine Learning Certificate',
        'Deep Learning Beginner Certified',
        'Docker Kubernetes DevOps Certified',
        'Hackathon Winner Kartik Sharma',
        'Dicoding ElevAIte Program 2025'
    ],
    authors: [{ name: 'Kartik Sharma', url: 'https://thekartiksharma.in' }],
    creator: 'Kartik Sharma',
    publisher: 'Kartik Sharma',
    alternates: {
        canonical: 'https://thekartiksharma.in/achievements',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://thekartiksharma.in/achievements',
        title: 'Achievements, Certifications & Awards | Kartik Sharma',
        description: 'Verified professional certifications, hackathon awards, and academic distinctions earned by Kartik Sharma.',
        siteName: 'Kartik Sharma Portfolio',
        images: [
            {
                url: '/profile.png',
                width: 1200,
                height: 630,
                alt: 'Kartik Sharma - Achievements and Certifications',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Achievements & Certifications | Kartik Sharma',
        description: 'Academic honors at VGU Jaipur, AWS Cloud credentials, and verified software engineering certificates.',
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

const achievementsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Verified Achievements and Certifications of Kartik Sharma',
    url: 'https://thekartiksharma.in/achievements',
    itemListElement: [
        {
            '@type': 'EducationalOccupationalCredential',
            name: 'Bachelor of Computer Applications (BCA) - 9.43 CGPA',
            recognizedBy: {
                '@type': 'EducationalOrganization',
                name: 'Vivekananda Global University (VGU), Jaipur'
            }
        },
        {
            '@type': 'EducationalOccupationalCredential',
            name: 'AWS Academy Introduction to Cloud',
            recognizedBy: {
                '@type': 'Organization',
                name: 'Amazon Web Services (AWS)'
            }
        },
        {
            '@type': 'EducationalOccupationalCredential',
            name: 'AI Innovation Challenge Honor',
            recognizedBy: {
                '@type': 'Organization',
                name: 'AI Innovation Challenge'
            }
        }
    ]
};

export default function AchievementsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground relative selection:bg-primary/20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(achievementsJsonLd) }}
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
