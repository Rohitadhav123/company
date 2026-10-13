"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is active and add Escape key listener
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: t.nav.work, href: "#work" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.process, href: "#process" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const elem = document.querySelector(href);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[#080808]/85 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/60"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 flex items-center justify-between">
          {/* Logo — Tekzo Official Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F] rounded-lg py-1"
            aria-label="Tekzo Digital Agency Home"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden border border-white/10 group-hover:border-[#00F0FF]/60 transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)] bg-black shrink-0">
              <Image
                src="/logo/company_logo.jpeg"
                alt="Tekzo Logo"
                fill
                sizes="36px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex items-center tracking-tighter">
              <span className="text-xl sm:text-2xl font-black font-mono tracking-widest text-white group-hover:text-[#00F0FF] transition-colors">
                TEKZO
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] ml-1.5 animate-pulse inline-block shadow-[0_0_8px_#00F0FF]" />
            </div>
            <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest uppercase text-[#A3A3A3] pl-2 border-l border-white/10">
              STUDIO
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2 px-5 py-2 rounded-full bg-[#151515]/70 border border-white/10 backdrop-blur-md"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-[#A3A3A3] hover:text-white hover:bg-white/5 rounded-full transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF5A1F]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Language Switcher, Let's Talk CTA & Mobile Trigger */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Prominent Language Switcher Button */}
            <LanguageToggle variant="navbar" />

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="relative group hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF5A1F] text-black text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(255,90,31,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F]"
            >
              <span>{t.nav.startProject}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Hamburger Button (44x44px touch target) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-full bg-[#151515] border border-white/10 text-white hover:text-[#FF5A1F] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A1F]"
              aria-label={isMobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden bg-[#080808]/95 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between p-5 xs:p-6 sm:p-8 overflow-y-auto ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-xl overflow-hidden border border-white/15 bg-black shrink-0">
              <Image
                src="/logo/company_logo.jpeg"
                alt="Tekzo Logo"
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <span className="text-xl font-black font-mono tracking-widest text-white">TEKZO</span>
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
          </div>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-[#151515] border border-white/15 text-white hover:text-[#FF5A1F] transition-colors"
            aria-label={t.nav.closeMenu}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Language Toggle */}
        <div className="my-4">
          <LanguageToggle variant="mobile" />
        </div>

        <nav className="flex flex-col gap-6 my-auto" aria-label="Mobile Navigation">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-2xl xs:text-3xl font-extrabold tracking-tight text-white hover:text-[#FF5A1F] transition-colors flex items-center justify-between group"
            >
              <span>{link.name}</span>
              <span className="text-xs font-mono text-[#A3A3A3] group-hover:text-[#FF5A1F]">
                0{idx + 1}
              </span>
            </a>
          ))}
        </nav>

        <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs text-[#A3A3A3] font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{t.footer.statusAvailable}</span>
          </div>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="w-full py-4 rounded-xl bg-[#FF5A1F] text-black font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 text-sm shadow-[0_0_25px_rgba(255,90,31,0.4)]"
          >
            <span>{t.nav.startProject}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
}
