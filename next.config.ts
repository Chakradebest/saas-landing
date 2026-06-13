import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Keep this for static export
  
  // Replace 'saas-landing' with your exact GitHub repository name if it's different!
  basePath: "/saas-landing", 
  assetPrefix: "/saas-landing/", 

  images: {
    unoptimized: true, 
  },
};

export default nextConfig;