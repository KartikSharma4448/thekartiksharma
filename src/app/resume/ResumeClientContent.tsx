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
        <div className="h-[100dvh] bg-background relative flex flex-col pt-20 sm:pt-24 pb-2 sm:pb-4 overflow-hidden">
            {/* Header / Controls */}
            <motion.div
                initial={isLowPowerMode ? { opacity: 0 } : { opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-[1400px] mx-auto px-3 sm:px-6 mb-3 flex-none flex flex-col md:flex-row justify-between items-start md:items-center gap-3"
            >
                <Link
                    href="/"
                    className="flex min-h-10 items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Portfolio</span>
                </Link>

                <div className="grid grid-cols-2 gap-2 w-full md:w-auto">
                    <a
                        href={resumeUrl}
                        download="Kartik_Sharma_Resume.pdf"
                        className="flex min-h-11 min-w-0 items-center justify-center gap-2 px-2 sm:px-5 py-2.5 rounded-xl bg-muted/80 hover:bg-muted text-foreground text-xs sm:text-sm font-medium transition-colors shadow-sm border border-border"
                    >
                        <Download className="size-4 shrink-0" />
                        <span className="whitespace-nowrap">Download PDF</span>
                    </a>
                    <a
                        href={resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex min-h-11 min-w-0 items-center justify-center gap-2 px-2 sm:px-5 py-2.5 rounded-xl bg-primary/10 text-primary text-xs sm:text-sm font-medium hover:bg-primary/20 transition-colors shadow-sm border border-primary/15"
                    >
                        <ExternalLink className="size-4 shrink-0" />
                        <span className="whitespace-nowrap"><span className="sm:hidden">Open PDF</span><span className="hidden sm:inline">Open in New Tab</span></span>
                    </a>
                </div>
            </motion.div>

            {/* Resume Viewer */}
            <motion.div
                initial={isLowPowerMode ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex-1 w-full max-w-[1400px] mx-auto px-2 sm:px-4 md:px-6 min-h-0 pb-1 sm:pb-4 relative"
            >
                <div className="w-full h-full bg-muted/30 rounded-2xl border border-border/50 overflow-hidden relative group">
                    <PdfViewer url={resumeUrl} />
                </div>
            </motion.div>
        </div>
    );
}
