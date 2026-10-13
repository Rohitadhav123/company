import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SelectedWork from "@/components/sections/SelectedWork";
import BackToHomeLink from "@/components/ui/BackToHomeLink";

export const metadata: Metadata = {
  title: "Selected Work & Concepts | Tekzo Digital Agency",
  description:
    "Explore our four concept projects: Orbit Athletics, Pulse Digital, Noir Coffee, and Tekzo Motion Lab.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-transparent text-[#F5F5F5] flex flex-col relative">
      <Navbar />

      <div className="pt-28 sm:pt-36 pb-4 sm:pb-6 max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 w-full">
        <BackToHomeLink />
      </div>

      <SelectedWork />

      <Footer />
    </main>
  );
}
