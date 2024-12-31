import BuilderDevTools from "@builder.io/dev-tools/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = BuilderDevTools()({
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "cdn.builder.io", // Add this domain for Builder.io images
        pathname: "/**", // Adjust the pathname to match all images
      },
    ],
  },
});

export default nextConfig;
