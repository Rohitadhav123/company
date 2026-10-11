"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, Film, Volume2, Sparkles, Video, RotateCw } from "lucide-react";

export default function AnimationVideoDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMotionScene, setIsMotionScene] = useState(true);
  const [timecode, setTimecode] = useState(14); // seconds
  const [showVectors, setShowVectors] = useState(false);

  // Timecode scrubber effect
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setTimecode((prev) => (prev >= 60 ? 0 : prev + 1));
    }, 250);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formattedSeconds = Math.floor(timecode / 10).toString().padStart(2, "0");
  const formattedMilliseconds = (timecode % 10).toString().padEnd(2, "0");

  return (
    <div className="relative w-full h-[380px] sm:h-[420px] rounded-2xl bg-[#090909] border border-white/10 overflow-hidden flex flex-col justify-between p-3 xs:p-4 sm:p-5 select-none group">
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      {/* Top Viewport Bar */}
      <div className="relative z-20 flex items-center justify-between gap-2 border-b border-white/10 pb-2.5 sm:pb-3">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div
            className={`w-2 h-2 rounded-full shrink-0 ${
              isPlaying ? "bg-red-500 animate-pulse" : "bg-zinc-600"
            }`}
          />
          <span className="text-[9px] sm:text-[10px] font-mono tracking-wider uppercase text-white/90 font-bold truncate">
            <span className="hidden sm:inline">REC: {isMotionScene ? "CINEMATIC 3D MOTION SCENE" : "STATIC KEYFRAME STILL"}</span>
            <span className="sm:hidden">REC: {isMotionScene ? "3D MOTION" : "STILL"}</span>
          </span>
          <span className="hidden md:inline-block text-[10px] font-mono text-[#737373]">
            [4K 60FPS • DCI-P3]
          </span>
        </div>

        {/* State Switcher */}
        <button
          type="button"
          onClick={() => setIsMotionScene(!isMotionScene)}
          className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-lg bg-[#141414] hover:bg-[#1f1f1f] border border-white/10 text-[9px] sm:text-[10px] font-mono text-white transition-colors shrink-0"
        >
          <Film className="w-3 h-3 text-[#FF5A1F]" />
          <span className="hidden xs:inline">{isMotionScene ? "SWITCH TO STILL" : "ACTIVATE 3D MOTION"}</span>
          <span className="xs:hidden">{isMotionScene ? "STILL" : "3D MOTION"}</span>
        </button>
      </div>

      {/* The Central Cinematic Video Viewport */}
      <div className="relative z-10 flex-1 my-3 rounded-xl border border-white/15 bg-black overflow-hidden flex items-center justify-center shadow-2xl">
        {/* Optical Flow Motion Vectors Overlay (if toggled) */}
        {showVectors && (
          <div className="absolute inset-0 pointer-events-none z-30 opacity-40">
            <svg className="w-full h-full stroke-orange-500/50" strokeWidth="1">
              <line x1="20%" y1="30%" x2="25%" y2="25%" strokeDasharray="2" />
              <line x1="40%" y1="60%" x2="48%" y2="52%" strokeDasharray="2" />
              <line x1="70%" y1="40%" x2="78%" y2="35%" strokeDasharray="2" />
              <line x1="60%" y1="70%" x2="65%" y2="75%" strokeDasharray="2" />
              <circle cx="25%" cy="25%" r="2" fill="#FF5A1F" />
              <circle cx="48%" cy="52%" r="2" fill="#FF5A1F" />
              <circle cx="78%" cy="35%" r="2" fill="#FF5A1F" />
            </svg>
          </div>
        )}

        {/* Anamorphic Volumetric Light Sweep (Active in Motion Scene) */}
        {isMotionScene && isPlaying && (
          <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
            <div className="absolute top-0 bottom-0 -left-1/2 w-full bg-gradient-to-r from-transparent via-[#FF5A1F]/20 to-transparent skew-x-[-25deg] animate-pulse-subtle pointer-events-none" />
            <div className="absolute top-1/4 -right-1/4 w-96 h-96 rounded-full bg-[#FF7844]/15 blur-[80px] pointer-events-none" />
          </div>
        )}

        {/* Floating Particles / Embers (Active in Motion Scene) */}
        {isMotionScene && isPlaying && (
          <div className="absolute inset-0 pointer-events-none z-20">
            <span className="absolute top-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-[#FF5A1F] blur-[0.5px] animate-ping" />
            <span className="absolute top-2/3 right-1/4 w-1 h-1 rounded-full bg-amber-300 blur-[0.5px] animate-pulse" />
            <span className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-white/60 blur-[1px] animate-bounce" />
          </div>
        )}

        {/* Central 3D Product Visual with Camera Pan / Dolly Effect */}
        <div
          className={`relative z-10 flex flex-col items-center justify-center transition-all duration-1000 ${
            isMotionScene && isPlaying
              ? "scale-105 rotate-[1deg]"
              : "scale-100 rotate-0"
          }`}
        >
          {/* Futuristic Floating Drone / Camera Ring Sculpture */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center">
            {/* Ambient Backlight Halo */}
            <div
              className={`absolute inset-0 rounded-full transition-all duration-700 ${
                isMotionScene
                  ? "bg-gradient-to-tr from-[#FF5A1F]/30 via-[#FF7844]/15 to-transparent blur-2xl scale-125"
                  : "bg-white/5 blur-md"
              }`}
            />

            {/* Orbiting Gyroscope Rings */}
            <div
              className={`w-24 h-24 sm:w-32 sm:h-32 rounded-full border-2 border-white/20 flex items-center justify-center ${
                isMotionScene && isPlaying ? "animate-spin" : ""
              }`}
              style={{ animationDuration: "14s" }}
            >
              <div
                className={`w-16 h-16 sm:w-24 sm:h-24 rounded-full border border-dashed border-[#FF5A1F] flex items-center justify-center ${
                  isMotionScene && isPlaying ? "animate-spin" : ""
                }`}
                style={{ animationDirection: "reverse", animationDuration: "9s" }}
              >
                {/* Center Core Cube */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-tr from-[#FF5A1F] via-[#FF7844] to-white shadow-[0_0_20px_#FF5A1F] flex items-center justify-center transform rotate-45">
                  <div className="w-3 h-3 rounded bg-black/80" />
                </div>
              </div>
            </div>

            {/* Camera Reticle Target Corners */}
            <div className="absolute inset-0 border border-white/10 rounded-lg pointer-events-none flex flex-col justify-between p-1.5">
              <div className="flex justify-between">
                <span className="w-2 h-2 border-t border-l border-[#FF5A1F]" />
                <span className="w-2 h-2 border-t border-r border-[#FF5A1F]" />
              </div>
              <div className="flex justify-between">
                <span className="w-2 h-2 border-b border-l border-[#FF5A1F]" />
                <span className="w-2 h-2 border-b border-r border-[#FF5A1F]" />
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 border border-white/10 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]" />
            <span className="text-[9px] font-mono tracking-widest uppercase text-white font-bold">
              {isMotionScene ? "CHOREOGRAPHED 3D CAMERA DOLLY" : "STATIC STUDIO STILL"}
            </span>
          </div>
        </div>

        {/* Live Audio Spectrum Equalizer (Reactive) */}
        {isMotionScene && isPlaying && (
          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-1 h-6 pointer-events-none opacity-60 z-20">
            {[40, 70, 25, 90, 60, 45, 80, 100, 30, 85, 65, 40, 95, 50, 75].map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-[#FF5A1F] to-white/80 rounded-t-sm transition-all duration-150"
                style={{
                  height: `${isPlaying ? Math.max(15, (height * ((timecode % 5) + 3)) / 8) : 10}%`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Video Player Scrubber & Playback Controls Bar */}
      <div className="relative z-20 flex flex-col gap-2 pt-1 border-t border-white/10">
        {/* Timeline Progress Track */}
        <div className="relative w-full h-1.5 bg-[#181818] rounded-full overflow-hidden cursor-pointer">
          <div
            className="h-full bg-gradient-to-r from-[#FF5A1F] to-[#FF7844] rounded-full transition-all duration-300 shadow-[0_0_8px_#FF5A1F]"
            style={{ width: `${(timecode / 60) * 100}%` }}
          />
        </div>

        <div className="flex items-center justify-between gap-2">
          {/* Left Play/Pause & Timecode */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-lg bg-[#181818] hover:bg-[#222222] text-white border border-white/10 transition-colors"
              title={isPlaying ? "Pause Video Preview" : "Play Video Preview"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>

            <span className="text-[10px] font-mono text-[#D4D4D4]">
              00:{formattedSeconds}:{formattedMilliseconds} <span className="text-[#737373]">/ 00:06:00</span>
            </span>
          </div>

          {/* Right Video Quality Badges & Motion Vectors Toggle */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowVectors(!showVectors)}
              className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider border transition-colors ${
                showVectors
                  ? "bg-[#FF5A1F] text-black border-[#FF5A1F] font-bold"
                  : "bg-[#141414] text-[#A3A3A3] border-white/5 hover:text-white"
              }`}
            >
              VECTORS
            </button>

            <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-black/60 border border-white/10 text-white font-bold">
              60 FPS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
