"use client";

import { useState, useEffect } from "react";
import { Globe, Smartphone, BarChart3, Zap, RefreshCw, Cpu, CheckCircle } from "lucide-react";

interface EcosystemNode {
  id: string;
  name: string;
  category: string;
  accent: string;
  status: string;
  metric: string;
}

const NODES: EcosystemNode[] = [
  {
    id: "web",
    name: "Web Flagship",
    category: "Next.js Edge",
    accent: "#00F0FF",
    status: "99.98% Uptime",
    metric: "0.3s Global Latency",
  },
  {
    id: "app",
    name: "Mobile Apps",
    category: "iOS & Android",
    accent: "#38BDF8",
    status: "60 FPS Native",
    metric: "124k Daily Sessions",
  },
  {
    id: "bi",
    name: "BI Dashboards",
    category: "Real-Time Telemetry",
    accent: "#E5A93C",
    status: "Stream Active",
    metric: "Instant Attribution",
  },
  {
    id: "auto",
    name: "AI Automations",
    category: "Webhook & Agents",
    accent: "#A855F7",
    status: "24/7 Autonomous",
    metric: "98.4% Task Automated",
  },
];

export default function DigitalSolutionsDemo() {
  const [activeNodeId, setActiveNodeId] = useState<string>("auto");
  const [logIndex, setLogIndex] = useState(0);

  const logs = [
    "[EVENT 21:26:02] Webhook 200 OK -> Mobile push dispatched",
    "[SYNC 21:26:05] Edge DB -> Real-time analytics updated",
    "[AGENT 21:26:08] Autonomous Lead Classifier -> High Intent (98/100)",
    "[FLOW 21:26:12] Payment captured -> Invoice auto-generated",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % logs.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [logs.length]);

  const activeNode = NODES.find((n) => n.id === activeNodeId) || NODES[3];

  return (
    <div className="relative w-full h-[380px] sm:h-[420px] rounded-2xl bg-[#090909] border border-white/10 overflow-hidden flex flex-col justify-between p-3 xs:p-4 sm:p-5 select-none group">
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      {/* Top HUD Bar */}
      <div className="relative z-20 flex items-center justify-between gap-2 border-b border-white/10 pb-2.5 sm:pb-3">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-2 h-2 rounded-full bg-[#A855F7] animate-pulse shrink-0" />
          <span className="text-[9px] sm:text-[10px] font-mono tracking-wider uppercase text-white/90 font-bold truncate">
            ECOSYSTEM: {activeNode.name}
          </span>
          <span className="hidden md:inline-block text-[10px] font-mono text-[#737373]">
            [SYNCHRONIZED 24/7]
          </span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <span
            className="text-[8px] sm:text-[9px] font-mono font-bold px-1.5 sm:px-2 py-0.5 rounded border"
            style={{
              color: activeNode.accent,
              borderColor: `${activeNode.accent}40`,
              backgroundColor: `${activeNode.accent}15`,
            }}
          >
            {activeNode.status}
          </span>
        </div>
      </div>

      {/* Central Visual: Connected Ecosystem Graph */}
      <div className="relative z-10 flex-1 my-2 flex items-center justify-center overflow-hidden">
        {/* SVG Data Stream Circuit Lines */}
        <div className="relative w-full max-w-[270px] xs:max-w-[310px] sm:max-w-[340px] h-[190px] sm:h-[210px] flex items-center justify-center">
          {/* Animated Connecting Web SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 340 210">
            {/* Lines from 4 satellites to Center (170, 105) */}
            <line x1="55" y1="45" x2="170" y2="105" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="285" y1="45" x2="170" y2="105" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="55" y1="165" x2="170" y2="105" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="285" y1="165" x2="170" y2="105" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="3 3" />

            {/* Glowing Traveling Energy Pulse Packets */}
            <circle cx="112" cy="75" r="3" fill="#00F0FF" className="animate-ping" />
            <circle cx="227" cy="75" r="3" fill="#38BDF8" className="animate-ping" style={{ animationDelay: "0.5s" }} />
            <circle cx="112" cy="135" r="3" fill="#E5A93C" className="animate-ping" style={{ animationDelay: "1s" }} />
            <circle cx="227" cy="135" r="3" fill="#A855F7" className="animate-ping" style={{ animationDelay: "1.5s" }} />
          </svg>

          {/* Central Hub Core: XYZ Engine */}
          <div className="relative z-20 flex flex-col items-center justify-center">
            <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#121212] via-[#1c1c1c] to-[#0a0a0a] border-2 border-[#A855F7]/60 shadow-[0_0_25px_rgba(168,85,247,0.35)] flex items-center justify-center relative p-2.5 sm:p-0">
              <Cpu className="w-5 h-5 sm:w-7 sm:h-7 text-[#A855F7] animate-pulse" />
              {/* Spinning orbit ring */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-dashed border-white/20 animate-spin" style={{ animationDuration: "12s" }} />
            </div>
            <span className="text-[7px] sm:text-[8px] font-mono uppercase text-white font-black tracking-widest mt-1 bg-black/80 px-1.5 sm:px-2 py-0.5 rounded border border-white/10">
              XYZ CORE
            </span>
          </div>

          {/* 4 Orbiting Satellite Nodes */}
          {/* Node 1: Top-Left (Web) */}
          <div
            onClick={() => setActiveNodeId("web")}
            className={`absolute top-1 sm:top-2 left-1 sm:left-2 p-1.5 sm:p-2 rounded-xl border transition-all duration-300 cursor-pointer flex items-center gap-1 sm:gap-1.5 shadow-lg ${
              activeNodeId === "web"
                ? "bg-[#181818] border-[#00F0FF] scale-105 shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                : "bg-[#101010] border-white/10 hover:border-white/30"
            }`}
          >
            <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00F0FF] shrink-0" />
            <div className="text-left">
              <span className="text-[7px] sm:text-[8px] font-mono text-white font-bold block leading-tight">WEB APP</span>
              <span className="text-[6px] sm:text-[7px] font-mono text-[#A3A3A3] leading-tight">Next.js</span>
            </div>
          </div>

          {/* Node 2: Top-Right (App) */}
          <div
            onClick={() => setActiveNodeId("app")}
            className={`absolute top-1 sm:top-2 right-1 sm:right-2 p-1.5 sm:p-2 rounded-xl border transition-all duration-300 cursor-pointer flex items-center gap-1 sm:gap-1.5 shadow-lg ${
              activeNodeId === "app"
                ? "bg-[#181818] border-[#38BDF8] scale-105 shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                : "bg-[#101010] border-white/10 hover:border-white/30"
            }`}
          >
            <Smartphone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#38BDF8] shrink-0" />
            <div className="text-left">
              <span className="text-[7px] sm:text-[8px] font-mono text-white font-bold block leading-tight">MOBILE</span>
              <span className="text-[6px] sm:text-[7px] font-mono text-[#A3A3A3] leading-tight">iOS/Android</span>
            </div>
          </div>

          {/* Node 3: Bottom-Left (BI) */}
          <div
            onClick={() => setActiveNodeId("bi")}
            className={`absolute bottom-1 sm:bottom-2 left-1 sm:left-2 p-1.5 sm:p-2 rounded-xl border transition-all duration-300 cursor-pointer flex items-center gap-1 sm:gap-1.5 shadow-lg ${
              activeNodeId === "bi"
                ? "bg-[#181818] border-[#E5A93C] scale-105 shadow-[0_0_15px_rgba(229,169,60,0.3)]"
                : "bg-[#101010] border-white/10 hover:border-white/30"
            }`}
          >
            <BarChart3 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E5A93C] shrink-0" />
            <div className="text-left">
              <span className="text-[7px] sm:text-[8px] font-mono text-white font-bold block leading-tight">METRICS</span>
              <span className="text-[6px] sm:text-[7px] font-mono text-[#A3A3A3] leading-tight">Real-Time</span>
            </div>
          </div>

          {/* Node 4: Bottom-Right (Automations) */}
          <div
            onClick={() => setActiveNodeId("auto")}
            className={`absolute bottom-1 sm:bottom-2 right-1 sm:right-2 p-1.5 sm:p-2 rounded-xl border transition-all duration-300 cursor-pointer flex items-center gap-1 sm:gap-1.5 shadow-lg ${
              activeNodeId === "auto"
                ? "bg-[#181818] border-[#A855F7] scale-105 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                : "bg-[#101010] border-white/10 hover:border-white/30"
            }`}
          >
            <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#A855F7] shrink-0" />
            <div className="text-left">
              <span className="text-[7px] sm:text-[8px] font-mono text-white font-bold block leading-tight">AI AGENTS</span>
              <span className="text-[6px] sm:text-[7px] font-mono text-[#A3A3A3] leading-tight">24/7 Auto</span>
            </div>
          </div>
        </div>
      </div>

      {/* Live Event Log Terminal Stream */}
      <div className="relative z-20 rounded-lg bg-[#0d0d0d] border border-white/10 p-2 flex items-center justify-between gap-2 overflow-hidden shadow-inner">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] animate-pulse shrink-0" />
          <span className="text-[9px] font-mono text-[#D4D4D4] truncate font-medium">
            {logs[logIndex]}
          </span>
        </div>
        <span className="text-[8px] font-mono text-[#A3A3A3] shrink-0">
          {activeNode.metric}
        </span>
      </div>

      {/* Bottom Switcher & State Details */}
      <div className="relative z-20 flex items-center justify-between gap-2 pt-2 border-t border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-mono text-[#737373]">NODE:</span>
          {NODES.map((n) => (
            <button
              key={n.id}
              type="button"
              onClick={() => setActiveNodeId(n.id)}
              className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider transition-colors ${
                activeNodeId === n.id
                  ? "bg-white text-black font-bold"
                  : "bg-[#141414] text-[#A3A3A3] hover:text-white"
              }`}
            >
              {n.name.split(" ")[0]}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => {
            const curIdx = NODES.findIndex((n) => n.id === activeNodeId);
            setActiveNodeId(NODES[(curIdx + 1) % NODES.length].id);
          }}
          className="text-[10px] font-mono text-[#A855F7] hover:underline"
        >
          NEXT PIPELINE →
        </button>
      </div>
    </div>
  );
}
