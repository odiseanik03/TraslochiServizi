/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 5,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ─── LAYER 1: Security Headers (production only) ───
  // In dev mode, security headers break LAN testing:
  // - HSTS tells Safari to cache "always use HTTPS" for 2 years
  // - upgrade-insecure-requests upgrades CSS/JS loads to HTTPS (which doesn't exist)
  // - Cross-Origin-Resource-Policy can block resources over LAN IPs
  // All headers are fully active in production when deployed with real HTTPS.
  async headers() {
    if (!isProd) return [];

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=(), ambient-light-sensor=(), autoplay=(), encrypted-media=(self), fullscreen=(self)",
          },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy", value: "same-site" },
          { key: "X-DNS-Prefetch-Control", value: "off" },
          { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: blob: https://maps.googleapis.com https://maps.gstatic.com https://*.google.com https://*.googleusercontent.com",
              "font-src 'self' https://fonts.gstatic.com",
              "connect-src 'self' https://wa.me https://www.google-analytics.com https://vitals.vercel-insights.com",
              "frame-src 'self' https://www.google.com https://maps.google.com",
              "media-src 'self'",
              "worker-src 'self' blob:",
              "child-src 'self'",
              "manifest-src 'self'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://wa.me",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests",
              "block-all-mixed-content",
            ].join("; "),
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
