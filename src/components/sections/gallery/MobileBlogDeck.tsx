'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface DeckCard {
  id: string;
  metric: string;
  title: string;
  description: string;
  image: string;
  bg: string;
  text: string;
  slug: string;
  category: string;
}

function Card({ card, index, count, progress, active }: { card: DeckCard; index: number; count: number; progress: MotionValue<number>; active: boolean }) {
  const x = useTransform(progress, [index / count, (index + 0.8) / count], ['0%', '-115%']);
  const rotate = useTransform(progress, [index / count, (index + 0.8) / count], [0, -6]);
  return (
    <motion.article
      aria-hidden={!active}
      inert={!active}
      style={{ x: index === count - 1 ? 0 : x, rotate: index === count - 1 ? 0 : rotate, zIndex: count - index }}
      className={`absolute inset-0 flex flex-col overflow-hidden rounded-3xl border border-black/10 p-5 shadow-xl ${card.bg} ${card.text}`}
    >
      <div className="flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-wider">
        <span className="truncate">{card.category.replaceAll('-', ' ')}</span>
        <span>{card.metric}</span>
      </div>
      <h3 className="mt-4 text-xl font-bold leading-tight line-clamp-3">{card.title}</h3>
      <p className="mt-3 text-sm leading-relaxed opacity-80 line-clamp-3">{card.description}</p>
      <div className="relative mt-4 min-h-16 flex-1 overflow-hidden rounded-xl">
        <Image src={card.image} alt="" fill sizes="(max-width: 767px) 90vw, 400px" className="object-cover" />
      </div>
      <Link href={`/blog/${card.slug}`} tabIndex={active ? 0 : -1} className="mt-3 flex min-h-11 items-center justify-between text-sm font-bold focus-visible:outline focus-visible:outline-2">
        Read article <ArrowRight aria-hidden="true" className="size-4" />
      </Link>
    </motion.article>
  );
}

export function MobileBlogDeck({ cards }: { cards: DeckCard[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  useMotionValueEvent(scrollYProgress, 'change', value => setActive(Math.min(cards.length - 1, Math.floor(value * cards.length))));

  if (reducedMotion) return (
    <div className="space-y-4 md:hidden">
      {cards.map(card => <Link key={card.id} href={`/blog/${card.slug}`} className={`block rounded-2xl p-5 ${card.bg} ${card.text}`}><span className="text-sm">{card.metric}</span><h3 className="mt-2 font-bold">{card.title}</h3><p className="mt-3 text-sm">Read article →</p></Link>)}
    </div>
  );

  return (
    <div ref={ref} className="relative md:hidden" style={{ height: `${(cards.length + 1) * 70}svh` }}>
      <div className="sticky top-20 pt-3">
        <div className="mb-3 flex items-center justify-between gap-2" aria-label={`Article ${active + 1} of ${cards.length}`}>
          {cards.map((card, index) => <span key={card.id} aria-current={index === active ? 'step' : undefined} className={`flex size-9 items-center justify-center rounded-full border text-xs font-bold transition-colors ${index === active ? 'bg-foreground text-background border-foreground' : 'text-muted-foreground border-foreground/15'}`}>{card.metric}</span>)}
        </div>
        <div className="relative h-[min(500px,calc(100svh-11rem))] min-h-80">
          {cards.map((card, index) => <Card key={card.id} card={card} index={index} count={cards.length} progress={scrollYProgress} active={index === active} />)}
        </div>
        <p className="mt-3 text-center text-[10px] uppercase tracking-widest text-muted-foreground">Scroll to explore · {active + 1} / {cards.length}</p>
      </div>
    </div>
  );
}
