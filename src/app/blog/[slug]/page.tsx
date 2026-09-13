import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogPostClientContent } from './BlogPostClientContent';

const blogTitles: Record<string, { title: string; description: string; category: string }> = {
    'future-of-ai-agents': {
        title: 'The Future of Autonomous AI Agents in Production',
        description: 'Explore the architecture, memory systems, and multi-agent coordination frameworks powering the next generation of autonomous AI systems.',
        category: 'Artificial Intelligence'
    },
    'web3-ux-challenges': {
        title: 'Solving Web3 UX Challenges for Mainstream Adoption',
        description: 'Examining account abstraction, gasless transactions, and biometric auth patterns to build user-friendly blockchain applications.',
        category: 'Web3 & Blockchain'
    },
    'mastering-nextjs-performance': {
        title: 'Mastering Next.js Performance: Optimization & Core Web Vitals',
        description: 'Comprehensive guide to achieving 100/100 Lighthouse scores: Turbopack, dynamic imports, image optimization, and bundle splitting.',
        category: 'Web Development'
    },
    'ai-driven-security': {
        title: 'AI-Driven Cybersecurity: Threat Detection & Defense',
        description: 'How machine learning algorithms and heuristic models identify zero-day vulnerabilities and prevent real-time intrusion attempts.',
        category: 'Cybersecurity'
    },
    'llm-fine-tuning': {
        title: 'Fine-Tuning Large Language Models for Production Applications',
        description: 'Step-by-step techniques for LoRA, QLoRA, and RLHF fine-tuning to adapt open-source foundation models for enterprise use.',
        category: 'Machine Learning'
    },
    'smart-contract-security': {
        title: 'Smart Contract Security: Pitfalls & Auditing Best Practices',
        description: 'Critical analysis of reentrancy attacks, flash loan exploits, and formal verification methodologies in Solidity smart contracts.',
        category: 'Web3 & Blockchain'
    },
    'modern-state-management': {
        title: 'Modern State Management: Redux, Zustand, and React Context',
        description: 'Architectural comparison of state management patterns in modern React and Next.js applications for optimal rendering performance.',
        category: 'Frontend Engineering'
    },
    'iot-edge-computing': {
        title: 'IoT & Edge Computing: Real-Time Data Streaming & Processing',
        description: 'Building resilient edge pipelines with MQTT, WebSockets, and low-latency stream processing for connected smart devices.',
        category: 'IoT & Systems'
    }
};

export async function generateStaticParams() {
    return Object.keys(blogTitles).map((slug) => ({ slug }));
}

export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = blogTitles[slug];

    if (!post) {
        return {
            title: 'Article Not Found | Kartik Sharma Blog',
            description: 'The requested engineering article could not be found.',
        };
    }

    const title = `${post.title} | Kartik Sharma Engineering Blog`;
    const canonicalUrl = `https://thekartiksharma.in/blog/${slug}`;

    return {
        title,
        description: post.description,
        keywords: [
            post.title,
            post.category,
            'Kartik Sharma Blog',
            'Full Stack Engineering Blog',
            'Software Architecture Guide',
            'Next.js Tutorials',
            'AI Development Articles',
            'Web Development Blog India'
        ],
        authors: [{ name: 'Kartik Sharma', url: 'https://thekartiksharma.in' }],
        creator: 'Kartik Sharma',
        publisher: 'Kartik Sharma',
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            type: 'article',
            locale: 'en_US',
            url: canonicalUrl,
            title,
            description: post.description,
            siteName: 'Kartik Sharma Portfolio',
            images: [
                {
                    url: '/profile.png',
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description: post.description,
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
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogTitles[slug];

    if (!post) {
        notFound();
    }

    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        author: {
            '@type': 'Person',
            name: 'Kartik Sharma',
            url: 'https://thekartiksharma.in'
        },
        publisher: {
            '@type': 'Person',
            name: 'Kartik Sharma',
            url: 'https://thekartiksharma.in'
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://thekartiksharma.in/blog/${slug}`
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <BlogPostClientContent slug={slug} />
        </>
    );
}
