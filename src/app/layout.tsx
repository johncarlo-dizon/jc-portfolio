import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/lib/ThemeContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "John Carlo Dizon | Full Stack & Mobile Developer",
  description: "Full Stack and Mobile Developer specializing in Flutter, Laravel, Spring Boot, React, and CI/CD deployments. Based in the Philippines.",
  keywords: ["Flutter Developer","Laravel Developer","Full Stack Developer","Mobile Developer","Spring Boot","React Developer","Philippines Developer"],
  openGraph: {
    title: "John Carlo Dizon | Full Stack & Mobile Developer",
    description: "Building scalable web apps and mobile experiences — from backend APIs to Play Store deployments.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <div id="scroll-progress" />
        <ThemeProvider>{children}</ThemeProvider>
        <script dangerouslySetInnerHTML={{ __html: `
          window.addEventListener('scroll', () => {
            const el = document.getElementById('scroll-progress');
            if (!el) return;
            const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            el.style.width = Math.min(pct, 100) + '%';
          });
        `}} />
      </body>
    </html>
  );
}