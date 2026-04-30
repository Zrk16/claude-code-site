"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Line =
  | { kind: "user"; text: string }
  | { kind: "claude"; text: string }
  | { kind: "tool"; text: string }
  | { kind: "out"; text: string };

const script: Line[] = [
  { kind: "user", text: "fix the failing auth tests and ship a PR" },
  { kind: "claude", text: "Reading repo structure…" },
  { kind: "tool", text: "▸ Read(package.json, src/auth/**, tests/auth/**)" },
  { kind: "claude", text: "Found 3 failures in tests/auth/jwt.test.ts. Token expiry uses < instead of <=. Fixing." },
  { kind: "tool", text: "▸ Edit(src/auth/jwt.ts) — 1 change" },
  { kind: "tool", text: "▸ Bash(npm test)" },
  { kind: "out", text: "  ✓ 142 passing  (1.8s)" },
  { kind: "claude", text: "Tests green. Opening PR." },
  { kind: "tool", text: "▸ gh pr create" },
  { kind: "out", text: "  https://github.com/acme/api/pull/482" },
];

const palette: Record<Line["kind"], string> = {
  user: "text-copper-300",
  claude: "text-white/90",
  tool: "text-sky-300/80",
  out: "text-emerald-300/80",
};

const prefix: Record<Line["kind"], string> = {
  user: "› ",
  claude: "✦ ",
  tool: "  ",
  out: "  ",
};

function TypingLine({ line, onDone }: { line: Line; onDone: () => void }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    let i = 0;
    const speed = line.kind === "user" ? 35 : line.kind === "claude" ? 18 : 8;
    const id = setInterval(() => {
      i++;
      setShown(line.text.slice(0, i));
      if (i >= line.text.length) {
        clearInterval(id);
        setTimeout(onDone, line.kind === "out" ? 350 : 500);
      }
    }, speed);
    return () => clearInterval(id);
  }, [line, onDone]);

  return (
    <div className={`font-mono text-sm leading-relaxed ${palette[line.kind]}`}>
      <span className="text-white/30">{prefix[line.kind]}</span>
      {shown}
      <span className="inline-block w-2 h-4 align-text-bottom bg-copper-400 ml-0.5 animate-pulse" />
    </div>
  );
}

function StaticLine({ line }: { line: Line }) {
  return (
    <div className={`font-mono text-sm leading-relaxed ${palette[line.kind]}`}>
      <span className="text-white/30">{prefix[line.kind]}</span>
      {line.text}
    </div>
  );
}

export function TerminalDemo() {
  const [step, setStep] = useState(0);

  // Loop after finishing
  useEffect(() => {
    if (step >= script.length) {
      const id = setTimeout(() => setStep(0), 2400);
      return () => clearTimeout(id);
    }
  }, [step]);

  const visible = script.slice(0, step);
  const current = script[step];

  return (
    <section id="demo" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[1] text-balance">
            One prompt. <span className="gradient-text">Real work done.</span>
          </h2>
          <p className="mt-6 text-lg text-white/60">
            Watch Claude Code read, edit, test, and ship — all from your terminal.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute -inset-4 bg-gradient-to-br from-copper-600/20 via-violet-600/10 to-copper-500/20 blur-3xl opacity-50" />

          <div className="relative rounded-xl overflow-hidden border border-border-strong bg-bg-surface shadow-2xl">
            {/* Window chrome */}
            <div className="flex items-center justify-between px-4 h-10 border-b border-border bg-bg-elevated">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="font-mono text-xs text-white/40">
                ~/projects/api — claude
              </div>
              <div className="w-12" />
            </div>

            {/* Body */}
            <div className="px-6 py-6 min-h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(204,120,92,0.06),transparent_50%)]">
              <div className="space-y-2">
                <AnimatePresence>
                  {visible.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <StaticLine line={line} />
                    </motion.div>
                  ))}
                </AnimatePresence>
                {current && (
                  <TypingLine
                    key={step}
                    line={current}
                    onDone={() => setStep((s) => s + 1)}
                  />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
