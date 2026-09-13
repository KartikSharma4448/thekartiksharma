import type { Metadata } from 'next';
import { ExperienceClientContent } from './ExperienceClientContent';

export const metadata: Metadata = {
    title: 'Work Experience & Engineering Roles | Kartik Sharma | Full Stack Developer',
    description: 'Explore Kartik Sharma\'s engineering career across 4 paid roles and freelance engagements. Key roles include Frontend Developer at Sploink (US Remote), PRANAG AI Developer at PetsGo, and Web Developer at Anukriti Prakashan.',
    keywords: [
        'Kartik Sharma Experience',
        'Kartik Sharma Career',
        'Sploink Frontend Developer',
        'PetsGo PRANAG AI Developer',
        'Anukriti Prakashan Web Developer',
        'Full Stack Developer Experience',
        'Software Engineer Work History',
        'Freelance Web Developer India',
        'Remote Frontend Engineer US',
        'Flutter Developer Work Experience',
        'MERN Stack Roles',
        'React Next.js Engineer',
        'REST API Backend Engineer',
        'Jaipur Software Engineer Experience',
        'Vivekananda Global University VGU Experience'
    ],
    authors: [{ name: 'Kartik Sharma', url: 'https://thekartiksharma.in' }],
    creator: 'Kartik Sharma',
    publisher: 'Kartik Sharma',
    alternates: {
        canonical: 'https://thekartiksharma.in/experience',
    },
    openGraph: {
        type: 'profile',
        locale: 'en_US',
        url: 'https://thekartiksharma.in/experience',
        title: 'Work Experience & Engineering Roles | Kartik Sharma',
        description: 'Professional engineering track record: 4 paid roles, international freelance clients, and scalable platform deployments.',
        siteName: 'Kartik Sharma Portfolio',
        images: [
            {
                url: '/profile.png',
                width: 1200,
                height: 630,
                alt: 'Kartik Sharma - Work Experience & Career Journey',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Work Experience & Engineering Roles | Kartik Sharma',
        description: 'Frontend Developer at Sploink, PRANAG AI Developer at PetsGo, and Web Developer at Anukriti Prakashan.',
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

const experienceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: 'Kartik Sharma Work Experience',
    url: 'https://thekartiksharma.in/experience',
    mainEntity: {
        '@type': 'Person',
        name: 'Kartik Sharma',
        jobTitle: 'Full Stack & MERN Stack Developer',
        worksFor: [
            {
                '@type': 'Organization',
                name: 'Sploink',
                location: 'United States (Remote)',
            },
            {
                '@type': 'Organization',
                name: 'PetsGo',
                location: 'Jaipur, India',
            },
            {
                '@type': 'Organization',
                name: 'Anukriti Prakashan',
                location: 'Jaipur, India',
            }
        ]
    }
};

export default function ExperiencePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(experienceJsonLd) }}
            />
            <ExperienceClientContent />
        </>
    );
}
