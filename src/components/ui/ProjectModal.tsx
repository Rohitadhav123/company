"use client";

import { useEffect } from "react";
import { X, ArrowUpRight, CheckCircle2, Layers, Cpu, BarChart3, AlertCircle } from "lucide-react";
import { Project } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onEnquire: (projectName: string) => void;
}

export default function ProjectModal({ project, onClose, onEnquire }: ProjectModalProps) {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d0d0d] border border-white/15 rounded-3xl overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 xs:px-6 sm:px-8 py-4 sm:py-5 border-b border-white/10 bg-[#141414]/90 backdrop-blur-md">
          <div className="flex items-center gap-2 xs:gap-3">
            <span className="font-mono text-xs text-[#FF5A1F] font-bold tracking-widest uppercase">
              {project.badge}
            </span>
            <span className="text-white/30">•</span>
            <span className="text-xs font-mono text-[#A3A3A3] uppercase">
              {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-[#FF5A1F] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 xs:px-6 sm:px-8 py-6 sm:py-8 space-y-6 sm:space-y-10 custom-scrollbar">
          {/* Header & Concept Disclaimer */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-[#A3A3A3] mb-4 max-w-full">
              <AlertCircle className="w-3 h-3 text-[#FF5A1F] shrink-0" />
              <span className="truncate">{t.work.modalBadge}</span>
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black tracking-tight text-white uppercase mb-3 break-words">
              {project.title}
            </h2>
            <p className="text-base sm:text-xl text-[#FF5A1F] font-medium leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Visual Showcase Banner */}
          <div
            className="w-full h-52 xs:h-64 sm:h-80 rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden p-4 xs:p-6"
            style={{ background: project.bgGradient }}
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            
            {/* Visual Abstract Art based on project ID */}
            <div className="relative z-10 text-center max-w-md">
              <div
                className="w-20 h-20 mx-auto rounded-3xl flex items-center justify-center font-mono text-3xl font-black shadow-2xl mb-4 border border-white/20"
                style={{
                  backgroundColor: "#111111",
                  color: project.accentColor,
                  boxShadow: `0 0 40px ${project.accentColor}40`,
                }}
              >
                {project.id}
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">
                {project.category}
              </h3>
              <p className="text-xs text-[#A3A3A3] font-mono">
                {language === "mr" ? "संकल्पना व्हिज्युअल दिशा आणि तांत्रिक ब्लूप्रिंट" : "Concept Visual Direction & Architectural Blueprint"}
              </p>
            </div>
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#141414] border border-white/5 flex flex-col justify-between"
              >
                <span className="text-xs font-mono uppercase text-[#A3A3A3] mb-2 flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-[#FF5A1F]" />
                  {stat.label}
                </span>
                <span
                  className="text-2xl sm:text-3xl font-black font-mono tracking-tight"
                  style={{ color: project.accentColor }}
                >
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Narrative: Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#141414] border border-white/5 space-y-3">
              <h4 className="text-sm font-mono uppercase tracking-wider text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                {t.work.modalChallenge}
              </h4>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#141414] border border-white/5 space-y-3">
              <h4 className="text-sm font-mono uppercase tracking-wider text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                {t.work.modalSolution}
              </h4>
              <p className="text-sm text-[#A3A3A3] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables List */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#FF5A1F]" />
              {t.work.deliverablesLabel}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-[#141414]/70 border border-white/5 text-sm text-[#D4D4D4]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#FF5A1F] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech & Creative Stack */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-white mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#FF5A1F]" />
              {t.work.techStackLabel}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-[#181818] border border-white/10 text-xs font-mono text-[#A3A3A3]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Sticky CTA */}
        <div className="p-4 xs:p-6 border-t border-white/10 bg-[#141414] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#A3A3A3] font-mono text-center sm:text-left">
            {language === "mr" ? "या संकल्पनेने प्रभावित झालात? आपल्या ब्रँडसाठी असाच प्रकल्प सुरू करा." : "Inspired by this concept? Commission custom visuals or web architecture."}
          </p>
          <button
            type="button"
            onClick={() => {
              onClose();
              onEnquire(project.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FF5A1F] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,90,31,0.4)]"
          >
            <span>{t.work.modalCta}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
