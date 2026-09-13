'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PixelPetProps {
  isInline?: boolean;
  className?: string;
}

export function PixelPet({ isInline = true, className }: PixelPetProps) {
  const [posX, setPosX] = useState(150);
  const [posY, setPosY] = useState(0); // Offset from ground
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [state, setState] = useState<'idle' | 'walking' | 'jumping' | 'noticing' | 'barking' | 'sleeping'>('idle');
  const [isMuted, setIsMuted] = useState(false);
  const [speechText, setSpeechText] = useState<string | null>(null);
  const [speechType, setSpeechType] = useState<'bark' | 'notice' | 'tip' | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const lastInteractionRef = useRef<number>(Date.now());
  const dragStartRef = useRef<{ x: number; y: number; petX: number; petY: number }>({ x: 0, y: 0, petX: 0, petY: 0 });

  // Sound Engine
  const playSynthBark = useCallback(() => {
    if (isMuted) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const t = ctx.currentTime;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.3, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
      gain.connect(ctx.destination);

      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, t);
      osc.frequency.exponentialRampToValueAtTime(140, t + 0.18);
      osc.connect(gain);
      osc.start(t);
      osc.stop(t + 0.18);
    } catch {
      // AudioContext unavailable
    }
  }, [isMuted]);

  const playBark = useCallback(() => {
    if (isMuted) return;
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio('/audio/Barking-Sound.mp3');
      }
      const sound = audioRef.current.cloneNode() as HTMLAudioElement;
      sound.volume = 0.5;
      sound.play().catch(() => {
        playSynthBark();
      });
    } catch {
      playSynthBark();
    }
  }, [isMuted, playSynthBark]);

  const triggerBark = useCallback((customText = 'WOOF!') => {
    lastInteractionRef.current = Date.now();
    setState('barking');
    setSpeechText(customText);
    setSpeechType('bark');
    playBark();

    setTimeout(() => {
      setSpeechText(null);
      setSpeechType(null);
      setState('idle');
    }, 1200);
  }, [playBark]);

  // Jump animation with parabola physics
  const jumpTo = useCallback((targetX: number, targetY = 0) => {
    lastInteractionRef.current = Date.now();
    setState('jumping');

    const dist = targetX - posX;
    setDirection(dist >= 0 ? 'right' : 'left');
    setPosX(targetX);
    setPosY(targetY);

    setTimeout(() => {
      setState('idle');
    }, 650);
  }, [posX]);

  // Handle track click to summon pet
  const handleTrackClick = (e: React.MouseEvent) => {
    if (isDragging) return;
    const petEl = containerRef.current;
    if (petEl && petEl.contains(e.target as Node)) return;

    if (trackRef.current) {
      const rect = trackRef.current.getBoundingClientRect();
      const clickX = Math.max(30, Math.min(rect.width - 70, e.clientX - rect.left));
      jumpTo(clickX, 0);
    }
  };

  // Autonomous wandering logic along the track (using CSS transitions instead of 60fps React state updates)
  useEffect(() => {
    const interval = setInterval(() => {
      if (isDragging || state === 'jumping' || state === 'barking' || isHovered) return;

      const timeSinceInteraction = Date.now() - lastInteractionRef.current;

      // Fall asleep if idle for 20 seconds
      if (timeSinceInteraction > 20000 && state !== 'sleeping') {
        setState('sleeping');
        return;
      }

      if (state === 'sleeping') return;

      // Random wander
      if (Math.random() < 0.4 && (state === 'idle' || state === 'noticing')) {
        const trackWidth = trackRef.current ? trackRef.current.clientWidth : 1000;
        const step = (Math.random() * 120 + 40) * (Math.random() < 0.5 ? 1 : -1);
        const nextX = Math.max(40, Math.min(trackWidth - 90, posX + step));

        setDirection(nextX > posX ? 'right' : 'left');
        setState('walking');
        setPosX(nextX);

        setTimeout(() => {
          setState((prev) => (prev === 'walking' ? 'idle' : prev));
        }, 1200);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isDragging, isHovered, posX, state]);

  // Dragging handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    e.stopPropagation();
    setIsDragging(true);
    lastInteractionRef.current = Date.now();
    setState('idle');
    setSpeechText(null);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      petX: posX,
      petY: posY
    };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartRef.current.x;
    const deltaY = dragStartRef.current.y - e.clientY; // Invert for bottom offset

    const maxWidth = trackRef.current ? trackRef.current.clientWidth - 70 : window.innerWidth - 70;
    const newX = Math.max(10, Math.min(maxWidth, dragStartRef.current.petX + deltaX));
    const newY = Math.max(0, Math.min(150, dragStartRef.current.petY + deltaY));

    if (deltaX !== 0) {
      setDirection(deltaX > 0 ? 'right' : 'left');
    }

    setPosX(newX);
    setPosY(newY);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignored
    }

    if (posY > 5) {
      const startY = posY;
      const startTime = performance.now();
      const dropDuration = 300;

      const dropAnim = (now: number) => {
        const progress = Math.min(1, (now - startTime) / dropDuration);
        const easeBounce = Math.sin((progress * Math.PI) / 2);
        setPosY(startY * (1 - easeBounce));

        if (progress < 1) {
          requestAnimationFrame(dropAnim);
        } else {
          setPosY(0);
          triggerBark('WOOF!');
        }
      };
      requestAnimationFrame(dropAnim);
    } else {
      triggerBark();
    }
  };

  const petContent = (
    <div
      ref={containerRef}
      style={{
        position: isInline ? 'absolute' : 'fixed',
        left: `${posX}px`,
        bottom: isInline ? `${8 + posY}px` : `${16 + posY}px`,
        zIndex: 50,
        transform: `scaleX(${direction === 'left' ? -1 : 1})`,
        transformOrigin: 'bottom center',
        transition: isDragging ? 'none' : 'left 0.8s cubic-bezier(0.25, 1, 0.5, 1), bottom 0.3s cubic-bezier(0.25, 1, 0.5, 1), transform 0.2s ease',
        cursor: isDragging ? 'grabbing' : 'grab',
        touchAction: 'none'
      }}
      className="select-none pointer-events-auto"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title="🐾 Living Pixel Pet! Click or drag me!"
    >
      {/* Sound Mute/Unmute Mini Bubble Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsMuted(!isMuted);
        }}
        style={{ transform: `scaleX(${direction === 'left' ? -1 : 1})` }}
        className="absolute -top-7 -right-4 p-1 rounded-full bg-black/60 dark:bg-white/10 hover:bg-black dark:hover:bg-white/20 text-white/80 hover:text-white backdrop-blur-md transition-all shadow-md z-50"
        title={isMuted ? 'Unmute Pet Audio' : 'Mute Pet Audio'}
      >
        {isMuted ? <VolumeX className="w-3 h-3 text-red-400" /> : <Volume2 className="w-3 h-3 text-emerald-400" />}
      </button>

      {/* Speech Bubbles */}
      <AnimatePresence mode="wait">
        {speechText && (
          <motion.div
            key={`speech-${speechType}-${speechText}`}
            initial={{ opacity: 0, y: 5, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.8 }}
            style={{ transform: `scaleX(${direction === 'left' ? -1 : 1})` }}
            className={cn(
              "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-md text-[11px] font-mono font-black shadow-lg pointer-events-none whitespace-nowrap border z-50",
              speechType === 'bark' && "bg-amber-400 text-black border-black/80 animate-bounce",
              speechType === 'notice' && "bg-rose-500 text-white border-black/80",
              speechType === 'tip' && "bg-zinc-900 text-white border-white/20"
            )}
          >
            {speechText}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-current" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {state === 'sleeping' && (
          <motion.div
            key="sleeping-zzz"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [-2, -18],
              scale: [0.8, 1.2]
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
            style={{ transform: `scaleX(${direction === 'left' ? -1 : 1})` }}
            className="absolute -top-5 right-0 text-xs font-mono font-bold text-blue-400 dark:text-cyan-300 pointer-events-none"
          >
            Zzz...
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dog Mascot Pixel Graphic (SVG) */}
      <div className={cn(
        "relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-150 filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]",
        state === 'idle' && "animate-pulse",
        state === 'barking' && "scale-110",
        state === 'jumping' && "scale-y-90 scale-x-105",
        state === 'sleeping' && "opacity-80 translate-y-1"
      )}>
        <svg
          viewBox="0 0 16 16"
          className="w-full h-full text-amber-500 dark:text-amber-400 transition-colors"
          style={{ shapeRendering: 'crispEdges' }}
        >
          {/* Tail */}
          <g className={cn("transition-transform origin-[1px_9px]", (state === 'barking' || state === 'noticing') ? "animate-spin" : "")}>
            <rect x="1" y="5" width="1" height="4" fill="currentColor" />
            <rect x="0" y="4" width="1" height="1" fill="currentColor" />
          </g>

          {/* Body */}
          <rect x="2" y="7" width="7" height="5" fill="currentColor" />
          <rect x="2" y="10" width="7" height="2" fill="black" opacity="0.2" />

          {/* Head */}
          <rect x="9" y="5" width="6" height="5" fill="currentColor" />

          {/* Snout & Nose */}
          <rect x="13" y="8" width="2" height="2" fill="black" opacity="0.15" />
          <rect x="14" y="8" width="1" height="1" fill="#111827" />

          {/* Ears */}
          <g>
            <rect x="10" y="3" width="2" height="2" fill="currentColor" />
            <rect x="13" y="3" width="2" height="2" fill="currentColor" />
            <rect x="10" y="3" width="1" height="2" fill="black" opacity="0.25" />
            <rect x="13" y="3" width="1" height="2" fill="black" opacity="0.25" />
          </g>

          {/* Red Collar & Gold Tag */}
          <rect x="7" y="7" width="2" height="5" fill="#ef4444" />
          <rect x="8" y="9" width="1" height="1" fill="#fbbf24" />

          {/* Eyes */}
          {state === 'sleeping' ? (
            <g>
              <rect x="10" y="7" width="2" height="1" fill="#1e293b" />
              <rect x="13" y="7" width="2" height="1" fill="#1e293b" />
            </g>
          ) : (
            <g>
              <rect x="10" y="6" width="1.5" height="1.5" fill="#ffffff" />
              <rect x="13" y="6" width="1.5" height="1.5" fill="#ffffff" />
              <rect x="11" y="6" width="0.7" height="1.5" fill="#0f172a" />
              <rect x="14" y="6" width="0.7" height="1.5" fill="#0f172a" />
            </g>
          )}

          {/* Nose Highlight */}
          <rect x="14" y="9" width="1" height="1" fill="white" opacity="0.6" />

          {/* Standing / Walking Legs */}
          {state === 'walking' ? (
            <g>
              <rect x="2" y="12" width="2" height="2" fill="currentColor" />
              <rect x="7" y="12" width="2" height="2" fill="currentColor" />
              <rect x="1" y="11" width="2" height="2" fill="black" opacity="0.25" />
            </g>
          ) : (
            <g>
              <rect x="3" y="12" width="2" height="2" fill="currentColor" />
              <rect x="6" y="12" width="2" height="2" fill="currentColor" />
              <rect x="2" y="11" width="2" height="2" fill="black" opacity="0.25" />
            </g>
          )}
        </svg>
      </div>
    </div>
  );

  if (!isInline) {
    return petContent;
  }

  return (
    <div
      ref={trackRef}
      onClick={handleTrackClick}
      className={cn(
        "relative w-full max-w-[1600px] mx-auto h-20 md:h-24 my-2 sm:my-4 px-6 md:px-12 lg:px-24 overflow-visible cursor-pointer group flex items-end",
        className
      )}
    >
      {/* Interactive floor track line */}
      <div className="absolute bottom-0 left-6 right-6 md:left-12 md:right-12 lg:left-24 lg:right-24 h-[1px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent pointer-events-none group-hover:via-amber-500/40 transition-colors" />

      {/* Floating Walkway hint text */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground/40 pointer-events-none select-none">
        🐾 Click anywhere along the track to guide the pet
      </div>

      {petContent}
    </div>
  );
}
