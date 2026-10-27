'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Send, CheckCircle, AlertCircle, Loader2, Disc, ArrowUpRight, Sparkles, HelpCircle, MessageSquare, ExternalLink, Github, Linkedin, Twitter, Instagram, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { portfolioData } from '@/data/portfolio';
import dynamic from 'next/dynamic';
import { usePerformance } from '@/hooks/usePerformance';

const Lanyard = dynamic<{ position?: [number, number, number], gravity?: [number, number, number], isLowPowerMode?: boolean }>(() => import('@/components/three/Lanyard').then(mod => mod.Lanyard), {
    ssr: false,
    loading: () => <div className="w-full h-full flex items-center justify-center bg-transparent"><Loader2 className="w-10 h-10 animate-spin text-primary" /></div>
});

const DynamicScrollVelocity = dynamic(() => import('@/components/ui/ScrollVelocity'), { ssr: false });
const Meteors = dynamic(() => import('@/components/ui/meteors').then(mod => mod.Meteors), { ssr: false });

import { ErrorBoundary } from '@/components/ui/ErrorBoundary';
import { DeferredMount } from '@/components/ui/DeferredMount';

function SocialTicker({ items, direction = 'left', speed = 30, isLowPowerMode = false }: { items: any[], direction?: 'left' | 'right', speed?: number, isLowPowerMode?: boolean }) {
    // 8x duplication ensures enough width to cover large screens twice over, allowing -50% translation without empty gaps on the right edge.
    const multipliedItems = [...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items];

    return (
        <div className="flex overflow-hidden relative w-full group/ticker py-4 select-none">
            <motion.div
                className="flex flex-nowrap hover:[animation-play-state:paused]"
                initial={{ x: direction === 'left' ? 0 : '-50%' }}
                animate={isLowPowerMode ? { x: direction === 'left' ? 0 : '-50%' } : { x: direction === 'left' ? '-50%' : 0 }}
                transition={{
                    ease: "linear",
                    duration: speed * 4, // 4x duration because 8x duplication travels 4x further than 2x duplication
                    repeat: Infinity,
                }}
                style={{ width: "max-content" }}
            >
                {multipliedItems.map((item, idx) => (
                    <div key={`${item.name}-${idx}`} className="pr-4">
                        <SocialCard item={item} />
                    </div>
                ))}
            </motion.div>

            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </div>
    );
}

const socialIconsMap: Record<string, React.ElementType> = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
    discord: Disc
};

function SocialCard({ item, compact = false }: { item: any; compact?: boolean }) {
    const Icon = item.image || ArrowUpRight;
    return (
        <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("group relative flex flex-col justify-between rounded-2xl border border-neutral-200 dark:border-white/5 bg-white dark:bg-white/[0.02] shadow-sm transition-colors hover:bg-neutral-50 dark:hover:bg-white/5 overflow-hidden", compact ? 'min-w-0 h-32 w-full p-3' : 'h-[140px] w-[280px] p-6 shrink-0')}
        >
            <div className="absolute -top-6 -right-6 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity transform group-hover:scale-125 duration-700">
                <Icon className="w-40 h-40" />
            </div>

            <div className={cn("relative z-10 flex", compact ? 'flex-col items-start gap-1.5' : 'items-center gap-4')}>
                <div className={cn("relative shrink-0 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors", compact ? 'size-7' : 'size-12')}>
                    <Icon className={compact ? 'size-4' : 'size-6'} />
                </div>
                <div className="flex min-w-0 max-w-full flex-col">
                    <span className={cn("font-bold text-foreground group-hover:text-primary transition-colors tracking-tight", compact ? 'text-sm' : 'text-lg')}>{item.name}</span>
                    <span title={`@${item.username}`} className="truncate text-[10px] sm:text-xs font-medium text-muted-foreground group-hover:text-foreground/80">@{item.username}</span>
                </div>
            </div>

            <div className="relative z-10 flex items-center justify-between mt-auto pt-4 border-t border-border">
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/60 group-hover:text-foreground/70 transition-colors">
                    Connect
                </span>
                <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary opacity-50 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
            </div>
        </a>
    );
}

const InputGroup = ({ label, name, type = "text", value, onChange, required = false }: any) => {
    return (
        <div className="group relative z-0 w-full mb-8 sm:mb-10">
            {type === 'textarea' ? (
                <textarea
                    id={`contact-${name}`}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    rows={1}
                    className="peer block w-full appearance-none border-0 border-b-2 border-foreground/20 bg-transparent py-2.5 px-0 text-xl font-medium text-foreground focus:border-foreground focus:outline-none focus:ring-0 transition-colors duration-300 resize-y min-h-[50px] max-h-[200px]"
                    placeholder=" "
                />
            ) : (
                <input
                    id={`contact-${name}`}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className="peer block w-full appearance-none border-0 border-b-2 border-foreground/20 bg-transparent py-2.5 px-0 text-xl font-medium text-foreground focus:border-foreground focus:outline-none focus:ring-0 transition-colors duration-300"
                    placeholder=" "
                />
            )}
            <label htmlFor={`contact-${name}`} className="absolute top-3 -z-10 origin-[0] -translate-y-8 scale-75 transform text-sm font-bold tracking-widest text-muted-foreground duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-foreground">
                {label.toUpperCase()}
            </label>
        </div>
    );
};

function ContactForm() {
    const t = useTranslations('contact');
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (status === 'loading') return;
        setErrorMessage('');
        setStatus('loading');

        try {
            const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
            if (!accessKey) {
                setErrorMessage('Contact form is temporarily unavailable. Please email kartikuma9261@gmail.com directly.');
                setStatus('error');
                return;
            }
            const form = new FormData(e.currentTarget);
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    access_key: accessKey,
                    from_name: 'Kartik Sharma Portfolio',
                    subject: `Portfolio enquiry: ${formData.subject}`,
                    botcheck: Boolean(form.get('botcheck')),
                }),
            });

            const result = await response.json().catch(() => ({}));
            if (response.ok && result.success === true) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setErrorMessage('Unable to send your message. Please try again or email kartikuma9261@gmail.com directly.');
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage('Unable to send your message. Please check your connection and try again.');
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="w-full relative z-20">
            {/* Typography Header - Creative & Big */}
            <div className="mb-10 sm:mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-foreground relative z-10">
                    {t('hero.title')}
                </h2>
                <p className="text-lg text-muted-foreground mt-4 font-light max-w-md">
                    {t('hero.subtitle')}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full relative z-10">
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" autoComplete="off" />
                <InputGroup label={t('form.name')} name="name" value={formData.name} onChange={handleChange} required />
                <InputGroup label={t('form.email')} name="email" type="email" value={formData.email} onChange={handleChange} required />
                <InputGroup label={t('form.subject')} name="subject" value={formData.subject} onChange={handleChange} required />
                <InputGroup
                    label={t('form.messagePlaceholder')} // Using placeholder label style
                    name="message"
                    type="textarea"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />

                {/* Creative Large Button */}
                <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group relative w-full flex items-center justify-between gap-3 border-b-2 border-foreground py-5 sm:py-8 text-left hover:bg-foreground/5 transition-colors disabled:opacity-50"
                    whileTap={{ scale: 0.98 }}
                >
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground sm:group-hover:pl-4 transition-all duration-300">
                        {status === 'loading' ? t('form.sending') : status === 'success' ? t('form.sent') : t('form.submit')}
                    </span>

                    <div className="relative shrink-0 overflow-hidden w-12 h-12 flex items-center justify-center rounded-full bg-foreground text-background group-hover:scale-110 transition-transform duration-500">
                        {status === 'loading' ? <Loader2 className="w-6 h-6 animate-spin" /> :
                            status === 'success' ? <CheckCircle className="w-6 h-6" /> :
                                <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
                        }
                    </div>
                </motion.button>
                {status === 'error' && (
                    <p role="alert" className="mt-4 text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
                )}
                {status === 'success' && (
                    <p role="status" className="mt-4 text-sm text-muted-foreground">Your message has been sent. Thank you for reaching out!</p>
                )}
            </form>
        </div>
    );
}

function FAQSection() {
    const t = useTranslations('contact');
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            q: t('faqData.0.q'),
            a: t('faqData.0.a')
        },
        {
            q: t('faqData.1.q'),
            a: t('faqData.1.a')
        },
        {
            q: t('faqData.2.q'),
            a: t('faqData.2.a')
        },
        {
            q: t('faqData.3.q'),
            a: t('faqData.3.a')
        },
        {
            q: t('faqData.4.q'),
            a: t('faqData.4.a')
        }
    ];

    return (
        <div className="w-full max-w-6xl mx-auto py-20 px-4 md:px-8">
            <div className="flex flex-col items-center mb-16 relative z-10 text-center">

                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Frequently Asked Questions</h2>
                <div className="h-1 w-20 bg-primary/20 rounded-full" />
            </div>

            <div className="space-y-0 relative z-10">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border-b border-border last:border-0"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full py-8 md:py-10 flex items-center justify-between text-left group"
                        >
                            <span className={cn(
                                "text-xl md:text-3xl font-bold tracking-tight transition-all duration-300",
                                openIndex === index ? "text-primary translate-x-2" : "text-foreground/90 group-hover:text-foreground group-hover:translate-x-1"
                            )}>
                                {faq.q}
                            </span>
                            <div className={cn(
                                "flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-border bg-primary/5 transition-all duration-500",
                                openIndex === index ? "rotate-180 bg-primary text-primary-foreground border-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]" : "text-muted-foreground group-hover:text-foreground group-hover:bg-primary/10"
                            )}>
                                <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="pb-10 md:pb-14 text-lg md:text-xl text-muted-foreground/80 leading-relaxed max-w-4xl">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}

const socialDescriptions: Record<string, string> = {
    GitHub: "Open Source",
    LinkedIn: "Professional",
    Twitter: "Thoughts",
    Instagram: "Lifestyle",
    Discord: "Community"
};

export function ContactClientContent() {
    const t = useTranslations('contact');
    const isLowPowerMode = false;
    const { isLowPowerMode: compactLayout } = usePerformance();

    const getSocialItem = (platform: string) => {
        const link = portfolioData.personal.socialLinks.find(l => l.platform.toLowerCase() === platform);
        return {
            name: (link?.platform || platform).charAt(0).toUpperCase() + (link?.platform || platform).slice(1),
            username: link?.username || '@user',
            body: socialDescriptions[link?.platform || platform] || "Connect",
            image: socialIconsMap[platform.toLowerCase()] || ArrowUpRight,
            url: link?.url || '#'
        };
    };

    const row1Real = ['linkedin', 'github', 'instagram'].map(getSocialItem);
    const row2Real = ['twitter', 'discord'].map(getSocialItem);

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const faqTriggerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: showFAQ } = useScroll({
        target: faqTriggerRef,
        offset: ["start end", "end end"]
    });

    const headerOpacity = useTransform(showFAQ, [0, 0.4], [1, 0.6]);
    const headerScale = useTransform(showFAQ, [0, 0.4], [1, 0.98]);
    const headerFilter = useTransform(showFAQ, [0, 0.4], ["blur(0px)", "blur(2px)"]);
    const faqY = useTransform(showFAQ, [0, 1], ['100vh', '0vh']);


    return (
        <div ref={containerRef} className="relative bg-background selection:bg-primary/20 overflow-x-clip">
            {/* 2. HEADER & BACKGROUNDS */}
            <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none z-0" />
            <div className="fixed inset-0 bg-background/60 backdrop-blur-[2px] pointer-events-none z-0" />
            <DeferredMount>
                <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
                    {!compactLayout && <Meteors number={50} />}
                </div>
            </DeferredMount>

            {/* 3. MAIN CONTENT: (Header + Form + Lanyard) */}
            <motion.div
                className="relative z-10"
                style={{
                    opacity: compactLayout ? 1 : headerOpacity,
                    scale: compactLayout ? 1 : headerScale,
                    filter: compactLayout ? "none" : headerFilter,
                }}
            >

                {/* Header Section (Flows normally) */}
                <div className="relative w-full pt-24 pb-6 sm:pt-28 lg:pt-48 lg:pb-20">
                    <div className="w-full flex items-center justify-center opacity-20 select-none pointer-events-none">
                        <DynamicScrollVelocity
                            texts={[t('hero.ticker.build'), t('hero.ticker.freelance')]}
                            velocity={20}
                            className="text-4xl sm:text-6xl lg:text-[9rem] font-black tracking-tight uppercase whitespace-nowrap"
                            isLowPowerMode={compactLayout}
                        />
                    </div>
                </div>

                {/* Interaction Section (Lanyard + Social + Form) */}
                {/* We keep this relative and stable. No shrinking or fading here. */}
                <div className="container-creative px-4 md:px-8 max-w-[1800px] mx-auto pb-12 lg:pb-40">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-20 items-start">

                        {/* LEFT COLUMN: Lanyard */}
                        <div className="col-span-1 lg:col-span-4 relative lg:sticky top-0 h-[340px] sm:h-[420px] lg:h-[90vh] pointer-events-none z-20">
                            {/* Anchor Slot/Bar for Lanyard */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 md:w-64 lg:w-96 h-2 bg-gradient-to-r from-transparent via-foreground/20 to-transparent blur-[2px] rounded-full z-30 mt-[-1px]" />
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 lg:w-48 h-[3px] bg-gradient-to-r from-transparent via-foreground/40 to-transparent rounded-full z-30" />

                            <DeferredMount fallback={<div className="w-full h-full flex items-center justify-center opacity-50"><Loader2 className="w-8 h-8 animate-spin" /></div>}>
                                <div className="w-full h-full pointer-events-auto overflow-visible">
                                    {!isLowPowerMode ? (
                                        <ErrorBoundary fallback={<div className="w-full h-full flex items-center justify-center opacity-50">Interactive Card Unavailable</div>}>
                                            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} isLowPowerMode={isLowPowerMode} />
                                        </ErrorBoundary>
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center p-8">
                                            <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-primary/5">
                                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 italic font-serif">
                                                    Archive ID // Static
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </DeferredMount>
                        </div>

                        {/* RIGHT COLUMN: Content Stack */}
                        <div className="col-span-1 lg:col-span-8 min-w-0 flex flex-col gap-10 lg:gap-16 relative z-10 pt-0">

                            {/* Social Connect */}
                            <motion.div
                                className="w-full"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="grid grid-cols-2 gap-2 lg:hidden">
                                    {[...row1Real, ...row2Real].map(item => <SocialCard key={item.name} item={item} compact />)}
                                </div>
                                <div className="hidden lg:flex flex-col gap-1">
                                    <SocialTicker items={row1Real} direction="right" speed={50} isLowPowerMode={isLowPowerMode} />
                                    <SocialTicker items={row2Real} direction="left" speed={50} isLowPowerMode={isLowPowerMode} />
                                </div>
                            </motion.div>

                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <ContactForm />
                            </motion.div>


                        </div>
                    </div>
                </div>

                {/* FAQ TRIGGER ZONE: Positioned after the form to initiate the cover */}
                {/* Massive 100vh runway for the most natural transition trip possible */}
                <div ref={faqTriggerRef} className="h-0 lg:h-[100vh] w-full pointer-events-none" />
            </motion.div >

            {/* 4. FAQ SECTION: The "Full Viewport Cover" Layer */}
            < motion.section
                className="relative z-50 bg-background overflow-hidden"
                style={{
                    y: compactLayout ? 0 : faqY,
                    marginTop: compactLayout ? 0 : "-100vh",
                }
                }
            >
                {/* Dedicated Meteors for FAQ Section - Reduced count */}
                <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
                    {!compactLayout && <Meteors number={30} />}
                </div>

                {/* Ultra-Smooth Sheet Edge: Tallest gradient for deep cinematic transition */}
                < div className="hidden lg:block absolute top-0 left-0 right-0 h-[40rem] bg-gradient-to-t from-background via-background/95 to-transparent -translate-y-full pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                <div className="container-creative px-4 md:px-8 max-w-[1700px] mx-auto py-4 lg:py-32 relative z-10">
                    <FAQSection />
                </div>
            </motion.section >
        </div >
    );
}
