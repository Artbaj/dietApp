import withSerwistInit from "@serwist/next";

// This replaces 'const withSerwist = require(...)'
const withSerwist = withSerwistInit({
  swSrc: "src/sw.ts", // The source of your service worker
  swDest: "public/sw.js", // Where the built worker goes
  // Disable in development to stop the "sw.js threw an exception" error
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // If you have other settings like images or redirects, put them here
};

export default withSerwist(nextConfig);
