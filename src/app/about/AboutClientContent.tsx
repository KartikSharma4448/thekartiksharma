'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  FileText,
  GraduationCap,
  Briefcase,
} from 'lucide-react';
import Link from 'next/link';
import ExperienceMarquee from '@/components/sections/ExperienceMarquee';
import ExperienceStickyScroll from '@/components/sections/ExperienceStickyScroll';
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline';

export function AboutClientContent() {
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        if (!leftEyeRef.current) return;
        const rect = leftEyeRef.current.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
        const distance = Math.min(10, Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 12);

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        if (leftPupilRef.current) {
          leftPupilRef.current.style.transform = `translate(${x}px, ${y}px)`;
        }
        if (rightPupilRef.current) {
          rightPupilRef.current.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-background text-foreground pt-28 pb-24 overflow-x-hidden selection:bg-lime-400 selection:text-black flex flex-col justify-center items-center">
      
      {/* 1. Hero: Nice To Meet You */}
      <section className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 pt-6 pb-16 flex flex-col items-center justify-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400 mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-lime-500" />
            About Kartik Sharma
          </span>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-neutral-950 dark:text-white uppercase select-none">
            Nice To
          </h1>

          <div className="flex items-center justify-center gap-3 sm:gap-6 mt-2 sm:mt-4 flex-wrap">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-neutral-950 dark:text-white uppercase select-none">
              Meet
            </h1>

            {/* Interactive Eyeballs */}
            <div className="flex items-center gap-2 sm:gap-4 bg-neutral-900 dark:bg-white p-2.5 sm:p-4 rounded-full shadow-2xl">
              <div 
                ref={leftEyeRef} 
                className="w-8 h-8 sm:w-14 sm:h-14 bg-white dark:bg-neutral-900 rounded-full flex items-center justify-center relative overflow-hidden"
              >
                <div 
                  ref={leftPupilRef}
                  className="w-3.5 h-3.5 sm:w-6 sm:h-6 bg-neutral-950 dark:bg-white rounded-full transition-transform duration-75 will-change-transform"
                />
              </div>
              <div 
                className="w-8 h-8 sm:w-14 sm:h-14 bg-white dark:bg-neutral-900 rounded-full flex items-center justify-center relative overflow-hidden"
              >
                <div 
                  ref={rightPupilRef}
                  className="w-3.5 h-3.5 sm:w-6 sm:h-6 bg-neutral-950 dark:bg-white rounded-full transition-transform duration-75 will-change-transform"
                />
              </div>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-neutral-950 dark:text-white uppercase select-none">
              You
            </h1>
          </div>
        </motion.div>

        {/* Bio & Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-5xl mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left"
        >
          {/* Photo Card */}
          <div className="md:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-2xl overflow-hidden border border-lime-500/30 shadow-2xl shadow-lime-500/10 bg-neutral-900">
              <img
                src="/profile.png"
                alt="Kartik Sharma - Full Stack & MERN Developer"
                className="w-full h-full object-cover object-top filter brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-white/10">
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  Kartik Sharma
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                </div>
                <div className="text-[10px] font-mono text-lime-400">Jaipur, Rajasthan, India</div>
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div className="md:col-span-8 space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-lime-600 dark:text-lime-400">
              Full Stack &amp; MERN Stack Developer | Mobile App Architect
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Full Stack and MERN Stack Developer with hands-on experience building scalable web applications, cross-platform mobile apps with Flutter, and production-ready management systems. Proficient in React, Next.js, Node.js, Express, MongoDB, and PostgreSQL.
            </p>
            <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Passionate about engineering seamless digital experiences, high-performance backends, and responsive user interfaces that solve real-world problems.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-bold text-sm hover:opacity-90 transition-opacity"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-bold text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Scrolling Logo Marquee */}
      <ExperienceMarquee />

      {/* 2. Education & Journey Tabs */}
      <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <AboutTabs />
      </section>

    </div>
  );
}

// ─── Tabs Component ───────────────────────────────────────────────────────────

type TabId = 'education' | 'journey';

function AboutTabs() {
  const [activeTab, setActiveTab] = useState<TabId>('education');

  const tabs: { id: TabId; label: string; icon: React.ReactNode; description: string }[] = [
    {
      id: 'education',
      label: 'Education',
      icon: <GraduationCap className="w-5 h-5" />,
      description: 'Formal computer science education and verified academic distinction.',
    },
    {
      id: 'journey',
      label: 'Journey',
      icon: <Briefcase className="w-5 h-5" />,
      description: 'A timeline of roles, responsibilities, and professional growth across various organizations.',
    },
  ];

  return (
    <div>
      {/* Tab Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center mb-10"
      >
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400 mb-3 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-lime-500" />
          Background
        </span>

        {/* Animated description */}
        <div className="min-h-[4rem] mb-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-xl sm:text-2xl font-bold text-neutral-700 dark:text-neutral-300 max-w-2xl"
            >
              &ldquo;{tabs.find(t => t.id === activeTab)?.description}&rdquo;
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-3 flex-wrap justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                activeTab === tab.id
                  ? 'bg-lime-500 text-white shadow-lime-500/25 shadow-md'
                  : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Tab Content — both always mounted, only visibility toggled (no remount lag) */}
      <div>
        <div className={activeTab === 'education' ? 'block' : 'hidden'}>
          <ExperienceStickyScroll />
        </div>
        <div className={activeTab === 'journey' ? 'block' : 'hidden'}>
          <ExperienceTimeline />
        </div>
      </div>
    </div>
  );
}
