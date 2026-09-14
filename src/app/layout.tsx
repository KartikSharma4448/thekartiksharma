import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display, Alex_Brush } from 'next/font/google';
import { getMessages, getLocale } from 'next-intl/server';
import { ThemeProvider, I18nProvider, SmoothScrollProvider } from '@/providers';

import '@/styles/globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const signature = Alex_Brush({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-signature',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'Kartik Sharma | Full Stack & MERN Stack Developer | Flutter Mobile Architect',
        template: '%s | Kartik Sharma',
    },
    description: 'Official portfolio of Kartik Sharma — Full Stack & MERN Stack Developer from Jaipur, India. Specializing in high-performance web applications, Flutter mobile apps, Next.js, React, Node.js, Express, and PostgreSQL.',
    keywords: [
        'Kartik Sharma',
        'thekartiksharma.in',
        'kartiksharma4448',
        'Kartik Sharma Portfolio',
        'Kartik Sharma Developer',
        'Kartik Sharma Jaipur',
        'hire full stack developer in jaipur',
        'hire mern stack developer india',
        'hire flutter developer jaipur',
        'hire react js developer freelance',
        'hire nextjs developer freelance',
        'hire remote web developer india',
        'best freelance web developer jaipur',
        'freelance mobile app developer jaipur',
        'freelance software engineer jaipur',
        'affordable website developer jaipur',
        'freelance full stack engineer india',
        'hire python fastapi backend developer',
        'custom web application development jaipur',
        'cross platform mobile app development flutter',
        'custom erp development services jaipur',
        'rest api backend development nodejs',
        'ai web application developer nextjs',
        'saas platform development engineer',
        'gps tracking mobile application developer',
        'restaurant qr code menu ordering system developer',
        'student management portal developer',
        'Full Stack Developer Jaipur',
        'Flutter Developer India',
        'React Developer India',
        'Node.js Developer India',
        'Python Developer Jaipur',
        'CodeUpPath founder',
        'TodoUp app',
        'VCC ERP',
        'RestroQR',
        'Rajasthali travel app',
        'CVCraft resume builder',
        'AI developer India',
        'GPS tracking app Flutter',
        'coaching ERP Flutter',
        'QR menu ordering system',
        'affordable web development India',
        'BCA student developer',
        'Vivekananda Global University VGU',
        'MERN Stack Developer India',
        'Sploink US Frontend Developer',
        'PetsGo PRANAG AI Developer',
        'Anukriti Prakashan Web Developer',
        'REST API Backend Architect',
        'FastAPI Python Developer',
        'PostgreSQL Supabase Developer',
        'Next.js Full Stack Architect'
    ],
    authors: [{ name: 'Kartik Sharma', url: 'https://thekartiksharma.in' }],
    creator: 'Kartik Sharma',
    publisher: 'Kartik Sharma',
    metadataBase: new URL('https://thekartiksharma.in'),
    alternates: {
        canonical: 'https://thekartiksharma.in',
    },
    other: {
        'geo.region': 'IN-RJ',
        'geo.placename': 'Jaipur, Rajasthan, India',
        'rating': 'general',
        'revisit-after': '3 days',
    },
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://thekartiksharma.in',
        title: 'Kartik Sharma — Full Stack & Flutter Developer | Jaipur, India',
        description: 'Hire Kartik Sharma — Top Full Stack & MERN Developer, Flutter Mobile App Architect, and Founder of CodeUpPath in Jaipur, India. 4 paid industry roles, 15+ shipped production platforms.',
        siteName: 'Kartik Sharma Portfolio',
        images: [
            {
                url: '/profile.png',
                width: 1200,
                height: 630,
                alt: 'Kartik Sharma - Full Stack & Flutter Developer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kartik Sharma — Full Stack & Flutter Developer | Jaipur, India',
        description: 'Hire Kartik Sharma for scalable web applications, Flutter mobile apps, Next.js full-stack systems, and AI backends.',
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
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
        ],
    },
    verification: {
        google: 'a4IMjZ0QyL1ovF73JqRBZA6eRVBqQ70nCzwdYqLLj6c',
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
    ],
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Person',
            '@id': 'https://thekartiksharma.in/#person',
            name: 'Kartik Sharma',
            givenName: 'Kartik',
            familyName: 'Sharma',
            alternateName: ['Kartik', 'thekartiksharma', 'Kartik Sharma Jaipur', 'Kartik Sharma Developer', 'kartiksharma4448'],
            url: 'https://thekartiksharma.in',
            image: 'https://thekartiksharma.in/profile.png',
            jobTitle: 'Full Stack & Flutter Developer',
            description: 'Kartik Sharma is a Full Stack Developer, Flutter app builder, and founder of CodeUpPath from Jaipur, Rajasthan, India. Specializes in scalable web apps, mobile apps, AI systems, ERP platforms, and full-stack architecture.',
            email: 'kartikuma9261@gmail.com',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Jaipur',
                addressRegion: 'Rajasthan',
                addressCountry: 'IN',
            },
            alumniOf: [
                {
                    '@type': 'EducationalOrganization',
                    name: 'Vivekananda Global University (VGU), Jaipur',
                    url: 'https://vgu.ac.in',
                    description: 'Bachelor of Computer Applications (BCA) - 9.43 CGPA Distinction',
                },
                {
                    '@type': 'EducationalOrganization',
                    name: 'AS Public Sr. Sec. School',
                    description: 'Senior Secondary (Class XII) - Science & Mathematics',
                },
                {
                    '@type': 'EducationalOrganization',
                    name: 'Vardhman Mahaveer Open University (VMOU), Kota',
                    description: 'Rajasthan State Certificate in Information Technology (RSCIT)',
                },
            ],
            worksFor: {
                '@type': 'Organization',
                name: 'CodeUpPath',
                url: 'https://codeuppath.com',
            },
            sameAs: [
                'https://github.com/KartikSharma4448',
                'https://linkedin.com/in/kartik-sharma06',
                'https://instagram.com/itszeromind',
                'https://codeuppath.com',
                'https://play.google.com/store/apps/details?id=app.todoup',
            ],
            knowsAbout: [
                'Full Stack Development',
                'MERN Stack',
                'React.js',
                'Next.js',
                'Node.js',
                'Express.js',
                'Flutter',
                'Dart',
                'TypeScript',
                'JavaScript',
                'Python',
                'FastAPI',
                'PostgreSQL',
                'Supabase',
                'MongoDB',
                'Firebase',
                'Artificial Intelligence',
                'NVIDIA NIM',
                'REST APIs',
                'GPS Tracking',
                'ERP Systems',
                'Tailwind CSS',
            ],
            award: [
                'Winner & Team Captain - National Level Project Exhibition 2025 (Posture Sense)',
                'Finalist - ACEHACK 5.0 UEM Jaipur',
                'Live Sprint Finalist - Techno Tarang Hackathon 3.0',
                'Official Delegate - DevFest Jaipur 2025 (Google Developer Groups)',
                'Certified Builder - OpenAI Academy x NxtWave Regional Buildathon',
            ],
            hasOccupation: {
                '@type': 'Occupation',
                name: 'Full Stack & Mobile App Developer',
                occupationLocation: {
                    '@type': 'City',
                    name: 'Jaipur',
                },
                skills: 'React, Next.js, Flutter, Node.js, Python, FastAPI, TypeScript, PostgreSQL, Supabase, AI, REST APIs',
            },
        },
        {
            '@type': 'WebSite',
            '@id': 'https://thekartiksharma.in/#website',
            url: 'https://thekartiksharma.in',
            name: 'Kartik Sharma Portfolio',
            description: 'Official portfolio of Kartik Sharma — Full Stack Developer and Flutter app builder from Jaipur, India.',
            publisher: {
                '@id': 'https://thekartiksharma.in/#person',
            },
            inLanguage: 'en-IN',
            potentialAction: {
                '@type': 'SearchAction',
                target: {
                    '@type': 'EntryPoint',
                    urlTemplate: 'https://thekartiksharma.in/projects?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
            },
        },
        {
            '@type': 'ProfessionalService',
            '@id': 'https://thekartiksharma.in/#service',
            name: 'Kartik Sharma — Full Stack & Freelance Engineering Services',
            url: 'https://thekartiksharma.in/contact',
            description: 'Professional freelance web development, Flutter app development, AI agent development, and ERP systems architecture by Kartik Sharma from Jaipur, India.',
            provider: {
                '@id': 'https://thekartiksharma.in/#person',
            },
            areaServed: {
                '@type': 'Country',
                name: 'India',
            },
            serviceType: [
                'Custom Web Application Development',
                'Cross-Platform Flutter Mobile App Development',
                'MERN Stack & Next.js Full Stack Engineering',
                'FastAPI & Node.js REST API Backend Architecture',
                'Custom ERP, Management & CRM Platforms',
                'AI Agent & LLM API Integration',
                'Database Design (PostgreSQL, Supabase, MongoDB)',
            ],
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Jaipur',
                addressRegion: 'Rajasthan',
                addressCountry: 'IN',
            },
        },
        {
            '@type': 'ItemList',
            '@id': 'https://thekartiksharma.in/#featured-apps',
            name: 'Featured Software Applications & Systems by Kartik Sharma',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    item: {
                        '@type': 'SoftwareApplication',
                        name: 'TodoUp Mobile App',
                        operatingSystem: 'Android, iOS',
                        applicationCategory: 'ProductivityApplication',
                        url: 'https://play.google.com/store/apps/details?id=app.todoup',
                        author: { '@id': 'https://thekartiksharma.in/#person' },
                        description: 'Flutter cross-platform productivity and task management app with real-time sync.',
                    },
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    item: {
                        '@type': 'SoftwareApplication',
                        name: 'CodeUpPath Tech Opportunity Platform',
                        operatingSystem: 'Web',
                        applicationCategory: 'EducationalApplication',
                        url: 'https://codeuppath.com',
                        author: { '@id': 'https://thekartiksharma.in/#person' },
                        description: 'Student-focused tech opportunity and developer roadmap discovery engine.',
                    },
                },
                {
                    '@type': 'ListItem',
                    position: 3,
                    item: {
                        '@type': 'SoftwareApplication',
                        name: 'CVCraft v2 AI ATS Resume Builder',
                        operatingSystem: 'Web',
                        applicationCategory: 'BusinessApplication',
                        url: 'https://thekartiksharma.in/projects/cvcraft-v2-ai-powered-ats-resume-builder',
                        author: { '@id': 'https://thekartiksharma.in/#person' },
                        description: 'AI-driven ATS compatibility and resume builder powered by NVIDIA NIM & FastAPI.',
                    },
                },
                {
                    '@type': 'ListItem',
                    position: 4,
                    item: {
                        '@type': 'SoftwareApplication',
                        name: 'AutoMagic Vision',
                        operatingSystem: 'Windows, macOS, Linux',
                        applicationCategory: 'UtilitiesApplication',
                        url: 'https://github.com/KartikSharma4448/AutoMagic-Vision',
                        author: { '@id': 'https://thekartiksharma.in/#person' },
                        description: 'Real-time computer vision 21-point hand tracking and OS-level virtual gesture controller.',
                    },
                },
            ],
        },
    ],
};

import Script from 'next/script';
import { ConditionalNavigation } from '@/components/layout/ConditionalNavigation';
import { ArcPreloaderWrapper } from '@/components/layout/ArcPreloaderWrapper';
import { DeveloperTerminalModal } from '@/components/ui/DeveloperTerminalModal';
import { IntroLoader } from '@/components/layout/IntroLoader';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <head>
                <Script
                    strategy="afterInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=G-VQNQVE0KLW"
                />
                <Script
                    id="google-analytics-gtag"
                    strategy="afterInteractive"
                >
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-VQNQVE0KLW', {
                            page_path: window.location.pathname,
                        });
                    `}
                </Script>
            </head>
            <body className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} ${signature.variable} font-sans relative`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <ThemeProvider>
                    <I18nProvider locale={locale} messages={messages}>
                        <SmoothScrollProvider>
                            <IntroLoader />
                            <ArcPreloaderWrapper>
                                <ConditionalNavigation>
                                    {children}
                                </ConditionalNavigation>
                            </ArcPreloaderWrapper>
                            <DeveloperTerminalModal />
                        </SmoothScrollProvider>
                    </I18nProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
