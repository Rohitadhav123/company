"use client";

import { useState } from "react";
import {
  Send,
  Mail,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowUpRight,
  Clock,
  ShieldAlert,
} from "lucide-react";
import confetti from "canvas-confetti";

interface ContactSectionProps {
  initialService?: string;
  initialProject?: string;
}

export default function ContactSection({
  initialService = "Website Development",
  initialProject = "",
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: initialService,
    budget: "$15,000 – $35,000",
    description: initialProject
      ? `Hi XYZ team, I was reviewing your concept project "${initialProject}" and would love to discuss something similar for our brand.`
      : "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const serviceOptions = [
    "AI Poster Design",
    "AI Animation Videos",
    "Website Development",
    "Mobile App Development",
    "Business Development Planning",
    "Digital Business Solutions",
  ];

  const budgetOptions = [
    "< $5,000",
    "$5,000 – $15,000",
    "$15,000 – $35,000",
    "$35,000+",
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.description.trim()) {
      errs.description = "Please tell us briefly about your project goals";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate submission flow
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#FF5A1F", "#FFFFFF", "#00F0FF"],
        });
      } catch {
        // Fallback silently if canvas-confetti is unavailable
      }
    }, 700);
  };

  // Generate mailto link
  const mailtoUrl = `mailto:hello@xyz-agency.digital?subject=${encodeURIComponent(
    `Project Commission: ${formData.service || "New Project"} - ${formData.company || formData.name}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nService: ${formData.service}\nBudget Bracket: ${formData.budget}\n\nProject Overview:\n${formData.description}`
  )}`;

  // Generate WhatsApp chat link
  const whatsappUrl = `https://wa.me/15551234567?text=${encodeURIComponent(
    `Hi XYZ Studio! My name is ${formData.name || "Client"} (${formData.company || "Brand"}). I am interested in ${formData.service}. Message: ${formData.description || "Looking forward to speaking."}`
  )}`;

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-28 bg-transparent overflow-hidden">
      {/* Seamless Section Top Gradient Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent pointer-events-none" />

      {/* Atmospheric Ambient Glow behind Form */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[600px] bg-gradient-to-tr from-[#FF5A1F]/8 via-[#FF7844]/4 to-transparent blur-[180px] pointer-events-none animate-pulse-subtle" />

      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151515] border border-white/10 text-[11px] font-mono text-[#FF5A1F] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5A1F]" />
            <span>START A COLLABORATION</span>
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-black uppercase text-white tracking-tight leading-[0.95] mb-6 break-words">
            LET&apos;S BUILD SOMETHING{" "}
            <span className="text-orange-gradient">EXTRAORDINARY.</span>
          </h2>

          <p className="text-[#A3A3A3] text-sm sm:text-base md:text-lg leading-relaxed">
            Have a brief ready or need creative consultation? Send your enquiry below,
            or reach out directly via WhatsApp or Email. We respond within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact & Channel Info */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="p-5 xs:p-6 sm:p-8 rounded-3xl bg-[#111111] border border-white/10 space-y-6">
              <h3 className="text-xl font-bold uppercase text-white tracking-tight">
                DIRECT STUDIO CHANNELS
              </h3>

              {/* Email Direct */}
              <a
                href="mailto:hello@xyz-agency.digital"
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#181818] border border-white/5 hover:border-[#FF5A1F]/40 transition-all group"
              >
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-[#FF5A1F] group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono uppercase text-[#A3A3A3] block mb-0.5">
                    Email Enquiries
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-[#FF5A1F] transition-colors break-all sm:break-normal">
                    hello@xyz-agency.digital
                  </span>
                </div>
              </a>

              {/* WhatsApp Direct */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#181818] border border-white/5 hover:border-emerald-500/40 transition-all group"
              >
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[#A3A3A3] block mb-0.5">
                    WhatsApp Business (Instant)
                  </span>
                  <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    +1 (555) 123-4567
                  </span>
                </div>
              </a>

              {/* Response SLA */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#0d0d0d] border border-white/5 text-xs text-[#A3A3A3] font-mono">
                <Clock className="w-4 h-4 text-[#FF5A1F]" />
                <span>Typical Initial Response: Within 12-24 Hours</span>
              </div>
            </div>

            {/* Backend Configuration Notice */}
            <div className="p-6 rounded-2xl bg-[#101010] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-white font-bold">
                <ShieldAlert className="w-4 h-4 text-[#FF5A1F]" />
                <span>INTEGRATION TRANSPARENCY</span>
              </div>
              <p className="text-[11px] text-[#A3A3A3] leading-relaxed">
                When you submit, your data is validated client-side and triggers a ready-to-send email
                or WhatsApp draft. To connect automated backend delivery (Resend, SendGrid, or Slack webhook),
                add your secret credentials in an environment variable (`.env.local`). No secret keys are exposed client-side.
              </p>
            </div>
          </div>

          {/* Right Column: Project Enquiry Form */}
          <div className="lg:col-span-7 bg-[#111111] border border-white/10 rounded-3xl p-5 xs:p-7 sm:p-10 shadow-2xl relative">
            {isSuccess ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#FF5A1F]/20 border border-[#FF5A1F] flex items-center justify-center text-[#FF5A1F] shadow-[0_0_30px_rgba(255,90,31,0.4)]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h3 className="text-3xl font-black uppercase text-white tracking-tight">
                  ENQUIRY GENERATED!
                </h3>

                <p className="text-sm text-[#A3A3A3] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-bold">{formData.name}</span>!
                  Your project specifications for{" "}
                  <span className="text-[#FF5A1F] font-bold">{formData.service}</span> have been
                  compiled.
                </p>

                {/* Direct Action Buttons for Immediate Delivery */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <a
                    href={mailtoUrl}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FF5A1F] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open in Email App</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#1e293b] text-white border border-white/10 hover:border-emerald-500 font-extrabold text-xs uppercase tracking-wider transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Send via WhatsApp</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      service: "Web Design & Development",
                      budget: "$15,000 – $35,000",
                      description: "",
                    });
                  }}
                  className="text-xs font-mono text-[#A3A3A3] hover:text-white transition-colors underline pt-4 block mx-auto"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white mb-2">
                      Your Name <span className="text-[#FF5A1F]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#161616] border text-white text-sm focus:outline-none focus:border-[#FF5A1F] transition-colors ${
                        errors.name ? "border-red-500" : "border-white/10"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white mb-2">
                      Work Email <span className="text-[#FF5A1F]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#161616] border text-white text-sm focus:outline-none focus:border-[#FF5A1F] transition-colors ${
                        errors.email ? "border-red-500" : "border-white/10"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Innovations"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#161616] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF5A1F] transition-colors"
                  />
                </div>

                {/* Service Selection Pills */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white mb-2">
                    Primary Service Needed
                  </label>
                  <div className="flex flex-wrap gap-1.5 xs:gap-2">
                    {serviceOptions.map((serv) => (
                      <button
                        type="button"
                        key={serv}
                        onClick={() => setFormData({ ...formData, service: serv })}
                        className={`px-3 xs:px-3.5 py-1.5 xs:py-2 rounded-xl text-[11px] xs:text-xs font-mono uppercase tracking-wider transition-all ${
                          formData.service === serv
                            ? "bg-[#FF5A1F] text-black font-bold shadow-md"
                            : "bg-[#181818] text-[#A3A3A3] hover:text-white border border-white/5"
                        }`}
                      >
                        {serv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Optional Budget Brackets */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white mb-2">
                    Target Budget (USD)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 xs:gap-2">
                    {budgetOptions.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`py-2 px-2 xs:px-3 rounded-xl text-[11px] xs:text-xs font-mono text-center transition-all ${
                          formData.budget === b
                            ? "bg-white text-black font-bold"
                            : "bg-[#181818] text-[#A3A3A3] hover:text-white border border-white/5"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white mb-2">
                    Project Overview & Objectives <span className="text-[#FF5A1F]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your project vision, target timeline, key requirements, or reference links..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#161616] border text-white text-sm focus:outline-none focus:border-[#FF5A1F] transition-colors resize-none ${
                      errors.description ? "border-red-500" : "border-white/10"
                    }`}
                  />
                  {errors.description && (
                    <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.description}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#FF5A1F] text-black font-black uppercase tracking-wider text-sm hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(255,90,31,0.5)] flex items-center justify-center gap-2 group disabled:opacity-50"
                  data-cursor="hover"
                >
                  {isSubmitting ? (
                    <span>PROCESSING ENQUIRY...</span>
                  ) : (
                    <>
                      <span>SUBMIT PROJECT BRIEF</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
