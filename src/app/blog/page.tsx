import type { Metadata } from 'next';
import { BlogClientContent } from './BlogClientContent';

export const metadata: Metadata = {
    title: 'Engineering Blog & Technical Insights | Kartik Sharma',
    description: 'Deep-dive technical articles, architecture teardowns, and engineering insights by Kartik Sharma covering AI agents, Next.js optimization, and cloud systems.',
    keywords: [
        'Kartik Sharma Blog',
        'Technical Blog Full Stack',
        'Next.js Performance Optimization',
        'AI Agents Architecture',
        'Web3 UX Challenges',
        'Modern State Management React',
        'Full Stack Engineering Articles',
        'Software Architecture Insights',
        'MERN Stack Tutorials',
        'FastAPI Python Tutorials',
        'Flutter Mobile App Development Blog'
    ],
    authors: [{ name: 'Kartik Sharma', url: 'https://thekartiksharma.in' }],
    creator: 'Kartik Sharma',
    publisher: 'Kartik Sharma',
    alternates: {
        canonical: 'https://thekartiksharma.in/blog',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://thekartiksharma.in/blog',
        title: 'Engineering Blog & Technical Insights | Kartik Sharma',
        description: 'Deep-dive software engineering articles, performance optimization, and AI platform insights.',
        siteName: 'Kartik Sharma Portfolio',
        images: [
            {
                url: '/profile.png',
                width: 1200,
                height: 630,
                alt: 'Kartik Sharma - Technical Engineering Blog',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Engineering Blog | Kartik Sharma',
        description: 'Technical articles on Next.js, AI, and full-stack software engineering.',
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

const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Kartik Sharma Engineering Blog',
    url: 'https://thekartiksharma.in/blog',
    description: 'Technical articles, guides, and software engineering insights by Kartik Sharma.',
    author: {
        '@type': 'Person',
        name: 'Kartik Sharma',
        url: 'https://thekartiksharma.in'
    }
};

export default function BlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
            />
            <BlogClientContent />
        </>
    );
}
