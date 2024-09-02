/** @type {import('next').NextConfig} */

const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: false,
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "pvItemsApplication",
        remotes: {},
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./view": "./pages/index.tsx",
        },
        // shared: createSharedDependencies(),
      })
    );
    return config;
  },
  eslint: {
    dirs: ["."], //or ['pages', 'hooks']
  },
  modularizeImports: {
    "@mui/icons-material/?(((\\w*)?/?)*)": {
      transform: "@mui/icons-material/{{ matches.[1] }}/{{member}}",
    },
  },
  experimental: {
    esmExternals: "loose",
  },
};

module.exports = nextConfig;
