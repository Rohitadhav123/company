"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Play, Info, CheckCircle2, Film } from "lucide-react";
import gsap from "gsap";
import ThreeBackground from "@/components/ui/ThreeBackground";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLHeadingElement>(null);
  const headlineLine2Ref = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  const [videoError, setVideoError] = useState<boolean>(false);
  const [showVideoInfoModal, setShowVideoInfoModal] = useState<boolean>(false);

  // GSAP Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check reduced motion preference
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        headlineLine1Ref.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, delay: 0.2 }
      )
        .fromTo(
          headlineLine2Ref.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1 },
          "-=0.85"
        )
        .fromTo(
          subtextRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.7"
        )
        .fromTo(
          ctaContainerRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          badgeRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.6 },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Video State Management
  const handleVideoLoaded = () => {
    setVideoLoaded(true);
    setVideoError(false);
  };

  const handleVideoError = () => {
    setVideoError(true);
    setVideoLoaded(false);
  };

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-transparent"
      id="hero"
    >
      {/* BACKGROUND LAYER 1: VIDEO (Custom user video path: /videos/tekzo-hero.mp4) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={handleVideoLoaded}
          onError={handleVideoError}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            videoLoaded ? "opacity-75 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <source src="/videos/tekzo-hero.mp4" type="video/mp4" />
        </video>

        {/* BACKGROUND LAYER 2: Graceful Cinematic Fallback when video is awaiting placement */}
        {(!videoLoaded || videoError) && (
          <div className="absolute inset-0 w-full h-full bg-[#080808]">
            {/* Interactive 3D WebGL Particle Constellation */}
            <ThreeBackground density="medium" interactive={true} />

            {/* Cinematic Animated Glow Spheres */}
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#FF5A1F]/10 blur-[130px] pointer-events-none animate-pulse-subtle" />
            <div className="absolute -bottom-40 -right-40 w-[650px] h-[650px] rounded-full bg-[#FF5A1F]/8 blur-[150px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full bg-gradient-to-tr from-white/3 to-transparent blur-[160px] pointer-events-none" />

            {/* Subtle Matrix Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-25" />
          </div>
        )}

        {/* Readability Overlays: Radial vignette and dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#080808]/40 to-[#080808]/90 pointer-events-none" />
      </div>

      {/* FOREGROUND: Hero Headline & Messaging */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 w-full my-auto py-12 flex flex-col justify-center">
        {/* Category Pill / Identity Sub-badge */}
        {/* Studio Badge with Official Logo */}
        <div className="flex items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#151515]/90 border border-white/10 backdrop-blur-md">
            <div className="relative w-5 h-5 rounded-md overflow-hidden bg-black shrink-0 border border-white/10">
              <Image
                src="/logo/company_logo.jpeg"
                alt="Tekzo Logo"
                fill
                sizes="20px"
                className="object-cover"
              />
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF] animate-pulse" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-white/90">
              TEKZO DIGITAL STUDIO
            </span>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-[#A3A3A3]">
            AI CREATIVE • WEB • MOBILE • AUTOMATION
          </span>
        </div>

        {/* Large Cinematic Headline with Fluid Responsive Scaling */}
        <div className="space-y-1 sm:space-y-3 mb-8">
          <h1
            ref={headlineLine1Ref}
            className="text-[32px] xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight sm:tracking-tighter uppercase text-white leading-[0.95] break-words"
          >
            WE MAKE DIGITAL
          </h1>
          <h1
            ref={headlineLine2Ref}
            className="text-[32px] xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight sm:tracking-tighter uppercase leading-[0.95] flex flex-wrap items-center gap-2 sm:gap-6 break-words"
          >
            <span className="text-orange-gradient drop-shadow-[0_0_35px_rgba(255,90,31,0.4)]">
              FEEL ALIVE.
            </span>
          </h1>
        </div>

        {/* Supporting Copy */}
        <p
          ref={subtextRef}
          className="max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-[#A3A3A3] font-normal leading-relaxed mb-8 sm:mb-10"
        >
          We create powerful digital experiences through AI creativity, modern
          websites, mobile apps, and innovative business solutions.
        </p>

        {/* Action Buttons: Full width on mobile, inline on desktop */}
        <div
          ref={ctaContainerRef}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 w-full sm:w-auto"
        >
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#FF5A1F] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:bg-white hover:shadow-[0_0_35px_rgba(255,90,31,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("work")}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#151515]/80 hover:bg-[#202020] border border-white/15 hover:border-[#FF5A1F] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F]"
          >
            <span>EXPLORE OUR WORK</span>
            <ArrowDown className="w-4 h-4 text-[#A3A3A3] group-hover:text-[#FF5A1F] transition-transform group-hover:translate-y-1" />
          </button>
        </div>
      </div>

      {/* BOTTOM FOOTER OF HERO: Live Video Status & Scroll Cue */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full flex flex-col sm:flex-row items-start sm:items-end justify-between pt-6 border-t border-white/10 gap-4">
        {/* Transparent Video Status Notice */}
        <div ref={badgeRef} className="flex flex-wrap items-center gap-2">
          {videoLoaded ? (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[10px] sm:text-[11px] font-mono text-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="hidden sm:inline">CUSTOM HERO VIDEO ACTIVE (/videos/tekzo-hero.mp4)</span>
              <span className="sm:hidden">HERO VIDEO ACTIVE</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151515] border border-[#FF5A1F]/30 text-[10px] sm:text-[11px] font-mono text-[#A3A3A3]">
              <Film className="w-3.5 h-3.5 text-[#FF5A1F] shrink-0" />
              <span className="hidden sm:inline">CINEMATIC CANVAS FALLBACK</span>
              <span className="sm:hidden">CANVAS FALLBACK</span>
              <button
                type="button"
                onClick={() => setShowVideoInfoModal(true)}
                className="text-[#FF5A1F] hover:underline flex items-center gap-1 font-bold ml-1"
                title="Click for video placement instructions"
              >
                <span>[Guide]</span>
                <Info className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

        {/* Scroll Indicator */}
        <div
          onClick={() => scrollToSection("work")}
          className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#A3A3A3] hover:text-[#FF5A1F] transition-colors cursor-pointer group"
        >
          <span>SCROLL TO DISCOVER</span>
          <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-[#FF5A1F]">
            <div className="w-1.5 h-2 rounded-full bg-[#FF5A1F] animate-bounce" />
          </div>
        </div>
      </div>

      {/* Video Placement Guide Modal (when user clicks information badge) */}
      {showVideoInfoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="max-w-md w-full bg-[#121212] border border-[#FF5A1F]/40 rounded-2xl p-6 shadow-2xl relative">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Film className="w-5 h-5 text-[#FF5A1F]" />
                <h3 className="font-mono font-bold text-white text-sm">
                  CUSTOM CANVA HERO VIDEO SETUP
                </h3>
              </div>
              <button
                onClick={() => setShowVideoInfoModal(false)}
                className="text-[#A3A3A3] hover:text-white text-xs font-mono p-1"
              >
                CLOSE [✕]
              </button>
            </div>
            <div className="text-xs text-[#A3A3A3] space-y-3 leading-relaxed">
              <p>
                The website is configured to automatically play your Canva cinematic video from:
              </p>
              <div className="p-3 bg-[#080808] border border-white/10 rounded-lg font-mono text-[11px] text-white select-all break-all">
                c:\company\public\videos\tekzo-hero.mp4
              </div>
              <p>
                <strong className="text-white">Public URL:</strong>{" "}
                <code className="text-[#FF5A1F]">/videos/tekzo-hero.mp4</code>
              </p>
              <p>
                Currently, the graceful visual fallback (interactive 3D particle constellation &
                ambient glow) is playing smoothly. Once you drop your exported{" "}
                <code className="text-white">tekzo-hero.mp4</code> file into that folder, it will
                instantly stream right here!
              </p>
            </div>
            <button
              onClick={() => setShowVideoInfoModal(false)}
              className="mt-6 w-full py-2.5 rounded-xl bg-[#FF5A1F] text-black font-bold text-xs uppercase tracking-wider"
            >
              GOT IT
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
