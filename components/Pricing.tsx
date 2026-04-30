"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Pro",
    price: "$20",
    period: "/mo",
    desc: "For solo developers exploring agentic coding.",
    features: [
      "Claude Code CLI",
      "Sonnet 4.6 access",
      "5x more usage than free",
      "Priority bandwidth",
    ],
    cta: "Start with Pro",
  },
  {
    name: "Max",
    price: "$200",
    period: "/mo",
    desc: "For engineers who live in the terminal.",
    features: [
      "Everything in Pro",
      "Opus 4.7 unlimited reasoning",
      "20x usage of Pro",
      "Background agents",
      "Early access features",
    ],
    cta: "Go Max",
    featured: true,
  },
  {
    name: "Team",
    price: "Custom",
    period: "",
    desc: "Org-wide deployment with admin controls.",
    features: [
      "SSO & SCIM",
      "Audit logs",
      "Per-seat governance",
      "Dedicated support",
      "On-prem options",
    ],
    cta: "Contact sales",
  },
];

const cardV = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[1] text-balance">
            Simple, <span className="gradient-text">predictable</span> pricing.
          </h2>
          <p className="mt-6 text-lg text-white/60">
            Start free. Scale when you ship more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              custom={i}
              variants={cardV}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -6 }}
              className={`relative rounded-2xl p-8 border transition-colors ${
                tier.featured
                  ? "border-copper-500/40 bg-gradient-to-b from-copper-600/10 via-bg-surface to-bg-surface glow-copper"
                  : "border-border bg-bg-surface/60 hover:border-border-strong"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-copper-500 text-bg text-xs font-semibold tracking-wide">
                  <Sparkles className="h-3 w-3" />
                  Most popular
                </div>
              )}

              <h3 className="text-lg font-semibold tracking-tight text-white">
                {tier.name}
              </h3>
              <p className="mt-1 text-sm text-white/55 min-h-[40px]">
                {tier.desc}
              </p>

              <div className="mt-6 flex items-end gap-1">
                <span className="text-5xl font-bold tracking-tighter text-white">
                  {tier.price}
                </span>
                <span className="text-white/50 mb-2">{tier.period}</span>
              </div>

              <a
                href="#"
                className={`mt-6 inline-flex w-full items-center justify-center h-11 rounded-md font-medium transition-all ${
                  tier.featured
                    ? "bg-white text-bg hover:bg-white/90 hover:scale-[1.01]"
                    : "border border-border-strong text-white hover:bg-white/5"
                }`}
              >
                {tier.cta}
              </a>

              <ul className="mt-8 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`h-4 w-4 mt-0.5 flex-shrink-0 ${tier.featured ? "text-copper-400" : "text-white/40"}`}
                      strokeWidth={2.5}
                    />
                    <span className="text-white/75">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
