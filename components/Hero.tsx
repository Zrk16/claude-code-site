"use client";

import { motion, useScroll, useTransform, animate, useMotionValue } from "framer-motion";
import { ArrowRight, Copy, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function InstallCommand() {
  const [copied, setCopied] = useState(false);
  const cmd = "npm install -g @anthropic-ai/claude-code";

  const copy = async () => {
    await navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="inline-flex items-center gap-3 pl-5 pr-2 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md font-mono text-sm hover:border-white/20 transition-colors"
    >
      <span className="text-copper-400">$</span>
      <span className="text-white/70">{cmd}</span>
      <button
        onClick={copy}
        className="ml-1 inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/8 hover:bg-white/15 text-white/60 hover:text-white transition-colors"
        aria-label="Copy"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
    </motion.div>
  );
}

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toLocaleString()),
    });
    return controls.stop;
  }, [count, value]);

  return <span className="font-mono tabular-nums">{display}{suffix}</span>;
}

function TerminalMockup() {
  const lines = [
    { kind: "user", text: "fix failing tests + open a PR" },
    { kind: "tool", text: "Read(src/auth/jwt.ts, tests/auth/**)" },
    { kind: "claude", text: "Token expiry check: < → <=  (3 files)" },
    { kind: "tool", text: "Bash(npm test)   ✓ 142 passing" },
    { kind: "tool", text: "gh pr create → github.com/acme/api/pull/482" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-3xl"
    >
      {/* Glow */}
      <div className="absolute -inset-8 bg-gradient-to-b from-copper-500/25 via-copper-600/10 to-transparent blur-3xl rounded-full -z-10" />
      <div className="absolute -inset-1 bg-gradient-to-b from-white/5 to-transparent rounded-2xl -z-10" />

      <div className="rounded-2xl border border-white/10 bg-[#0d0d0d]/90 backdrop-blur-xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.8)]">
        {/* Chrome */}
        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/8 bg-white/3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-auto font-mono text-xs text-white/30">claude</span>
        </div>

        <div className="px-6 py-5 space-y-3 min-h-[180px]">
          {lines.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 + i * 0.18, duration: 0.4, ease: "easeOut" }}
              className={`font-mono text-sm ${
                l.kind === "user"
                  ? "text-copper-300"
                  : l.kind === "tool"
                  ? "text-sky-300/80"
                  : "text-white/80"
              }`}
            >
              <span className="text-white/25 mr-2">
                {l.kind === "user" ? "›" : l.kind === "tool" ? "▸" : "✦"}
              </span>
              {l.text}
            </motion.div>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ delay: 2.1, duration: 1, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-copper-400 ml-5"
          />
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const terminalY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const terminalOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-bg">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(204,120,92,0.25),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_60%,rgba(139,92,246,0.12),transparent)]" />
        <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_50%_0%,black_40%,transparent_80%)]" />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center pt-32 pb-16 px-6">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/6 border border-white/10 backdrop-blur-md"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute h-full w-full rounded-full bg-copper-400 opacity-75" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-copper-500" />
          </span>
          <span className="text-xs font-medium text-white/60 tracking-widest uppercase">Claude Sonnet 4.6</span>
        </motion.div>

        {/* Headline — scroll-linked */}
        <motion.div style={{ y: textY, opacity: textOpacity }} className="text-center max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3.5rem,10vw,9rem)] font-bold tracking-[-0.04em] leading-[0.92] text-balance"
          >
            <span className="block text-white">Code at the</span>
            <span className="block gradient-text pb-2">speed of thought.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-lg sm:text-xl text-white/55 max-w-xl mx-auto leading-relaxed"
          >
            An AI coding agent that lives in your terminal. Reads your codebase,
            ships features, opens PRs — from one natural-language prompt.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="#install"
              className="group inline-flex items-center gap-2 h-12 px-7 rounded-full bg-white text-bg font-semibold text-sm hover:bg-white/92 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Get started free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 h-12 px-7 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition-colors text-sm font-medium"
            >
              See it in action
            </a>
          </motion.div>

          <div className="mt-8">
            <InstallCommand />
          </div>
        </motion.div>

        {/* Terminal mockup — scroll-linked */}
        <motion.div
          style={{ y: terminalY, opacity: terminalOpacity }}
          className="w-full mt-16"
        >
          <TerminalMockup />
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16"
        >
          {[
            { v: 200000, s: "+", l: "developers" },
            { v: 73, s: "%", l: "SWE-bench score" },
            { v: 50, s: "M+", l: "lines shipped" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                <AnimatedCounter value={s.v} suffix={s.s} />
              </div>
              <div className="mt-1 text-sm text-white/45">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
