import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the project root (a stray lockfile in the home directory confuses auto-detection).
  turbopack: { root: path.join(__dirname) },
};

export default nextConfig;
