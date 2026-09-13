'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ExpertiseItemProps {
  title: string;
  delay?: number;
}

const expertiseItems = [
  'Custom Web App',
  'Ecommerce Solutions',
  'API Integrations',
  'Code Refactoring',
  'Full-stack Development',
  'SaaS Software',
  'Performance Optimization',
  'Technical Support',
];

function ExpertiseItem({ title, delay = 0 }: ExpertiseItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative py-4 sm:py-7 lg:py-9 px-3 sm:px-4 lg:px-0 rounded-xl lg:rounded-none bg-neutral-100/60 dark:bg-white/[0.03] lg:bg-transparent border border-neutral-200/70 dark:border-white/5 lg:border-0 lg:border-b lg:border-neutral-300 lg:dark:border-neutral-800 cursor-pointer flex flex-col justify-between hover:bg-neutral-200/60 dark:hover:bg-white/[0.06] lg:hover:bg-transparent transition-all duration-300"
    >
      <div className="flex items-center justify-between transition-transform duration-300 ease-out group-hover:translate-x-1 sm:group-hover:translate-x-3">
        <h3 className="text-xs sm:text-lg md:text-2xl lg:text-[2.3rem] xl:text-[2.6rem] font-medium tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-black dark:group-hover:text-white transition-colors duration-200 leading-snug">
          {title}
        </h3>
        <span className="text-[10px] sm:text-xs md:text-sm text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-1">
          ↗
        </span>
      </div>

      {/* Expanding Underline on Hover */}
      <div className="hidden lg:block absolute bottom-0 left-0 h-[2px] w-0 bg-neutral-950 dark:bg-emerald-400 group-hover:w-full transition-all duration-500 ease-out pointer-events-none" />
    </motion.div>
  );
}

export function ExpertiseSection() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-32 px-4 sm:px-10 md:px-16 lg:px-24 bg-background text-foreground overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-emerald-500/5 dark:bg-emerald-400/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header with Flame Badge and Action Button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8 mb-10 sm:mb-14 md:mb-20">
          
          {/* Title Group */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5 sm:gap-4 flex-wrap"
          >
            <h2 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-950 dark:text-white leading-none">
              My
            </h2>

            {/* Animated Mint Flame Badge */}
            <motion.div
              whileHover={{ rotate: 18, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="inline-flex items-center justify-center w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-emerald-200 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700/60 rounded-full shadow-sm cursor-pointer mx-0.5 sm:mx-1"
            >
              <svg 
                className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 text-emerald-700 dark:text-emerald-400 animate-pulse" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 23c6.075 0 11-4.925 11-11 0-4.04-2.185-7.57-5.45-9.51-.43-.255-.98-.07-1.19.37-.21.43-.05.95.34 1.22C19.14 5.75 21 8.66 21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9c0-3.34 1.86-6.25 4.3-7.92.39-.27.55-.79.34-1.22-.21-.44-.76-.625-1.19-.37C3.185 4.43 1 7.96 1 12c0 6.075 4.925 11 11 11zm-.5-18.95c.42-.04.77.26.81.68.3 3.19 2.15 4.8 3.51 5.99.7.62 1.34 1.18 1.77 1.88.94 1.52.91 3.42-.08 4.91-1 1.51-2.73 2.49-4.51 2.49-3.31 0-6-2.69-6-6 0-3.08 2.37-6.07 4.5-9.95zm.5 4.85c-1.39 2.76-2.5 4.7-2.5 6.1 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-.49-.15-.97-.43-1.42-.31-.5-.81-.94-1.41-1.47-1.22-1.07-2.29-2.02-2.66-3.21z" />
              </svg>
            </motion.div>

            <h2 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-950 dark:text-white leading-none">
              Expertise
            </h2>
          </motion.div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-semibold text-xs sm:text-base hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-sm hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>View All Services</span>
              <span className="inline-block text-sm sm:text-lg transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </Link>
          </motion.div>

        </div>

        {/* 2-Column Capability Grid on Mobile & Desktop */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:gap-x-16 lg:gap-y-0">
          {expertiseItems.map((item, index) => (
            <ExpertiseItem key={item} title={item} delay={index * 0.05} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default ExpertiseSection;
