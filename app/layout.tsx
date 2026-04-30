import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Claude Code — Code at the speed of thought",
  description:
    "Claude Code is Anthropic's official CLI. An agentic coding tool that lives in your terminal and ships features faster.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-bg text-white overflow-x-hidden">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
