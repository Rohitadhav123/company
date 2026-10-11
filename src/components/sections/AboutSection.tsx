"use client";

import { Users, Sparkles, Shield, Cpu, Edit3, ArrowRight } from "lucide-react";
import { TEAM_MEMBERS } from "@/data/team";

export default function AboutSection() {
  const studioValues = [
    {
      title: "Boutique Studio Model",
      description:
        "No multi-layered account managers or bureaucratic bottlenecks. You collaborate directly with senior creators and technical architects.",
      icon: Users,
    },
    {
      title: "Cinematic Aesthetic Bar",
      description:
        "We reject generic corporate templates. Every project is crafted with bold typography, dark palettes, and motion that commands attention.",
      icon: Sparkles,
    },
    {
      title: "Modern Engineering Stack",
      description:
        "We build on Next.js, React 19, TypeScript, and hardware-accelerated WebGL to achieve instant loading and buttery 60fps responsiveness.",
      icon: Cpu,
    },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-28 bg-transparent overflow-hidden">
      {/* Seamless Section Top Gradient Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent pointer-events-none" />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/3 -left-32 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#FF5A1F]/5 via-[#E5A93C]/3 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[550px] h-[550px] rounded-full bg-[#FF5A1F]/4 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF5A1F] font-semibold">
              ABOUT THE STUDIO
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl xs:text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-tight">
                A COMPACT STUDIO FOR <span className="text-chrome">AMBITIOUS BRANDS.</span>
              </h2>
            </div>

            <div className="lg:col-span-5 space-y-4 text-[#A3A3A3] text-sm sm:text-base leading-relaxed">
              <p>
                XYZ is an independent, boutique digital studio operating at the intersection of
                generative AI art, motion design, and high-performance software engineering.
              </p>
              <p>
                We collaborate with visionary founders and forward-thinking companies to craft
                immersive web flagships, viral advertising creatives, and transformative digital products.
              </p>
            </div>
          </div>
        </div>

        {/* Studio Values / Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 sm:mb-24">
          {studioValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="p-5 xs:p-6 sm:p-8 rounded-3xl bg-[#111111] border border-white/5 hover:border-[#FF5A1F]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#161616] border border-white/10 flex items-center justify-center text-[#FF5A1F] mb-6 shadow-md">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg xs:text-xl font-bold uppercase text-white tracking-tight mb-3">
                  {val.title}
                </h3>
                <p className="text-sm text-[#A3A3A3] leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Team Section with Editable Placeholders */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#A3A3A3]">
                <Edit3 className="w-3.5 h-3.5 text-[#FF5A1F]" />
                <span>STUDIO ROSTER & SPECIALISTS</span>
              </div>
              <h3 className="text-2xl xs:text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                CORE TEAM
              </h3>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-white/10 text-[11px] font-mono text-[#A3A3A3] max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] shrink-0" />
              <span className="hidden sm:inline">EDITABLE PLACEHOLDERS (READY TO CUSTOMIZE IN DATA/TEAM.TS)</span>
              <span className="sm:hidden truncate">TEAM ROSTER (CUSTOMIZABLE)</span>
            </div>
          </div>

          {/* Team Grid (5 editable roles) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="p-5 xs:p-6 sm:p-7 rounded-3xl bg-[#111111] border border-white/10 hover:border-[#FF5A1F]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Monogram Avatar & Placeholder Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#181818] border border-white/15 flex items-center justify-center font-mono font-black text-lg text-white group-hover:text-[#FF5A1F] group-hover:border-[#FF5A1F]/40 transition-all">
                      {member.avatarSeed}
                    </div>

                    <span className="text-[10px] font-mono text-[#737373] bg-black/60 px-2.5 py-1 rounded-full border border-white/5">
                      ROLE PLACEHOLDER
                    </span>
                  </div>

                  {/* Role Title */}
                  <h4 className="text-xl font-bold uppercase text-white tracking-tight mb-1">
                    {member.role}
                  </h4>
                  <p className="text-xs font-mono text-[#FF5A1F] mb-4">
                    {member.roleShort}
                  </p>

                  {/* Focus & Description */}
                  <p className="text-xs text-[#A3A3A3] leading-relaxed mb-6">
                    {member.focus}
                  </p>
                </div>

                {/* Skills tags */}
                <div className="pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {member.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono text-[#D4D4D4] bg-[#161616] px-2 py-0.5 rounded border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
