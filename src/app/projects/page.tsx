import type { Metadata } from 'next';
import { ProjectsClientContent } from './ProjectsClientContent';
import { portfolioData } from '@/data/portfolio';

export const metadata: Metadata = {
    title: 'Projects & Case Studies | Kartik Sharma | Full Stack & AI Developer',
    description: 'Explore production projects and case studies by Kartik Sharma. Featuring PRANAG AI, VCC ERP, CVCraft AI Resume Builder, Aegis Care, and RestroQR platforms.',
    keywords: [
        'Kartik Sharma Projects',
        'PRANAG AI Platform',
        'AI Livestock Diagnostic App',
        'VCC ERP Coaching Institute Management',
        'Rajasthali Travel Fleet Management System',
        'CVCraft v2 AI Resume Builder',
        'Aegis Care Blockchain Healthcare',
        'KidzGPT AI Assistant',
        'TodoUp Flutter Productivity App',
        'RestroQR Digital Menu System',
        'Full Stack Case Studies',
        'MERN Stack Projects',
        'Next.js Production Applications',
        'FastAPI Python Microservices',
        'Flutter Mobile App Portfolio',
        'PostgreSQL Scalable Architectures',
        'Software Architecture Case Studies',
        'Kartik Sharma Developer Portfolio'
    ],
    authors: [{ name: 'Kartik Sharma', url: 'https://thekartiksharma.in' }],
    creator: 'Kartik Sharma',
    publisher: 'Kartik Sharma',
    alternates: {
        canonical: 'https://thekartiksharma.in/projects',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://thekartiksharma.in/projects',
        title: 'Projects & Case Studies | Kartik Sharma | Full Stack & AI Systems',
        description: 'Explore 15+ production-grade web platforms, Flutter mobile apps, and AI-powered systems engineered by Kartik Sharma.',
        siteName: 'Kartik Sharma Portfolio',
        images: [
            {
                url: '/profile.png',
                width: 1200,
                height: 630,
                alt: 'Kartik Sharma - Full Stack & AI Systems Projects',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Projects & Case Studies | Kartik Sharma',
        description: 'Explore full-stack platforms, Flutter mobile apps, and AI systems built by Kartik Sharma.',
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

const projectsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Projects & Case Studies by Kartik Sharma',
    url: 'https://thekartiksharma.in/projects',
    description: 'Curated collection of production projects, web platforms, and mobile apps engineered by Kartik Sharma.',
    isPartOf: {
        '@type': 'WebSite',
        name: 'Kartik Sharma Portfolio',
        url: 'https://thekartiksharma.in'
    },
    hasPart: (portfolioData.projects || []).map((project) => ({
        '@type': 'SoftwareApplication',
        name: project.title,
        description: project.description,
        applicationCategory: 'WebApplication',
        operatingSystem: 'Cross-platform',
        url: `https://thekartiksharma.in/projects/${project.slug}`
    }))
};

export default function ProjectsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
            />
            <ProjectsClientContent />
        </>
    );
}
