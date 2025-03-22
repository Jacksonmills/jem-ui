import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    ui: ["./registry/**/*"],
  },
  /* config options here */
};

export default nextConfig;
