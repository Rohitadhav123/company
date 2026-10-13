"use client";

import { useState } from "react";
import { Sparkles, Layers, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import { getLocalizedProjects } from "@/data/localizedData";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";

interface SelectedWorkProps {
  onSelectProjectForEnquiry?: (projectName: string) => void;
}

export default function SelectedWork({ onSelectProjectForEnquiry }: SelectedWorkProps) {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const localizedProjects = getLocalizedProjects(language);

  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterOptions = [
    { label: t.work.filterAll, value: "all" },
    { label: t.work.filterAi, value: "ai" },
    { label: t.work.filterWeb, value: "web" },
    { label: t.work.filterBrand, value: "brand" },
    { label: t.work.filterMotion, value: "motion" },
  ];

  const filteredProjects = localizedProjects.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "ai") return p.id === "01";
    if (activeFilter === "web") return p.id === "02";
    if (activeFilter === "brand") return p.id === "03";
    if (activeFilter === "motion") return p.id === "04";
    return true;
  });

  const handleEnquireFromModal = (projectName: string) => {
    if (onSelectProjectForEnquiry) {
      onSelectProjectForEnquiry(projectName);
    }
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="work" className="relative py-16 sm:py-24 lg:py-28 bg-transparent overflow-hidden">
      {/* Seamless Section Top Gradient Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent pointer-events-none" />

      {/* Subtle Atmospheric Section Glow */}
      <div className="absolute top-1/4 -right-28 w-[600px] h-[600px] rounded-full bg-[#FF5A1F]/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 -left-28 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#E5A93C]/4 to-transparent blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF5A1F] font-semibold">
                {t.work.sectionTag}
              </span>
            </div>

            <h2 className="text-3xl xs:text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
              {t.work.heading}
            </h2>

            <p className="mt-4 text-[#A3A3A3] text-sm sm:text-base max-w-xl leading-relaxed">
              {t.work.subheading}
            </p>
          </div>

          {/* Legal / Authenticity Disclaimer Badge */}
          <div className="p-4 rounded-2xl bg-[#121212] border border-white/10 w-full md:w-auto md:max-w-sm shrink-0">
            <div className="flex items-center gap-2 text-xs font-mono text-white mb-1">
              <ShieldCheck className="w-4 h-4 text-[#FF5A1F]" />
              <span className="font-bold">{t.work.disclaimerTitle}</span>
            </div>
            <p className="text-[11px] text-[#A3A3A3] leading-normal font-sans">
              {t.work.disclaimerText}
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setActiveFilter(opt.value)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                activeFilter === opt.value
                  ? "bg-[#FF5A1F] text-black font-bold shadow-[0_0_18px_rgba(255,90,31,0.4)]"
                  : "bg-[#141414] text-[#A3A3A3] hover:text-white hover:bg-[#202020] border border-white/5"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 sm:mt-16 p-5 xs:p-7 sm:p-8 rounded-3xl bg-[#111111] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg xs:text-xl font-bold text-white uppercase tracking-tight mb-1">
              {language === "mr" ? "तुमच्या ब्रँडसाठी असा प्रकल्प हवा आहे का?" : "HAVE A CUSTOM VISION IN MIND?"}
            </h4>
            <p className="text-xs sm:text-sm text-[#A3A3A3]">
              {language === "mr" ? "आम्ही तुमच्या कल्पनेला उच्च दर्जाच्या वेबसाइट्स, मोबाइल अ‍ॅप्स आणि जाहिरातींमध्ये रूपांतरित करतो." : "We translate ambitious briefs into cinematic websites, mobile apps, and campaigns."}
            </p>
          </div>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FF5A1F] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-colors shrink-0"
          >
            <span>{t.nav.startProject}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onEnquire={handleEnquireFromModal}
      />
    </section>
  );
}
