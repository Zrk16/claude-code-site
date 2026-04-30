"use client";

import { Sparkles, Github, Twitter } from "lucide-react";

const groups = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Docs", "Changelog"],
  },
  {
    title: "Resources",
    links: ["Quickstart", "MCP servers", "Examples", "Community"],
  },
  {
    title: "Company",
    links: ["Anthropic", "Careers", "Privacy", "Terms"],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border px-6 pt-20 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2">
              <div className="relative h-7 w-7 rounded-lg bg-gradient-to-br from-copper-500 to-copper-700 flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-semibold tracking-tight">Claude Code</span>
            </a>
            <p className="mt-4 text-sm text-white/55 max-w-xs leading-relaxed">
              The official CLI from Anthropic. Code at the speed of thought.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:border-border-strong text-white/60 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border hover:border-border-strong text-white/60 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <div className="text-xs font-semibold tracking-wider uppercase text-white/40">
                {g.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-white/65 hover:text-white transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/40">
            © {new Date().getFullYear()} Anthropic. Built with Claude Code.
          </div>
          <div className="text-xs text-white/40 font-mono">
            v0.3.0 · status: all systems normal
          </div>
        </div>
      </div>
    </footer>
  );
}
