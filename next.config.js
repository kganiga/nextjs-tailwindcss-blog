const { withContentlayer } = require("next-contentlayer");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // Disable PWA in dev mode
});

// 🔒 Security Headers
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';
      script-src 'self' www.google-analytics.com khalilganiga.disqus.com giscus.app analytics.umami.is https://www.googletagmanager.com va.vercel-scripts.com;
      style-src 'self' 'unsafe-inline';
      img-src 'self' blob: data: freeimghost.net;
      media-src *.s3.amazonaws.com;
      connect-src 'self' analytics.umami.is www.google-analytics.com;
      font-src 'self' https://fonts.gstatic.com;
      frame-src giscus.app www.youtube.com disqus.com;
    `.replace(/\n/g, ""),
  },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  eslint: {
    dirs: ["app", "components", "layouts", "scripts"],
  },
  images: {
    domains: ["picsum.photos", "khalilganiga.in", "flickr.com", "freeimghost.net"],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

// 🚀 Export the final config with plugins applied
module.exports = withPWA(withContentlayer(withBundleAnalyzer(nextConfig)));
