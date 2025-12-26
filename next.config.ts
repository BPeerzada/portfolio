import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // <=== Enables static exports
  images: {
    unoptimized: true, // <=== Required for static export
  },
  // Optional: Change this if keeping the site in a subdirectory (e.g. /portfolio)
  basePath: "/portfolio",
};

export default nextConfig;
