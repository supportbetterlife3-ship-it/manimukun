import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/services", destination: "/programme", permanent: true },
      { source: "/careers", destination: "/programme", permanent: true },
      { source: "/careers/:path*", destination: "/programme", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },
    ],
  },
};

export default nextConfig;
