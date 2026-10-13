"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export default function BackToHomeLink() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-xs font-mono text-[#A3A3A3] hover:text-[#FF5A1F] transition-colors mb-6"
    >
      <ArrowLeft className="w-4 h-4" />
      <span>{t.common.backToHome}</span>
    </Link>
  );
}
