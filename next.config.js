// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const { ANALYZE } = process.env;

// //const { GenerateSW } = require("workbox-webpack-plugin");

// const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
module.exports = {
  generateBuildId: () => "tutorbro",
  output: "export",
  webpack: (config, { dev }) => {
    config.resolve.fallback = { tls: false, fs: false };
    /* Enable only in Production */
    if (!dev) {
      // Analyzer
      if (ANALYZE) {
      }
    }

    return config;
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/careers": { page: "/careers" },
      "/chat": { page: "/chat" },
      "/payments": { page: "/payments" },
      "/payment": { page: "/payment" },
      "/payments/payment-success": { page: "/payments/payment-success" },
    };
  },
};
