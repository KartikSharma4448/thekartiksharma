import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { portfolioData } from '@/data/portfolio';
import { ProjectPageContent } from '@/components/projects/ProjectPageContent';
import { getProjectImages } from '@/app/actions/getProjectImages';

export async function generateStaticParams() {
    return (portfolioData.projects || []).map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const project = portfolioData.projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: 'Project Not Found | Kartik Sharma',
            description: 'The requested project could not be found.',
        };
    }

    const techKeywords = project.techStack || [];
    const title = `${project.title} | Kartik Sharma Portfolio`;
    const description = project.longDescription
        ? project.longDescription.slice(0, 160)
        : project.description.slice(0, 160);
    const canonicalUrl = `https://thekartiksharma.in/projects/${project.slug}`;
    const ogImage = project.image && project.image !== '/profile.png'
        ? project.image
        : 'https://thekartiksharma.in/profile.png';

    return {
        title,
        description,
        keywords: [
            project.title,
            ...techKeywords,
            'Kartik Sharma',
            'Kartik Sharma Projects',
            'Full Stack Case Study',
            'Software Architecture',
            'Web Application Architecture',
            'Mobile App Development',
            'Production Platform Case Study'
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
            description,
            siteName: 'Kartik Sharma Portfolio',
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            creator: '@itszeromind',
            images: [ogImage],
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

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = portfolioData.projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    // Fetch dynamic images from public/project folder
    const galleryImages = await getProjectImages(slug, project.title);

    // If dynamic images found, override the project data
    const updatedProject = {
        ...project,
        image: galleryImages.length > 0 ? galleryImages[0] : project.image,
        galleryImages: galleryImages.length > 0 ? galleryImages : project.galleryImages
    };

    const projectJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: project.title,
        description: project.description,
        applicationCategory: 'WebApplication',
        operatingSystem: 'Cross-platform',
        author: {
            '@type': 'Person',
            name: 'Kartik Sharma',
            url: 'https://thekartiksharma.in'
        },
        url: `https://thekartiksharma.in/projects/${project.slug}`,
        softwareRequirements: project.techStack?.join(', '),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
            />
            <ProjectPageContent project={updatedProject} />
        </>
    );
}
