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
        'Kartik Sharma Portfolio',
        'Kartik Sharma Developer',
        'Kartik Sharma Jaipur',
        'Full Stack Developer Jaipur',
        'MERN Stack Developer India',
        'Flutter Developer Jaipur',
        'Software Developer India',
        'Web Developer Jaipur',
        'React Developer India',
        'Next.js Developer',
        'Node.js Developer',
        'Freelance Web Developer India',
        'TypeScript Developer',
        'PostgreSQL Supabase Developer',
        'Frontend Developer',
        'Backend Developer',
        'Mobile App Developer Jaipur',
        'Vivekananda Global University VGU Kartik Sharma',
        'VGU Jaipur BCA 9.43 CGPA',
        'Sploink US Frontend Developer',
        'PetsGo PRANAG AI Developer',
        'Anukriti Prakashan Web Developer',
        'Hire Full Stack Developer Jaipur',
        'REST API Backend Architect'
    ],
    authors: [{ name: 'Kartik Sharma', url: 'https://thekartiksharma.in' }],
    creator: 'Kartik Sharma',
    publisher: 'Kartik Sharma',
    metadataBase: new URL('https://thekartiksharma.in'),
    alternates: {
        canonical: 'https://thekartiksharma.in',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://thekartiksharma.in',
        title: 'Kartik Sharma | Full Stack & MERN Stack Developer | Portfolio',
        description: 'Full Stack & MERN Developer from Jaipur, India. Building modern web & mobile applications with Next.js, React, Node.js, and Flutter. 4 paid roles, 10+ shipped projects.',
        siteName: 'Kartik Sharma Portfolio',
        images: [
            {
                url: '/profile.png',
                width: 1200,
                height: 630,
                alt: 'Kartik Sharma - Full Stack & MERN Stack Developer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kartik Sharma | Full Stack & MERN Stack Developer',
        description: 'Full Stack & MERN Developer building scalable digital platforms with React, Next.js, and Flutter.',
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
            alternateName: ['Kartik', 'thekartiksharma', 'Kartik Sharma Jaipur', 'Kartik Sharma Developer'],
            url: 'https://thekartiksharma.in',
            image: 'https://thekartiksharma.in/profile.png',
            jobTitle: 'Full Stack & MERN Stack Developer',
            description: 'Full Stack and MERN Stack Developer specializing in scalable web apps, cross-platform mobile apps with Flutter, Next.js, React, Node.js, Express, and PostgreSQL.',
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
            sameAs: [
                'https://github.com/KartikSharma4448',
                'https://linkedin.com/in/kartik-sharma06',
                'https://instagram.com/itszeromind',
            ],
            knowsAbout: [
                'Full Stack Development',
                'MERN Stack',
                'React.js',
                'Next.js',
                'Node.js',
                'Express.js',
                'MongoDB',
                'Flutter',
                'Dart',
                'TypeScript',
                'JavaScript',
                'Python',
                'PostgreSQL',
                'Supabase',
                'Tailwind CSS',
                'REST APIs',
                'Software Engineering',
            ],
        },
        {
            '@type': 'WebSite',
            '@id': 'https://thekartiksharma.in/#website',
            url: 'https://thekartiksharma.in',
            name: 'Kartik Sharma Portfolio',
            description: 'Official portfolio of Kartik Sharma — Full Stack & MERN Stack Developer.',
            publisher: {
                '@id': 'https://thekartiksharma.in/#person',
            },
            inLanguage: 'en-US',
        },
    ],
};

import { ConditionalNavigation } from '@/components/layout/ConditionalNavigation';
import { ArcPreloaderWrapper } from '@/components/layout/ArcPreloaderWrapper';
import { ChatBot } from '@/components/layout/ChatBot';
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
                            <ChatBot headless />
                            <DeveloperTerminalModal />
                        </SmoothScrollProvider>
                    </I18nProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
