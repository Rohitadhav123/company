"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, AlertTriangle, X, Database, Info } from "lucide-react";

export interface ToastMessage {
  id: string;
  type: "success" | "error" | "info";
  title: string;
  description?: string;
  dbSaved?: boolean;
}

interface ToastProps {
  toast: ToastMessage | null;
  onClose: () => void;
  duration?: number;
}

export default function Toast({ toast, onClose, duration = 6500 }: ToastProps) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!toast) return;

    setProgress(100);
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(remaining);
      if (remaining <= 0) {
        clearInterval(interval);
        onClose();
      }
    }, 40);

    return () => clearInterval(interval);
  }, [toast, duration, onClose]);

  if (!toast) return null;

  const isSuccess = toast.type === "success";
  const isError = toast.type === "error";

  return (
    <div
      role="alert"
      aria-live="polite"
      className="fixed bottom-6 right-4 sm:right-8 z-[9999] max-w-md w-[calc(100vw-2rem)] sm:w-[420px] pointer-events-auto transition-all animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div
        className={`relative overflow-hidden rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-xl border transition-all ${
          isSuccess
            ? "bg-[#111111]/95 border-emerald-500/40 shadow-[0_16px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(16,185,129,0.2)]"
            : isError
            ? "bg-[#160d0d]/95 border-red-500/50 shadow-[0_16px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(239,68,68,0.25)]"
            : "bg-[#111111]/95 border-white/20 shadow-[0_16px_50px_rgba(0,0,0,0.9)]"
        }`}
      >
        <div className="flex items-start gap-3.5">
          {/* Icon Badge */}
          <div
            className={`p-2.5 rounded-xl shrink-0 ${
              isSuccess
                ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                : isError
                ? "bg-red-500/15 text-red-400 border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                : "bg-white/10 text-white border border-white/20"
            }`}
          >
            {isSuccess ? (
              <CheckCircle2 className="w-5 h-5" />
            ) : isError ? (
              <AlertTriangle className="w-5 h-5" />
            ) : (
              <Info className="w-5 h-5" />
            )}
          </div>

          {/* Toast Content */}
          <div className="flex-1 pr-6 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <h4 className="text-sm font-bold uppercase tracking-tight text-white">
                {toast.title}
              </h4>
              {toast.dbSaved && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                  <Database className="w-2.5 h-2.5" />
                  POSTGRES SAVED
                </span>
              )}
            </div>
            {toast.description && (
              <p className="text-xs text-[#B3B3B3] leading-relaxed">
                {toast.description}
              </p>
            )}
          </div>

          {/* Dismiss Button */}
          <button
            onClick={onClose}
            aria-label="Close notification"
            className="absolute top-3.5 right-3.5 p-1.5 rounded-lg text-[#888] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Dynamic Progress Countdown Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/5">
          <div
            className={`h-full transition-all ease-linear ${
              isSuccess
                ? "bg-gradient-to-r from-emerald-400 via-teal-300 to-[#FF5A1F]"
                : isError
                ? "bg-gradient-to-r from-red-500 to-rose-400"
                : "bg-white"
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
