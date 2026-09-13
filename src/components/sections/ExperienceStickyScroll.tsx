"use client";
import React from "react";
import Image from "next/image";
import { GraduationCap, BookOpen, Binary, Sparkles, Award, Cpu, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const CornerAccents = ({ hoverClass }: { hoverClass: string }) => (
    <>
        <div className={cn("absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-black/40 dark:border-white/40 z-20 pointer-events-none transition-colors duration-500", hoverClass)} />
        <div className={cn("absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-black/40 dark:border-white/40 z-20 pointer-events-none transition-colors duration-500", hoverClass)} />
        <div className={cn("absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-black/40 dark:border-white/40 z-20 pointer-events-none transition-colors duration-500", hoverClass)} />
        <div className={cn("absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-black/40 dark:border-white/40 z-20 pointer-events-none transition-colors duration-500", hoverClass)} />
    </>
);

export default function ExperienceStickyScroll({ isLowPowerMode = false }: { isLowPowerMode?: boolean }) {
    return (
        <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 1. AS Public Sr. Sec. School Box (Left) - Senior Secondary / 12th */}
                <motion.div 
                    initial={isLowPowerMode ? {} : { opacity: 0, y: 20 }}
                    whileInView={isLowPowerMode ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="col-span-1 border border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-[#0a0a0a] overflow-hidden relative group flex flex-col min-h-[450px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.3)] hover:border-blue-500/50"
                >
                    <CornerAccents hoverClass="group-hover:border-blue-500 dark:group-hover:border-blue-400" />
                    {/* Text Section (Top) */}
                    <div className="p-8 relative z-10 transition-transform duration-500 group-hover:translate-x-1">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                Foundation • Senior Secondary (12th)
                            </span>
                        </div>
                        <h3 className="text-3xl font-black text-neutral-900 dark:text-white mb-4">
                            AS Public Sr. Sec. School
                        </h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Completed Senior Secondary Education (Class XII) with a focused curriculum in Science and Mathematics. Developed strong mathematical intuition, analytical problem-solving, and foundational principles of computing.
                        </p>
                    </div>

                    {/* Visual Section (Bottom) */}
                    <div className="flex-1 flex items-center justify-center relative p-8 mt-auto border-t border-black/10 dark:border-white/10 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5 overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-black/40 to-black/10 dark:from-blue-950/90 dark:via-black/50 dark:to-transparent transition-opacity duration-500 group-hover:opacity-80" />

                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                        </div>

                        <div className="relative z-10 flex flex-col items-center transition-transform duration-500 group-hover:scale-105">
                            <div className="relative mb-6">
                                <BookOpen className={cn("w-20 h-20 text-white drop-shadow-xl", !isLowPowerMode && "animate-pulse")} />
                                <Sparkles className={cn("w-7 h-7 text-blue-400 absolute -top-2 -right-2 opacity-80", !isLowPowerMode && "animate-bounce")} />
                            </div>

                            <div className="flex flex-wrap gap-2 justify-center mb-4">
                                {["Class 12th", "Science & Math", "Analytical Base", "Senior Secondary"].map(s => (
                                    <span key={s} className="px-3 py-1 rounded-full text-[10px] bg-black/40 dark:bg-white/10 text-white border border-white/20 font-mono font-bold backdrop-blur-md shadow-lg group-hover:bg-blue-600/50 transition-colors">
                                        {s}
                                    </span>
                                ))}
                            </div>
                            <p className="text-[10px] font-mono text-white/90 uppercase tracking-widest bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-white/10 group-hover:border-blue-500/50 transition-colors">
                                AS Public Sr. Sec. School • Academic Base
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* 2. VMOU RSCIT Box (Right) - IT Foundation / Certification */}
                <motion.div 
                    initial={isLowPowerMode ? {} : { opacity: 0, y: 20 }}
                    whileInView={isLowPowerMode ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="col-span-1 border border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-[#0a0a0a] overflow-hidden relative group flex flex-col min-h-[450px] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(249,115,22,0.3)] hover:border-orange-500/50 hover:z-10"
                >
                    <CornerAccents hoverClass="group-hover:border-orange-500 dark:group-hover:border-orange-400" />
                    {/* Text Section (Top) */}
                    <div className="p-8 relative z-10 transition-transform duration-500">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                                Information Technology • Certified
                            </span>
                        </div>
                        <h3 className="text-3xl font-black text-neutral-900 dark:text-white mb-4">
                            VMOU Kota (RSCIT)
                        </h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Rajasthan State Certificate in Information Technology (RSCIT) conducted by Vardhman Mahaveer Open University (VMOU), Kota. Mastered core digital concepts, operating systems, computing literacy, and practical workplace IT tooling.
                        </p>
                    </div>

                    {/* Visual Section (Bottom) */}
                    <div className="flex-1 flex items-center justify-center relative p-8 mt-auto border-t border-black/10 dark:border-white/10 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-950/70 via-black/40 to-black/10 dark:from-orange-950/90 dark:via-black/50 dark:to-transparent transition-opacity duration-500 group-hover:opacity-80" />

                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="absolute inset-0 bg-[radial-gradient(#80808012_1px,transparent_1px)] [background-size:16px_16px]"></div>
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="relative mb-6">
                                <Cpu className="w-20 h-20 text-white drop-shadow-xl group-hover:rotate-12 transition-transform duration-500" />
                                <ShieldCheck className={cn("w-7 h-7 text-yellow-400 absolute -bottom-2 -left-2", !isLowPowerMode && "animate-pulse")} />
                            </div>

                            <div className="flex flex-wrap gap-2 justify-center mb-4">
                                {["RSCIT Certified", "VMOU Kota", "IT Fundamentals", "Digital Systems"].map(s => (
                                    <span key={s} className="px-3 py-1 rounded-full text-[10px] bg-black/40 dark:bg-white/10 text-white border border-white/20 font-mono font-bold backdrop-blur-md shadow-lg group-hover:bg-orange-600/50 transition-colors">
                                        {s}
                                    </span>
                                ))}
                            </div>
                            <p className="text-[10px] font-mono text-white/90 uppercase tracking-widest bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-white/10 group-hover:border-orange-500/50 transition-colors">
                                VMOU Kota • Information Technology
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* 3. VGU Jaipur Box (Bottom - Full Width) - Higher Education & Degree */}
                <motion.div 
                    initial={isLowPowerMode ? {} : { opacity: 0, y: 20 }}
                    whileInView={isLowPowerMode ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="col-span-1 md:col-span-2 border border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-[#0a0a0a] overflow-hidden relative group p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-500 hover:border-lime-500/50 hover:shadow-[inset_0_0_30px_rgba(132,204,22,0.1),0_0_30px_-5px_rgba(132,204,22,0.3)] hover:bg-neutral-50 dark:hover:bg-[#0f0f0f]"
                >
                    <CornerAccents hoverClass="group-hover:border-lime-500 dark:group-hover:border-lime-400" />
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-900/40 via-transparent to-transparent group-hover:opacity-40 transition-opacity duration-700"></div>

                    <div className="relative z-10 max-w-xl transition-transform duration-500 group-hover:translate-x-2">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-lime-600 dark:text-lime-400 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-lime-500 animate-ping" />
                                Higher Education • Current (2024 - 2027)
                            </span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-white mb-4 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                            Vivekananda Global University (VGU)
                        </h3>
                        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                            Bachelor of Computer Applications (BCA) in Full Stack &amp; Cloud Computing with an exceptional <span className="text-lime-600 dark:text-lime-400 font-bold">9.43 CGPA</span> academic distinction. Currently in <span className="font-semibold text-foreground">5th Semester</span>, leading hackathons (Team Akatsuki leader), building production-grade MERN &amp; Flutter applications, and architecting AI-driven platforms.
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mt-6">
                            {["9.43 CGPA Distinction", "5th Semester Ongoing", "BCA Full Stack & Cloud", "Batch 2024-2027", "Hackathon Leader", "VGU Jaipur"].map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-black/10 dark:border-white/10 group-hover:border-lime-500/40 transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right side: Direct VGU Official Logo */}
                    <div className="relative z-10 flex flex-col items-center md:items-end justify-center gap-3 mt-6 md:mt-0 flex-shrink-0">
                        <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                            <Image
                                src="/assets/vgulogo.png"
                                alt="Vivekananda Global University Logo"
                                width={190}
                                height={190}
                                className="object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.3)]"
                                unoptimized
                            />
                        </div>
                        <div className="text-center md:text-right">
                            <span className="text-2xl sm:text-3xl font-black text-lime-600 dark:text-lime-400 font-mono">9.43 CGPA</span>
                            <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400">5th Sem Ongoing • VGU Jaipur</div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
