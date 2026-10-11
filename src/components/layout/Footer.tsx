"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowUpRight, Mail, MessageCircle, Globe } from "lucide-react";

export default function Footer() {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-transparent pt-20 pb-12 overflow-hidden">
      {/* Seamless Section Top Gradient Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent pointer-events-none" />

      {/* Upward Dark Vignette & Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060606]/80 to-[#040404] pointer-events-none -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-[#FF5A1F]/6 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 relative z-10">
        {/* Massive Typographic Branding Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-10 sm:pb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl sm:text-6xl font-black font-mono tracking-widest text-white">
                XYZ
              </span>
              <span className="w-3 h-3 rounded-full bg-[#FF5A1F] shadow-[0_0_12px_#FF5A1F]" />
            </div>
            <p className="text-[#A3A3A3] text-sm sm:text-base max-w-md leading-relaxed">
              We make digital feel alive through synthetic AI art direction,
              cinematic web design, fluid mobile applications, and intelligent business automations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 w-full sm:w-auto">
            <div className="bg-[#111111] border border-white/10 px-4 xs:px-5 py-3 rounded-2xl flex items-center justify-between sm:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="text-xs font-mono uppercase text-[#A3A3A3]">Studio Live Time</span>
              </div>
              <span className="text-sm font-mono font-bold text-white tracking-wider">
                {timeString || "00:00:00"} UTC
              </span>
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center justify-center gap-2.5 px-5 py-3 rounded-2xl bg-[#151515] border border-white/10 hover:border-[#FF5A1F] text-xs font-mono uppercase tracking-wider text-white hover:text-[#FF5A1F] transition-all w-full sm:w-auto min-h-[44px]"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8 xs:gap-10 py-10 sm:py-14 border-b border-white/10">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#A3A3A3] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#work" className="text-white hover:text-[#FF5A1F] transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#services" className="text-white hover:text-[#FF5A1F] transition-colors">
                  Studio Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-[#FF5A1F] transition-colors">
                  About the Studio
                </a>
              </li>
              <li>
                <a href="#process" className="text-white hover:text-[#FF5A1F] transition-colors">
                  4-Stage Process
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-[#FF5A1F] transition-colors">
                  Project Enquiry
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#A3A3A3] mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A3A3A3]">
              <li>AI Poster & Creative Ads</li>
              <li>Cinematic Video Reels</li>
              <li>Next.js Web Applications</li>
              <li>iOS & Android Apps</li>
              <li>Digital Automation Systems</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#A3A3A3] mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hello@xyz-agency.digital"
                  className="inline-flex items-center gap-2 text-white hover:text-[#FF5A1F] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#FF5A1F] shrink-0" />
                  <span className="break-all sm:break-normal">hello@xyz-agency.digital</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/15551234567?text=Hi%20XYZ%20Studio,%20I'd%20like%20to%20discuss%20a%20new%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-emerald-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Business</span>
                </a>
              </li>
              <li className="text-xs text-[#A3A3A3] font-mono pt-1">
                Response SLA: Within 24 Business Hours
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#A3A3A3] mb-4">
              Digital Presence
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white hover:text-[#FF5A1F] transition-colors group"
                >
                  <span>X (Twitter)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white hover:text-[#FF5A1F] transition-colors group"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white hover:text-[#FF5A1F] transition-colors group"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white hover:text-[#FF5A1F] transition-colors group"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer and Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A3A3A3] gap-4 text-center sm:text-left">
          <p>© 2025 XYZ Digital Agency. All rights reserved.</p>
          <p className="font-mono text-[11px] text-[#737373]">
            Self-initiated concept showcases and creative engineering experiments.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[#737373] hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span>•</span>
            <span className="text-[#737373] hover:text-white transition-colors cursor-pointer">
              Terms of Engagement
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
