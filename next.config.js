const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const { ANALYZE } = process.env;

module.exports = {
  webpack: (config, { dev }) => {
    /* Enable only in Production */
    if (!dev) {
      // preact
      console.log('> Using Preact instead of React');
      config.resolve.alias = {
        react: 'preact-compat/dist/preact-compat',
        'react-dom': 'preact-compat/dist/preact-compat',
      };

      // Analyzer
      if (ANALYZE) {
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerPort: 8888,
            openAnalyzer: true,
          }),
        );
      }

      // Service Worker
      config.plugins.push(
        new SWPrecacheWebpackPlugin({
          filename: 'sw.js',
          minify: true,
          staticFileGlobsIgnorePatterns: [/\.next\//],
          staticFileGlobs: [
            // Precache all static files by default
            '/static/**/*',
          ],
          forceDelete: true,
          runtimeCaching: [
            {
              handler: 'fastest',
              urlPattern: /[.](png|jpg|svg)/,
            },
            {
              handler: 'cacheFirst',
              urlPattern: /\/_next\/.*/,
              options: {
                cache: {
                  name: 'nextjs-cache',
                },
              },
            },
            {
              handler: 'networkFirst',
              urlPattern: /^http.*/, // cache all files
            },
          ],
        }),
      );
    }

    return config;
  },
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/careers': { page: '/careers' },
      '/chat': { page: '/chat' },
    };
  },
};
