import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // A stray lockfile in the home folder otherwise makes Next.js treat ~ as the project root.
    root: path.join(__dirname),
  },
  async redirects() {
    return ["about", "blog", "contact", "services"].map((page) => ({
      source: `/${page}/:path*`,
      destination: `/capital-advisory/${page}/:path*`,
      permanent: false,
    }));
  },
};

export default nextConfig;
