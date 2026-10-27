import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Twitter, Youtube, Linkedin, Instagram, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProfileCardProps {
  name?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  githubUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
  className?: string;
  onClose?: () => void;
}

export function ProfileCard(props: ProfileCardProps) {
  const {
    name = "Kartik Sharma",
    title = "Full Stack Developer & AI Systems Builder",
    description = "Full Stack and MERN Stack Developer with hands-on experience building scalable web applications, cross-platform mobile apps with Flutter, and production-ready AI systems.",
    imageUrl = "/profile.png",
    githubUrl = "https://github.com/KartikSharma4448",
    twitterUrl = "https://x.com/KartikS34404452",
    youtubeUrl = "#",
    linkedinUrl = "https://linkedin.com/in/kartik-sharma06",
    instagramUrl = "https://www.instagram.com/itszeromind",
    className,
    onClose
  } = props;

  const socialIcons = [
    { icon: Github, url: githubUrl, label: "GitHub" },
    { icon: Instagram, url: instagramUrl, label: "Instagram" },
    { icon: Linkedin, url: linkedinUrl, label: "LinkedIn" },
  ].filter(social => social.url !== "#");

  return (
    <div className={cn("w-full max-w-7xl mx-auto px-4 relative", className)}>
      {/* Close Button */}
      {onClose && (
        <button
          type="button"
          aria-label="Close profile"
          onClick={onClose}
          className="absolute -top-12 right-4 md:-top-4 md:-right-4 z-50 p-2 bg-white dark:bg-zinc-900 rounded-full shadow-xl border border-border hover:scale-110 transition-transform"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Desktop */}
      <div className='hidden md:flex relative items-center'>
        {/* Square Image */}
        <div className='w-[480px] h-[480px] rounded-[2.5rem] overflow-hidden bg-gray-200 dark:bg-gray-800 flex-shrink-0 shadow-2xl relative z-0'>
          <Image
            src={imageUrl}
            alt={name}
            width={480}
            height={480}
            className='w-full h-full object-cover'
            draggable={false}
            priority
          />
        </div>
        {/* Overlapping Card - Rectangular & Centered */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className='bg-white dark:bg-[#161616] rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-10 ml-[-100px] z-10 w-[600px] border border-black/5 dark:border-white/5 flex flex-col justify-center'
        >
          <div className='mb-6'>
            <h2 className='text-3xl font-bold text-black dark:text-white mb-1 tracking-tight'>
              {name}
            </h2>

            <p className='text-sm font-medium text-zinc-500 tracking-wide'>
              {title}
            </p>
          </div>

          <p className='text-zinc-600 dark:text-zinc-400 text-base leading-relaxed mb-10'>
            {description}
          </p>

          <div className='flex space-x-4'>
            {socialIcons.map(({ icon: Icon, url, label }) => (
              <Link
                key={label}
                href={url}
                target='_blank'
                rel='noopener noreferrer'
                className='w-11 h-11 bg-zinc-900 dark:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg group'
                aria-label={label}
              >
                <Icon className='w-5 h-5 text-white dark:text-black group-hover:scale-110 transition-transform' />
              </Link>
            ))}
          </div>
          <Link
            href="/about"
            onClick={onClose}
            className="button-fill mt-6 inline-flex min-h-12 items-center justify-center rounded-full border border-zinc-300 dark:border-white/20 px-6 py-3 text-sm font-semibold text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            About Me →
          </Link>
        </motion.div>
      </div>

      {/* Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className='md:hidden max-w-sm mx-auto text-center bg-white dark:bg-zinc-900 p-4 sm:p-6 rounded-[2.5rem] shadow-2xl border border-white/5'
      >
        {/* Square Mobile Image */}
        <div className='w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded-3xl overflow-hidden mb-6 flex items-center justify-center'>
          <Image
            src={imageUrl}
            alt={name}
            width={400}
            height={400}
            className='w-full h-full object-cover'
            draggable={false}
            priority
          />
        </div>

        <div className='px-0 sm:px-4'>
          <h2 className='text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tighter'>
            {name}
          </h2>

          <p className='text-[10px] font-bold text-primary mb-4 uppercase tracking-widest'>
            {title}
          </p>

          <div className="mb-5 grid grid-cols-[minmax(0,1fr)_repeat(3,2.75rem)] items-center gap-1.5">
            <Link
              href="/about"
              onClick={onClose}
              className="button-fill group flex h-11 min-w-0 items-center justify-center gap-1 overflow-hidden rounded-full bg-zinc-900 px-1 text-[11px] font-semibold tracking-tight text-white shadow-sm transition-colors hover:bg-zinc-700 active:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="whitespace-nowrap">About me</span>
              <ArrowUpRight aria-hidden="true" className="size-3.5 shrink-0" />
            </Link>
            {socialIcons.map(({ icon: Icon, url, label }) => (
              <Link
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="flex size-11 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 text-zinc-800 transition-colors hover:bg-zinc-200 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Icon aria-hidden="true" className="size-5" />
              </Link>
            ))}
          </div>

          <p className='text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6'>
            {description}
          </p>


        </div>
      </motion.div>
    </div>
  );
}
