"use client";

import { motion } from "framer-motion";
import {
  Brain,
  GitBranch,
  Wrench,
  Zap,
  Lock,
  Network,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

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
    accent: "from-copper-500/20 to-transparent",
  },
  {
    icon: Zap,
    title: "Fast edits",
    desc: "Multi-file changes in one command. Refactors, migrations, fixes.",
    accent: "from-amber-500/20 to-transparent",
  },
  {
    icon: GitBranch,
    title: "Git-native",
    desc: "Reviews PRs, resolves conflicts, writes commit messages, opens PRs from descriptions.",
    accent: "from-violet-500/20 to-transparent",
  },
  {
    icon: Wrench,
    title: "Tool use",
    desc: "Runs your tests, lints, builds. Reads results. Iterates until green.",
    span: "md:col-span-2",
    accent: "from-emerald-500/20 to-transparent",
  },
  {
    icon: Network,
    title: "MCP ecosystem",
    desc: "Plug in Linear, Sentry, GitHub, Postgres — any MCP server.",
    accent: "from-sky-500/20 to-transparent",
  },
  {
    icon: Lock,
    title: "Permission-first",
    desc: "Approve actions before they happen. Sandbox modes for autonomy.",
    span: "md:col-span-2",
    accent: "from-rose-500/20 to-transparent",
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
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -4 }}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-bg-surface/60 backdrop-blur-sm p-7 transition-colors hover:border-border-strong ${f.span ?? ""}`}
              >
                {/* Accent gradient */}
                <div
                  className={`absolute -top-1/2 -right-1/4 h-64 w-64 rounded-full bg-gradient-radial ${f.accent} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity`}
                  style={{
                    background: `radial-gradient(circle, var(--tw-gradient-stops))`,
                  }}
                />

                <div className="relative">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-bg-elevated border border-border">
                    <Icon className="h-5 w-5 text-copper-400" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
