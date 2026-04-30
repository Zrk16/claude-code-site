"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Brain, Wrench, GitBranch, Network } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = {
  tag: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  visual: React.ReactNode;
  flip?: boolean;
};

function CodeCard({ lines }: { lines: { c: string; t: string }[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d0d0d]/80 backdrop-blur-xl overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-white/8">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="p-6 font-mono text-sm space-y-1.5">
        {lines.map((l, i) => (
          <div key={i} className={l.c}>{l.t}</div>
        ))}
      </div>
    </div>
  );
}

function StatCard({ stats }: { stats: { n: string; l: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map((s, i) => (
        <div key={i} className="rounded-2xl border border-white/8 bg-white/3 backdrop-blur-md p-6">
          <div className="text-3xl font-bold tracking-tight text-white">{s.n}</div>
          <div className="mt-1.5 text-sm text-white/50">{s.l}</div>
        </div>
      ))}
    </div>
  );
}

function ToolCallCard() {
  const calls = [
    { icon: "📂", name: "Read", args: "src/auth/**, package.json" },
    { icon: "✏️", name: "Edit", args: "src/auth/jwt.ts" },
    { icon: "▶️", name: "Bash", args: "npm test" },
    { icon: "🔀", name: "gh pr create", args: "--title 'fix: jwt expiry'" },
  ];
  return (
    <div className="space-y-2">
      {calls.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/3 px-4 py-3"
        >
          <span className="text-base">{c.icon}</span>
          <span className="font-mono text-sm text-sky-300">{c.name}</span>
          <span className="font-mono text-xs text-white/40 truncate ml-auto">{c.args}</span>
        </motion.div>
      ))}
    </div>
  );
}

const features: Feature[] = [
  {
    tag: "Intelligence",
    title: "Reads your codebase. Thinks like a senior engineer.",
    desc: "Claude Code greps, follows imports, reads tests — the same way a human would approach an unfamiliar repo. No embeddings, no stale indexes. Just read-time reasoning across your full codebase.",
    icon: Brain,
    visual: (
      <CodeCard lines={[
        { c: "text-white/40", t: "// Reads src/auth/jwt.ts" },
        { c: "text-sky-300", t: "import { verify } from 'jsonwebtoken'" },
        { c: "text-white/60", t: "" },
        { c: "text-white/40", t: "// Found the bug ↓" },
        { c: "text-rose-400 line-through", t: "if (exp < Date.now() / 1000) {" },
        { c: "text-emerald-300", t: "if (exp <= Date.now() / 1000) {" },
        { c: "text-white/60", t: "  throw new TokenExpiredError()" },
        { c: "text-white/60", t: "}" },
      ]} />
    ),
  },
  {
    tag: "Agent loop",
    title: "Uses your tools. Runs your tests. Ships when green.",
    desc: "Claude Code isn't a one-shot editor. It runs bash commands, reads output, adjusts its approach, and iterates — exactly like a developer would in a tight fix loop. All in your terminal.",
    icon: Wrench,
    visual: <ToolCallCard />,
    flip: true,
  },
  {
    tag: "Git-native",
    title: "From diff to shipped PR — in one prompt.",
    desc: "Describe the work in plain English. Claude Code writes the code, stages the right files, crafts a commit message that explains the why, and opens the PR with context for reviewers.",
    icon: GitBranch,
    visual: (
      <StatCard stats={[
        { n: "3.2×", l: "faster PR cycle" },
        { n: "73%", l: "SWE-bench verified" },
        { n: "142", l: "tests passing" },
        { n: "#482", l: "PR shipped" },
      ]} />
    ),
  },
  {
    tag: "Ecosystem",
    title: "Every tool your team uses. One agent.",
    desc: "MCP servers connect Claude Code to Linear, Sentry, GitHub, Postgres, and any internal API. Search issues, read errors, query your database — without leaving the terminal.",
    icon: Network,
    visual: (
      <CodeCard lines={[
        { c: "text-white/40", t: "// .claude/mcp.json" },
        { c: "text-amber-300", t: '"mcpServers": {' },
        { c: "text-white/70 pl-4", t: '"linear":   { "url": "..." },' },
        { c: "text-white/70 pl-4", t: '"sentry":   { "url": "..." },' },
        { c: "text-white/70 pl-4", t: '"postgres": { "url": "..." },' },
        { c: "text-white/70 pl-4", t: '"github":   { "url": "..." }' },
        { c: "text-amber-300", t: "}" },
      ]} />
    ),
    flip: true,
  },
];

function FeatureBlock({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "start 0.35"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const Icon = feature.icon;

  return (
    <div ref={ref} className="relative py-24 sm:py-32 px-6 border-t border-white/6">
      {/* Section bg alternating */}
      {index % 2 !== 0 && (
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      )}

      <motion.div
        style={{ opacity, y }}
        className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
          feature.flip ? "lg:grid-flow-col-dense" : ""
        }`}
      >
        {/* Text */}
        <div className={feature.flip ? "lg:col-start-2" : ""}>
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-9 w-9 rounded-xl bg-copper-600/15 border border-copper-500/25 flex items-center justify-center">
              <Icon className="h-4.5 w-4.5 text-copper-400" strokeWidth={2} />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-copper-400">
              {feature.tag}
            </span>
          </div>

          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-tight leading-[1.1] text-white text-balance">
            {feature.title}
          </h2>
          <p className="mt-5 text-lg text-white/55 leading-relaxed max-w-lg">
            {feature.desc}
          </p>
        </div>

        {/* Visual */}
        <div className={feature.flip ? "lg:col-start-1" : ""}>
          {feature.visual}
        </div>
      </motion.div>
    </div>
  );
}

export function FeatureShowcase() {
  return (
    <section id="features" className="relative bg-bg overflow-hidden">
      {/* Header */}
      <div className="py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">
            Capabilities
          </p>
          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold tracking-[-0.04em] leading-[1] text-balance">
            Built for the way engineers{" "}
            <span className="gradient-text">actually work.</span>
          </h2>
        </motion.div>
      </div>

      {features.map((f, i) => (
        <FeatureBlock key={f.tag} feature={f} index={i} />
      ))}
    </section>
  );
}
