import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SaaSify - Build Better Products, Faster",
  description: "The all-in-one platform for modern SaaS teams. Ship features, analyze user behavior, and grow revenue with powerful tools designed for developers.",
  keywords: ["SaaS", "analytics", "dashboard", "developer tools", "startup"],
  authors: [{ name: "SaaSify" }],
  openGraph: {
    title: "SaaSify - Build Better Products, Faster",
    description: "The all-in-one platform for modern SaaS teams.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-sans">
        {children}
      </body>
    </html>
  );
}