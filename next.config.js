// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const { ANALYZE } = process.env;

// //const { GenerateSW } = require("workbox-webpack-plugin");

// const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
module.exports = {
  output: "export",
  webpack: (config, { dev }) => {
    /* Enable only in Production */
    if (!dev) {
      // Analyzer
      if (ANALYZE) {
        // config.plugins.push(
        //   new BundleAnalyzerPlugin({
        //     analyzerMode: "server",
        //     analyzerPort: 8888,
        //     openAnalyzer: true,
        //   })
        // );
      }
      // new GenerateSW({
      //   // For unknown URLs, fallback to the index page
      //   navigateFallback: ".next/",
      //   // Ignores URLs starting from /__ (useful for Firebase):
      //   // https://github.com/facebookincubator/
      //   //  create-react-app/issues/2237#issuecomment-302693219
      //   navigateFallbackAllowlist: [/^(?!\/__).*/],
      //   // Don’t precache sourcemaps (they’re large) and build
      //   // asset manifest:
      //   exclude: [/\.map$/, /asset-manifest\.json$/],
      // });
      // Service Worker
      // config.plugins.push(
      //   new WorkboxWebpackPlugin.InjectManifest({
      //     swSrc: "./sw.js",
      //     swDest: "sw.js",
      //     exclude: [
      //       /\.map$/,
      //       /manifest$/,
      //       /\.htaccess$/,
      //       /src-sw\.js$/,
      //       /sw\.js$/,
      //     ],
      //   })
      // );
      // new SWPrecacheWebpackPlugin({
      //   filename: "sw.js",
      //   minify: true,
      //   staticFileGlobsIgnorePatterns: [/\.next\//],
      //   staticFileGlobs: [
      //     // Precache all static files by default
      //     "/static/**/*",
      //   ],
      //   forceDelete: true,
      //   runtimeCaching: [
      //     {
      //       handler: "fastest",
      //       urlPattern: /[.](png|jpg|svg)/,
      //     },
      //     {
      //       handler: "cacheFirst",
      //       urlPattern: /\/_next\/.*/,
      //       options: {
      //         cache: {
      //           name: "nextjs-cache",
      //         },
      //       },
      //     },
      //     {
      //       handler: "networkFirst",
      //       urlPattern: /^http.*/, // cache all files
      //     },
      //   ],
      // });
    }

    return config;
  },
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/careers": { page: "/careers" },
      "/chat": { page: "/chat" },
      "/payment": { page: "/payment" },
    };
  },
};

// const nextConfig = {
//   /* config options here */
//   exportPathMap: function () {
//     return {
//       "/": { page: "/" },
//       "/careers": { page: "/careers" },
//       "/chat": { page: "/chat" },
//       "/payment": { page: "/payment" },
//     };
//   },
// };

// module.exports = nextConfig;
