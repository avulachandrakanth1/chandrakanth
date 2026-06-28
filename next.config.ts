import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const repoName = "ashwath-devops-portfolio";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   devIndicators: false,
//   output: "export",
//   trailingSlash: true,
//   basePath: "/ashwath-devops-portfolio",
//   assetPrefix: "/ashwath-devops-portfolio",
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;
