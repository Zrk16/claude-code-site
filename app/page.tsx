import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Features } from "@/components/Features";
import { TerminalDemo } from "@/components/TerminalDemo";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <LogoMarquee />
      <Features />
      <TerminalDemo />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
