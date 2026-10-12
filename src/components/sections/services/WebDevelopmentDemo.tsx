"use client";

import { useState } from "react";
import Image from "next/image";
import { Monitor, Smartphone, Layers, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export default function WebDevelopmentDemo() {
  const [isProduction, setIsProduction] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);

  return (
    <div className="relative w-full h-[380px] sm:h-[420px] rounded-2xl bg-[#090909] border border-white/10 overflow-hidden flex flex-col justify-between p-3 xs:p-4 sm:p-5 select-none group">
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      {/* Top HUD Bar */}
      <div className="relative z-20 flex items-center justify-between gap-2 border-b border-white/10 pb-2.5 sm:pb-3">
        {/* Browser Mockup Window Controls */}
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 shrink-0" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shrink-0" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shrink-0" />
          <span className="ml-1.5 text-[9px] sm:text-[10px] font-mono text-[#A3A3A3] truncate max-w-[90px] xs:max-w-[130px] sm:max-w-none">
            tekzo.digital/live-preview
          </span>
        </div>

        {/* Responsive & Wireframe Mode Toggles */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          {/* Wireframe vs Production Toggle */}
          <button
            type="button"
            onClick={() => setIsProduction(!isProduction)}
            className={`px-2 py-1 rounded-lg text-[9px] sm:text-[10px] font-mono uppercase tracking-wider border transition-colors flex items-center gap-1 ${
              isProduction
                ? "bg-[#181818] text-[#FF5A1F] border-[#FF5A1F]/40 font-bold"
                : "bg-white/10 text-white border-white/20"
            }`}
          >
            <Layers className="w-3 h-3" />
            <span className="hidden xs:inline">{isProduction ? "PRODUCTION" : "WIREFRAME"}</span>
            <span className="xs:hidden">{isProduction ? "PROD" : "WIRE"}</span>
          </button>

          {/* Device Responsive Toggle */}
          <div className="flex items-center bg-[#141414] border border-white/10 rounded-lg p-0.5">
            <button
              type="button"
              onClick={() => setIsMobileView(false)}
              className={`p-1 rounded ${
                !isMobileView ? "bg-white/20 text-white" : "text-[#737373] hover:text-white"
              }`}
              title="Desktop View"
            >
              <Monitor className="w-3 h-3" />
            </button>
            <button
              type="button"
              onClick={() => setIsMobileView(true)}
              className={`p-1 rounded ${
                isMobileView ? "bg-[#FF5A1F] text-black" : "text-[#737373] hover:text-white"
              }`}
              title="Mobile Responsive View"
            >
              <Smartphone className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* The Morphing Browser / Device Viewport */}
      <div className="relative z-10 flex-1 my-2 sm:my-3 flex items-center justify-center overflow-hidden">
        <div
          className={`h-full max-h-[290px] rounded-xl border transition-all duration-700 ease-out flex flex-col justify-between overflow-hidden shadow-2xl relative ${
            isMobileView
              ? "w-[170px] xs:w-[190px] sm:w-[210px] bg-[#0c0c0c] border-[#FF5A1F]/40 p-2.5 xs:p-3"
              : "w-full max-w-[480px] bg-[#101010] border-white/15 p-3 sm:p-4"
          } ${
            !isProduction ? "bg-[#0b0b0b] border-dashed border-white/20" : ""
          }`}
        >
          {/* Top Simulated Web Nav */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-1.5">
              <div className="relative w-3.5 h-3.5 rounded overflow-hidden bg-black shrink-0 border border-white/10">
                <Image
                  src="/logo/company_logo.jpeg"
                  alt="Tekzo"
                  fill
                  sizes="14px"
                  className="object-cover"
                />
              </div>
              <span className="font-mono font-black text-xs text-white">TEKZO</span>
              {!isMobileView && (
                <div className="hidden sm:flex items-center gap-2 text-[9px] font-mono text-[#737373]">
                  <span>/WORK</span>
                  <span>/ABOUT</span>
                  <span>/CONTACT</span>
                </div>
              )}
            </div>

            {isProduction ? (
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[9px] font-mono text-emerald-400 font-bold">100/100 CWV</span>
              </div>
            ) : (
              <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest">
                [GRID: 12-COL]
              </span>
            )}
          </div>

          {/* Central Body: Wireframe Skeletons vs High-Fidelity UI */}
          <div className="my-auto py-2 flex flex-col gap-2">
            {isProduction ? (
              <>
                {/* Hero Headline & CTA in Production */}
                <div>
                  <div className="inline-block px-2 py-0.5 rounded-full bg-[#FF5A1F]/15 border border-[#FF5A1F]/30 text-[8px] font-mono text-[#FF5A1F] uppercase font-bold mb-1">
                    NEXT.JS 15 ENGINE
                  </div>
                  <h5 className="text-xs sm:text-sm font-black uppercase text-white tracking-tight leading-tight">
                    DIGITAL FLAGGED FOR IMPACT.
                  </h5>
                </div>

                {/* Card grid (adapts to mobile/desktop) */}
                <div
                  className={`grid gap-2 ${
                    isMobileView ? "grid-cols-1" : "grid-cols-2"
                  }`}
                >
                  <div className="p-2 rounded-lg bg-[#181818] border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-[8px] font-mono text-[#A3A3A3]">SPEED INDEX</div>
                      <div className="text-xs font-mono font-bold text-white">0.4s FCP</div>
                    </div>
                    <Sparkles className="w-3.5 h-3.5 text-[#FF5A1F]" />
                  </div>

                  <div className="p-2 rounded-lg bg-[#181818] border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-[8px] font-mono text-[#A3A3A3]">MOTION FPS</div>
                      <div className="text-xs font-mono font-bold text-[#00F0FF]">60 FPS HW</div>
                    </div>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00F0FF]" />
                  </div>
                </div>

                {/* Primary Button */}
                <div className="pt-1">
                  <div className="w-full py-2 rounded-lg bg-[#FF5A1F] text-black font-extrabold text-[9px] uppercase tracking-wider text-center flex items-center justify-center gap-1 shadow-md hover:bg-white transition-colors cursor-pointer">
                    <span>EXPLORE PRODUCTION SITE</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </>
            ) : (
              /* Wireframe Mode */
              <div className="space-y-2">
                {/* Wireframe Placeholder Boxes */}
                <div className="h-4 bg-white/10 rounded w-3/4 animate-pulse" />
                <div className="h-3 bg-white/5 rounded w-1/2" />
                <div
                  className={`grid gap-2 pt-2 ${
                    isMobileView ? "grid-cols-1" : "grid-cols-2"
                  }`}
                >
                  <div className="h-14 rounded border border-dashed border-cyan-400/40 bg-cyan-950/20 p-2 flex flex-col justify-between">
                    <span className="text-[7px] font-mono text-cyan-300">
                      [div.hero_metric_a]
                    </span>
                    <div className="h-1.5 bg-cyan-400/30 rounded w-2/3" />
                  </div>
                  <div className="h-14 rounded border border-dashed border-cyan-400/40 bg-cyan-950/20 p-2 flex flex-col justify-between">
                    <span className="text-[7px] font-mono text-cyan-300">
                      [div.hero_metric_b]
                    </span>
                    <div className="h-1.5 bg-cyan-400/30 rounded w-3/4" />
                  </div>
                </div>
                <div className="h-7 border border-dashed border-white/20 rounded flex items-center justify-center">
                  <span className="text-[8px] font-mono text-[#A3A3A3]">
                    [button.cta_primary]
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Viewport Status Tag */}
          <div className="border-t border-white/10 pt-1.5 flex items-center justify-between text-[8px] font-mono text-[#737373]">
            <span>VIEWPORT: {isMobileView ? "390 × 844 (MOBILE)" : "1440 × 900 (DESKTOP)"}</span>
            <span className="text-[#FF5A1F]">
              {isProduction ? "HIGH-FIDELITY" : "WIREFRAME STAGE"}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Switcher & State Details */}
      <div className="relative z-20 flex items-center justify-between gap-2 pt-2 border-t border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-[#737373]">INTERACTIONS:</span>
          <button
            type="button"
            onClick={() => {
              setIsProduction(!isProduction);
            }}
            className="text-[10px] font-mono text-[#FF5A1F] hover:underline"
          >
            {isProduction ? "REVEAL WIREFRAME BLUEPRINT" : "BUILD TO PRODUCTION"}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileView(!isMobileView)}
          className="inline-flex items-center gap-1 text-[10px] font-mono text-[#00F0FF] hover:underline"
        >
          <span>MORPH TO {isMobileView ? "DESKTOP" : "MOBILE"}</span>
        </button>
      </div>
    </div>
  );
}
