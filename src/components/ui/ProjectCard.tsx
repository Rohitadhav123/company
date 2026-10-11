"use client";

import { ArrowUpRight, Sparkles, Layers } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  // Visual artwork generator according to project identity
  const renderVisualArtwork = () => {
    switch (project.id) {
      case "01": // ORBIT ATHLETICS
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1f0b00] via-[#0d0d0d] to-[#2e1000] opacity-90" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            
            {/* Kinetic Neon Rings & Glowing Trails */}
            <div className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-64 sm:h-64 rounded-full border border-[#FF5A1F]/30 flex items-center justify-center animate-pulse-subtle">
              <div className="w-30 h-30 xs:w-36 xs:h-36 sm:w-48 sm:h-48 rounded-full border border-[#FF5A1F]/50 flex items-center justify-center">
                <div className="w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 rounded-full bg-[#FF5A1F]/15 backdrop-blur-md border border-[#FF5A1F] flex items-center justify-center shadow-[0_0_50px_rgba(255,90,31,0.5)]">
                  <span className="font-mono text-xl xs:text-2xl sm:text-3xl font-black text-white tracking-widest">
                    ORBIT
                  </span>
                </div>
              </div>
              {/* Velocity vectors */}
              <div className="absolute -top-3 right-0 px-2.5 py-0.5 xs:px-3 xs:py-1 rounded-full bg-black/80 border border-[#FF5A1F]/40 text-[9px] xs:text-[10px] font-mono text-[#FF5A1F]">
                VELOCITY : 340 M/S
              </div>
              <div className="absolute -bottom-3 left-2 xs:left-4 px-2.5 py-0.5 xs:px-3 xs:py-1 rounded-full bg-black/80 border border-white/20 text-[9px] xs:text-[10px] font-mono text-white">
                SYNTHETIC RUNNER 01
              </div>
            </div>
          </div>
        );

      case "02": // PULSE DIGITAL
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-4 xs:p-6">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00171c] via-[#0a0a0a] to-[#00262e] opacity-90" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />

            {/* SaaS Telemetry Glass Card Mockup */}
            <div className="relative w-full max-w-[260px] xs:max-w-sm rounded-2xl bg-[#111618]/90 border border-[#00F0FF]/30 p-4 xs:p-5 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3 xs:mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping" />
                  <span className="font-mono text-[11px] xs:text-xs font-bold text-white tracking-wider">
                    PULSE CLOUD TELEMETRY
                  </span>
                </div>
                <span className="text-[9px] xs:text-[10px] font-mono text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-0.5 rounded">
                  99.999% SLA
                </span>
              </div>

              {/* Mockup Telemetry Waveform */}
              <div className="h-14 xs:h-16 flex items-end gap-1 xs:gap-1.5 mb-3 xs:mb-4 px-2 py-1 bg-black/40 rounded-xl border border-white/5">
                {[45, 65, 30, 85, 95, 70, 50, 80, 100, 60, 90, 75, 95].map((val, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-[#00F0FF]/40 to-[#00F0FF] transition-all duration-500"
                    style={{ height: `${val}%` }}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between text-[10px] xs:text-[11px] font-mono text-[#A3A3A3]">
                <span>GLOBAL LATENCY: 12ms</span>
                <span className="text-white">EDGE NODES: 42</span>
              </div>
            </div>
          </div>
        );

      case "03": // NOIR COFFEE
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-4 xs:p-6">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#211504] via-[#0d0d0d] to-[#170e02] opacity-90" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />

            {/* Monochromatic Luxury Atelier Mockup */}
            <div className="relative w-40 xs:w-48 sm:w-60 h-56 xs:h-64 sm:h-72 rounded-2xl bg-[#14120f] border border-[#E5A93C]/40 p-4 xs:p-6 flex flex-col justify-between shadow-2xl shadow-black">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="font-serif italic text-xs text-[#E5A93C]">EST. 2024</span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#A3A3A3]">
                  ROAST № 07
                </span>
              </div>

              <div className="text-center my-auto">
                <h4 className="font-serif tracking-widest text-xl xs:text-2xl font-light text-white uppercase mb-1">
                  NOIR
                </h4>
                <p className="text-[9px] xs:text-[10px] font-mono tracking-widest text-[#E5A93C] uppercase">
                  SINGLE ORIGIN ATELIER
                </p>
                <div className="w-12 h-0.5 bg-[#E5A93C]/60 mx-auto mt-2" />
              </div>

              <div className="border-t border-white/10 pt-2 flex items-center justify-between text-[9px] xs:text-[10px] font-mono text-[#A3A3A3]">
                <span>ETHIOPIA YIRGACHEFFE</span>
                <span className="text-[#E5A93C]">250G</span>
              </div>
            </div>
          </div>
        );

      case "04": // XYZ MOTION LAB
      default:
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-4 xs:p-6">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#180026] via-[#090909] to-[#25003b] opacity-90" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />

            {/* Generative Toroid Wireframe & Violet Geometry */}
            <div className="relative w-40 h-40 xs:w-52 xs:h-52 sm:w-64 sm:h-64 rounded-full border border-[#A855F7]/40 flex items-center justify-center animate-spin-slow">
              <div className="w-30 h-30 xs:w-40 xs:h-40 sm:w-48 sm:h-48 rounded-2xl rotate-45 border border-[#A855F7]/50 flex items-center justify-center">
                <div className="w-20 h-20 xs:w-28 xs:h-28 sm:w-32 sm:h-32 rounded-full bg-[#A855F7]/20 backdrop-blur-md border border-[#A855F7] flex items-center justify-center shadow-[0_0_60px_rgba(168,85,247,0.4)]">
                  <div className="font-mono text-center">
                    <span className="text-[10px] xs:text-xs text-[#A855F7] block tracking-widest">GLSL</span>
                    <span className="text-base xs:text-lg font-black text-white">60 FPS</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-2 px-2.5 py-0.5 xs:px-3 xs:py-1 rounded-full bg-black/80 border border-[#A855F7]/40 text-[9px] xs:text-[10px] font-mono text-white">
                GPU COMPUTE SHADER
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div
      onClick={() => onOpenModal(project)}
      className="group relative rounded-3xl bg-[#111111] border border-white/10 hover:border-[#FF5A1F]/50 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(255,90,31,0.12)]"
      data-cursor="hover"
    >
      {/* Top Media Showcase Container */}
      <div className="relative w-full h-64 xs:h-72 sm:h-80 md:h-96 overflow-hidden bg-black/40">
        {renderVisualArtwork()}

        {/* Hover overlay button badge */}
        <div className="absolute top-5 right-5 z-20">
          <div className="w-12 h-12 rounded-full bg-black/70 border border-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#FF5A1F] group-hover:text-black group-hover:border-[#FF5A1F] transition-all duration-300">
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Floating Category Badge */}
        <div className="absolute top-5 left-5 z-20">
          <span className="px-3 py-1 rounded-full bg-black/70 border border-white/15 text-[11px] font-mono tracking-wider text-white/90 backdrop-blur-md">
            {project.badge}
          </span>
        </div>

        {/* Year stamp */}
        <div className="absolute bottom-4 right-5 z-20">
          <span className="text-[11px] font-mono text-[#A3A3A3] bg-black/60 px-2.5 py-1 rounded-md border border-white/5">
            {project.year}
          </span>
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="p-5 xs:p-6 sm:p-8 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#A3A3A3] mb-2">
            <span>{project.category}</span>
            <span>•</span>
            <span className="text-[#FF5A1F]">{project.client}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-[#FF5A1F] transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-[#A3A3A3] line-clamp-2 leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Deliverables tags */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.deliverables.slice(0, 2).map((item, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono text-[#D4D4D4] bg-[#181818] px-2.5 py-1 rounded-lg border border-white/5"
              >
                {item.split("(")[0].trim()}
              </span>
            ))}
          </div>

          <span className="text-xs font-mono font-bold text-[#FF5A1F] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shrink-0 ml-2">
            <span>EXPLORE</span>
            <span>→</span>
          </span>
        </div>
      </div>
    </div>
  );
}
