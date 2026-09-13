import { MetadataRoute } from 'next';
import { portfolioData } from '@/data/portfolio';

const baseUrl = 'https://thekartiksharma.in';

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    // Core static routes
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/skills`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/experience`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/achievements`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/resume`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/gallery`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.75,
        },
    ];

    // Dynamic project routes
    const projectRoutes: MetadataRoute.Sitemap = (portfolioData.projects || []).map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.85,
    }));

    // Dynamic blog routes
    const blogSlugs = [
        'future-of-ai-agents',
        'web3-ux-challenges',
        'mastering-nextjs-performance',
        'ai-driven-security',
        'llm-fine-tuning',
        'smart-contract-security',
        'modern-state-management',
        'iot-edge-computing'
    ];

    const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.75,
    }));

    return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
