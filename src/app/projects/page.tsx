import type { Metadata } from 'next';
import { ProjectsClientContent } from './ProjectsClientContent';
import { portfolioData } from '@/data/portfolio';

export const metadata: Metadata = {
    title: { absolute: 'Projects & Case Studies | Kartik Sharma | Full Stack & AI Developer' },
    description: "Explore Kartik Sharma's projects: My Purse offline Android vault, VCC ERP, Rajasthali Travel, CVCraft, Aegis Care and RestroQR.",
    keywords: [
        'Kartik Sharma Projects',
        'My Purse Offline Android Wallet',
        'Kotlin Jetpack Compose Document Vault',
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
        description: 'Explore web platforms, Kotlin Android and Flutter mobile apps, and AI systems built by Kartik Sharma, including the open-source My Purse offline vault.',
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
        description: 'Explore full-stack platforms, Android and Flutter mobile apps, and the open-source My Purse offline vault built by Kartik Sharma.',
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
        applicationCategory: project.applicationCategory || 'WebApplication',
        operatingSystem: project.operatingSystem || 'Cross-platform',
        sameAs: project.repoUrl,
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
