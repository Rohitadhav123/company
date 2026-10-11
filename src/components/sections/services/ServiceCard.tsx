"use client";

import { useState } from "react";
import { ArrowUpRight, Sparkles, Check, Info } from "lucide-react";
import { ServiceItem } from "@/data/services";
import PosterDesignDemo from "./PosterDesignDemo";
import AnimationVideoDemo from "./AnimationVideoDemo";
import WebDevelopmentDemo from "./WebDevelopmentDemo";
import AppDevelopmentDemo from "./AppDevelopmentDemo";
import BusinessPlanningDemo from "./BusinessPlanningDemo";
import DigitalSolutionsDemo from "./DigitalSolutionsDemo";

interface ServiceCardProps {
  service: ServiceItem;
  onEnquire: (serviceId: string) => void;
  onOpenSpecs: (service: ServiceItem) => void;
}

export default function ServiceCard({
  service,
  onEnquire,
  onOpenSpecs,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Render the dedicated interactive micro-demonstration for this specific service
  const renderVisualDemo = () => {
    switch (service.id) {
      case "ai-poster":
        return <PosterDesignDemo />;
      case "ai-video":
        return <AnimationVideoDemo />;
      case "web-development":
        return <WebDevelopmentDemo />;
      case "app-development":
        return <AppDevelopmentDemo />;
      case "business-planning":
        return <BusinessPlanningDemo />;
      case "business-solutions":
        return <DigitalSolutionsDemo />;
      default:
        return <PosterDesignDemo />;
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-3xl bg-[#0e0e0e] border border-white/10 hover:border-white/25 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl service-card"
      style={{
        borderColor: isHovered ? `${service.accent}40` : undefined,
        boxShadow: isHovered
          ? `0 20px 40px -15px ${service.accent}20`
          : undefined,
      }}
    >
      {/* Ambient Top Glow on Hover */}
      <div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-700"
        style={{ backgroundColor: service.accent }}
      />

      {/* CARD TOP: Editorial Metadata & Numbering */}
      <div className="p-4 xs:p-6 sm:p-8 pb-3 sm:pb-4 relative z-10">
        <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
          <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
            <span
              className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border transition-colors shrink-0"
              style={{
                color: service.accent,
                borderColor: `${service.accent}40`,
                backgroundColor: `${service.accent}15`,
              }}
            >
              PRACTICE {service.number}
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-[#A3A3A3] uppercase">
              {service.category}
            </span>
          </div>

          <span className="text-lg sm:text-2xl font-mono font-black text-white/20 group-hover:text-white/40 transition-colors shrink-0">
            /{service.number}
          </span>
        </div>

        {/* Title & Tagline with Break-words */}
        <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white tracking-tight leading-tight mb-2 break-words">
          {service.title}
        </h3>
        <p
          className="text-xs sm:text-sm font-medium leading-relaxed mb-3 sm:mb-4 transition-colors"
          style={{ color: service.accent }}
        >
          {service.tagline}
        </p>

        {/* High-Contrast Readable Summary */}
        <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed line-clamp-3">
          {service.summary}
        </p>
      </div>

      {/* CARD MIDDLE: The Interactive Visual Demonstration */}
      <div className="px-3 xs:px-4 sm:px-6 relative z-10 my-1 sm:my-2 service-card-visual overflow-hidden">
        {renderVisualDemo()}
      </div>

      {/* CARD BOTTOM: Capabilities Pills & Action Controls */}
      <div className="p-4 xs:p-6 sm:p-8 pt-3 sm:pt-4 relative z-10 border-t border-white/10 mt-2 sm:mt-4 flex flex-col justify-between gap-4 sm:gap-6">
        {/* Core Capabilities Chips */}
        <div>
          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#737373] block mb-2">
            DELIVERED CAPABILITIES:
          </span>
          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {service.offerings.slice(0, 3).map((item, idx) => (
              <span
                key={idx}
                className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-[#141414] border border-white/5 text-[10px] sm:text-[11px] font-mono text-[#D4D4D4] flex items-center gap-1.5"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: service.accent }}
                />
                <span className="truncate">{item}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons Row: Full width on mobile, inline on desktop */}
        <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-between gap-2.5 sm:gap-3 pt-1 sm:pt-2">
          {/* Detailed Specs Modal Trigger */}
          <button
            type="button"
            onClick={() => onOpenSpecs(service)}
            className="w-full xs:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:py-3 rounded-full bg-[#181818] hover:bg-[#222222] border border-white/10 text-white font-mono text-xs uppercase tracking-wider transition-colors"
            title="View Deliverables & Tech Stack"
          >
            <Info className="w-3.5 h-3.5 text-[#FF5A1F]" />
            <span>FULL SPECS</span>
          </button>

          {/* Primary Commission CTA */}
          <button
            type="button"
            onClick={() => onEnquire(service.id)}
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full font-extrabold text-xs uppercase tracking-wider text-black transition-all duration-300 hover:bg-white shrink-0 shadow-lg"
            style={{ backgroundColor: service.accent }}
          >
            <span>START BRIEF</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
