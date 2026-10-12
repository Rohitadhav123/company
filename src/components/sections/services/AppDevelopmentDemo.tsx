"use client";

import { useState, useEffect } from "react";
import {
  Smartphone,
  TrendingUp,
  ArrowUpRight,
  ArrowDownLeft,
  Sparkles,
  Play,
  Pause,
  Sliders,
  Wifi,
  Battery,
  ShieldCheck,
} from "lucide-react";

export default function AppDevelopmentDemo() {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);

  // Auto transition screens gently when idle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScreenIndex((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const screens = [
    { id: 0, label: "FINTECH VAULT", accent: "#38BDF8" },
    { id: 1, label: "AI STUDIO", accent: "#FF5A1F" },
    { id: 2, label: "SPATIAL AUDIO", accent: "#A855F7" },
  ];

  return (
    <div className="relative w-full h-[380px] sm:h-[420px] rounded-2xl bg-[#090909] border border-white/10 overflow-hidden flex flex-col justify-between p-4 sm:p-5 select-none group">
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      {/* Top HUD Bar */}
      <div className="relative z-20 flex items-center justify-between gap-2 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
          <span className="text-[10px] font-mono tracking-wider uppercase text-white/90 font-bold">
            MOBILE RUNTIME: {screens[activeScreenIndex].label}
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono text-[#737373]">
            [60 FPS NATIVE]
          </span>
        </div>

        {/* Screen Switcher Tabs */}
        <div className="flex items-center gap-1">
          {screens.map((screen, idx) => (
            <button
              key={screen.id}
              type="button"
              onClick={() => setActiveScreenIndex(idx)}
              className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider transition-all ${
                activeScreenIndex === idx
                  ? "bg-white text-black font-bold shadow-md"
                  : "bg-[#141414] text-[#A3A3A3] hover:text-white"
              }`}
            >
              0{idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* The Central Realistic Smartphone Chassis */}
      <div className="relative z-10 flex-1 my-2 flex items-center justify-center overflow-hidden">
        <div className="relative w-[190px] sm:w-[210px] h-full max-h-[295px] rounded-[32px] bg-[#0c0c0c] border-[3px] border-[#252525] p-2.5 shadow-2xl flex flex-col justify-between overflow-hidden">
          {/* Dynamic Ambient Edge Glow */}
          <div
            className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-[40px] opacity-25 pointer-events-none transition-all duration-700"
            style={{ backgroundColor: screens[activeScreenIndex].accent }}
          />

          {/* Phone Status Bar & Dynamic Island */}
          <div className="relative z-20 flex items-center justify-between px-2 pt-0.5 pb-2 text-[8px] font-mono text-[#A3A3A3]">
            <span>9:41</span>
            {/* Dynamic Island Pill */}
            <div className="w-16 h-3 rounded-full bg-black border border-white/15 flex items-center justify-between px-1.5 shadow-inner">
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
              <div className="flex gap-0.5 items-center">
                <span className="w-0.5 h-1.5 bg-[#FF5A1F] rounded-full animate-pulse" />
                <span className="w-0.5 h-2 bg-white rounded-full animate-pulse" />
              </div>
            </div>
            <div className="flex items-center gap-1 text-[9px]">
              <Wifi className="w-2.5 h-2.5" />
              <Battery className="w-3 h-3 text-white" />
            </div>
          </div>

          {/* SCREEN CONTENT AREA WITH SMOOTH SLIDE/FADE TRANSITIONS */}
          <div className="relative z-10 flex-1 flex flex-col justify-between overflow-hidden py-1">
            {/* SCREEN 1: FINTECH ASSET VAULT */}
            {activeScreenIndex === 0 && (
              <div className="flex flex-col justify-between h-full animate-in fade-in zoom-in-95 duration-300">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[8px] font-mono text-[#A3A3A3] uppercase">
                      Total Portfolio
                    </span>
                    <span className="text-[8px] font-mono text-emerald-400 font-bold">
                      +10.6%
                    </span>
                  </div>
                  <div className="text-base font-black text-white font-mono tracking-tight">
                    $148,920.00
                  </div>

                  {/* Sparkline Chart */}
                  <div className="h-9 my-2 rounded bg-[#161616] p-1 border border-white/5 flex items-end">
                    <svg className="w-full h-full" viewBox="0 0 100 30">
                      <path
                        d="M0,25 Q20,10 40,18 T70,8 T100,2"
                        fill="none"
                        stroke="#38BDF8"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                {/* Touch Action Buttons */}
                <div className="grid grid-cols-3 gap-1 pt-1">
                  <div className="p-1 rounded bg-[#181818] border border-white/10 text-center">
                    <ArrowUpRight className="w-2.5 h-2.5 text-[#38BDF8] mx-auto mb-0.5" />
                    <span className="text-[7px] font-mono text-white block">SEND</span>
                  </div>
                  <div className="p-1 rounded bg-[#181818] border border-white/10 text-center">
                    <ArrowDownLeft className="w-2.5 h-2.5 text-emerald-400 mx-auto mb-0.5" />
                    <span className="text-[7px] font-mono text-white block">RECV</span>
                  </div>
                  <div className="p-1 rounded bg-[#38BDF8] text-black text-center font-bold">
                    <ShieldCheck className="w-2.5 h-2.5 mx-auto mb-0.5" />
                    <span className="text-[7px] font-mono block">STAKE</span>
                  </div>
                </div>
              </div>
            )}

            {/* SCREEN 2: AI CREATIVE STUDIO & PROMPT LAB */}
            {activeScreenIndex === 1 && (
              <div className="flex flex-col justify-between h-full animate-in fade-in zoom-in-95 duration-300">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[8px] font-mono text-[#FF5A1F] uppercase font-bold">
                      FLUX PRO 1.1
                    </span>
                    <span className="text-[7px] font-mono text-[#A3A3A3]">4K ULTRA</span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-[#161616] border border-white/10 text-[8px] font-mono text-white/90 leading-tight">
                    &quot;Cybernetic aerodynamic mask, luminescent orange circuits...&quot;
                  </div>
                </div>

                {/* Concept Preview Box */}
                <div className="my-2 h-16 rounded-xl bg-gradient-to-tr from-[#FF5A1F]/30 via-[#FF7844]/20 to-black border border-[#FF5A1F]/40 flex items-center justify-center relative overflow-hidden">
                  <Sparkles className="w-5 h-5 text-[#FF5A1F] animate-spin" style={{ animationDuration: "8s" }} />
                  <span className="absolute bottom-1 right-1 px-1 py-0.2 rounded bg-black/80 text-[6px] font-mono text-white">
                    UPSCALE 8K
                  </span>
                </div>

                <div className="w-full py-1.5 rounded bg-[#FF5A1F] text-black font-extrabold text-[8px] font-mono text-center uppercase tracking-wider">
                  GENERATE VARIATION
                </div>
              </div>
            )}

            {/* SCREEN 3: SPATIAL AUDIO EXPERIENCE */}
            {activeScreenIndex === 2 && (
              <div className="flex flex-col justify-between h-full animate-in fade-in zoom-in-95 duration-300">
                <div className="flex flex-col items-center">
                  {/* Rotating Vinyl/Album Disc */}
                  <div className="w-14 h-14 rounded-full border border-purple-500/40 bg-gradient-to-tr from-purple-900/40 to-black flex items-center justify-center my-1 relative shadow-lg">
                    <div className="w-5 h-5 rounded-full bg-purple-500 shadow-[0_0_12px_#A855F7] animate-pulse" />
                  </div>
                  <span className="text-[9px] font-black uppercase text-white tracking-tight mt-1">
                    KINETIC NOISE 04
                  </span>
                  <span className="text-[7px] font-mono text-purple-300">
                    Tekzo Audio Lab • 320kbps
                  </span>
                </div>

                {/* Animated Spectrum Equalizer */}
                <div className="flex items-end justify-center gap-1 h-4 my-1">
                  {[20, 70, 45, 90, 60, 30, 85, 40].map((h, i) => (
                    <div
                      key={i}
                      className="w-1 bg-purple-400 rounded-t-sm animate-pulse"
                      style={{
                        height: `${h}%`,
                        animationDuration: `${0.4 + i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>

                {/* Playback Controls */}
                <div className="flex items-center justify-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="p-1 rounded-full bg-white text-black"
                  >
                    {isPlayingAudio ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="relative z-20 flex justify-center pt-1">
            <div className="w-12 h-1 rounded-full bg-white/30" />
          </div>
        </div>
      </div>

      {/* Bottom Switcher & State Details */}
      <div className="relative z-20 flex items-center justify-between gap-2 pt-2 border-t border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-mono text-[#737373]">SCREENS:</span>
          {screens.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveScreenIndex(idx)}
              className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider transition-colors ${
                activeScreenIndex === idx
                  ? "bg-[#38BDF8] text-black font-bold"
                  : "bg-[#141414] text-[#A3A3A3] hover:text-white"
              }`}
            >
              {s.label.split(" ")[0]}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setActiveScreenIndex((activeScreenIndex + 1) % 3)}
          className="text-[10px] font-mono text-[#38BDF8] hover:underline"
        >
          NEXT SCREEN →
        </button>
      </div>
    </div>
  );
}
