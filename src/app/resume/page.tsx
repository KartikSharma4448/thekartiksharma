import type { Metadata } from 'next';
import { ResumeClientContent } from './ResumeClientContent';

export const metadata: Metadata = {
    title: 'Resume & Curriculum Vitae (CV) | Kartik Sharma | Full Stack Developer',
    description: 'View and download the official resume of Kartik Sharma — Full Stack Developer & Flutter Architect with 4 paid industry roles and 15+ shipped production platforms.',
    keywords: [
        'Kartik Sharma Resume',
        'Kartik Sharma CV',
        'Kartik Sharma Curriculum Vitae',
        'Full Stack Developer Resume',
        'MERN Stack Developer Resume PDF',
        'Flutter Developer Resume',
        'Software Engineer Resume India',
        'Download Kartik Sharma Resume',
        'React Next.js Developer Resume',
        'Jaipur Full Stack Developer CV',
        'Vivekananda Global University BCA Graduate CV'
    ],
    authors: [{ name: 'Kartik Sharma', url: 'https://thekartiksharma.in' }],
    creator: 'Kartik Sharma',
    publisher: 'Kartik Sharma',
    alternates: {
        canonical: 'https://thekartiksharma.in/resume',
    },
    openGraph: {
        type: 'profile',
        locale: 'en_US',
        url: 'https://thekartiksharma.in/resume',
        title: 'Resume & CV | Kartik Sharma | Full Stack Developer',
        description: 'Official resume of Kartik Sharma. 4 paid roles, Flutter expertise, and scalable full-stack platforms.',
        siteName: 'Kartik Sharma Portfolio',
        images: [
            {
                url: '/profile.png',
                width: 1200,
                height: 630,
                alt: 'Kartik Sharma - Full Stack Developer Resume',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Resume & CV | Kartik Sharma',
        description: 'Official resume of Kartik Sharma, Full Stack & MERN Stack Developer.',
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

const resumeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DigitalDocument',
    name: 'Kartik Sharma Resume',
    url: 'https://thekartiksharma.in/resume',
    encodingFormat: 'application/pdf',
    author: {
        '@type': 'Person',
        name: 'Kartik Sharma',
        jobTitle: 'Full Stack & MERN Stack Developer',
        url: 'https://thekartiksharma.in'
    },
    description: 'Official software engineering resume of Kartik Sharma.'
};

export default function ResumePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(resumeJsonLd) }}
            />
            <ResumeClientContent />
        </>
    );
}
