import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import BackToHomeLink from "@/components/ui/BackToHomeLink";

export const metadata: Metadata = {
  title: "Start a Project | Contact Tekzo Digital Agency",
  description:
    "Commission custom AI creative visuals, website development, mobile apps, or business automation workflows.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-transparent text-[#F5F5F5] flex flex-col relative">
      <Navbar />

      <div className="pt-28 sm:pt-36 pb-4 sm:pb-6 max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 w-full">
        <BackToHomeLink />
      </div>

      <ContactSection />

      <Footer />
    </main>
  );
}
