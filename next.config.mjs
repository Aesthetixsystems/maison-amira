/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow the dev server to serve client-side code to Replit's proxied
  // preview domains (otherwise buttons render but don't respond).
  allowedDevOrigins: [
    "*.replit.dev",
    "*.worf.replit.dev",
    "*.picard.replit.dev",
    "*.repl.co",
    "*.replit.app",
  ],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
