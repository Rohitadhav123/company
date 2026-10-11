"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Check if device supports touch, is on mobile/tablet viewport, or user prefers reduced motion
    const touchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth < 1024;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (touchDevice || prefersReducedMotion) {
      setIsTouch(true);
      return;
    }
    
    setIsTouch(false);

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, input, textarea, select, [data-cursor='hover']");
      if (interactive) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer follow ring */}
      <div
        className={`fixed top-0 left-0 rounded-full transition-transform duration-150 ease-out border pointer-events-none ${
          isHovered
            ? "border-[#FF5A1F] bg-[#FF5A1F]/15 scale-150"
            : isClicking
            ? "border-white/80 scale-90"
            : "border-white/30 scale-100"
        }`}
        style={{
          width: isHovered ? "48px" : "32px",
          height: isHovered ? "48px" : "32px",
          transform: `translate3d(${pos.x - (isHovered ? 24 : 16)}px, ${pos.y - (isHovered ? 24 : 16)}px, 0)`,
          transitionProperty: "transform, width, height, background-color, border-color",
          transitionDuration: "120ms, 200ms, 200ms, 200ms, 200ms",
        }}
      />
      {/* Inner precise dot */}
      <div
        className={`fixed top-0 left-0 rounded-full bg-[#FF5A1F] pointer-events-none ${
          isHovered ? "scale-0" : "scale-100"
        }`}
        style={{
          width: "6px",
          height: "6px",
          transform: `translate3d(${pos.x - 3}px, ${pos.y - 3}px, 0)`,
          transition: "transform 40ms linear, scale 150ms ease",
        }}
      />
    </div>
  );
}
