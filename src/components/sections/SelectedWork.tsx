"use client";

import { useState } from "react";
import { Sparkles, Layers, ShieldCheck, ArrowUpRight } from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";

interface SelectedWorkProps {
  onSelectProjectForEnquiry?: (projectName: string) => void;
}

export default function SelectedWork({ onSelectProjectForEnquiry }: SelectedWorkProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterOptions = [
    { label: "All Projects", value: "all" },
    { label: "AI Creative", value: "ai" },
    { label: "Web & SaaS", value: "web" },
    { label: "Brand & Commerce", value: "brand" },
    { label: "3D Motion Lab", value: "motion" },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
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
                CURATED CASE STUDIES
              </span>
            </div>

            <h2 className="text-3xl xs:text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
              SELECTED WORK
            </h2>

            <p className="mt-4 text-[#A3A3A3] text-sm sm:text-base max-w-xl leading-relaxed">
              Explore four self-initiated concept projects demonstrating our mastery in
              AI creative generation, high-velocity web engineering, and kinetic 3D experiences.
            </p>
          </div>

          {/* Legal / Authenticity Disclaimer Badge */}
          <div className="p-4 rounded-2xl bg-[#121212] border border-white/10 w-full md:w-auto md:max-w-sm shrink-0">
            <div className="flex items-center gap-2 text-xs font-mono text-white mb-1">
              <ShieldCheck className="w-4 h-4 text-[#FF5A1F]" />
              <span className="font-bold">CONCEPT SHOWCASE NOTICE</span>
            </div>
            <p className="text-[11px] text-[#A3A3A3] leading-normal font-sans">
              All four projects below are fictional concepts and R&D prototypes created
              to demonstrate design and technical capabilities without synthetic claims.
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
              HAVE A CUSTOM VISION IN MIND?
            </h4>
            <p className="text-xs sm:text-sm text-[#A3A3A3]">
              We translate ambitious briefs into cinematic websites, mobile apps, and campaigns.
            </p>
          </div>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FF5A1F] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-colors shrink-0"
          >
            <span>COMMISSION XYZ</span>
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
