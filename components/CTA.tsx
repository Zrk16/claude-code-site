"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="install" className="relative py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-border-strong bg-bg-surface px-6 py-20 text-center"
      >
        {/* Animated bg */}
        <motion.div
          className="absolute inset-0 -z-10 opacity-50"
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 30%, rgba(204,120,92,0.25), transparent 50%)",
              "radial-gradient(ellipse at 80% 70%, rgba(204,120,92,0.25), transparent 50%)",
              "radial-gradient(ellipse at 20% 30%, rgba(204,120,92,0.25), transparent 50%)",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 -z-10 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[1] text-balance">
          Ship faster.{" "}
          <span className="gradient-text">Starting today.</span>
        </h2>
        <p className="mt-5 text-lg text-white/60 max-w-xl mx-auto">
          Install Claude Code in 30 seconds. First run is on us.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="group inline-flex items-center gap-2 h-12 px-8 rounded-md bg-white text-bg font-medium hover:bg-white/90 transition-all hover:scale-[1.02]"
          >
            Install now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#"
            className="text-white/60 hover:text-white text-sm transition-colors underline-offset-4 hover:underline"
          >
            Read the docs →
          </a>
        </div>
      </motion.div>
    </section>
  );
}
