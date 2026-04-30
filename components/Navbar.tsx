"use client";

import { motion } from "framer-motion";
import { Github, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Features", href: "#features" },
  { label: "Demo", href: "#demo" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent",
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative h-7 w-7 rounded-lg bg-gradient-to-br from-copper-500 to-copper-700 flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-white" strokeWidth={2.5} />
            <div className="absolute inset-0 rounded-lg bg-copper-500/40 blur-md -z-10 group-hover:bg-copper-400/60 transition-colors" />
          </div>
          <span className="font-semibold tracking-tight">Claude Code</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-sm text-white/60 hover:text-white rounded-md transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/anthropics/claude-code"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center justify-center h-9 w-9 rounded-md border border-border hover:border-border-strong text-white/70 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="#install"
            className="inline-flex items-center gap-1.5 h-9 px-4 rounded-md bg-white text-bg text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Install
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
