/** @type {import('next').NextConfig} */
import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "container",
        remotes: {
          // container: `next1@http://localhost:3001/_next/static/${
          //   isServer ? "ssr" : "chunks"
          // }/remoteEntry.js`,
        },
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./index": "./pages/index",
          // "./checkout": "./pages/checkout",
        },
        shared: {
          // whatever else
        },
      })
    );

    return config;
  },
};

export default nextConfig;
