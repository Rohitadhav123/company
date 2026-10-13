"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

interface LanguageToggleProps {
  variant?: "navbar" | "footer" | "mobile";
  className?: string;
}

export default function LanguageToggle({
  variant = "navbar",
  className = "",
}: LanguageToggleProps) {
  const { language, setLanguage, toggleLanguage, isMarathi } = useLanguage();

  if (variant === "mobile") {
    return (
      <div className={`flex items-center justify-between p-3 rounded-2xl bg-[#141414] border border-white/10 ${className}`}>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#1e1e1e] flex items-center justify-center text-[#FF5A1F]">
            <Globe className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-white uppercase">
              {isMarathi ? "भाषा निवडा" : "SELECT LANGUAGE"}
            </div>
            <div className="text-[10px] text-[#A3A3A3] font-mono">
              {isMarathi ? "मराठी चालू आहे" : "English Active"}
            </div>
          </div>
        </div>

        <div className="flex items-center p-1 rounded-xl bg-[#0a0a0a] border border-white/10">
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              !isMarathi
                ? "bg-[#FF5A1F] text-black shadow-[0_0_12px_rgba(255,90,31,0.4)]"
                : "text-[#A3A3A3] hover:text-white"
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLanguage("mr")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              isMarathi
                ? "bg-[#FF5A1F] text-black shadow-[0_0_12px_rgba(255,90,31,0.4)]"
                : "text-[#A3A3A3] hover:text-white"
            }`}
          >
            मराठी
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={`group relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151515]/90 hover:bg-[#202020] border border-white/10 hover:border-[#FF5A1F]/50 transition-all duration-300 backdrop-blur-md cursor-pointer select-none shadow-sm ${className}`}
      title={isMarathi ? "Switch to English" : "मराठी भाषेत रूपांतरित करा"}
      aria-label="Toggle language between English and Marathi"
      data-cursor="hover"
    >
      <Globe className="w-3.5 h-3.5 text-[#FF5A1F] group-hover:rotate-45 transition-transform duration-300" />
      
      <div className="flex items-center text-xs font-mono font-semibold tracking-wider">
        <span
          className={`transition-colors ${
            !isMarathi ? "text-white font-bold" : "text-[#737373]"
          }`}
        >
          EN
        </span>
        <span className="text-white/20 mx-1.5">|</span>
        <span
          className={`transition-colors text-[13px] ${
            isMarathi ? "text-[#FF5A1F] font-bold" : "text-[#737373] hover:text-white"
          }`}
        >
          मराठी
        </span>
      </div>

      {/* Active Indicator Pip */}
      <span
        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
          isMarathi
            ? "bg-[#FF5A1F] shadow-[0_0_8px_#FF5A1F]"
            : "bg-emerald-400 shadow-[0_0_8px_#34d399]"
        }`}
      />
    </button>
  );
}
