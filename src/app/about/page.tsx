import type { Metadata } from 'next';
import { AboutClientContent } from './AboutClientContent';

export const metadata: Metadata = {
  title: 'About Kartik Sharma | Full Stack & MERN Developer | Flutter Architect',
  description: 'Learn about Kartik Sharma, Full Stack & Flutter Developer and BCA student at VGU Jaipur. Explore background, 4 paid industry roles, and 15+ shipped platforms.',
  keywords: [
    'Kartik Sharma',
    'About Kartik Sharma',
    'Kartik Sharma Portfolio',
    'Kartik Sharma Full Stack Developer',
    'Kartik Sharma MERN Developer',
    'Kartik Sharma Jaipur',
    'Vivekananda Global University VGU Kartik Sharma',
    'VGU Jaipur BCA Full Stack Developer',
    'AS Public Sr. Sec. School Kartik Sharma',
    'VMOU RSCIT Kartik Sharma',
    'Full Stack Developer Jaipur',
    'React Next.js Developer India',
    'Flutter App Developer',
    'Software Engineer Kartik Sharma',
    'MERN Stack Architecture',
    'REST API PostgreSQL Developer'
  ],
  authors: [{ name: 'Kartik Sharma', url: 'https://thekartiksharma.in' }],
  creator: 'Kartik Sharma',
  publisher: 'Kartik Sharma',
  alternates: {
    canonical: 'https://thekartiksharma.in/about',
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://thekartiksharma.in/about',
    title: 'About Kartik Sharma | Full Stack & MERN Developer',
    description: 'Explore Kartik Sharma\'s background, Full Stack & Cloud at VGU Jaipur, 4 paid industry roles, and 15+ shipped production platforms.',
    siteName: 'Kartik Sharma Portfolio',
    images: [
      {
        url: '/profile.png',
        width: 1200,
        height: 630,
        alt: 'Kartik Sharma - Full Stack & MERN Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Kartik Sharma | Full Stack & MERN Developer',
    description: 'Explore Kartik Sharma\'s background, 4 paid industry roles, Flutter expertise, and 15+ shipped production platforms.',
    images: ['/profile.png'],
    creator: '@itszeromind',
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

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Kartik Sharma',
    alternateName: 'Kartik Sharma Developer',
    description: 'Full Stack & MERN Stack Developer, Flutter Mobile App Architect.',
    image: 'https://thekartiksharma.in/profile.png',
    jobTitle: 'Full Stack Developer',
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Vivekananda Global University (VGU), Jaipur',
        description: 'Bachelor of Computer Applications (BCA) in Full Stack & Cloud Computing',
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
    knowsAbout: [
      'React.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'Flutter',
      'Dart',
      'TypeScript',
      'JavaScript',
      'REST APIs',
      'Tailwind CSS',
      'Full Stack Architecture',
    ],
    url: 'https://thekartiksharma.in/about',
    sameAs: [
      'https://github.com/KartikSharma4448',
      'https://linkedin.com/in/kartik-sharma06',
      'https://instagram.com/itszeromind',
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <AboutClientContent />
    </>
  );
}
