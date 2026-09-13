'use client';

import { useState, useEffect } from 'react';
import { portfolioData } from '@/data/portfolio';
import { Project } from '@/types';
import { ProjectContact } from '@/components/sections/ProjectContact';
import { DeferredMount } from '@/components/ui/DeferredMount';
import { SyedNoorWorksShowcase } from '@/components/sections/projects/SyedNoorWorksShowcase';
import { getProjectImages } from '@/app/actions/getProjectImages';
import { getPlaceholderImageUrl } from '@/components/projects/ProjectPlaceholder';

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>(portfolioData.projects);

    useEffect(() => {
        const loadImages = async () => {
            try {
                const updatedProjects = await Promise.all(
                    portfolioData.projects.map(async (project) => {
                        try {
                            const images = await getProjectImages(project.slug, project.title);
                            if (images.length > 0) {
                                return { ...project, image: images[0] };
                            }
                        } catch (e) {
                            console.error("Failed to load images for", project.title, e);
                        }
                        return {
                            ...project,
                            image: project.image || getPlaceholderImageUrl(project.title)
                        };
                    })
                );
                setProjects(updatedProjects);
            } catch (err) {
                console.error("Error loading project images:", err);
            }
        };

        loadImages();
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden">
            <DeferredMount>
                <SyedNoorWorksShowcase projects={projects} initialViewMode="grid" />
                <div className="max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 pb-16">
                    <ProjectContact />
                </div>
            </DeferredMount>
        </div>
    );
}
