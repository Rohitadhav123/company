"use client";

import { useState } from "react";
import { Compass, CheckCircle2, TrendingUp, Zap, Target, ArrowRight } from "lucide-react";

interface MilestoneNode {
  id: number;
  stage: string;
  title: string;
  status: "completed" | "active" | "planned";
  metric: string;
  deliverable: string;
}

const MILESTONES: MilestoneNode[] = [
  {
    id: 1,
    stage: "STAGE 01",
    title: "Market Discovery & Audit",
    status: "completed",
    metric: "99% ICP Match",
    deliverable: "Competitive Moat & TAM/SAM Blueprint",
  },
  {
    id: 2,
    stage: "STAGE 02",
    title: "Unit Economics Modeling",
    status: "active",
    metric: "4.2x LTV:CAC",
    deliverable: "Payback Period Compressed to 3.2 Months",
  },
  {
    id: 3,
    stage: "STAGE 03",
    title: "Omnichannel Growth Engine",
    status: "planned",
    metric: "+184% Conversion",
    deliverable: "Automated Inbound Lead Qualification",
  },
  {
    id: 4,
    stage: "STAGE 04",
    title: "Enterprise Scale & Systems",
    status: "planned",
    metric: "$2.4M ARR Target",
    deliverable: "Full Operating System Playbook Handover",
  },
];

export default function BusinessPlanningDemo() {
  const [activeNodeId, setActiveNodeId] = useState<number>(2);

  const activeMilestone = MILESTONES.find((m) => m.id === activeNodeId) || MILESTONES[1];

  return (
    <div className="relative w-full h-[380px] sm:h-[420px] rounded-2xl bg-[#090909] border border-white/10 overflow-hidden flex flex-col justify-between p-3 xs:p-4 sm:p-5 select-none group">
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      {/* Top HUD Bar */}
      <div className="relative z-20 flex items-center justify-between gap-2 border-b border-white/10 pb-2.5 sm:pb-3">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-2 h-2 rounded-full bg-[#E5A93C] animate-pulse shrink-0" />
          <span className="text-[9px] sm:text-[10px] font-mono tracking-wider uppercase text-white/90 font-bold truncate">
            STRATEGY ROADMAP: {activeMilestone.stage}
          </span>
          <span className="hidden md:inline-block text-[10px] font-mono text-[#737373]">
            [TELEMETRY ACTIVE]
          </span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-[8px] sm:text-[9px] font-mono text-[#E5A93C] font-bold bg-[#E5A93C]/10 px-1.5 sm:px-2 py-0.5 rounded border border-[#E5A93C]/30">
            {activeMilestone.metric}
          </span>
        </div>
      </div>

      {/* Central Visual Roadmap & Connected Workflow Nodes */}
      <div className="relative z-10 flex-1 my-2 sm:my-3 flex flex-col justify-between overflow-hidden">
        {/* Connected Node Pipeline Graph */}
        <div className="relative py-2 px-0.5 sm:px-1">
          {/* SVG Animated Connector Track */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-white/10 -translate-y-1/2 pointer-events-none z-0" />
          <div
            className="absolute top-1/2 left-4 h-0.5 bg-gradient-to-r from-emerald-500 via-[#E5A93C] to-transparent -translate-y-1/2 pointer-events-none z-0 transition-all duration-500 shadow-[0_0_10px_#E5A93C]"
            style={{ width: `${((activeNodeId - 1) / 3) * 85 + 10}%` }}
          />

          {/* 4 Interactive Nodes */}
          <div className="relative z-10 grid grid-cols-4 gap-1 xs:gap-1.5 sm:gap-2">
            {MILESTONES.map((node) => {
              const isCurrent = node.id === activeNodeId;
              const isDone = node.status === "completed";
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  className={`p-1 xs:p-1.5 sm:p-2 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col items-center text-center ${
                    isCurrent
                      ? "bg-[#181818] border-[#E5A93C] shadow-[0_0_20px_rgba(229,169,60,0.3)] scale-[1.03]"
                      : isDone
                      ? "bg-[#121212] border-white/20 hover:border-white/40"
                      : "bg-[#0d0d0d] border-white/5 hover:border-white/20 opacity-70"
                  }`}
                >
                  <div
                    className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[8px] sm:text-[10px] font-mono font-bold mb-1 transition-colors ${
                      isCurrent
                        ? "bg-[#E5A93C] text-black shadow-md"
                        : isDone
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                        : "bg-white/5 text-[#737373]"
                    }`}
                  >
                    {isDone ? "✓" : `0${node.id}`}
                  </div>
                  <span className="text-[7px] sm:text-[8px] font-mono text-[#A3A3A3] uppercase block truncate w-full">
                    {node.stage}
                  </span>
                  <span className="text-[7px] sm:text-[9px] font-bold text-white uppercase truncate w-full">
                    {node.title.split(" ")[0]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Real-Time Planning Dashboard Metrics Card */}
        <div className="rounded-xl bg-[#121212] border border-white/10 p-2.5 xs:p-3 sm:p-3.5 shadow-xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#E5A93C]/10 blur-2xl pointer-events-none" />

          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
            <div>
              <span className="text-[7px] sm:text-[8px] font-mono text-[#E5A93C] uppercase font-bold block">
                ACTIVE FOCUS: {activeMilestone.stage}
              </span>
              <h5 className="text-xs sm:text-sm font-bold uppercase text-white tracking-tight">
                {activeMilestone.title}
              </h5>
            </div>
            <span className="text-[8px] sm:text-[9px] font-mono text-[#A3A3A3] px-1.5 sm:px-2 py-0.5 rounded bg-black/60 border border-white/5">
              {activeMilestone.status.toUpperCase()}
            </span>
          </div>

          {/* Deliverables & Telemetry Strip */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] text-[#D4D4D4]">
              <Target className="w-3.5 h-3.5 text-[#E5A93C] shrink-0" />
              <span className="font-mono text-white truncate">{activeMilestone.deliverable}</span>
            </div>

            {/* Dashboard Telemetry Gauges */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-1 border-t border-white/5">
              <div className="p-1 xs:p-1.5 rounded-lg bg-[#181818] border border-white/5">
                <span className="text-[6px] xs:text-[7px] font-mono text-[#A3A3A3] block truncate">VELOCITY</span>
                <span className="text-[10px] xs:text-xs font-mono font-black text-[#E5A93C]">+248%</span>
              </div>
              <div className="p-1 xs:p-1.5 rounded-lg bg-[#181818] border border-white/5">
                <span className="text-[6px] xs:text-[7px] font-mono text-[#A3A3A3] block truncate">LTV:CAC</span>
                <span className="text-[10px] xs:text-xs font-mono font-black text-white">4.2x</span>
              </div>
              <div className="p-1 xs:p-1.5 rounded-lg bg-[#181818] border border-white/5">
                <span className="text-[6px] xs:text-[7px] font-mono text-[#A3A3A3] block truncate">PAYBACK</span>
                <span className="text-[10px] xs:text-xs font-mono font-black text-emerald-400">3.2 Mo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Switcher & State Details */}
      <div className="relative z-20 flex items-center justify-between gap-2 pt-2 border-t border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-mono text-[#737373]">SELECT STAGE:</span>
          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              type="button"
              onClick={() => setActiveNodeId(num)}
              className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider transition-colors ${
                activeNodeId === num
                  ? "bg-[#E5A93C] text-black font-bold"
                  : "bg-[#141414] text-[#A3A3A3] hover:text-white"
              }`}
            >
              STAGE {num}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setActiveNodeId((activeNodeId % 4) + 1)}
          className="text-[10px] font-mono text-[#E5A93C] hover:underline"
        >
          NEXT MILESTONE →
        </button>
      </div>
    </div>
  );
}
