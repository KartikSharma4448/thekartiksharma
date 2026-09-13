'use client';

import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { SplineScene } from '@/components/ui/SplineScene';
import { DeferredMount } from '@/components/ui/DeferredMount';
import { Star } from 'lucide-react';
import Image from 'next/image';

import { usePerformance } from '@/hooks/usePerformance';

interface CertificateItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  rating: string;
  duration: string;
}

const certificatePool: CertificateItem[] = [
  {
    id: 'cert-1',
    title: 'Supervised Machine Learning',
    subtitle: 'Stanford & DeepLearning.AI',
    image: '/certificate/Supervised Machine Learning Regression and Classification.webp',
    rating: '4.9/5',
    duration: 'Specialization',
  },
  {
    id: 'cert-2',
    title: 'Data Analytics on Google Cloud',
    subtitle: 'Google Cloud Training',
    image: '/certificate/Data Analytics on Google Cloud.webp',
    rating: '5.0/5',
    duration: 'Professional',
  },
  {
    id: 'cert-3',
    title: 'Mastering Smart Contract',
    subtitle: 'Internet Computer (ICP)',
    image: '/certificate/Mastering Smart Contract.webp',
    rating: '4.9/5',
    duration: 'Web3 Academy',
  },
  {
    id: 'cert-4',
    title: 'Docker, Kubernetes & DevOps',
    subtitle: 'DevOps & Containers Mastery',
    image: '/certificate/Docker, Kubernetes dan DevOps.webp',
    rating: '4.8/5',
    duration: 'DevOps Stack',
  },
  {
    id: 'cert-5',
    title: 'Introduction to Generative AI',
    subtitle: 'Google Cloud Training',
    image: '/certificate/Introduction to Generative AI.webp',
    rating: '5.0/5',
    duration: 'GenAI Series',
  },
  {
    id: 'cert-6',
    title: 'Machine Learning Foundations',
    subtitle: 'AWS & Dicoding Academy',
    image: '/certificate/Machine Learning Foundations.webp',
    rating: '4.9/5',
    duration: 'Cloud Academy',
  },
  {
    id: 'cert-7',
    title: 'Fullstack Programming',
    subtitle: 'Production Web Systems',
    image: '/certificate/Fullstack Programming Untuk Pemula.webp',
    rating: '4.9/5',
    duration: 'Full-Stack',
  },
  {
    id: 'cert-8',
    title: 'Deep Learning Beginner',
    subtitle: 'Neural Networks & Models',
    image: '/certificate/Deep Learning Beginner.webp',
    rating: '4.8/5',
    duration: 'AI Research',
  },
];

// ─── High-Performance Left Side Tech Bubbles (Pure GPU Animation) ─────────────

const leftBubbles = [
  { name: 'Python', iconUrl: 'https://cdn.simpleicons.org/python/3776AB', top: '14%', left: '9%', duration: 6.2, delay: 0 },
  { name: 'React', iconUrl: 'https://cdn.simpleicons.org/react/61DAFB', top: '34%', left: '18%', duration: 7.5, delay: 1.2 },
  { name: 'Next.js', iconUrl: 'https://cdn.simpleicons.org/nextdotjs/white', top: '50%', left: '6%', duration: 6.8, delay: 0.5 },
  { name: 'Node.js', iconUrl: 'https://cdn.simpleicons.org/nodedotjs/5FA04E', top: '65%', left: '17%', duration: 8.0, delay: 1.8 },
  { name: 'Flutter', iconUrl: 'https://cdn.simpleicons.org/flutter/02569B', top: '81%', left: '9%', duration: 7.1, delay: 0.9 },
];

const FloatingTechBubblesLeft = memo(function FloatingTechBubblesLeft({
  y,
  opacity,
}: {
  y: any;
  opacity: any;
}) {
  return (
    <motion.div
      style={{ y, opacity }}
      className="absolute inset-0 z-10 pointer-events-none overflow-hidden will-change-transform transform-gpu"
    >
      {leftBubbles.map((b) => (
        <motion.div
          key={b.name}
          animate={{
            y: [0, -18, 0],
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            delay: b.delay,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            top: b.top,
            left: b.left,
          }}
          className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-neutral-900/60 dark:bg-white/5 backdrop-blur-md border border-neutral-700/50 dark:border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.25)] pointer-events-auto cursor-pointer group hover:scale-115 hover:border-emerald-500/50 transition-all duration-300 transform-gpu"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={b.iconUrl}
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain drop-shadow-md group-hover:scale-110 transition-all duration-300"
            alt={b.name}
            loading="lazy"
          />
        </motion.div>
      ))}
    </motion.div>
  );
});

// ─── Right Side Fixed Angle Cards with Auto-Rotating Images ───────────────────

const TiltedCardFrame = memo(function TiltedCardFrame({
  cert,
  rotation,
  topPos,
  rightPos,
}: {
  cert: CertificateItem;
  rotation: number;
  topPos: string;
  rightPos: string;
}) {
  return (
    <div
      style={{
        position: 'absolute',
        top: topPos,
        right: rightPos,
        transform: `rotate(${rotation}deg)`,
      }}
      className="pointer-events-auto cursor-pointer z-20 group transform-gpu transition-transform duration-300 hover:scale-105"
    >
      {/* Outer Card Shell */}
      <div className="relative w-[220px] sm:w-[260px] md:w-[300px] lg:w-[330px] h-[130px] sm:h-[155px] md:h-[175px] rounded-[24px] md:rounded-[30px] p-2 bg-neutral-900/95 dark:bg-[#121212]/95 border-2 border-white/20 dark:border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl overflow-hidden transition-colors duration-300 group-hover:border-white/40 group-hover:shadow-[0_0_35px_rgba(255,255,255,0.15)]">
        
        {/* Animated Rotating Image Inside */}
        <div className="relative w-full h-full rounded-[18px] md:rounded-[24px] overflow-hidden bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={cert.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="absolute inset-0"
            >
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover object-top filter brightness-95 group-hover:brightness-105 transition-all duration-300"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/30 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Right Side Vertical Badge */}
          <div className="absolute right-2.5 inset-y-2.5 flex items-center justify-center pointer-events-none z-10">
            <div className="bg-black/80 backdrop-blur-md px-3 py-2 rounded-xl border border-white/15 flex flex-col justify-center items-end text-right max-w-[150px]">
              <h5 className="text-[11px] sm:text-xs font-bold text-white tracking-tight line-clamp-1">
                {cert.title}
              </h5>
              <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] text-neutral-300 font-mono mt-0.5">
                <span>{cert.duration}</span>
                <span className="flex items-center gap-0.5 text-amber-400 font-semibold">
                  <Star className="w-2.5 h-2.5 fill-amber-400" />
                  {cert.rating}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
});

const FixedCardsAutoImageRotation = memo(function FixedCardsAutoImageRotation({
  y,
  opacity,
  scale,
  x,
}: {
  y: any;
  opacity: any;
  scale: any;
  x: any;
}) {
  const [activeOffset, setActiveOffset] = useState(0);

  // Automatically cycle the certificate images every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveOffset((prev) => (prev + 1) % certificatePool.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const topCard = certificatePool[activeOffset % certificatePool.length];
  const middleCard = certificatePool[(activeOffset + 1) % certificatePool.length];
  const bottomCard = certificatePool[(activeOffset + 2) % certificatePool.length];

  return (
    <motion.div
      style={{ y, opacity, scale, x }}
      className="absolute inset-0 z-10 pointer-events-none overflow-hidden will-change-transform transform-gpu"
    >
      {/* Top Card - Tilted Clockwise (+22deg) facing inward towards robot */}
      <TiltedCardFrame
        cert={topCard}
        rotation={22}
        topPos="13%"
        rightPos="3%"
      />

      {/* Middle Card - Fixed Straight at 0deg */}
      <TiltedCardFrame
        cert={middleCard}
        rotation={0}
        topPos="44%"
        rightPos="1%"
      />

      {/* Bottom Card - Tilted Counter-Clockwise (-22deg) facing inward towards robot */}
      <TiltedCardFrame
        cert={bottomCard}
        rotation={-22}
        topPos="72%"
        rightPos="3%"
      />
    </motion.div>
  );
});

// ─── Main Hero Component ──────────────────────────────────────────────────────

export function SkillCertificateHero() {
  const { isLowPowerMode } = usePerformance();
  // Coordinated Scroll Parallax Animations with minimal overhead
  const { scrollY } = useScroll();
  const yHeroText = useTransform(scrollY, [0, 600], [0, isLowPowerMode ? 0 : 180]);
  const opacityHero = useTransform(scrollY, [0, 450], [1, 0]);
  const yHeroSpline = useTransform(scrollY, [0, 800], [0, isLowPowerMode ? 0 : 140]);
  const scaleSpline = useTransform(scrollY, [0, 800], [1, isLowPowerMode ? 1 : 1.03]);

  // Smooth scroll transforms
  const yHeroCards = useTransform(scrollY, [0, 800], [0, isLowPowerMode ? 0 : 180]);
  const opacityHeroCards = useTransform(scrollY, [0, 500], [1, 0]);
  const scaleHeroCards = useTransform(scrollY, [0, 600], [1, isLowPowerMode ? 1 : 0.95]);
  const xHeroCards = useTransform(scrollY, [0, 600], [0, isLowPowerMode ? 0 : 30]);

  const yHeroBubbles = useTransform(scrollY, [0, 800], [0, isLowPowerMode ? 0 : 150]);
  const opacityHeroBubbles = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section
      className="relative min-h-screen h-screen flex items-end justify-center overflow-hidden pb-14 sm:pb-20 bg-background text-foreground select-none contain-paint"
    >
      {/* 3D Center Robot Scene */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform transform-gpu pointer-events-auto"
        style={{ y: yHeroSpline, scale: scaleSpline }}
      >
        <DeferredMount fallback={<div className="w-full h-full opacity-10 bg-zinc-800 animate-pulse" />}>
          <SplineScene
            scene="https://prod.spline.design/qVnpleqGGhqRlQYK/scene.splinecode"
            className="w-full h-full opacity-70 md:opacity-100"
          />
        </DeferredMount>
        {/* Soft atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />
      </motion.div>

      {/* Left Wing: Floating Tech Skill Icons */}
      <FloatingTechBubblesLeft
        y={yHeroBubbles}
        opacity={opacityHeroBubbles}
      />

      {/* Right Wing: 3 Tilted Cards */}
      <FixedCardsAutoImageRotation
        y={yHeroCards}
        opacity={opacityHeroCards}
        scale={scaleHeroCards}
        x={xHeroCards}
      />

      {/* Center Bottom Headline */}
      <div className="relative z-20 text-center px-6 w-full pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ willChange: 'transform, opacity', y: yHeroText, opacity: opacityHero }}
          className="flex flex-col items-center transform-gpu"
        >
          <div className="relative group px-6 cursor-default pointer-events-auto">
            <h1 className="relative z-10 text-[8vw] md:text-[6.4vw] font-bold uppercase leading-[0.9] tracking-tight select-none">
              <span className="text-neutral-900 dark:text-white transition-colors duration-500">
                SKILL &{' '}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 drop-shadow-[0_0_35px_rgba(16,185,129,0.35)]">
                CERTIFICATE
              </span>
            </h1>
          </div>

          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-400 mt-4 max-w-2xl text-center">
            TECH STACK, TOOLS & VERIFIED CREDENTIALS
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default SkillCertificateHero;
