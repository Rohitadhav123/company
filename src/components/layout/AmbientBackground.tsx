"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseOpacity: number;
  pulseSpeed: number;
  pulsePhase: number;
}

export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle colors: vibrant orange, warm amber, soft metallic silver
    const colors = [
      "rgba(255, 90, 31, ", // Vivid Orange
      "rgba(255, 120, 68, ", // Light Orange
      "rgba(229, 169, 60, ", // Warm Amber
      "rgba(220, 220, 220, ", // Soft Silver
    ];

    const particleCount = prefersReducedMotion ? 15 : isMobile ? 22 : 45;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.15 : 0.25),
        vy: -0.15 - Math.random() * 0.25, // Gentle upward drift
        radius: 0.8 + Math.random() * (isMobile ? 1.4 : 2.0),
        color: colors[Math.floor(Math.random() * colors.length)],
        baseOpacity: 0.12 + Math.random() * 0.35,
        pulseSpeed: 0.01 + Math.random() * 0.02,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let animationFrameId: number;
    let isVisible = true;

    // Handle tab visibility to save CPU when inactive
    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === "visible";
      if (isVisible && !prefersReducedMotion) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    let lastTime = performance.now();

    const render = (now: number) => {
      if (!isVisible) return;

      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      // Render drifting particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx * 60 * delta;
          p.y += p.vy * 60 * delta;
          p.pulsePhase += p.pulseSpeed;

          // Wrap boundaries smoothly
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;
        }

        const opacity =
          p.baseOpacity + Math.sin(p.pulsePhase) * (p.baseOpacity * 0.4);

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0.05, opacity)})`;
        ctx.fill();

        // Very subtle faint proximity lines between nearby particles
        if (!isMobile && !prefersReducedMotion) {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 75) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(255, 90, 31, ${0.05 * (1 - dist / 75)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    if (prefersReducedMotion) {
      render(performance.now());
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Deep Atmospheric Gradient Base Mesh */}
      <div className="absolute inset-0 bg-[#080808]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,90,31,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_120%,rgba(255,90,31,0.06),transparent)]" />

      {/* 2. Softly Drifting Ambient Orange & Charcoal Light Orbs (CSS Keyframe Animated) */}
      {/* Orb 1: Upper Right / Work Level */}
      <div className="absolute top-[10%] -right-32 w-[550px] sm:w-[650px] h-[550px] sm:h-[650px] rounded-full bg-gradient-to-tr from-[#FF5A1F]/8 via-[#FF7844]/4 to-transparent blur-[140px] pointer-events-none animate-ambient-orb-1" />

      {/* Orb 2: Center Left / Services & Strategy Level */}
      <div className="absolute top-[45%] -left-40 w-[600px] sm:w-[700px] h-[600px] sm:h-[700px] rounded-full bg-gradient-to-br from-[#E5A93C]/6 via-[#FF5A1F]/4 to-transparent blur-[150px] pointer-events-none animate-ambient-orb-2" />

      {/* Orb 3: Lower Center / Process & Contact Level */}
      <div className="absolute top-[80%] left-1/3 -translate-x-1/2 w-[700px] sm:w-[850px] h-[500px] sm:h-[600px] rounded-full bg-gradient-to-t from-[#FF5A1F]/8 via-transparent to-transparent blur-[160px] pointer-events-none animate-ambient-orb-3" />

      {/* 3. Subtle Matrix Grid Overlay with Smooth Radial Vignette Mask */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 95%)",
        }}
      />

      {/* 4. Canvas with Subtle Drifting Particles & Constellations */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
      />

      {/* 5. Edge Vignette for Cinematic Frame Depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/50 via-transparent to-[#080808]/50 pointer-events-none" />
    </div>
  );
}
