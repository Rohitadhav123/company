"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Sparkles, ArrowUpRight, ShieldCheck, Filter } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ServiceItem } from "@/data/services";
import { getLocalizedServices } from "@/data/localizedData";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";
import ServiceCard from "./services/ServiceCard";
import ServiceDetailModal from "./services/ServiceDetailModal";

interface ServicesSectionProps {
  onSelectServiceForEnquiry?: (serviceId: string) => void;
}

export default function ServicesSection({
  onSelectServiceForEnquiry,
}: ServicesSectionProps) {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const localizedServices = getLocalizedServices(language);

  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedSpecsService, setSelectedSpecsService] = useState<ServiceItem | null>(null);

  // Register GSAP ScrollTrigger for progressive card reveals
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cards = gsap.utils.toArray<HTMLElement>(".service-card");

    if (prefersReducedMotion) {
      // Respect reduced motion: show content immediately with zero animation
      gsap.set(cards, { opacity: 1, y: 0, scale: 1, clearProps: "all" });
      cards.forEach((c) => c.classList.add("is-revealed"));
      return;
    }

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      cards.forEach((card, index) => {
        const visual = card.querySelector<HTMLElement>(".service-card-visual");

        // Stagger within the row on desktop: left column (even) 0s, right column (odd) ~0.18s
        const rowStagger = !isMobile && index % 2 === 1 ? 0.18 : 0;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 82%",
            toggleActions: "play none none none",
            once: true,
          },
        });

        // 1. Initial State: opacity: 0, translateY: 70px, scale: 0.96
        // 2. Animate to: opacity: 1, translateY: 0, scale: 1 with subtle orange glow
        tl.fromTo(
          card,
          {
            opacity: 0,
            y: 70,
            scale: 0.96,
            borderColor: "rgba(255, 90, 31, 0.65)",
            boxShadow: "0 0 35px -5px rgba(255, 90, 31, 0.4)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            borderColor: "rgba(255, 255, 255, 0.1)",
            boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.5)",
            duration: isMobile ? 0.75 : 0.9,
            delay: rowStagger,
            ease: "power3.out",
            onComplete: () => {
              // Clear transform so CSS hover translateY(-5px) takes over seamlessly
              gsap.set(card, { clearProps: "transform" });
              card.classList.add("is-revealed");
            },
          }
        );

        // 3. Smooth clip-path masked image/visual reveal
        if (visual) {
          tl.fromTo(
            visual,
            {
              clipPath: "inset(0% 0% 100% 0%)",
              opacity: 0.3,
            },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              opacity: 1,
              duration: isMobile ? 0.65 : 0.8,
              ease: "power2.out",
            },
            `-=${isMobile ? 0.55 : 0.65}`
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeFilter]);

  // Filter options
  const filterOptions = [
    { label: t.services.filterAll, value: "all" },
    { label: t.services.filterAi, value: "ai" },
    { label: t.services.filterEngineering, value: "engineering" },
    { label: t.services.filterStrategy, value: "strategy" },
  ];

  const filteredServices = localizedServices.filter((s) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "ai") return s.id === "ai-poster" || s.id === "ai-video";
    if (activeFilter === "engineering") return s.id === "web-development" || s.id === "app-development";
    if (activeFilter === "strategy") return s.id === "business-planning" || s.id === "business-solutions";
    return true;
  });

  const handleEnquire = (serviceId: string) => {
    if (onSelectServiceForEnquiry) {
      onSelectServiceForEnquiry(serviceId);
    }
    const elem = document.getElementById("contact");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-16 sm:py-24 lg:py-28 bg-transparent overflow-hidden"
    >
      {/* Seamless Section Top Gradient Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent pointer-events-none" />

      {/* Atmospheric Ambient Glows behind Services Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-[#FF5A1F]/7 via-[#FF7844]/4 to-transparent blur-[180px] pointer-events-none animate-pulse-subtle" />
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-[#E5A93C]/5 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="relative w-4 h-4 rounded overflow-hidden bg-black shrink-0 border border-white/10">
                <Image
                  src="/logo/company_logo.jpeg"
                  alt="Tekzo Logo"
                  fill
                  sizes="16px"
                  className="object-cover"
                />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF5A1F] font-semibold">
                {t.services.sectionTag}
              </span>
            </div>

            <h2 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tight leading-[0.95] break-words">
              {t.services.headingLine1} <br />
              <span className="text-orange-gradient">{t.services.headingLine2}</span>
            </h2>

            <p className="mt-6 text-[#A3A3A3] text-base sm:text-lg max-w-xl leading-relaxed">
              {t.services.subheading}
            </p>
          </div>

          {/* Editorial Commercial Transparency Notice */}
          <div className="p-4 xs:p-5 rounded-2xl bg-[#111111] border border-white/10 w-full md:w-auto md:max-w-md shrink-0">
            <div className="flex items-center gap-2 text-xs font-mono text-white mb-1.5 font-bold">
              <ShieldCheck className="w-4 h-4 text-[#FF5A1F]" />
              <span>{t.services.transparencyTitle}</span>
            </div>
            <p className="text-xs text-[#A3A3A3] leading-relaxed">
              {t.services.transparencyText}
            </p>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-14 border-b border-white/10 pb-6">
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#737373] mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>{t.services.filterDiscipline}</span>
          </div>

          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setActiveFilter(opt.value)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                activeFilter === opt.value
                  ? "bg-[#FF5A1F] text-black font-extrabold shadow-[0_0_20px_rgba(255,90,31,0.4)]"
                  : "bg-[#141414] text-[#A3A3A3] hover:text-white hover:bg-[#1f1f1f] border border-white/5"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* The 6 Visually Distinctive Service Cards Grid */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
        >
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onEnquire={handleEnquire}
              onOpenSpecs={(s) => setSelectedSpecsService(s)}
            />
          ))}
        </div>

        {/* Bottom Multi-Disciplinary Scope Callout */}
        <div className="mt-14 sm:mt-20 p-5 xs:p-8 sm:p-12 rounded-3xl bg-[#101010] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5A1F]/10 blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-white/10 text-[10px] font-mono text-[#FF5A1F] uppercase font-bold mb-3">
              <Sparkles className="w-3 h-3 text-[#FF5A1F]" />
              <span>{t.services.bundleTag}</span>
            </div>
            <h4 className="text-xl xs:text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-2">
              {t.services.bundleHeading}
            </h4>
            <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
              {t.services.bundleDescription}
            </p>
          </div>

          <a
            href="#contact"
            className="relative z-10 w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 xs:px-8 py-3.5 xs:py-4 rounded-full bg-[#FF5A1F] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_25px_rgba(255,90,31,0.5)] shrink-0"
          >
            <span>{t.services.bundleCta}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Deep-Dive Specifications Modal */}
      <ServiceDetailModal
        service={selectedSpecsService}
        onClose={() => setSelectedSpecsService(null)}
        onEnquire={handleEnquire}
      />
    </section>
  );
}
