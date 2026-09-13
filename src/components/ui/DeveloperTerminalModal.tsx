'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal as TerminalIcon, 
  X, 
  Minus, 
  Maximize2, 
  Minimize2, 
  Sparkles, 
  CornerDownLeft, 
  ExternalLink,
  Code2,
  FolderGit2,
  User,
  Mail,
  Sun,
  Moon,
  Trash2
} from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { useTheme } from 'next-themes';
import Link from 'next/link';

interface CommandOutput {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export function DeveloperTerminalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [commandList, setCommandList] = useState<string[]>([]);
  
  const { theme, setTheme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Initial welcome message
  useEffect(() => {
    if (history.length === 0) {
      setHistory([
        {
          id: 'welcome-0',
          command: 'init',
          timestamp: new Date().toLocaleTimeString(),
          output: (
            <div className="space-y-2 text-xs sm:text-sm">
              <p className="text-emerald-400 font-bold font-mono">
                🚀 Welcome to Kartik Sharma&apos;s Interactive CLI Shell [v2.4.0]
              </p>
              <p className="text-neutral-400 font-mono">
                System: <span className="text-sky-400">Linux thekartiksharma.in (Node 20 / Next.js 16)</span>
              </p>
              <p className="text-neutral-300 font-mono">
                Type <span className="text-amber-400 font-semibold">&apos;help&apos;</span> to see available commands or click quick action buttons below.
              </p>
            </div>
          )
        }
      ]);
    }
  }, []);

  // Listen for global custom event to toggle terminal
  useEffect(() => {
    const handleToggle = () => {
      setIsOpen(prev => !prev);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle terminal with Ctrl + ` or Cmd + `
      if ((e.ctrlKey || e.metaKey) && e.key === '`') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      // Close with Escape
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('portfolio:toggle-terminal', handleToggle);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('portfolio:toggle-terminal', handleToggle);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  // Scroll to bottom when history updates
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    const parts = trimmed.split(' ');
    const mainCmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');

    setCommandList(prev => [...prev, trimmed]);
    setHistoryIdx(-1);

    let resultOutput: React.ReactNode = null;

    switch (mainCmd) {
      case 'help':
      case '?':
        resultOutput = (
          <div className="space-y-2 py-1 font-mono text-xs sm:text-sm">
            <p className="text-amber-400 font-bold">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-neutral-300">
              <div><span className="text-emerald-400 font-bold">about</span> : Kartik&apos;s background & role</div>
              <div><span className="text-emerald-400 font-bold">skills</span> : Core tech stack & tools</div>
              <div><span className="text-emerald-400 font-bold">projects</span> : Notable featured projects</div>
              <div><span className="text-emerald-400 font-bold">experience</span> : Career milestones & leadership</div>
              <div><span className="text-emerald-400 font-bold">contact</span> : Social links & email</div>
              <div><span className="text-emerald-400 font-bold">neofetch</span> : Visual system specs & banner</div>
              <div><span className="text-emerald-400 font-bold">theme</span> : Toggle dark/light theme</div>
              <div><span className="text-emerald-400 font-bold">date</span> : Current local time & date</div>
              <div><span className="text-emerald-400 font-bold">clear</span> : Clear terminal screen</div>
              <div><span className="text-emerald-400 font-bold">exit</span> : Close the terminal modal</div>
            </div>
          </div>
        );
        break;

      case 'about':
      case 'bio':
      case 'whoami':
        resultOutput = (
          <div className="space-y-2 py-1 font-mono text-xs sm:text-sm">
            <p className="text-sky-400 font-bold">⚡ Kartik Sharma — Full Stack & MERN Stack Developer</p>
            <p className="text-neutral-300 leading-relaxed">
              Based in <span className="text-emerald-400 font-semibold">Jaipur, Rajasthan, India</span>. 
              Currently pursuing BCA at <span className="text-amber-400">Vivekananda Global University (VGU)</span> specializing in Full Stack & Cloud Computing.
              Specialized in high-performance web systems (React, Next.js, Node.js, Express, MongoDB) and cross-platform mobile development with Flutter.
            </p>
            <div className="pt-1 flex flex-wrap gap-2 text-[11px]">
              <span className="px-2 py-0.5 rounded bg-white/10 text-neutral-200">Founder & Builder</span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-neutral-200">Open Source Contributor</span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-neutral-200">Hackathon Finalist</span>
            </div>
          </div>
        );
        break;

      case 'skills':
      case 'tech':
      case 'stack':
        resultOutput = (
          <div className="space-y-3 py-1 font-mono text-xs sm:text-sm">
            <p className="text-emerald-400 font-bold">🛠️ Technical Matrix & Competencies:</p>
            <div className="space-y-2">
              <div>
                <span className="text-sky-400 font-semibold">[Frontend & Web]:</span>{' '}
                <span className="text-neutral-300">React.js, Next.js (App Router), TypeScript, JavaScript, Tailwind CSS, HTML5/CSS3</span>
              </div>
              <div>
                <span className="text-emerald-400 font-semibold">[Mobile Apps]:</span>{' '}
                <span className="text-neutral-300">Flutter, Dart, Hive, State Management, Android Studio</span>
              </div>
              <div>
                <span className="text-purple-400 font-semibold">[Backend & APIs]:</span>{' '}
                <span className="text-neutral-300">Node.js, Express.js, FastAPI, Python, REST APIs, Microservices</span>
              </div>
              <div>
                <span className="text-amber-400 font-semibold">[Databases & Cloud]:</span>{' '}
                <span className="text-neutral-300">MongoDB, PostgreSQL, Supabase, Prisma ORM, Vercel, Docker</span>
              </div>
              <div>
                <span className="text-rose-400 font-semibold">[Developer Tools]:</span>{' '}
                <span className="text-neutral-300">Git, GitHub, VS Code, Postman, Linux CLI, Figma</span>
              </div>
            </div>
          </div>
        );
        break;

      case 'projects':
      case 'work':
        resultOutput = (
          <div className="space-y-2 py-1 font-mono text-xs sm:text-sm">
            <p className="text-amber-400 font-bold">📂 Featured Production Projects:</p>
            <div className="space-y-2">
              {portfolioData.projects.slice(0, 5).map((p, i) => (
                <div key={p.id || i} className="border-l-2 border-emerald-500/40 pl-3 py-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">{p.title.split(' - ')[0]}</span>
                    <span className="text-[10px] text-neutral-500 uppercase">({p.category})</span>
                  </div>
                  <p className="text-neutral-400 text-xs line-clamp-1">{p.description}</p>
                  <div className="flex gap-3 text-[11px] text-sky-400 mt-0.5">
                    {p.repoUrl && (
                      <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                        GitHub <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                    {p.demoUrl && (
                      <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1 text-emerald-400">
                        Live <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-neutral-500 text-[11px]">Type &apos;projects&apos; or visit <Link href="/projects" onClick={() => setIsOpen(false)} className="text-sky-400 underline">/projects</Link> to view all 10+ projects.</p>
          </div>
        );
        break;

      case 'experience':
      case 'exp':
        resultOutput = (
          <div className="space-y-2 py-1 font-mono text-xs sm:text-sm">
            <p className="text-purple-400 font-bold">💼 Career Milestones & Experience:</p>
            <div className="space-y-2">
              {portfolioData.experiences.map((exp, i) => (
                <div key={exp.id || i} className="border-l-2 border-purple-500/40 pl-3">
                  <p className="text-neutral-200 font-semibold">{exp.position} @ <span className="text-amber-400">{exp.company}</span></p>
                  <p className="text-[11px] text-neutral-500">{exp.startDate} - {exp.endDate || (exp.isOngoing ? 'Present' : '')}</p>
                  <p className="text-xs text-neutral-400 mt-0.5 line-clamp-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'contact':
      case 'email':
      case 'social':
        resultOutput = (
          <div className="space-y-2 py-1 font-mono text-xs sm:text-sm">
            <p className="text-emerald-400 font-bold">📬 Connect with Kartik Sharma:</p>
            <div className="space-y-1">
              <div>
                <span className="text-neutral-400">Email:</span>{' '}
                <a href="mailto:kartikuma9261@gmail.com" className="text-sky-400 hover:underline">kartikuma9261@gmail.com</a>
              </div>
              <div>
                <span className="text-neutral-400">GitHub:</span>{' '}
                <a href="https://github.com/KartikSharma4448" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">github.com/KartikSharma4448</a>
              </div>
              <div>
                <span className="text-neutral-400">LinkedIn:</span>{' '}
                <a href="https://linkedin.com/in/kartik-sharma06" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">linkedin.com/in/kartik-sharma06</a>
              </div>
              <div>
                <span className="text-neutral-400">Twitter / X:</span>{' '}
                <a href="https://twitter.com/itszeromind" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">@itszeromind</a>
              </div>
            </div>
          </div>
        );
        break;

      case 'neofetch':
        resultOutput = (
          <div className="flex flex-col sm:flex-row gap-4 py-2 font-mono text-xs sm:text-sm">
            <pre className="text-emerald-400 font-bold select-none leading-none text-[10px] sm:text-xs">
{`
   __  __           _   _ _    
  |  \\/  | ___ _ __| |_(_) | __
  | |\\/| |/ _ \\ '__| __| | |/ /
  | |  | |  __/ |  | |_| |   < 
  |_|  |_|\\___|_|   \\__|_|_|\\_\\
`}
            </pre>
            <div className="space-y-1 text-neutral-300">
              <p><span className="text-emerald-400 font-bold">kartik@thekartiksharma.in</span></p>
              <p>-------------------------</p>
              <p><span className="text-sky-400">OS:</span> Next.js 16.3.5 / Vercel Edge Linux</p>
              <p><span className="text-sky-400">Host:</span> thekartiksharma.in</p>
              <p><span className="text-sky-400">Kernel:</span> React 19.2.4 & TypeScript 5.3</p>
              <p><span className="text-sky-400">Uptime:</span> 100% (High Availability)</p>
              <p><span className="text-sky-400">Shell:</span> portfolio-cli-zsh 2.4.0</p>
              <p><span className="text-sky-400">Stack:</span> MERN + Next.js + Flutter</p>
              <p><span className="text-sky-400">Location:</span> Jaipur, Rajasthan, IN</p>
            </div>
          </div>
        );
        break;

      case 'theme':
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        resultOutput = (
          <p className="font-mono text-xs sm:text-sm text-amber-400">
            🎨 Theme switched to <span className="font-bold uppercase">{newTheme}</span> mode.
          </p>
        );
        break;

      case 'date':
      case 'time':
        resultOutput = (
          <p className="font-mono text-xs sm:text-sm text-sky-400">
            ⏰ {new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)
          </p>
        );
        break;

      case 'sudo':
        resultOutput = (
          <p className="font-mono text-xs sm:text-sm text-rose-400 font-bold">
            🔒 Permission denied: With great power comes great responsibility. You already have guest root access! 😎
          </p>
        );
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        setIsOpen(false);
        setInputVal('');
        return;

      default:
        resultOutput = (
          <p className="font-mono text-xs sm:text-sm text-rose-400">
            command not found: <span className="text-neutral-200 font-bold">{trimmed}</span>. Type <span className="text-amber-400 font-bold">&apos;help&apos;</span> for a list of valid commands.
          </p>
        );
        break;
    }

    setHistory(prev => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: trimmed,
        timestamp: new Date().toLocaleTimeString(),
        output: resultOutput
      }
    ]);

    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandList.length > 0) {
        const nextIdx = historyIdx + 1 < commandList.length ? historyIdx + 1 : historyIdx;
        setHistoryIdx(nextIdx);
        setInputVal(commandList[commandList.length - 1 - nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(commandList[commandList.length - 1 - nextIdx] || '');
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal('');
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md">
          {/* Backdrop Click */}
          <div 
            className="absolute inset-0"
            onClick={() => setIsOpen(false)}
          />

          {/* Terminal Window Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className={`relative z-10 w-full flex flex-col rounded-2xl overflow-hidden bg-[#0c0d14] border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.85)] font-mono text-white transition-all duration-300 ${
              isMaximized ? 'h-[94vh] max-w-[96vw]' : 'h-[620px] max-w-4xl max-h-[88vh]'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              inputRef.current?.focus();
            }}
          >
            {/* Top macOS-style Terminal Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#151622] border-b border-white/10 select-none">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] hover:brightness-110 flex items-center justify-center group"
                  title="Close Terminal (Esc)"
                >
                  <X className="w-2.5 h-2.5 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] hover:brightness-110 flex items-center justify-center group"
                  title="Minimize"
                >
                  <Minus className="w-2.5 h-2.5 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <button
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="w-3.5 h-3.5 rounded-full bg-[#27c93f] hover:brightness-110 flex items-center justify-center group"
                  title="Maximize Window"
                >
                  {isMaximized ? (
                    <Minimize2 className="w-2 h-2 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                  ) : (
                    <Maximize2 className="w-2 h-2 text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
              </div>

              {/* Title & Live Status */}
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline text-neutral-300 font-semibold">kartik@thekartiksharma.in</span>
                <span className="text-neutral-500">~ (zsh)</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-1" />
              </div>

              {/* Right Shortcut Badge */}
              <div className="flex items-center gap-2">
                <span className="hidden sm:inline-block text-[10px] text-neutral-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                  Ctrl + ` to toggle
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-md text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Terminal Body Screen */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-xs sm:text-sm custom-terminal-scroll">
              {history.map(item => (
                <div key={item.id} className="space-y-1.5">
                  {item.command !== 'init' && (
                    <div className="flex items-center gap-2 text-emerald-400 font-bold">
                      <span className="text-neutral-500">kartik@portfolio:~$</span>
                      <span className="text-white">{item.command}</span>
                    </div>
                  )}
                  <div className="pl-0 sm:pl-2">{item.output}</div>
                </div>
              ))}

              {/* Active Prompt Line */}
              <div className="flex items-center gap-2 text-emerald-400 font-bold pt-2">
                <span className="text-neutral-500 shrink-0">kartik@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-neutral-600 caret-emerald-400 text-xs sm:text-sm"
                  placeholder="Type a command (e.g. help, skills, projects, about)..."
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
              <div ref={bottomRef} />
            </div>

            {/* Quick-action Suggestion Toolbar at bottom */}
            <div className="p-3 bg-[#11121d] border-t border-white/10 flex items-center justify-between flex-wrap gap-2 text-xs">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-neutral-500 text-[11px] mr-1 hidden sm:inline">Quick commands:</span>
                {[
                  { label: 'about', icon: User },
                  { label: 'skills', icon: Code2 },
                  { label: 'projects', icon: FolderGit2 },
                  { label: 'contact', icon: Mail },
                  { label: 'neofetch', icon: Sparkles },
                  { label: 'theme', icon: theme === 'dark' ? Sun : Moon },
                  { label: 'clear', icon: Trash2 },
                ].map(({ label, icon: Icon }) => (
                  <button
                    key={label}
                    onClick={() => executeCommand(label)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 hover:bg-emerald-500/20 text-neutral-300 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/40 transition-all font-mono text-[11px]"
                  >
                    <Icon className="w-3 h-3" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>

              <div className="text-neutral-500 text-[10px] hidden md:flex items-center gap-1">
                <span>Press Enter ↵ to run</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
