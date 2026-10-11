"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, Compass, Palette, Code2, Rocket } from "lucide-react";
import { PROCESS_STEPS } from "@/data/process";

export default function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="w-5 h-5 text-[#FF5A1F]" />;
      case 1:
        return <Palette className="w-5 h-5 text-[#FF5A1F]" />;
      case 2:
        return <Code2 className="w-5 h-5 text-[#FF5A1F]" />;
      case 3:
      default:
        return <Rocket className="w-5 h-5 text-[#FF5A1F]" />;
    }
  };

  return (
    <section id="process" className="relative py-16 sm:py-24 lg:py-28 bg-transparent overflow-hidden">
      {/* Seamless Section Top Gradient Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent pointer-events-none" />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/2 -right-32 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#FF5A1F]/5 via-[#FF7844]/3 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF5A1F] font-semibold">
              EXECUTION FRAMEWORK
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-3xl xs:text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
              OUR PROCESS
            </h2>

            <p className="text-[#A3A3A3] text-sm sm:text-base max-w-xl leading-relaxed">
              We adhere to a rigorous 4-stage engineering and design sprint model
              ensuring clear communication, tight iteration loops, and flawless production delivery.
            </p>
          </div>
        </div>

        {/* Timeline Stepper Bar: Vertical on mobile, horizontal on desktop */}
        <div className="relative mb-10 sm:mb-16">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />
          <div
            className="hidden md:block absolute top-1/2 left-0 h-0.5 bg-[#FF5A1F] -translate-y-1/2 transition-all duration-500 z-0 shadow-[0_0_12px_#FF5A1F]"
            style={{ width: `${(activeStepIndex / 3) * 100}%` }}
          />

          {/* Stepper Buttons: 1-col on small mobile, 2-col on tablet, 4-col on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              const isPast = idx < activeStepIndex;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 flex items-center sm:flex-col sm:items-stretch justify-between gap-3 ${
                    isActive
                      ? "bg-[#161616] border-[#FF5A1F] shadow-[0_0_25px_rgba(255,90,31,0.2)]"
                      : isPast
                      ? "bg-[#111111] border-white/20 text-[#A3A3A3]"
                      : "bg-[#0d0d0d] border-white/5 text-[#737373] hover:border-white/15"
                  }`}
                  data-cursor="hover"
                >
                  <div className="flex sm:items-center justify-between sm:mb-3 shrink-0 order-2 sm:order-1">
                    <span
                      className={`hidden sm:inline font-mono text-xs font-bold tracking-widest ${
                        isActive ? "text-[#FF5A1F]" : "text-[#737373]"
                      }`}
                    >
                      {step.step}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono transition-colors ${
                        isActive
                          ? "bg-[#FF5A1F] text-black font-bold"
                          : isPast
                          ? "bg-white/10 text-white"
                          : "bg-white/5 text-[#737373]"
                      }`}
                    >
                      {idx + 1}
                    </div>
                  </div>

                  <div className="order-1 sm:order-2 min-w-0">
                    <span className="sm:hidden font-mono text-[10px] text-[#FF5A1F] font-bold block mb-0.5">
                      STAGE {step.step}
                    </span>
                    <h4
                      className={`text-base sm:text-lg font-bold uppercase tracking-tight transition-colors truncate ${
                        isActive ? "text-white" : "text-[#A3A3A3]"
                      }`}
                    >
                      {step.name}
                    </h4>
                    <p className="text-[11px] text-[#737373] font-mono mt-0.5 truncate">
                      {step.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Deep Dive Card */}
        <div className="bg-[#121212] border border-white/10 rounded-3xl p-5 xs:p-7 sm:p-10 md:p-12 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
            {/* Left Narrative */}
            <div className="lg:w-7/12">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-[#181818] border border-white/10">
                  {getStepIcon(activeStepIndex)}
                </div>
                <div>
                  <span className="text-xs font-mono text-[#FF5A1F] font-bold tracking-wider uppercase block">
                    STAGE {PROCESS_STEPS[activeStepIndex].step}
                  </span>
                  <h3 className="text-2xl xs:text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                    {PROCESS_STEPS[activeStepIndex].name}
                  </h3>
                </div>
              </div>

              <p className="text-base sm:text-lg text-[#FF5A1F] font-medium mb-4">
                {PROCESS_STEPS[activeStepIndex].subtitle}
              </p>

              <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed mb-8">
                {PROCESS_STEPS[activeStepIndex].description}
              </p>

              {/* Milestone Deliverable Box */}
              <div className="p-4 rounded-xl bg-[#0a0a0a] border border-[#FF5A1F]/30 flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-3">
                <div className="flex items-center gap-2 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F] animate-pulse shrink-0" />
                  <span className="text-xs font-mono text-[#A3A3A3] uppercase">
                    Milestone Deliverable:
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-white break-words">
                  {PROCESS_STEPS[activeStepIndex].deliverable}
                </span>
              </div>
            </div>

            {/* Right Checklist */}
            <div className="lg:w-5/12 w-full p-6 sm:p-8 rounded-2xl bg-[#161616] border border-white/5">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-6">
                STAGE SPRINT HIGHLIGHTS
              </h4>

              <div className="space-y-4">
                {PROCESS_STEPS[activeStepIndex].bulletPoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5A1F] mt-1 shrink-0" />
                    <span className="text-xs sm:text-sm text-[#D4D4D4] leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#737373]">
                  STEP {activeStepIndex + 1} OF 4
                </span>
                {activeStepIndex < 3 ? (
                  <button
                    onClick={() => setActiveStepIndex(activeStepIndex + 1)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#FF5A1F] hover:text-white transition-colors"
                  >
                    <span>NEXT STAGE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#FF5A1F] hover:text-white transition-colors"
                  >
                    <span>READY TO BEGIN?</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
