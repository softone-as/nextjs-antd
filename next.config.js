const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  eslint: {
    dirs: ["app"],
  },
  output: "standalone",
  webpack: (config, { isServer }) => {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
};

module.exports = nextConfig;
