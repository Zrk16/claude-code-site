"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import {
  Brain,
  GitBranch,
  Wrench,
  Zap,
  Lock,
  Network,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { MouseEvent } from "react";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  span?: string;
  accent?: string;
};

const features: Feature[] = [
  {
    icon: Brain,
    title: "Codebase-aware reasoning",
    desc: "Reads your entire repo. Understands patterns, conventions, and intent — not just the file you opened.",
    span: "md:col-span-2",
    accent: "rgba(204, 120, 92, 0.18)",
  },
  {
    icon: Zap,
    title: "Fast edits",
    desc: "Multi-file changes in one command. Refactors, migrations, fixes.",
    accent: "rgba(245, 158, 11, 0.18)",
  },
  {
    icon: GitBranch,
    title: "Git-native",
    desc: "Reviews PRs, resolves conflicts, writes commit messages, opens PRs from descriptions.",
    accent: "rgba(139, 92, 246, 0.18)",
  },
  {
    icon: Wrench,
    title: "Tool use",
    desc: "Runs your tests, lints, builds. Reads results. Iterates until green.",
    span: "md:col-span-2",
    accent: "rgba(16, 185, 129, 0.18)",
  },
  {
    icon: Network,
    title: "MCP ecosystem",
    desc: "Plug in Linear, Sentry, GitHub, Postgres — any MCP server.",
    accent: "rgba(14, 165, 233, 0.18)",
  },
  {
    icon: Lock,
    title: "Permission-first",
    desc: "Approve actions before they happen. Sandbox modes for autonomy.",
    span: "md:col-span-2",
    accent: "rgba(244, 63, 94, 0.18)",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

function FeatureCard({ f, i }: { f: Feature; i: number }) {
  const Icon = f.icon;
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useMotionTemplate`radial-gradient(380px circle at ${mouseX}px ${mouseY}px, ${f.accent}, transparent 70%)`;
  const borderHighlight = useMotionTemplate`radial-gradient(240px circle at ${mouseX}px ${mouseY}px, rgba(204, 120, 92, 0.4), transparent 70%)`;

  return (
    <motion.div
      custom={i}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -4 }}
      onMouseMove={onMouseMove}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-bg-surface/60 backdrop-blur-sm p-7 transition-colors hover:border-border-strong ${f.span ?? ""}`}
    >
      {/* Cursor-tracked spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background }}
      />

      {/* Border highlight on hover */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: borderHighlight,
          mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      <div className="relative">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-bg-elevated border border-border">
          <Icon className="h-5 w-5 text-copper-400" strokeWidth={2} />
        </div>
        <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
          {f.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/55">{f.desc}</p>
      </div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-copper-600/10 border border-copper-600/20 mb-5">
            <span className="text-xs font-medium text-copper-300 tracking-wide uppercase">
              Capabilities
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[1] text-balance">
            Built for the way{" "}
            <span className="gradient-text">engineers actually work.</span>
          </h2>
          <p className="mt-6 text-lg text-white/60 max-w-xl">
            Not a chatbot bolted onto an editor. A real agent with hands on your
            codebase, your tools, your tests.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <FeatureCard key={f.title} f={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
