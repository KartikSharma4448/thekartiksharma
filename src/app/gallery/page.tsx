import type { Metadata } from 'next';
import { GalleryClientContent } from './GalleryClientContent';

export const metadata: Metadata = {
    title: 'Visual Journey & Gallery | Kartik Sharma',
    description: 'A visual archive of milestones, technical hackathons, speaking engagements, and campus life of Kartik Sharma at Vivekananda Global University (VGU), Jaipur.',
    keywords: [
        'Kartik Sharma Gallery',
        'Kartik Sharma Photos',
        'VGU Jaipur Campus Life',
        'Hackathon Moments Kartik Sharma',
        'Tech Events Jaipur',
        'Software Engineer Journey Photos',
        'Developer Community Rajasthan'
    ],
    authors: [{ name: 'Kartik Sharma', url: 'https://thekartiksharma.in' }],
    creator: 'Kartik Sharma',
    publisher: 'Kartik Sharma',
    alternates: {
        canonical: 'https://thekartiksharma.in/gallery',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://thekartiksharma.in/gallery',
        title: 'Visual Journey & Gallery | Kartik Sharma',
        description: 'Visual chronicle of milestones, technical hackathons, and moments in software development.',
        siteName: 'Kartik Sharma Portfolio',
        images: [
            {
                url: '/profile.png',
                width: 1200,
                height: 630,
                alt: 'Kartik Sharma - Visual Gallery',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Visual Journey & Gallery | Kartik Sharma',
        description: 'Visual archive of milestones, hackathons, and moments.',
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

const galleryJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Kartik Sharma Visual Gallery',
    url: 'https://thekartiksharma.in/gallery',
    description: 'Visual chronicle of hackathons, achievements, and milestones.',
    author: {
        '@type': 'Person',
        name: 'Kartik Sharma',
        url: 'https://thekartiksharma.in'
    }
};

export default function GalleryPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }}
            />
            <GalleryClientContent />
        </>
    );
}
