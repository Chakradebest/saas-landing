import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // <-- Instructs Next.js to generate static HTML
  images: {
    unoptimized: true,  // <-- Prevents image processing from throwing build errors
  },
};

export default nextConfig;