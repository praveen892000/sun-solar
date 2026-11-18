import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "srisunsolar.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "www.srisunsolar.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  // Preserve search equity from the legacy WordPress URLs.
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      // Note: do not add /Gallery → /gallery — case-only redirects break on Windows.
      { source: "/home-2/home", destination: "/", permanent: true },
      { source: "/epc-backup", destination: "/epc", permanent: true },
      { source: "/rec-products", destination: "/products/rec", permanent: true },
      { source: "/novasys", destination: "/products/novasys", permanent: true },
      { source: "/navitas", destination: "/products/navitas", permanent: true },
      { source: "/bonito", destination: "/products/navitas", permanent: true },
      { source: "/navisol-series", destination: "/products/navitas", permanent: true },
      { source: "/anora-series", destination: "/products/navitas", permanent: true },
      { source: "/growatt", destination: "/products/growatt", permanent: true },
      { source: "/k-solar", destination: "/products/k-solar", permanent: true },
      { source: "/fronius", destination: "/products/fronius", permanent: true },
      {
        source:
          "/faqs-pm-surya-ghar-muft-bijli-yojana-rooftop-solar-scheme-for-residential-consumers-in-tamil-nadu",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/avail-40-offer-for-residential",
        destination: "/subsidy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
