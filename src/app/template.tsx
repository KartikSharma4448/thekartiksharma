'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useLenis } from 'lenis/react';

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const lenis = useLenis();

    useEffect(() => {
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, lenis]);

    return (
        <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full flex-1"
        >
            {children}
        </motion.div>
    );
}
