/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  output: 'export',
  
  // 🔥 关键修复：适配 GitHub Pages 子路径部署
  basePath: '/shanhai-real-time-fund',
  assetPrefix: '/shanhai-real-time-fund/',
  
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;

// Injected content via Sentry wizard below
const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(module.exports, {
  org: "fund-06",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,

  webpack: {
    automaticVercelMonitors: true,
    treeshake: {
      removeDebugLogging: true,
    },
  },
});
