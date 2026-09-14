import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/'],
            },
            {
                userAgent: [
                    'Googlebot',
                    'Bingbot',
                    'GPTBot',
                    'OAI-SearchBot',
                    'ChatGPT-User',
                    'PerplexityBot',
                    'ClaudeBot',
                    'anthropic-ai',
                    'Google-Extended',
                    'Applebot',
                    'Applebot-Extended',
                    'cohere-ai',
                    'CCBot',
                ],
                allow: '/',
            },
        ],
        sitemap: 'https://thekartiksharma.in/sitemap.xml',
        host: 'https://thekartiksharma.in',
    };
}
