import type { Metadata } from 'next';
import { ContactClientContent } from './ContactClientContent';

export const metadata: Metadata = {
    title: 'Contact & Hire Kartik Sharma | Full Stack & MERN Developer | Jaipur',
    description: 'Contact Kartik Sharma for full-time engineering roles, high-performance web development, Flutter app architecture, and technical consulting based in Jaipur.',
    keywords: [
        'Contact Kartik Sharma',
        'Hire Kartik Sharma',
        'Hire Full Stack Developer',
        'Hire MERN Stack Developer India',
        'Hire Flutter Developer Jaipur',
        'Freelance Web Developer India',
        'Full Stack Software Engineer Jaipur',
        'Kartik Sharma Email',
        'Kartik Sharma Phone',
        'Next.js Developer for Hire',
        'React Developer Jaipur',
        'FastAPI Python Developer Hire',
        'Software Consultant Jaipur',
        'Hire Remote Developer India'
    ],
    authors: [{ name: 'Kartik Sharma', url: 'https://thekartiksharma.in' }],
    creator: 'Kartik Sharma',
    publisher: 'Kartik Sharma',
    alternates: {
        canonical: 'https://thekartiksharma.in/contact',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://thekartiksharma.in/contact',
        title: 'Contact & Hire Kartik Sharma | Full Stack & MERN Developer',
        description: 'Available for full-time engineering positions, freelance software contracts, and technical advisory roles.',
        siteName: 'Kartik Sharma Portfolio',
        images: [
            {
                url: '/profile.png',
                width: 1200,
                height: 630,
                alt: 'Contact Kartik Sharma - Full Stack Developer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact & Hire Kartik Sharma',
        description: 'Full Stack & MERN Developer based in Jaipur, India. Connect for project collaborations and engineering opportunities.',
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

const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Kartik Sharma',
    url: 'https://thekartiksharma.in/contact',
    description: 'Contact details and hiring inquiry form for Kartik Sharma, Full Stack Developer.',
    mainEntity: {
        '@type': 'Person',
        name: 'Kartik Sharma',
        email: 'kartikuma9261@gmail.com',
        url: 'https://thekartiksharma.in',
        jobTitle: 'Full Stack & MERN Stack Developer',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Jaipur',
            addressRegion: 'Rajasthan',
            addressCountry: 'India'
        }
    }
};

export default function ContactPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
            />
            <ContactClientContent />
        </>
    );
}
