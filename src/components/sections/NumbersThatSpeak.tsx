'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    label: 'Projects Shipped',
    number: '15',
    suffix: '+',
    description: 'Production web apps, mobile apps, and AI systems.',
  },
  {
    label: 'Paid Industry Roles',
    number: '04',
    suffix: '+',
    description: 'Full-stack internships & international freelance client projects.',
  },
  {
    label: 'Academic Distinction',
    number: '9.43',
    suffix: ' CGPA',
    description: 'BCA in Full Stack & Cloud Computing at VGU Jaipur.',
  },
  {
    label: 'Verified Certifications',
    number: '18',
    suffix: '+',
    description: 'Simplilearn, freeCodeCamp, Google, Deloitte, Cisco.',
  },
];

export function NumbersThatSpeak() {
  return (
    <section className="relative w-full py-20 md:py-32 px-6 sm:px-10 md:px-16 lg:px-24 bg-background text-foreground overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-lime-500/5 dark:bg-lime-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Headline & Intro */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col justify-center space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.05]">
            Numbers that <br className="hidden sm:inline" />
            <span className="text-neutral-900 dark:text-white">Speak</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg font-normal">
            Years of hands-on development, successful project deliveries, and long-term client collaborations reflect a consistent focus on quality, reliability, and scalable problem solving across modern web technologies.
          </p>
        </motion.div>

        {/* Right 2x2 Stats Grid on Mobile & Desktop */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-10 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border-l-2 border-neutral-200 dark:border-white/15 pl-3 sm:pl-6 flex flex-col space-y-1.5 sm:space-y-2 group hover:border-lime-400 transition-colors duration-300"
            >
              <span className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-200 transition-colors line-clamp-1">
                {stat.label}
              </span>

              <div className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 dark:text-white flex items-baseline">
                <span>{stat.number}</span>
                <span className="text-lime-500 dark:text-lime-400 ml-0.5">{stat.suffix}</span>
              </div>

              <p className="text-[11px] sm:text-xs md:text-sm text-neutral-600 dark:text-neutral-400/90 leading-relaxed pt-0.5 sm:pt-1">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default NumbersThatSpeak;
