"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, Copy, Check, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

function GradientMesh() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      {/* Animated blobs */}
      <motion.div
        className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-copper-600/30 blur-[120px]"
        animate={{ x: [0, 60, -40, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[20%] right-[5%] w-[450px] h-[450px] rounded-full bg-violet-600/20 blur-[120px]"
        animate={{ x: [0, -50, 30, 0], y: [0, 30, 50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[30%] w-[600px] h-[400px] rounded-full bg-amber-500/15 blur-[140px]"
        animate={{ x: [0, 40, -60, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
    </div>
  );
}

function InstallCommand() {
  const [copied, setCopied] = useState(false);
  const cmd = "npm install -g @anthropic-ai/claude-code";

  const copy = async () => {
    await navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <motion.div
      custom={4}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="group relative inline-flex items-center gap-3 pl-4 pr-2 py-2 rounded-full bg-bg-surface/80 border border-border hover:border-border-strong backdrop-blur-md font-mono text-sm transition-colors"
    >
      <span className="text-copper-400">$</span>
      <span className="text-white/80">{cmd}</span>
      <button
        onClick={copy}
        className="ml-2 inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
        aria-label="Copy install command"
      >
        {copied ? (
          <Check className="h-4 w-4 text-emerald-400" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </motion.div>
  );
}

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    const controls = animate(count, value, { duration: 2.4, ease: [0.22, 1, 0.36, 1] });
    return controls.stop;
  }, [count, value]);

  return (
    <span className="font-mono">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      <GradientMesh />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-copper-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-copper-500" />
          </span>
          <span className="text-xs font-medium text-white/70 tracking-wide">
            Now with Claude Sonnet 4.6
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-balance leading-[0.95]"
        >
          <span className="block text-white">Code at the</span>
          <span className="block gradient-text">speed of thought.</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed text-balance"
        >
          Claude Code lives in your terminal, understands your codebase, and helps
          you ship faster — through natural language commands.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#install"
            className="group inline-flex items-center gap-2 h-12 px-6 rounded-md bg-white text-bg font-medium hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Get started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-md border border-border hover:border-border-strong bg-bg-surface/50 backdrop-blur-md text-white/80 hover:text-white transition-colors"
          >
            <Terminal className="h-4 w-4" />
            Watch demo
          </a>
        </motion.div>

        <div className="mt-12">
          <InstallCommand />
        </div>

        {/* Stats */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-20 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          {[
            { v: 200000, s: "+", l: "Developers" },
            { v: 73, s: "%", l: "SWE-bench solved" },
            { v: 50, s: "M+", l: "Lines shipped" },
          ].map((stat, i) => (
            <div key={i} className="border-l border-border pl-4 text-left">
              <div className="text-2xl sm:text-3xl font-semibold text-white">
                <AnimatedCounter value={stat.v} suffix={stat.s} />
              </div>
              <div className="text-xs sm:text-sm text-white/50 mt-1">{stat.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
