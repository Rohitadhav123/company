"use client";

import { useState } from "react";
import {
  Send,
  Mail,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Database,
  Check,
  Loader2,
} from "lucide-react";
import confetti from "canvas-confetti";
import Toast, { ToastMessage } from "@/components/ui/Toast";

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
    description: initialProject
      ? `Hi Tekzo team, I was reviewing your concept project "${initialProject}" and would love to discuss something similar for our brand.`
      : "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionId, setSubmissionId] = useState<number | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const serviceOptions = [
    "AI Poster Design",
    "AI Animation Videos",
    "Website Development",
    "Mobile App Development",
    "Business Development Planning",
    "Digital Business Solutions",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit enquiry. Please try again.");
      }

      const newId = data.data?.id;
      setSubmissionId(newId || null);
      setIsSuccess(true);

      // Trigger modern toast notification
      setToast({
        id: Date.now().toString(),
        type: "success",
        title: "Enquiry Submitted Successfully!",
        description: `Your brief is securely recorded in PostgreSQL${newId ? ` (Record #${newId})` : ""}. We will respond within 24 hours.`,
        dbSaved: true,
      });

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 85,
          spread: 75,
          origin: { y: 0.6 },
          colors: ["#FF5A1F", "#FFFFFF", "#10B981"],
        });
      } catch {
        // Fallback silently if canvas-confetti is unavailable
      }
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong while submitting.";
      setServerError(message);
      setToast({
        id: Date.now().toString(),
        type: "error",
        title: "Submission Failed",
        description: message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate mailto link
  const mailtoUrl = `mailto:tekzobuisness@gmail.com?subject=${encodeURIComponent(
    `Project Commission: ${formData.service || "New Project"} - ${formData.company || formData.name}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nService: ${formData.service}\n\nProject Overview:\n${formData.description}`
  )}`;

  // Generate WhatsApp chat link
  const whatsappUrl = `https://wa.me/15551234567?text=${encodeURIComponent(
    `Hi Tekzo Studio! My name is ${formData.name || "Client"} (${formData.company || "Brand"}). I am interested in ${formData.service}. Message: ${formData.description || "Looking forward to speaking."}`
  )}`;

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-28 bg-transparent overflow-hidden">
      {/* Toast Notification Container */}
      <Toast toast={toast} onClose={() => setToast(null)} />

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

        <div className="max-w-3xl mx-auto">
          {/* Project Enquiry Form */}
          <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 xs:p-8 sm:p-12 shadow-2xl relative">
            {isSuccess ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.35)]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
                    <Check className="w-3.5 h-3.5" />
                    <span>STORED IN POSTGRESQL {submissionId ? `• RECORD #${submissionId}` : ""}</span>
                  </div>

                  <h3 className="text-3xl font-black uppercase text-white tracking-tight">
                    ENQUIRY RECEIVED!
                  </h3>
                </div>

                <p className="text-sm text-[#A3A3A3] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-bold">{formData.name}</span>!
                  Your project specifications for{" "}
                  <span className="text-[#FF5A1F] font-bold">{formData.service}</span> have been
                  successfully recorded into our PostgreSQL database.
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
                    setSubmissionId(null);
                    setServerError(null);
                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      service: "Website Development",
                      description: "",
                    });
                  }}
                  className="text-xs font-mono text-[#A3A3A3] hover:text-white transition-colors underline pt-4 block mx-auto cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Server Error Alert Banner */}
                {serverError && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-400 flex items-start gap-2.5 animate-in fade-in">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
                    <div className="flex-1">
                      <p className="font-bold mb-0.5">Submission Error</p>
                      <p>{serverError}</p>
                    </div>
                  </div>
                )}

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
                        className={`px-3 xs:px-3.5 py-1.5 xs:py-2 rounded-xl text-[11px] xs:text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
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
                  className="w-full py-4 rounded-xl bg-[#FF5A1F] text-black font-black uppercase tracking-wider text-sm hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(255,90,31,0.5)] flex items-center justify-center gap-2 group disabled:opacity-50 cursor-pointer"
                  data-cursor="hover"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>SAVING TO POSTGRESQL...</span>
                    </>
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
