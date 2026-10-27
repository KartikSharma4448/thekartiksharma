import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogPostClientContent } from './BlogPostClientContent';

import { portfolioData } from '@/data/portfolio';

const blogTitles = Object.fromEntries(portfolioData.blogs.map(post => [post.slug, {
    title: post.title,
    description: post.excerpt,
    category: post.category,
}]));

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
