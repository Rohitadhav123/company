"use client";

import { useEffect } from "react";
import { X, CheckCircle2, ArrowUpRight, Layers, Cpu, ShieldCheck } from "lucide-react";
import { ServiceItem } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onEnquire: (serviceId: string) => void;
}

export default function ServiceDetailModal({
  service,
  onClose,
  onEnquire,
}: ServiceDetailModalProps) {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (service) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#101010] border border-white/15 p-5 xs:p-6 sm:p-10 shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-25"
          style={{ backgroundColor: service.accent }}
        />

        {/* Modal Header */}
        <div className="relative z-10 flex items-start justify-between pb-6 border-b border-white/10 gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className="text-xs font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full border"
                style={{
                  color: service.accent,
                  borderColor: `${service.accent}40`,
                  backgroundColor: `${service.accent}15`,
                }}
              >
                {language === "mr" ? `सेवा ${service.number}` : `SERVICE ${service.number}`}
              </span>
              <span className="text-xs font-mono text-[#A3A3A3] uppercase">
                {service.category}
              </span>
            </div>
            <h3 className="text-xl xs:text-2xl sm:text-4xl font-black uppercase text-white tracking-tight break-words">
              {service.title}
            </h3>
            <p
              className="text-xs sm:text-base font-medium mt-1"
              style={{ color: service.accent }}
            >
              {service.tagline}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#181818] hover:bg-[#252525] border border-white/10 text-white transition-colors shrink-0"
            title="Close Details [ESC]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="relative z-10 py-6 space-y-8 text-sm text-[#A3A3A3]">
          {/* Detailed Narrative */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-2">
              {t.services.modalOverview}
            </h4>
            <p className="leading-relaxed sm:text-base text-[#D4D4D4]">
              {service.description}
            </p>
          </div>

          {/* Capabilities Grid */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#FF5A1F]" />
              <span>{t.services.modalCapabilities}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.offerings.map((off, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#161616] border border-white/5 text-xs text-white"
                >
                  <CheckCircle2
                    className="w-4 h-4 shrink-0 mt-0.5"
                    style={{ color: service.accent }}
                  />
                  <span>{off}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Production Deliverables */}
          <div className="p-5 rounded-2xl bg-[#141414] border border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#FF5A1F]" />
              <span>{t.services.modalDeliverables}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.deliverables.map((deliv, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-mono text-[#D4D4D4]">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: service.accent }} />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Execution Workflow */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-white block mb-2">
                {t.services.modalTech}:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {service.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-[#181818] border border-white/10 text-[10px] font-mono text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-[#A3A3A3] text-center sm:text-left">
            <span className="text-white font-bold">{language === "mr" ? "अपेक्षित मुदत:" : "Standard SLA:"}</span> {language === "mr" ? "२-४ आठवड्यांचे उत्पादन सत्र" : "2-4 Week Production Sprints"}
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onEnquire(service.id);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 xs:px-8 py-3.5 rounded-full bg-[#FF5A1F] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_25px_rgba(255,90,31,0.5)]"
          >
            <span>{t.services.modalCta}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
