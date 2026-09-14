import type { Metadata } from 'next';
import { HomeClientContent } from './HomeClientContent';

export const metadata: Metadata = {
    title: 'Kartik Sharma | Full Stack & MERN Developer | Flutter Mobile Architect',
    description: 'Official portfolio of Kartik Sharma — Full Stack Developer & Flutter Architect from Jaipur, India. Explore web apps, case studies, and 4 paid industry roles.',
    keywords: [
        'Kartik Sharma',
        'thekartiksharma.in',
        'Kartik Sharma Portfolio',
        'Kartik Sharma Developer',
        'Kartik Sharma Jaipur',
        'Full Stack Developer Jaipur',
        'MERN Stack Developer India',
        'Flutter Developer Jaipur',
        'Next.js Developer India',
        'React Developer India',
        'Node.js Developer',
        'FastAPI Python Developer',
        'PostgreSQL Database Architect',
        'AI Driven Systems Builder',
        'Hire Full Stack Developer',
        'Freelance Web Developer India',
        'PRANAG AI Kartik Sharma',
        'VGU Jaipur Kartik Sharma',
        'Software Engineer Portfolio',
        'REST API Architect'
    ],
    authors: [{ name: 'Kartik Sharma', url: 'https://thekartiksharma.in' }],
    creator: 'Kartik Sharma',
    publisher: 'Kartik Sharma',
    alternates: {
        canonical: 'https://thekartiksharma.in',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://thekartiksharma.in',
        title: 'Kartik Sharma | Full Stack & MERN Developer | Flutter Mobile Architect',
        description: 'Explore production projects, engineering case studies, and full-stack solutions built by Kartik Sharma with Next.js, React, Node.js, and Flutter.',
        siteName: 'Kartik Sharma Portfolio',
        images: [
            {
                url: '/profile.png',
                width: 1200,
                height: 630,
                alt: 'Kartik Sharma - Full Stack & MERN Developer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kartik Sharma | Full Stack & MERN Developer',
        description: 'Full Stack & MERN Developer building scalable digital platforms with React, Next.js, FastAPI, and Flutter.',
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

const homeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Kartik Sharma Portfolio',
    url: 'https://thekartiksharma.in',
    description: 'Portfolio of Kartik Sharma — Full Stack & MERN Stack Developer, Flutter Architect, and AI Systems Builder.',
    author: {
        '@type': 'Person',
        name: 'Kartik Sharma',
        url: 'https://thekartiksharma.in',
        jobTitle: 'Full Stack & MERN Stack Developer',
        sameAs: [
            'https://github.com/KartikSharma4448',
            'https://linkedin.com/in/kartik-sharma06',
            'https://www.instagram.com/itszeromind'
        ]
    }
};

export default function HomePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
            />
            <HomeClientContent />
        </>
    );
}
