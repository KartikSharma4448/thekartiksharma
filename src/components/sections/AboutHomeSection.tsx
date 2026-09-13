'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Download, 
  MapPin, 
  GraduationCap, 
  Code2, 
  Briefcase, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export function AboutHomeSection() {
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

  const stats = [
    { label: 'Specialization', value: 'Full Stack', sub: 'MERN + Mobile Architect' },
    { label: 'Paid Industry Roles', value: '4+', sub: 'Full Stack & Mobile' },
    { label: 'Projects Shipped', value: '10+', sub: 'Web, Mobile & AI Platforms' },
    { label: 'Core Expertise', value: 'MERN + Flutter', sub: 'Scalable Full Stack Architect' }
  ];

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-background">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-lime-500/10 dark:bg-lime-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Header: Badge + Interactive Eyeballs */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/10 dark:bg-lime-400/10 border border-lime-500/20 text-lime-600 dark:text-lime-400 text-xs sm:text-sm font-mono uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>About Kartik Sharma</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-5"
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-neutral-950 dark:text-white select-none">
              Nice To
            </h2>

            {/* Interactive Eyeballs */}
            <div className="flex items-center gap-2 sm:gap-3 bg-neutral-900 dark:bg-white p-2 sm:p-3.5 rounded-full shadow-2xl border border-neutral-700/40 dark:border-neutral-200">
              <div 
                ref={leftEyeRef} 
                className="w-7 h-7 sm:w-11 sm:h-11 bg-white dark:bg-neutral-950 rounded-full flex items-center justify-center relative overflow-hidden shadow-inner"
              >
                <div 
                  ref={leftPupilRef}
                  className="w-3 h-3 sm:w-5 sm:h-5 bg-neutral-950 dark:bg-lime-400 rounded-full transition-transform duration-75 will-change-transform"
                />
              </div>
              <div 
                className="w-7 h-7 sm:w-11 sm:h-11 bg-white dark:bg-neutral-950 rounded-full flex items-center justify-center relative overflow-hidden shadow-inner"
              >
                <div 
                  ref={rightPupilRef}
                  className="w-3 h-3 sm:w-5 sm:h-5 bg-neutral-950 dark:bg-lime-400 rounded-full transition-transform duration-75 will-change-transform"
                />
              </div>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-neutral-950 dark:text-white select-none">
              Meet You
            </h2>
          </motion.div>
        </div>

        {/* Main Content Grid: Image on Left/Right + Narrative & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Profile Card with Image & Floating Badges */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              {/* Outer decorative gradient frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-lime-500 via-emerald-500 to-teal-500 rounded-3xl opacity-75 blur-md group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
              
              <div className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
                {/* Main Photo */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-950">
                  <Image
                    src="/profile.png"
                    alt="Kartik Sharma - Full Stack & MERN Developer"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top filter brightness-105 contrast-105 hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                </div>

                {/* Bottom Overlay Info on Photo */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent backdrop-blur-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                        Kartik Sharma
                        <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
                      </h3>
                      <p className="text-xs font-mono text-lime-400 mt-0.5">
                        Full Stack & MERN Developer
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] text-neutral-300">
                      <MapPin className="w-3 h-3 text-lime-400" />
                      <span>Jaipur, IN</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Chip 1: VGU Jaipur Education */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -top-4 -right-4 sm:-right-6 px-4 py-2.5 rounded-2xl bg-neutral-900/90 dark:bg-neutral-900/90 backdrop-blur-md border border-lime-500/30 shadow-xl flex items-center gap-3 text-left"
              >
                <div className="w-8 h-8 rounded-xl bg-lime-500/20 flex items-center justify-center text-lime-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">BCA @ VGU Jaipur</div>
                  <div className="text-xs font-bold text-white">Full Stack & Cloud (5th Sem)</div>
                </div>
              </motion.div>

              {/* Floating Chip 2: Tech Stack */}
              <motion.div 
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-5 -left-4 sm:-left-6 px-4 py-2.5 rounded-2xl bg-neutral-900/90 dark:bg-neutral-900/90 backdrop-blur-md border border-emerald-500/30 shadow-xl flex items-center gap-3 text-left"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">Core Stack</div>
                  <div className="text-xs font-bold text-white">MERN • Next.js • Flutter</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Narrative & Bio Section on Right */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Architecting scalable web applications & cross-platform mobile experiences.
              </h3>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
                Hey! I&apos;m <span className="font-semibold text-foreground">Kartik Sharma</span>, a passionate Full Stack &amp; MERN Stack Developer based in Jaipur, India. I specialize in crafting high-performance web platforms with <span className="text-lime-600 dark:text-lime-400 font-medium">React, Next.js, Node.js, Express, MongoDB, and PostgreSQL</span>, as well as native-feeling mobile applications with <span className="text-emerald-600 dark:text-emerald-400 font-medium">Flutter</span>.
              </p>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                With experience across <span className="font-semibold text-foreground">4 paid industry roles</span>, international freelance engagements, and over <span className="font-semibold text-foreground">10+ shipped production platforms</span>, I bridge clean user experience design with robust backend engineering.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-2xl bg-neutral-100/80 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 backdrop-blur-xs transition-all duration-300 hover:border-lime-500/40 hover:-translate-y-0.5"
                >
                  <div className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-muted-foreground font-mono mt-0.5 truncate">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-neutral-950 text-white dark:bg-lime-400 dark:text-neutral-950 font-bold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-lime-500/20"
              >
                <span>Explore Journey &amp; Experience</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="/resume.pdf"
                download="Kartik_Sharma_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-foreground font-semibold text-sm hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300 hover:scale-105"
              >
                <Download className="w-4 h-4 text-lime-500" />
                <span>Download Resume</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-transparent text-muted-foreground hover:text-foreground font-medium text-sm transition-colors"
              >
                <span>Let&apos;s Connect</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
