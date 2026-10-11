"use client";

import { useState, useEffect } from "react";
import { Sparkles, Layers, Sliders, RefreshCw, Check } from "lucide-react";

interface Composition {
  id: number;
  name: string;
  theme: string;
  accent: string;
  headline: string;
  subhead: string;
  prompt: string;
  tag: string;
}

const COMPOSITIONS: Composition[] = [
  {
    id: 1,
    name: "CHRONO-X",
    theme: "Luxury Kinetic Chronograph",
    accent: "#FF5A1F",
    headline: "BEYOND PRECISION.",
    subhead: "TITANIUM CASE • CO-AXIAL ESCAPEMENT • 300M",
    prompt: "/imagine luxury titanium chronograph floating in zero-gravity, vivid orange luminescent dials, cinematic lighting, 8k --v 6.1",
    tag: "AERO-ENGINEERING",
  },
  {
    id: 2,
    name: "AMBER NOIR",
    theme: "Haute Parfumerie Flacon",
    accent: "#E5A93C",
    headline: "ELIXIR DE NUIT.",
    subhead: "RARE OUD • SPICED AMBER • SMOKED CEDAR",
    prompt: "/imagine bespoke frosted glass perfume flacon, radiant amber liquid glow, golden silk smoke tendrils, studio lighting, hyperreal --ar 4:5",
    tag: "HAUTE LUXURY",
  },
  {
    id: 3,
    name: "CYBER-STRIDE",
    theme: "Bio-Mechanical Runner",
    accent: "#00F0FF",
    headline: "UNBOUND VELOCITY.",
    subhead: "REACTIVE FOAM • CARBON SPRING CHASSIS • 180G",
    prompt: "/imagine futuristic aerodynamic sneaker bursting through neon particle soundwave, kinetic diagonal motion, octane render --v 6.1",
    tag: "KINETIC WEAR",
  },
];

export default function PosterDesignDemo() {
  const [activeCompIndex, setActiveCompIndex] = useState(0);
  const [isRendered, setIsRendered] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeComp = COMPOSITIONS[activeCompIndex];

  // Switch composition smoothly
  const handleSelectComp = (index: number) => {
    if (index === activeCompIndex || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCompIndex(index);
      setIsTransitioning(false);
    }, 280);
  };

  return (
    <div className="relative w-full h-[380px] sm:h-[420px] rounded-2xl bg-[#090909] border border-white/10 overflow-hidden flex flex-col justify-between p-3 xs:p-4 sm:p-5 select-none group">
      {/* Background Matrix Blueprint Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Top HUD: Controls & Prompt Status */}
      <div className="relative z-20 flex items-center justify-between gap-2 border-b border-white/10 pb-2.5 sm:pb-3">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse shrink-0" />
          <span className="text-[9px] sm:text-[10px] font-mono tracking-wider uppercase text-white/90 font-bold truncate">
            CANVAS STAGE {activeComp.id}/3
          </span>
          <span className="hidden md:inline-block text-[10px] font-mono text-[#737373]">
            [{isRendered ? "POLISHED ADVERTISING MASTER" : "BLUEPRINT DRAFTING GRID"}]
          </span>
        </div>

        {/* State Toggle: Wireframe Blueprint vs Rendered Master */}
        <button
          type="button"
          onClick={() => setIsRendered(!isRendered)}
          className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-lg bg-[#141414] hover:bg-[#1f1f1f] border border-white/10 text-[9px] sm:text-[10px] font-mono text-white transition-colors shrink-0"
          title="Toggle Canvas Mode"
        >
          <Layers className="w-3 h-3 text-[#FF5A1F]" />
          <span className="hidden xs:inline">{isRendered ? "SHOW BLUEPRINT" : "SHOW MASTER"}</span>
          <span className="xs:hidden">{isRendered ? "DRAFT" : "MASTER"}</span>
        </button>
      </div>

      {/* The Central Interactive Poster Canvas */}
      <div className="relative z-10 flex-1 my-3 flex items-center justify-center overflow-hidden">
        <div
          className={`relative w-full max-w-[280px] sm:max-w-[320px] h-full max-h-[300px] rounded-xl border transition-all duration-500 overflow-hidden flex flex-col justify-between p-5 shadow-2xl ${
            isTransitioning ? "opacity-30 scale-95" : "opacity-100 scale-100"
          } ${
            isRendered
              ? "bg-gradient-to-b from-[#161616] via-[#101010] to-[#0a0a0a] border-white/20 shadow-[0_0_35px_rgba(255,90,31,0.15)]"
              : "bg-[#0b0b0b] border-dashed border-[#FF5A1F]/50"
          }`}
          style={{
            borderColor: isRendered ? `${activeComp.accent}50` : undefined,
          }}
        >
          {/* Blueprint Drafting Overlays (When in Wireframe mode) */}
          {!isRendered && (
            <div className="absolute inset-0 p-3 pointer-events-none flex flex-col justify-between">
              {/* Corner crosshairs */}
              <div className="flex justify-between text-[8px] font-mono text-[#FF5A1F]/60">
                <span>+ [0,0]</span>
                <span>+ [1200,0]</span>
              </div>
              {/* Composition alignment box */}
              <div className="border border-dashed border-[#FF5A1F]/30 h-36 rounded-lg flex items-center justify-center">
                <span className="text-[9px] font-mono text-[#FF5A1F] uppercase bg-black/80 px-2 py-0.5 rounded border border-[#FF5A1F]/30 animate-pulse">
                  NEURAL GENERATION QUEUE: {activeComp.name}
                </span>
              </div>
              <div className="flex justify-between text-[8px] font-mono text-[#FF5A1F]/60">
                <span>+ [0,1600]</span>
                <span>+ [1200,1600]</span>
              </div>
            </div>
          )}

          {/* Rendered Mode Ambient Glow Lighting */}
          {isRendered && (
            <>
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[60px] opacity-30 pointer-events-none transition-all duration-700"
                style={{ backgroundColor: activeComp.accent }}
              />
              <div
                className="absolute -bottom-16 -left-16 w-44 h-44 rounded-full blur-[60px] opacity-20 pointer-events-none transition-all duration-700"
                style={{ backgroundColor: activeComp.accent }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </>
          )}

          {/* Poster Top: Editorial Category & Badge */}
          <div className="relative z-10 flex items-center justify-between">
            <span
              className="text-[9px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded border"
              style={{
                color: activeComp.accent,
                borderColor: `${activeComp.accent}40`,
                backgroundColor: `${activeComp.accent}15`,
              }}
            >
              {activeComp.tag}
            </span>
            <span className="text-[9px] font-mono text-[#737373]">
              XYZ EDITION NO. {activeComp.id}
            </span>
          </div>

          {/* Poster Center: Dynamic Visual Artwork */}
          <div className="relative z-10 my-auto flex flex-col items-center justify-center py-2">
            {isRendered ? (
              <div className="relative w-full flex flex-col items-center">
                {/* 3D Visual Centerpiece Representation */}
                <div
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-xl"
                  style={{
                    background: `radial-gradient(circle at 35% 30%, ${activeComp.accent}30, #080808 80%)`,
                    borderColor: `${activeComp.accent}50`,
                  }}
                >
                  {/* Dynamic Silhouette by composition */}
                  {activeCompIndex === 0 && (
                    <div className="relative flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border-2 border-white/80 flex items-center justify-center shadow-lg">
                        <div
                          className="w-12 h-12 rounded-full border border-dashed animate-spin"
                          style={{
                            borderColor: activeComp.accent,
                            animationDuration: "16s",
                          }}
                        />
                        <div
                          className="absolute w-6 h-0.5 bg-[#FF5A1F] rounded origin-left -rotate-45"
                          style={{ left: "50%" }}
                        />
                        <div
                          className="absolute w-4 h-0.5 bg-white rounded origin-left rotate-45"
                          style={{ left: "50%" }}
                        />
                      </div>
                    </div>
                  )}

                  {activeCompIndex === 1 && (
                    <div className="relative flex flex-col items-center justify-center">
                      <div className="w-8 h-3 rounded-t-sm bg-amber-200/60 border border-white/40 mb-0.5" />
                      <div className="w-14 h-16 rounded-xl bg-gradient-to-b from-amber-500/40 via-amber-700/30 to-black border border-amber-300/50 flex items-center justify-center shadow-lg">
                        <span className="text-[7px] font-serif tracking-widest text-amber-200 uppercase">
                          XYZ
                        </span>
                      </div>
                    </div>
                  )}

                  {activeCompIndex === 2 && (
                    <div className="relative flex items-center justify-center">
                      <div className="w-16 h-8 rounded-full border border-cyan-400/60 bg-gradient-to-r from-cyan-500/30 to-transparent -rotate-12 flex items-center justify-between px-2">
                        <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#00F0FF]" />
                        <div className="w-6 h-1 bg-white/60 rounded" />
                      </div>
                    </div>
                  )}

                  {/* High-Gloss Sheen Sweep Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
                </div>

                {/* Floating prompt chip */}
                <div className="mt-2 text-[8px] font-mono text-[#A3A3A3] text-center max-w-[200px] truncate px-2 py-0.5 rounded bg-black/60 border border-white/10">
                  {activeComp.name} • 8K Master
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-4">
                <div className="w-16 h-16 rounded-xl border border-dashed border-[#FF5A1F]/50 flex items-center justify-center mb-2">
                  <Sliders className="w-6 h-6 text-[#FF5A1F]/70 animate-spin" />
                </div>
                <span className="text-[10px] font-mono text-[#D4D4D4]">
                  SYNTHESIZING PROMPT
                </span>
                <span className="text-[8px] font-mono text-[#737373] mt-1">
                  Applying style matrix & hyper-res upscale
                </span>
              </div>
            )}
          </div>

          {/* Poster Bottom: Typography & Campaign Headline */}
          <div className="relative z-10 border-t border-white/10 pt-2">
            <h4 className="text-sm sm:text-base font-black uppercase text-white tracking-tight leading-none mb-1">
              {activeComp.headline}
            </h4>
            <p className="text-[8px] sm:text-[9px] font-mono text-[#A3A3A3] tracking-wide">
              {activeComp.subhead}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Composition Switcher Bar */}
      <div className="relative z-20 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 pt-2 border-t border-white/10">
        <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
          <span className="text-[9px] sm:text-[10px] font-mono text-[#737373] mr-0.5 sm:mr-1">VARIANTS:</span>
          {COMPOSITIONS.map((c, idx) => (
            <button
              key={c.id}
              type="button"
              onClick={() => handleSelectComp(idx)}
              className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[9px] sm:text-[10px] font-mono uppercase tracking-wider transition-all ${
                activeCompIndex === idx
                  ? "bg-white text-black font-bold shadow-md"
                  : "bg-[#141414] text-[#A3A3A3] hover:text-white hover:bg-[#1a1a1a] border border-white/5"
              }`}
            >
              {c.name.split("-")[0]}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => handleSelectComp((activeCompIndex + 1) % COMPOSITIONS.length)}
          className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-mono text-[#FF5A1F] hover:underline shrink-0"
        >
          <RefreshCw className="w-3 h-3" />
          <span className="hidden xs:inline">CYCLE COMPOSITION</span>
          <span className="xs:hidden">CYCLE</span>
        </button>
      </div>
    </div>
  );
}
