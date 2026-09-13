'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { ExperienceSection } from '@/components/sections/experience/ExperienceSection';

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
        const distance = Math.min(12, Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 10);

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
    <div className="min-h-screen w-full bg-background text-foreground pt-32 pb-24 overflow-x-hidden selection:bg-lime-400 selection:text-black">
      
      {/* 1. Hero: Nice To Meet You */}
      <section className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 pt-8 pb-16 flex flex-col items-center justify-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
              Currently pursuing BCA at Vivekananda Global University (VGU), Jaipur with an outstanding 9.43 CGPA. Delivered complete end-to-end platforms from scratch across internships and freelance engagements. Proven across 4 paid roles and 10+ shipped projects including international freelance clients.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 2. Full Experience Section */}
      <section className="relative w-full overflow-hidden">
        <ExperienceSection />
      </section>

    </div>
  );
}
