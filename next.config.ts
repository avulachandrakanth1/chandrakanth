import type { NextConfig } from "next";

const repoName = "chandrakanth";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;