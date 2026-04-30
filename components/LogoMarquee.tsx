"use client";

import { motion } from "framer-motion";

const VercelIcon = () => (
  <svg viewBox="0 0 256 222" className="h-6 w-auto" fill="currentColor">
    <path d="m128 0 128 221.705H0z" />
  </svg>
);

const LinearIcon = () => (
  <svg viewBox="0 0 100 100" className="h-7 w-auto" fill="currentColor">
    <path d="M1.225 61.523c-.222-.949.908-1.546 1.597-.857l36.512 36.512c.69.69.092 1.82-.857 1.597-18.425-4.323-32.93-18.827-37.252-37.252ZM.002 46.889a.99.99 0 0 0 .29.76L52.35 99.71c.201.2.478.307.76.29 2.37-.149 4.695-.46 6.963-.927.765-.157 1.03-1.096.478-1.648L2.576 39.448c-.552-.551-1.491-.286-1.648.479a50.067 50.067 0 0 0-.926 6.962ZM4.21 29.705a.988.988 0 0 0 .208 1.1l64.776 64.776c.289.29.726.375 1.1.208a49.908 49.908 0 0 0 5.185-2.684.981.981 0 0 0 .183-1.54L8.436 24.336a.981.981 0 0 0-1.541.183 49.896 49.896 0 0 0-2.684 5.185Zm8.448-11.631a.986.986 0 0 1-.045-1.354C21.78 6.46 35.111 0 49.952 0 77.592 0 100 22.407 100 50.048c0 14.84-6.46 28.172-16.72 37.338a.986.986 0 0 1-1.354-.045L12.659 18.074Z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-auto" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const NotionIcon = () => (
  <svg viewBox="0 0 256 268" className="h-7 w-auto" fill="currentColor">
    <path d="M16.092 11.538 164.09.608c18.179-1.56 22.85-.508 34.28 7.801l47.243 33.282C253.406 47.414 256 48.975 256 55.207v182.527c0 11.439-4.155 18.205-18.696 19.24L65.44 267.378c-10.913.517-16.11-1.043-21.825-8.327L8.826 213.814C2.586 205.487 0 199.254 0 191.97V29.726c0-9.352 4.155-17.153 16.092-18.188Zm53.235 40.682c-14.033.945-17.216 1.159-25.186-5.323L23.876 30.778c-2.06-2.086-1.026-4.69 4.163-5.207l142.274-10.395c11.947-1.043 18.17 3.12 22.842 6.758l24.401 17.68c1.043.525 3.638 3.637.517 3.637L71.146 52.095l-1.819.125Zm-16.36 183.954V81.222c0-6.767 2.077-9.887 8.3-10.413L230.02 60.93c5.724-.517 8.31 3.12 8.31 9.879v153.917c0 6.767-1.044 12.49-10.387 13.008l-161.487 9.361c-9.343.517-13.489-2.594-13.489-10.921Z" />
  </svg>
);

const SentryIcon = () => (
  <svg viewBox="0 0 256 227" className="h-6 w-auto" fill="currentColor">
    <path d="M148.368 12.403a23.935 23.935 0 0 0-41.003 0L73.64 70.165c52.426 26.174 87.05 78.177 90.975 136.642h-23.679c-3.918-50.113-34.061-94.41-79.238-116.448l-31.213 53.97a81.595 81.595 0 0 1 47.307 62.375h-54.38a3.895 3.895 0 0 1-3.178-5.69l15.069-25.626a55.046 55.046 0 0 0-17.221-9.738L3.167 191.277a23.269 23.269 0 0 0 8.662 31.982 23.884 23.884 0 0 0 11.583 3.075h74.471a99.432 99.432 0 0 0-41.003-88.72l11.84-20.5c35.679 24.504 55.754 66.038 52.79 109.22h63.094c2.99-65.43-29.047-127.512-84.107-162.986l23.935-41.002a3.947 3.947 0 0 1 5.382-1.384c2.716 1.486 103.993 178.208 105.89 180.258a3.895 3.895 0 0 1-3.486 5.792h-24.396c.307 6.526.307 13.035 0 19.528h24.499A23.528 23.528 0 0 0 256 202.91a23.015 23.015 0 0 0-3.178-11.685L148.368 12.403Z" />
  </svg>
);

const StripeWord = () => (
  <span className="font-bold text-2xl tracking-tight italic">stripe</span>
);

const VercelWord = () => (
  <span className="inline-flex items-center gap-2 font-semibold tracking-tight text-lg">
    <VercelIcon /> Vercel
  </span>
);

const items = [
  { name: "Linear", node: <span className="inline-flex items-center gap-2 font-semibold tracking-tight text-lg"><LinearIcon /> Linear</span> },
  { name: "GitHub", node: <span className="inline-flex items-center gap-2 font-semibold tracking-tight text-lg"><GitHubIcon /> GitHub</span> },
  { name: "Vercel", node: <VercelWord /> },
  { name: "Notion", node: <span className="inline-flex items-center gap-2 font-semibold tracking-tight text-lg"><NotionIcon /> Notion</span> },
  { name: "Sentry", node: <span className="inline-flex items-center gap-2 font-semibold tracking-tight text-lg"><SentryIcon /> Sentry</span> },
  { name: "Stripe", node: <StripeWord /> },
];

export function LogoMarquee() {
  return (
    <section className="relative py-20 overflow-hidden border-y border-border bg-bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
            Trusted by engineering teams at
          </p>
        </div>

        <div className="relative">
          {/* Edge fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-bg via-bg/80 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-bg via-bg/80 to-transparent pointer-events-none" />

          <motion.div
            className="flex gap-16 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...items, ...items, ...items].map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 text-white/40 hover:text-white/70 transition-colors"
              >
                {item.node}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
