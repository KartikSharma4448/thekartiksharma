'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

import CardNav from '@/components/ui/CardNav';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import { usePreloadState } from '@/components/ui/arc-preloader-hero';

function Clock() {
    const [time, setTime] = useState<string>('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const updateTime = () => {
            const now = new Date();
            const h = String(now.getHours()).padStart(2, '0');
            const m = String(now.getMinutes()).padStart(2, '0');
            const s = String(now.getSeconds()).padStart(2, '0');
            setTime(`${h}:${m}:${s}`);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) return <span className="font-mono text-sm sm:text-xl md:text-2xl font-black opacity-0">00:00:00</span>;

    return (
        <span className="font-mono text-sm sm:text-xl md:text-2xl font-black text-gradient tracking-wider sm:tracking-widest hover:tracking-[0.2em] transition-all duration-300">
            {time}
        </span>
    );
}

// Sub-links for the "Other" dropdown
const useNavItems = () => {
    return [
        {
            label: "Other",
            links: [
                { label: "Blog", href: "/blog", description: "Articles and engineering insights" },
                { label: "Gallery", href: "/gallery", description: "Visual memories and moments" },
                { label: "Resume", href: "/resume", description: "View or download curriculum vitae" },
            ]
        }
    ];
};

export function Navbar() {
    const t = useTranslations('navigation');
    const navItems = useNavItems();
    const { theme, setTheme, resolvedTheme } = useTheme();
    const pathname = usePathname();
    const { scrollY } = useScroll();

    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mounted, setMounted] = useState(false);
    
    // Consume preload state directly from context
    const { isPreloading: isPreloadActive } = usePreloadState();

    const isDark = resolvedTheme === 'dark';

    useEffect(() => {
        setMounted(true);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    useMotionValueEvent(scrollY, 'change', (latest) => {
        if (isMenuOpen) return; // Don't hide navbar when menu is open

        const direction = latest > lastScrollY ? 'down' : 'up';
        setIsScrolled(latest > 50);

        if (direction === 'down' && latest > 100) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }

        setLastScrollY(latest);
    });

    const toggleMenu = useCallback(() => {
        setIsMenuOpen((prev) => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    const handleHomeClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        closeMenu();
    }, [pathname, closeMenu]);

    // Animation variants
    const navVariants = {
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 }
    };

    const menuVariants = {
        closed: { opacity: 0 },
        open: { opacity: 1 }
    };

    return (
        <>
            <motion.nav
                variants={navVariants}
                initial="hidden"
                animate={!isPreloadActive && (isVisible || isMenuOpen) ? 'visible' : 'hidden'}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="fixed top-0 left-0 right-0 z-[100]"
            >
                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-3 md:py-6">
                    <motion.div
                        className={cn(
                            'flex items-center justify-between transition-all duration-500 rounded-full',
                            isScrolled ? 'glass-strong px-4 sm:px-6 py-2.5 sm:py-3' : 'py-2'
                        )}
                        layout
                    >
                        {/* Make the Clock a Link to Home */}
                        <Link href="/" className="relative group min-w-[75px] sm:min-w-[120px]" onClick={handleHomeClick}>
                            <Clock />
                        </Link>

                        {/* Desktop Navigation with CardNav */}
                        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2">
                            {/* HOME */}
                            <Link
                                href="/"
                                onClick={handleHomeClick}
                                className={cn(
                                    'relative px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full group',
                                    pathname === '/' ? 'text-foreground bg-muted' : 'text-muted-foreground hover:text-foreground'
                                )}
                            >
                                <span className="relative z-10">Home</span>
                            </Link>

                            {/* ABOUT */}
                            <Link
                                href="/about"
                                className={cn(
                                    'relative px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full group',
                                    pathname === '/about' ? 'text-foreground bg-muted' : 'text-muted-foreground hover:text-foreground'
                                )}
                            >
                                <span className="relative z-10">About</span>
                            </Link>

                            {/* ACHIEVEMENTS */}
                            <Link
                                href="/achievements"
                                className={cn(
                                    'relative px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full group',
                                    pathname === '/achievements' || pathname.startsWith('/achievements/') ? 'text-foreground bg-muted' : 'text-muted-foreground hover:text-foreground'
                                )}
                            >
                                <span className="relative z-10">Achievements</span>
                            </Link>

                            {/* PROJECTS */}
                            <Link
                                href="/projects"
                                className={cn(
                                    'relative px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full group',
                                    pathname === '/projects' || pathname.startsWith('/projects/') ? 'text-foreground bg-muted' : 'text-muted-foreground hover:text-foreground'
                                )}
                            >
                                <span className="relative z-10">Projects</span>
                            </Link>

                            {/* OTHER (Mega CardNav Dropdown) */}
                            <CardNav
                                items={navItems}
                                theme={isDark ? 'dark' : 'light'}
                                pathname={pathname}
                            />

                            {/* CONTACT (Direct Link) */}
                            <Link
                                href="/contact"
                                className={cn(
                                    'relative px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full group',
                                    pathname === '/contact' ? 'text-foreground bg-muted' : 'text-muted-foreground hover:text-foreground'
                                )}
                            >
                                <span className="relative z-10">Contact</span>
                            </Link>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                            {mounted && (
                                <AnimatedThemeToggler />
                            )}

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={toggleMenu}
                                className="p-2 md:p-2.5 rounded-full bg-muted/80 hover:bg-muted transition-colors lg:hidden"
                                aria-label="Toggle menu"
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.div
                                        key={isMenuOpen ? 'close' : 'menu'}
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                                    </motion.div>
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </motion.nav >

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {
                    isMenuOpen && (
                        <motion.div
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[90] lg:hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-background"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            />

                            <div className="relative flex flex-col items-center justify-center h-full overflow-y-auto py-20">
                                <nav className="flex flex-col items-center gap-5 w-full px-6">
                                    {/* Mobile Main Links */}
                                    <Link
                                        href="/"
                                        onClick={handleHomeClick}
                                        className={cn(
                                            'text-2xl font-bold transition-colors',
                                            pathname === '/' ? 'text-lime-500 font-black' : 'text-muted-foreground hover:text-foreground'
                                        )}
                                    >
                                        Home
                                    </Link>

                                    <Link
                                        href="/about"
                                        onClick={closeMenu}
                                        className={cn(
                                            'text-2xl font-bold transition-colors',
                                            pathname === '/about' ? 'text-lime-500 font-black' : 'text-muted-foreground hover:text-foreground'
                                        )}
                                    >
                                        About
                                    </Link>

                                    <Link
                                        href="/achievements"
                                        onClick={closeMenu}
                                        className={cn(
                                            'text-2xl font-bold transition-colors',
                                            pathname === '/achievements' ? 'text-lime-500 font-black' : 'text-muted-foreground hover:text-foreground'
                                        )}
                                    >
                                        Achievements
                                    </Link>

                                    <Link
                                        href="/projects"
                                        onClick={closeMenu}
                                        className={cn(
                                            'text-2xl font-bold transition-colors',
                                            pathname === '/projects' ? 'text-lime-500 font-black' : 'text-muted-foreground hover:text-foreground'
                                        )}
                                    >
                                        Projects
                                    </Link>

                                    {/* Mobile Links grouped by Other */}
                                    {navItems.map((category) => (
                                        <div key={category.label} className="flex flex-col items-center gap-3 py-3 border-y border-white/10 dark:border-white/5 w-full text-center my-1">
                                            <span className="text-[11px] font-black font-mono text-lime-500 tracking-[0.3em] uppercase">
                                                {category.label}
                                            </span>
                                            <div className="flex flex-wrap justify-center gap-3">
                                                {category.links.map((link) => (
                                                    <Link
                                                        key={link.label}
                                                        href={link.href}
                                                        onClick={closeMenu}
                                                        className={cn(
                                                            'text-base font-semibold px-3 py-1.5 rounded-xl bg-muted/50 transition-all hover:scale-105 active:scale-95',
                                                            pathname === link.href ? 'text-foreground bg-lime-500/20 text-lime-500' : 'text-muted-foreground hover:text-foreground'
                                                        )}
                                                    >
                                                        {link.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}

                                    <Link
                                        href="/contact"
                                        onClick={closeMenu}
                                        className={cn(
                                            'text-2xl font-bold transition-colors',
                                            pathname === '/contact' ? 'text-lime-500 font-black' : 'text-muted-foreground hover:text-foreground'
                                        )}
                                    >
                                        Contact
                                    </Link>
                                </nav>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex items-center gap-4 mt-12"
                                >
                                    {mounted && (
                                        <AnimatedThemeToggler
                                            className="px-6 py-6 glass-card text-sm font-medium hover:bg-muted/50 flex items-center gap-2"
                                        />
                                    )}
                                </motion.div>
                            </div>
                        </motion.div >
                    )
                }
            </AnimatePresence >
        </>
    );
}
