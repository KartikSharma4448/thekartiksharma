'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, ShieldCheck, FileText, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface DocumentPreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    url: string | null;
    title: string;
    subtitle?: string;
    verifyUrl?: string;
}

export function DocumentPreviewModal({
    isOpen,
    onClose,
    url,
    title,
    subtitle = 'Verified Official Credential',
    verifyUrl
}: DocumentPreviewModalProps) {
    const [mounted, setMounted] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!isOpen) {
            setZoomLevel(1);
            return;
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!mounted || !isOpen || !url) return null;

    const isPdf = url.toLowerCase().endsWith('.pdf');

    const modalContent = (
        <AnimatePresence>
            <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
                {/* Backdrop with blur */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    onClick={onClose}
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: 20 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-4xl h-[90vh] max-h-[850px] bg-neutral-900 border border-neutral-800/80 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden text-neutral-100 z-10"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-800 bg-neutral-900/90 backdrop-blur-sm shrink-0">
                        <div className="flex items-center gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-xl bg-lime-500/10 border border-lime-500/30 flex items-center justify-center shrink-0 text-lime-400">
                                {isPdf ? <FileText className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                            </div>
                            <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-sm sm:text-base font-bold text-white truncate max-w-[260px] sm:max-w-md">
                                        {title}
                                    </h3>
                                    <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-semibold shrink-0">
                                        <ShieldCheck className="w-3 h-3" />
                                        Verified
                                    </span>
                                </div>
                                <p className="text-xs text-neutral-400 truncate">{subtitle}</p>
                            </div>
                        </div>

                        {/* Actions & Close */}
                        <div className="flex items-center gap-2">
                            {!isPdf && (
                                <div className="hidden sm:flex items-center gap-1 bg-neutral-800/60 rounded-xl p-1 border border-neutral-700/50 mr-2">
                                    <button
                                        onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 2.5))}
                                        title="Zoom In"
                                        className="p-1.5 rounded-lg hover:bg-neutral-700/80 text-neutral-300 hover:text-white transition-colors"
                                    >
                                        <ZoomIn className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.75))}
                                        title="Zoom Out"
                                        className="p-1.5 rounded-lg hover:bg-neutral-700/80 text-neutral-300 hover:text-white transition-colors"
                                    >
                                        <ZoomOut className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => setZoomLevel(1)}
                                        title="Reset Zoom"
                                        className="p-1.5 rounded-lg hover:bg-neutral-700/80 text-neutral-300 hover:text-white transition-colors"
                                    >
                                        <RotateCcw className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            )}

                            <a
                                href={url}
                                download
                                title="Download Document"
                                className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700/50 transition-colors"
                            >
                                <Download className="w-4 h-4" />
                            </a>

                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Open in new tab"
                                className="hidden sm:flex p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700/50 transition-colors"
                            >
                                <ExternalLink className="w-4 h-4" />
                            </a>

                            <button
                                onClick={onClose}
                                title="Close (Esc)"
                                className="p-2 rounded-xl bg-neutral-800 hover:bg-red-500/20 hover:text-red-400 text-neutral-300 border border-neutral-700/50 transition-colors ml-1"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Body Content */}
                    <div className="flex-1 w-full h-full overflow-auto bg-neutral-950/90 flex items-center justify-center p-3 sm:p-6 relative select-none">
                        {isPdf ? (
                            <div className="w-full h-full min-h-[400px] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-inner">
                                <iframe
                                    src={`${url}#toolbar=1&navpanes=0&scrollbar=1`}
                                    title={title}
                                    className="w-full h-full border-none rounded-xl bg-neutral-900"
                                />
                            </div>
                        ) : (
                            <div className="relative w-full h-full flex items-center justify-center overflow-auto">
                                <div
                                    className="relative transition-transform duration-200 ease-out shadow-2xl rounded-xl overflow-hidden border border-neutral-800"
                                    style={{
                                        transform: `scale(${zoomLevel})`,
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        width: 'auto',
                                        height: 'auto'
                                    }}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={url}
                                        alt={title}
                                        className="max-h-[68vh] w-auto object-contain rounded-xl select-none"
                                        draggable={false}
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="px-5 py-3 border-t border-neutral-800 bg-neutral-900/90 backdrop-blur-sm flex items-center justify-between text-xs text-neutral-400 shrink-0">
                        <span className="font-mono flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Authentic Document Preview
                        </span>

                        <div className="flex items-center gap-3">
                            {verifyUrl && (
                                <a
                                    href={verifyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 font-semibold transition-all hover:scale-105"
                                >
                                    <span>Verify Online</span>
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            )}
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-neutral-200 flex items-center gap-1 underline underline-offset-4 decoration-neutral-600 hover:decoration-neutral-300 transition-colors"
                            >
                                <span>Open Full Document</span>
                                <ExternalLink className="w-3 h-3" />
                            </a>
                            <button
                                onClick={onClose}
                                className="px-3.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-medium transition-colors cursor-pointer"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );

    return createPortal(modalContent, document.body);
}

export default DocumentPreviewModal;
