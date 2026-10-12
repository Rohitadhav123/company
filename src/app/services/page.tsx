import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesSection from "@/components/sections/ServicesSection";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Studio Services & Practices | Tekzo Digital Agency",
  description:
    "AI poster design, AI animation videos, website development, mobile app development, business development planning, and digital business solutions.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-transparent text-[#F5F5F5] flex flex-col relative">
      <Navbar />

      <div className="pt-28 sm:pt-36 pb-4 sm:pb-6 max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#A3A3A3] hover:text-[#FF5A1F] transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOMEPAGE</span>
        </Link>
      </div>

      <ServicesSection />

      <Footer />
    </main>
  );
}
