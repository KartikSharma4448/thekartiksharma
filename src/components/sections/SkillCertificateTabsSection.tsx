'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { 
  Award, 
  Code2, 
  Search, 
  CheckCircle2, 
  X, 
  Calendar, 
  FileText,
  BookOpen,
  Sparkles,
  Trophy,
  Briefcase,
  Layers
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { DocumentPreviewModal } from '@/components/ui/DocumentPreviewModal';

const techLogos: Record<string, string> = {
  // Frontend
  'React': 'https://cdn.simpleicons.org/react/61DAFB',
  'React.js': 'https://cdn.simpleicons.org/react/61DAFB',
  'Next.js': 'https://cdn.simpleicons.org/nextdotjs/white',
  'TypeScript': 'https://cdn.simpleicons.org/typescript/3178C6',
  'JavaScript': 'https://cdn.simpleicons.org/javascript/F7DF1E',
  'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  'Three.js & 3D': 'https://cdn.simpleicons.org/threedotjs/white',
  'Three.js': 'https://cdn.simpleicons.org/threedotjs/white',

  // Backend & APIs
  'FastAPI': 'https://cdn.simpleicons.org/fastapi/009688',
  'Node.js': 'https://cdn.simpleicons.org/nodedotjs/5FA04E',
  'Node.js & Express': 'https://cdn.simpleicons.org/nodedotjs/5FA04E',
  'Express.js': 'https://cdn.simpleicons.org/express/white',
  'Python': 'https://cdn.simpleicons.org/python/3776AB',
  'REST API': 'https://cdn.simpleicons.org/postman/FF6C37',

  // Mobile
  'Flutter': 'https://cdn.simpleicons.org/flutter/02569B',
  'Dart': 'https://cdn.simpleicons.org/dart/0175C2',
  'Dart / Flutter': 'https://cdn.simpleicons.org/flutter/02569B',
  'Kotlin (Android)': 'https://cdn.simpleicons.org/kotlin/7F52FF',
  'Kotlin': 'https://cdn.simpleicons.org/kotlin/7F52FF',

  // Database & Cloud
  'PostgreSQL': 'https://cdn.simpleicons.org/postgresql/4169E1',
  'MongoDB': 'https://cdn.simpleicons.org/mongodb/47A248',
  'Supabase': 'https://cdn.simpleicons.org/supabase/3ECF8E',

  // AI & Data Tools
  'PyTorch': 'https://cdn.simpleicons.org/pytorch/EE4C2C',
  'Scikit-learn': 'https://cdn.simpleicons.org/scikitlearn/F7931E',
  'Pandas': 'https://cdn.simpleicons.org/pandas/150458',
  'NumPy': 'https://cdn.simpleicons.org/numpy/013243',

  // DevOps & Tools
  'Docker': 'https://cdn.simpleicons.org/docker/2496ED',
  'Git': 'https://cdn.simpleicons.org/git/F05032',
  'Git & GitHub': 'https://cdn.simpleicons.org/git/F05032',
  'GitHub': 'https://cdn.simpleicons.org/github/white',
  'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  'Visual Studio Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  'Android Studio': 'https://cdn.simpleicons.org/androidstudio/3DDC84',
  'Postman': 'https://cdn.simpleicons.org/postman/FF6C37',
  'Figma': 'https://cdn.simpleicons.org/figma/F24E1E',
  'Vercel': 'https://cdn.simpleicons.org/vercel/white',
  'Linux': 'https://cdn.simpleicons.org/linux/FCC624',
  'Terminal / CLI': 'https://cdn.simpleicons.org/gnubash/4EAA25',
  'Jupyter': 'https://cdn.simpleicons.org/jupyter/F37626',
  'Conda': 'https://cdn.simpleicons.org/anaconda/44A833',
  'Google Colab': 'https://cdn.simpleicons.org/googlecolab/F9AB00',
  'Solidity': 'https://cdn.simpleicons.org/solidity/white',
};

function getSkillIcon(name: string): string {
  if (techLogos[name]) return techLogos[name];
  const cleaned = name.replace(/\.js/i, '').trim();
  if (techLogos[cleaned]) return techLogos[cleaned];
  return `https://cdn.simpleicons.org/${name.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
}

const certFilterTabs = [
  { id: 'all', label: 'All Credentials', icon: Layers },
  { id: 'learning', label: 'Learning & Certifications', icon: BookOpen },
  { id: 'event', label: 'Events & Workshops', icon: Sparkles },
  { id: 'hackathon', label: 'Hackathons', icon: Trophy },
];

function getCategoryBadge(type?: string, category?: string) {
  const t = (type || category || '').toLowerCase();
  if (t.includes('event') || t.includes('workshop')) {
    return { label: 'Event / Workshop', color: 'bg-amber-500/10 text-amber-400 border-amber-500/20' };
  }
  if (t.includes('hackathon') || t.includes('competition')) {
    return { label: 'Hackathon', color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' };
  }
  return { label: 'Learning / Verified', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' };
}

export function SkillCertificateTabsSection() {
  const [activeTab, setActiveTab] = useState<'skills' | 'certificates'>('skills');

  // Skills filter state
  const [skillCategory, setSkillCategory] = useState<string>('all');

  // Certificate search & filter state
  const [certFilter, setCertFilter] = useState<string>('all');
  const [certSearch, setCertSearch] = useState<string>('');
  const [previewDoc, setPreviewDoc] = useState<{ url: string; title: string; subtitle?: string; verifyUrl?: string } | null>(null);

  // Skill items list (merging hardSkills, techStack, and tools for a complete display)
  const allSkills = useMemo(() => {
    const hard = (portfolioData.hardSkills || []).map(item => ({
      name: item.name,
      category: item.category || 'Core',
      icon: getSkillIcon(item.name),
      level: item.level || 'Advanced',
      description: item.description,
    }));

    const tech = (portfolioData.techStack || []).map(item => ({
      name: item.name,
      category: item.category || 'Framework',
      icon: getSkillIcon(item.name),
      level: 'Advanced',
      description: undefined,
    }));

    const tools = (portfolioData.tools || []).map(tool => ({
      name: tool.name,
      category: 'Tools & Workflow',
      icon: getSkillIcon(tool.name),
      level: 'Proficient',
      description: undefined,
    }));

    // Deduplicate by normalized name
    const map = new Map();
    [...hard, ...tech, ...tools].forEach(item => {
      const key = item.name.toLowerCase().replace(/\.js/g, '').trim();
      if (!map.has(key)) {
        map.set(key, item);
      }
    });

    return Array.from(map.values());
  }, []);

  const skillCategories = useMemo(() => {
    const cats = new Set<string>();
    allSkills.forEach(s => {
      if (s.category) cats.add(s.category);
    });
    return ['all', ...Array.from(cats)];
  }, [allSkills]);

  const filteredSkills = useMemo(() => {
    if (skillCategory === 'all') return allSkills;
    return allSkills.filter(s => s.category.toLowerCase() === skillCategory.toLowerCase());
  }, [allSkills, skillCategory]);

  // Certificates list from portfolio achievements
  const allCertificates = useMemo(() => {
    return (portfolioData.achievements || []).filter(
      item => item.category === 'certification' || item.type === 'Course' || item.credentialUrl || item.image || item.type || item.category === 'learning' || item.category === 'event' || item.category === 'internship' || item.category === 'hackathon'
    );
  }, []);

  // Compute category count dynamically
  const getCategoryCount = (catId: string) => {
    if (catId === 'all') return allCertificates.length;
    return allCertificates.filter(cert => {
      const certType = (cert.type || cert.category || '').toLowerCase();
      if (catId === 'learning') return certType.includes('learning') || certType.includes('course') || certType.includes('certif');
      if (catId === 'event') return certType.includes('event') || certType.includes('workshop') || certType.includes('program');
      if (catId === 'internship') return certType.includes('internship') || certType.includes('recognition') || certType.includes('offer');
      if (catId === 'hackathon') return certType.includes('hackathon') || certType.includes('competition') || certType.includes('challenge');
      return false;
    }).length;
  };

  const filteredCertificates = useMemo(() => {
    return allCertificates.filter(cert => {
      const certType = (cert.type || cert.category || '').toLowerCase();
      const matchesCategory =
        certFilter === 'all' ||
        certType === certFilter ||
        (certFilter === 'learning' && (certType.includes('learning') || certType.includes('course') || certType.includes('certif'))) ||
        (certFilter === 'event' && (certType.includes('event') || certType.includes('workshop') || certType.includes('program'))) ||
        (certFilter === 'internship' && (certType.includes('internship') || certType.includes('recognition') || certType.includes('offer'))) ||
        (certFilter === 'hackathon' && (certType.includes('hackathon') || certType.includes('competition') || certType.includes('challenge')));

      const matchSearch =
        cert.title.toLowerCase().includes(certSearch.toLowerCase()) ||
        (cert.issuer && cert.issuer.toLowerCase().includes(certSearch.toLowerCase())) ||
        (cert.tags && cert.tags.some((t: string) => t.toLowerCase().includes(certSearch.toLowerCase())));

      return matchesCategory && matchSearch;
    });
  }, [allCertificates, certFilter, certSearch]);

  return (
    <section className="relative w-full py-16 md:py-24 px-6 sm:px-10 md:px-16 lg:px-24 bg-background text-foreground">
      
      {/* Centered Segmented Tabs Switcher */}
      <div className="max-w-7xl mx-auto flex flex-col items-center mb-14 md:mb-20">
        <div className="inline-flex p-1.5 bg-neutral-200/70 dark:bg-white/5 rounded-full border border-neutral-300 dark:border-white/10 backdrop-blur-xl shadow-lg relative">
          
          {/* Tab 1: Skills */}
          <button
            type="button"
            onClick={() => setActiveTab('skills')}
            className={cn(
              "relative z-10 px-8 sm:px-10 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 flex items-center gap-2.5 select-none cursor-pointer",
              activeTab === 'skills'
                ? "text-white dark:text-neutral-950"
                : "text-neutral-700 dark:text-neutral-400 hover:text-black dark:hover:text-white"
            )}
          >
            <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Skills & Tech Stack</span>
            {activeTab === 'skills' && (
              <motion.div
                layoutId="activeSkillCertTab"
                className="absolute inset-0 bg-neutral-950 dark:bg-white rounded-full -z-10 shadow-md"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>

          {/* Tab 2: Certifications */}
          <button
            type="button"
            onClick={() => setActiveTab('certificates')}
            className={cn(
              "relative z-10 px-8 sm:px-10 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 flex items-center gap-2.5 select-none cursor-pointer",
              activeTab === 'certificates'
                ? "text-white dark:text-neutral-950"
                : "text-neutral-700 dark:text-neutral-400 hover:text-black dark:hover:text-white"
            )}
          >
            <Award className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Certifications ({allCertificates.length})</span>
            {activeTab === 'certificates' && (
              <motion.div
                layoutId="activeSkillCertTab"
                className="absolute inset-0 bg-neutral-950 dark:bg-white rounded-full -z-10 shadow-md"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>

        </div>
      </div>

      {/* Main Tab View Contents */}
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          
          {/* ══════════════ TAB 1: SKILLS & TECH STACK ══════════════ */}
          {activeTab === 'skills' && (
            <motion.div
              key="tab-skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-12"
            >
              {/* Category Filter Chips */}
              <div className="flex items-center justify-center flex-wrap gap-2.5">
                {skillCategories.map(cat => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSkillCategory(cat)}
                    className={cn(
                      "px-5 py-2 rounded-full text-xs sm:text-sm font-semibold capitalize transition-all duration-200 border cursor-pointer",
                      skillCategory === cat
                        ? "bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 border-transparent shadow-sm scale-105"
                        : "bg-card hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-600 dark:text-neutral-300 border-neutral-200 dark:border-white/10"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                {filteredSkills.map((skill, idx) => (
                  <motion.div
                    key={`${skill.name}-${idx}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25, delay: idx * 0.02 }}
                    className="group relative rounded-2xl bg-card border border-neutral-200 dark:border-white/10 p-5 flex flex-col items-center justify-center text-center gap-3 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 select-none"
                  >
                    <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-neutral-100 dark:bg-white/5 group-hover:scale-110 transition-transform duration-300 p-2.5">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={32}
                        height={32}
                        className="object-contain"
                        unoptimized
                      />
                    </div>

                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block mt-0.5">
                        {skill.category}
                      </span>
                    </div>

                    {skill.description && (
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-2 mt-1 border-t border-neutral-200/60 dark:border-white/5 pt-2 w-full">
                        {skill.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>

              {filteredSkills.length === 0 && (
                <div className="text-center py-16 text-neutral-500 dark:text-neutral-400">
                  <p>No skills found in this category.</p>
                </div>
              )}
            </motion.div>
          )}

          {/* ══════════════ TAB 2: CERTIFICATIONS ══════════════ */}
          {activeTab === 'certificates' && (
            <motion.div
              key="tab-certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-10"
            >
              {/* Category Filter Chips (Learning, Event/Workshop, Hackathon, Internship) */}
              <div className="flex items-center justify-center flex-wrap gap-2.5">
                {certFilterTabs.map(tab => {
                  const Icon = tab.icon;
                  const count = getCategoryCount(tab.id);
                  const isSelected = certFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setCertFilter(tab.id)}
                      className={cn(
                        "px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border cursor-pointer flex items-center gap-2",
                        isSelected
                          ? "bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 border-transparent shadow-md scale-105"
                          : "bg-card hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-600 dark:text-neutral-300 border-neutral-200 dark:border-white/10"
                      )}
                    >
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      <span>{tab.label}</span>
                      <span className={cn(
                        "px-1.5 py-0.2 text-[10px] sm:text-xs rounded-full font-mono",
                        isSelected
                          ? "bg-white/20 dark:bg-black/20 text-white dark:text-neutral-950 font-bold"
                          : "bg-neutral-200 dark:bg-white/10 text-neutral-600 dark:text-neutral-400"
                      )}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search certificates, skills, issuers..."
                  value={certSearch}
                  onChange={(e) => setCertSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full bg-card border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white placeholder:text-neutral-400 outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition-all shadow-sm text-sm sm:text-base"
                />
                {certSearch && (
                  <button
                    type="button"
                    onClick={() => setCertSearch('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black dark:hover:text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Certificates Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredCertificates.map((cert, idx) => {
                  const previewUrl = cert.image || cert.credentialUrl;
                  const liveVerifyUrl = (cert.credentialUrl && cert.credentialUrl.startsWith('http')) ? cert.credentialUrl : undefined;
                  const badge = getCategoryBadge(cert.type, cert.category);

                  return (
                    <motion.div
                      key={cert.id || idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.03 }}
                      onClick={() => {
                        if (previewUrl) {
                          setPreviewDoc({
                            url: previewUrl,
                            title: cert.title,
                            subtitle: `Issued by ${cert.issuer || 'Official Credential'} • ${cert.date || 'Verified'}${cert.credentialId ? ` • ID: ${cert.credentialId}` : ''}`,
                            verifyUrl: liveVerifyUrl
                          });
                        }
                      }}
                      className="group relative rounded-3xl bg-card border border-neutral-200 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-emerald-400/50 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col"
                    >
                      {/* Thumbnail Image */}
                      <div className="relative w-full h-48 sm:h-52 bg-neutral-900 overflow-hidden">
                        {cert.image && (
                          <Image
                            src={cert.image}
                            alt={cert.title}
                            fill
                            className="object-cover object-top filter brightness-95 group-hover:brightness-105 group-hover:scale-105 transition-all duration-500"
                            unoptimized
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Top Category Badge */}
                        <div className="absolute top-3 left-3">
                          <span className={cn(
                            "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold border backdrop-blur-md",
                            badge.color
                          )}>
                            {badge.label}
                          </span>
                        </div>

                        {/* Verified Pill */}
                        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[10px] font-mono text-emerald-400">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>Verified</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div>
                          <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold block mb-1">
                            {cert.issuer || 'Official Credential'}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-neutral-950 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                            {cert.title}
                          </h3>
                        </div>

                        <div className="pt-3 border-t border-neutral-200 dark:border-white/10 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {cert.date || 'Certified'}
                          </span>

                          <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold group-hover:underline">
                            <FileText className="w-3.5 h-3.5" />
                            <span>Preview</span>
                          </span>
                        </div>
                      </div>

                    </motion.div>
                  );
                })}
              </div>

              {filteredCertificates.length === 0 && (
                <div className="text-center py-16 text-neutral-500 dark:text-neutral-400 bg-card rounded-3xl border border-neutral-200 dark:border-white/10 p-8">
                  <Award className="w-12 h-12 mx-auto mb-3 opacity-30 text-emerald-400" />
                  <p className="text-base font-medium">No certificates found in this category or search.</p>
                  <button
                    type="button"
                    onClick={() => { setCertFilter('all'); setCertSearch(''); }}
                    className="mt-3 text-xs font-mono font-bold text-emerald-500 hover:underline"
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* In-Page Interactive Certificate & Document Preview Modal */}
      <DocumentPreviewModal
        isOpen={!!previewDoc}
        onClose={() => setPreviewDoc(null)}
        url={previewDoc?.url || null}
        title={previewDoc?.title || ''}
        subtitle={previewDoc?.subtitle}
        verifyUrl={previewDoc?.verifyUrl}
      />

    </section>
  );
}

export default SkillCertificateTabsSection;
