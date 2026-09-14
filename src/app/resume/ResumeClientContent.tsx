'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Download, Loader2 } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { usePerformance } from '@/hooks/usePerformance';

const PdfViewer = dynamic(() => import('@/components/ui/pdf-viewer').then(mod => mod.PdfViewer), {
    ssr: false,
    loading: () => (
        <div className="flex flex-col items-center justify-center w-full h-full min-h-[400px]">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
            <p className="mt-4 text-muted-foreground text-sm font-medium">Loading Document...</p>
        </div>
    )
});

export function ResumeClientContent() {
    const { isLowPowerMode } = usePerformance();
    const resumeUrl = "/resume.pdf";

    return (
        <div className="h-screen bg-background relative flex flex-col pt-24 pb-4 overflow-hidden">
            {/* Header / Controls */}
            <motion.div
                initial={isLowPowerMode ? { opacity: 0 } : { opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="container-creative px-6 mb-4 flex-none flex flex-col md:flex-row justify-between items-center gap-4"
            >
                <Link
                    href="/"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Portfolio</span>
                </Link>

                <div className="flex items-center gap-3">
                    <a
                        href={resumeUrl}
                        download="Kartik_Sharma_Resume.pdf"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted/80 hover:bg-muted text-foreground font-medium transition-all active:scale-95 shadow-sm border border-border"
                    >
                        <Download className="w-4 h-4" />
                        <span>Download PDF</span>
                    </a>
                    <a
                        href={resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-all active:scale-95 shadow-sm"
                    >
                        <ExternalLink className="w-4 h-4" />
                        <span>Open in New Tab</span>
                    </a>
                </div>
            </motion.div>

            {/* Resume Viewer */}
            <motion.div
                initial={isLowPowerMode ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex-1 w-full max-w-[1400px] mx-auto px-4 md:px-6 min-h-0 pb-4 relative"
            >
                <div className="w-full h-full bg-muted/30 rounded-2xl border border-border/50 overflow-hidden relative group">
                    <PdfViewer url={resumeUrl} />
                </div>
            </motion.div>
        </div>
    );
}
