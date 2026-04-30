"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What models does Claude Code use?",
    a: "Claude Code uses Anthropic's frontier models — Sonnet 4.6 by default, with Opus 4.7 available on Max plans. Haiku 4.5 powers fast lightweight calls.",
  },
  {
    q: "Does Claude Code work with my existing editor?",
    a: "Yes. Claude Code is a CLI that runs alongside any editor — VS Code, Cursor, Neovim, JetBrains. It also has first-class IDE extensions for VS Code and JetBrains.",
  },
  {
    q: "How does it handle large codebases?",
    a: "Claude Code uses agentic search rather than embeddings. It greps, reads files, and follows imports the way a human engineer would. This works on repos of any size, including monorepos.",
  },
  {
    q: "Is my code sent to Anthropic for training?",
    a: "No. By default, code processed through Claude Code is not used for training. Enterprise plans offer additional data residency and audit controls.",
  },
  {
    q: "Can I run Claude Code in CI?",
    a: "Yes. Claude Code supports headless mode for non-interactive environments. Use it for PR review, automated refactors, or scheduled maintenance tasks.",
  },
  {
    q: "What's the difference between Pro and Max?",
    a: "Pro gives you Sonnet 4.6 with generous limits for solo work. Max unlocks Opus 4.7 reasoning, 20× the usage, background agents, and early-access features.",
  },
];

function Item({ faq, idx, open, onToggle }: any) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
      >
        <span className="text-base sm:text-lg font-medium text-white/90 group-hover:text-white transition-colors">
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 h-8 w-8 rounded-full border border-border group-hover:border-copper-500/50 flex items-center justify-center text-white/50 group-hover:text-copper-400 transition-colors"
        >
          <Plus className="h-4 w-4" strokeWidth={2.5} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-white/60 leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[1] text-balance">
            Frequently <span className="gradient-text">asked.</span>
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Answers to what engineers ask before installing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-border bg-bg-surface/50 backdrop-blur-sm px-6 sm:px-8"
        >
          {faqs.map((f, i) => (
            <Item
              key={i}
              faq={f}
              idx={i}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
