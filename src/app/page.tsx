"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactSection from "@/components/sections/ContactSection";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { language } = useLanguage();
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<string>("");

  const handleSelectService = (serviceId: string) => {
    const isMr = language === "mr";
    switch (serviceId) {
      case "ai-poster":
      case "ai-creative":
        setSelectedService(isMr ? "एआय पोस्टर डिझाइन" : "AI Poster Design");
        break;
      case "ai-video":
        setSelectedService(isMr ? "एआय अ‍ॅनिमेशन व्हिडिओ" : "AI Animation Videos");
        break;
      case "web-development":
        setSelectedService(isMr ? "वेबसाइट डेव्हलपमेंट" : "Website Development");
        break;
      case "app-development":
        setSelectedService(isMr ? "मोबाइल अ‍ॅप डेव्हलपमेंट" : "Mobile App Development");
        break;
      case "business-planning":
        setSelectedService(isMr ? "बिझनेस डेव्हलपमेंट प्लॅनिंग" : "Business Development Planning");
        break;
      case "business-solutions":
        setSelectedService(isMr ? "डिजिटल बिझनेस सोल्यूशन्स" : "Digital Business Solutions");
        break;
      default:
        setSelectedService(isMr ? "वेबसाइट डेव्हलपमेंट" : "Website Development");
    }
  };

  const handleSelectProject = (projectName: string) => {
    setSelectedProject(projectName);
  };

  return (
    <main className="min-h-screen bg-transparent text-[#F5F5F5] flex flex-col w-full selection:bg-[#FF5A1F] selection:text-black relative">
      {/* Persistent Navigation */}
      <Navbar />

      {/* Hero Section with local Canva video playback and graceful 3D fallback */}
      <Hero />

      {/* Selected Work Concept Showcases */}
      <SelectedWork onSelectProjectForEnquiry={handleSelectProject} />

      {/* Studio Capabilities & Services */}
      <ServicesSection onSelectServiceForEnquiry={handleSelectService} />

      {/* About & Editable Team Roster */}
      <AboutSection />

      {/* 4-Stage Animated Execution Process */}
      <ProcessSection />

      {/* Project Commission & Contact Section */}
      <ContactSection
        initialService={selectedService}
        initialProject={selectedProject}
      />

      {/* Studio Footer with Live Clock */}
      <Footer />
    </main>
  );
}
